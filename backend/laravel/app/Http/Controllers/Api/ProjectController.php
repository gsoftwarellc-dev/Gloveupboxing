<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use App\Models\Client;
use App\Models\Project;
use App\Support\FrontendPayload;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Project::query()
            ->with(['client', 'contacts'])
            ->when($request->filled('search'), function ($query) use ($request): void {
                $search = (string) $request->string('search');
                $query->where(function ($query) use ($search): void {
                    $query->where('name', 'like', "%{$search}%")
                        ->orWhere('client_name', 'like', "%{$search}%")
                        ->orWhere('main_contractor', 'like', "%{$search}%")
                        ->orWhere('location', 'like', "%{$search}%");
                });
            })
            ->when($request->filled('status'), fn ($query) => $query->where('status', $request->string('status')))
            ->when($request->filled('sector'), fn ($query) => $query->where('sector', $request->string('sector')))
            ->when($request->filled('priority'), fn ($query) => $query->where('priority', $request->string('priority')))
            ->when($request->filled('date_from'), fn ($query) => $query->whereDate('start_date', '>=', $request->date('date_from')))
            ->when($request->filled('date_to'), fn ($query) => $query->whereDate('start_date', '<=', $request->date('date_to')))
            ->orderByDesc('opportunity_score')
            ->orderBy('name');

        if ($request->boolean('all')) {
            return response()->json([
                'data' => $query->get()->map(fn (Project $project) => FrontendPayload::project($project))->values(),
            ]);
        }

        $perPage = min((int) $request->integer('per_page', 100), 500);

        return response()->json(
            FrontendPayload::paginated($query->paginate($perPage), fn (Project $project) => FrontendPayload::project($project))
        );
    }

    public function store(Request $request): JsonResponse
    {
        $data = $this->validated($request);

        $project = DB::transaction(function () use ($data): Project {
            $project = Project::create($this->attributes($data));
            $this->syncContacts($project, $data['contacts'] ?? []);

            return $project->load(['client', 'contacts']);
        });

        return response()->json(['data' => FrontendPayload::project($project)], 201);
    }

    public function show(Project $project): JsonResponse
    {
        return response()->json(['data' => FrontendPayload::project($project->load(['client', 'contacts']))]);
    }

    public function update(Request $request, Project $project): JsonResponse
    {
        $data = $this->validated($request, updating: true);

        $project = DB::transaction(function () use ($project, $data): Project {
            $project->update($this->attributes($data, $project));
            if (array_key_exists('contacts', $data)) {
                $this->syncContacts($project, $data['contacts'] ?? []);
            }

            return $project->load(['client', 'contacts']);
        });

        return response()->json(['data' => FrontendPayload::project($project)]);
    }

    public function destroy(Project $project): JsonResponse
    {
        $project->delete();

        return response()->json(status: 204);
    }

    public function assignments(Project $project): JsonResponse
    {
        return response()->json([
            'data' => $project->assignments()
                ->with('candidate')
                ->get()
                ->map(fn ($assignment) => FrontendPayload::assignment($assignment))
                ->values(),
        ]);
    }

    public function assign(Request $request, Project $project): JsonResponse
    {
        $data = $request->validate([
            'candidate_id' => ['required', 'integer', 'exists:candidates,id'],
            'role' => ['nullable', 'string', 'max:255'],
            'startDate' => ['nullable', 'date'],
            'start_date' => ['nullable', 'date'],
            'status' => ['sometimes', 'string', 'max:80'],
            'notes' => ['nullable', 'string'],
        ]);

        $candidate = Candidate::findOrFail($data['candidate_id']);
        $assignment = $project->assignments()->updateOrCreate(
            ['candidate_id' => $candidate->id],
            [
                'role' => $data['role'] ?? $candidate->role,
                'start_date' => $data['startDate'] ?? $data['start_date'] ?? null,
                'status' => $data['status'] ?? 'assigned',
                'notes' => $data['notes'] ?? null,
            ]
        );

        return response()->json(['data' => FrontendPayload::assignment($assignment->load('candidate'))], 201);
    }

    public function unassign(Project $project, Candidate $candidate): JsonResponse
    {
        $project->assignments()->where('candidate_id', $candidate->id)->delete();

        return response()->json(status: 204);
    }

    private function validated(Request $request, bool $updating = false): array
    {
        return $request->validate([
            'client_id' => ['nullable', 'integer', 'exists:clients,id'],
            'client' => ['nullable', 'string', 'max:255'],
            'client_name' => ['nullable', 'string', 'max:255'],
            'name' => [$updating ? 'sometimes' : 'required', 'string', 'max:255'],
            'location' => ['nullable', 'string'],
            'postcode' => ['nullable', 'string', 'max:40'],
            'status' => ['sometimes', 'string', 'max:80'],
            'stage' => ['nullable', 'string', 'max:120'],
            'startDate' => ['nullable', 'date'],
            'start_date' => ['nullable', 'date'],
            'endDate' => ['nullable', 'date'],
            'end_date' => ['nullable', 'date'],
            'value' => ['nullable'],
            'rolesNeeded' => ['sometimes', 'integer', 'min:0'],
            'roles_needed' => ['sometimes', 'integer', 'min:0'],
            'opportunityScore' => ['sometimes', 'integer', 'min:0', 'max:100'],
            'opportunity_score' => ['sometimes', 'integer', 'min:0', 'max:100'],
            'sector' => ['nullable', 'string', 'max:120'],
            'priority' => ['nullable', 'string', 'max:120'],
            'mainContractor' => ['nullable', 'string', 'max:255'],
            'main_contractor' => ['nullable', 'string', 'max:255'],
            'tags' => ['sometimes', 'array'],
            'tags.*' => ['string', 'max:255'],
            'notes' => ['nullable', 'string'],
            'contacts' => ['sometimes', 'array'],
            'contacts.*.type' => ['sometimes', 'in:person,org'],
            'contacts.*.name' => ['required_with:contacts', 'string', 'max:255'],
            'contacts.*.role' => ['nullable', 'string', 'max:255'],
            'contacts.*.email' => ['nullable', 'email', 'max:255'],
            'contacts.*.phone' => ['nullable', 'string', 'max:80'],
        ]);
    }

    private function attributes(array $data, ?Project $project = null): array
    {
        $clientId = $data['client_id'] ?? $project?->client_id;
        $clientName = $data['client'] ?? $data['client_name'] ?? $project?->client_name;

        if (! $clientId && $clientName) {
            $clientId = Client::where('name', $clientName)->value('id');
        }

        return array_filter([
            'client_id' => $clientId,
            'name' => $data['name'] ?? $project?->name,
            'client_name' => $clientName,
            'location' => $data['location'] ?? $project?->location,
            'postcode' => isset($data['postcode']) ? strtoupper($data['postcode']) : $project?->postcode,
            'status' => $data['status'] ?? $project?->status ?? 'active',
            'stage' => $data['stage'] ?? $project?->stage,
            'start_date' => $this->dateOrNull($data['startDate'] ?? $data['start_date'] ?? $project?->start_date),
            'end_date' => $this->dateOrNull($data['endDate'] ?? $data['end_date'] ?? $project?->end_date),
            'value' => isset($data['value']) ? (string) $data['value'] : $project?->value,
            'roles_needed' => $data['rolesNeeded'] ?? $data['roles_needed'] ?? $project?->roles_needed ?? 0,
            'opportunity_score' => $data['opportunityScore'] ?? $data['opportunity_score'] ?? $project?->opportunity_score ?? 0,
            'sector' => $data['sector'] ?? $project?->sector,
            'priority' => $data['priority'] ?? $project?->priority,
            'main_contractor' => $data['mainContractor'] ?? $data['main_contractor'] ?? $project?->main_contractor,
            'tags' => $data['tags'] ?? $project?->tags ?? [],
            'notes' => $data['notes'] ?? $project?->notes,
        ], fn ($value) => $value !== null);
    }

    private function syncContacts(Project $project, array $contacts): void
    {
        $project->contacts()->delete();
        foreach ($contacts as $contact) {
            $project->contacts()->create([
                'type' => $contact['type'] ?? 'person',
                'name' => $contact['name'],
                'role' => $contact['role'] ?? null,
                'email' => $contact['email'] ?? null,
                'phone' => $contact['phone'] ?? null,
            ]);
        }
    }

    private function dateOrNull(mixed $value): mixed
    {
        return $value === '' ? null : $value;
    }
}
