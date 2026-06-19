<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\Project;
use App\Models\Vacancy;
use App\Support\FrontendPayload;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class VacancyController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Vacancy::query()
            ->with(['client', 'project'])
            ->when($request->filled('search'), function ($query) use ($request): void {
                $search = (string) $request->string('search');
                $query->where(function ($query) use ($search): void {
                    $query->where('title', 'like', "%{$search}%")
                        ->orWhere('client_name', 'like', "%{$search}%")
                        ->orWhere('location', 'like', "%{$search}%")
                        ->orWhere('discipline', 'like', "%{$search}%");
                });
            })
            ->when($request->filled('status'), fn ($query) => $query->where('status', $request->string('status')))
            ->when($request->filled('discipline'), fn ($query) => $query->where('discipline', $request->string('discipline')))
            ->when($request->filled('published'), fn ($query) => $query->where('published', $request->boolean('published')))
            ->orderByDesc('date_added')
            ->orderBy('title');

        if ($request->boolean('all')) {
            return response()->json([
                'data' => $query->get()->map(fn (Vacancy $vacancy) => FrontendPayload::vacancy($vacancy))->values(),
            ]);
        }

        $perPage = min((int) $request->integer('per_page', 100), 500);

        return response()->json(
            FrontendPayload::paginated($query->paginate($perPage), fn (Vacancy $vacancy) => FrontendPayload::vacancy($vacancy))
        );
    }

    public function store(Request $request): JsonResponse
    {
        $vacancy = Vacancy::create($this->attributes($this->validated($request)));

        return response()->json(['data' => FrontendPayload::vacancy($vacancy->load(['client', 'project']))], 201);
    }

    public function show(Vacancy $vacancy): JsonResponse
    {
        return response()->json(['data' => FrontendPayload::vacancy($vacancy->load(['client', 'project']))]);
    }

    public function update(Request $request, Vacancy $vacancy): JsonResponse
    {
        $vacancy->update($this->attributes($this->validated($request, updating: true), $vacancy));

        return response()->json(['data' => FrontendPayload::vacancy($vacancy->refresh()->load(['client', 'project']))]);
    }

    public function destroy(Vacancy $vacancy): JsonResponse
    {
        $vacancy->delete();

        return response()->json(status: 204);
    }

    private function validated(Request $request, bool $updating = false): array
    {
        return $request->validate([
            'client_id' => ['nullable', 'integer', 'exists:clients,id'],
            'project_id' => ['nullable', 'integer', 'exists:projects,id'],
            'title' => [$updating ? 'sometimes' : 'required', 'string', 'max:255'],
            'client' => ['nullable', 'string', 'max:255'],
            'client_name' => ['nullable', 'string', 'max:255'],
            'project' => ['nullable', 'string', 'max:255'],
            'project_name' => ['nullable', 'string', 'max:255'],
            'location' => ['nullable', 'string', 'max:255'],
            'postcode' => ['nullable', 'string', 'max:40'],
            'salary' => ['nullable', 'string', 'max:120'],
            'discipline' => ['nullable', 'string', 'max:120'],
            'type' => ['nullable', 'string', 'max:120'],
            'status' => ['sometimes', 'string', 'max:80'],
            'recruiter' => ['nullable', 'string', 'max:120'],
            'dateAdded' => ['nullable', 'date'],
            'date_added' => ['nullable', 'date'],
            'deadline' => ['nullable', 'date'],
            'description' => ['nullable', 'string'],
            'applications' => ['sometimes', 'integer', 'min:0'],
            'shortlisted' => ['sometimes', 'integer', 'min:0'],
            'interviews' => ['sometimes', 'integer', 'min:0'],
            'requiredCerts' => ['sometimes', 'array'],
            'required_certs' => ['sometimes', 'array'],
            'priority' => ['nullable', 'string', 'max:120'],
            'visibility' => ['sometimes', 'string', 'max:80'],
            'published' => ['sometimes', 'boolean'],
        ]);
    }

    private function attributes(array $data, ?Vacancy $vacancy = null): array
    {
        $clientId = $data['client_id'] ?? $vacancy?->client_id;
        $clientName = $data['client'] ?? $data['client_name'] ?? $vacancy?->client_name;
        $projectId = $data['project_id'] ?? $vacancy?->project_id;
        $projectName = $data['project'] ?? $data['project_name'] ?? $vacancy?->project_name;

        if (! $clientId && $clientName) {
            $clientId = Client::where('name', $clientName)->value('id');
        }

        if (! $projectId && $projectName) {
            $projectId = Project::where('name', $projectName)->value('id');
        }

        return array_filter([
            'client_id' => $clientId,
            'project_id' => $projectId,
            'title' => $data['title'] ?? $vacancy?->title,
            'client_name' => $clientName,
            'project_name' => $projectName,
            'location' => $data['location'] ?? $vacancy?->location,
            'postcode' => isset($data['postcode']) ? strtoupper($data['postcode']) : $vacancy?->postcode,
            'salary' => $data['salary'] ?? $vacancy?->salary,
            'discipline' => $data['discipline'] ?? $vacancy?->discipline,
            'type' => $data['type'] ?? $vacancy?->type,
            'status' => $data['status'] ?? $vacancy?->status ?? 'active',
            'recruiter' => $data['recruiter'] ?? $vacancy?->recruiter,
            'date_added' => $this->dateOrNull($data['dateAdded'] ?? $data['date_added'] ?? $vacancy?->date_added),
            'deadline' => $this->dateOrNull($data['deadline'] ?? $vacancy?->deadline),
            'description' => $data['description'] ?? $vacancy?->description,
            'applications' => $data['applications'] ?? $vacancy?->applications ?? 0,
            'shortlisted' => $data['shortlisted'] ?? $vacancy?->shortlisted ?? 0,
            'interviews' => $data['interviews'] ?? $vacancy?->interviews ?? 0,
            'required_certs' => $data['requiredCerts'] ?? $data['required_certs'] ?? $vacancy?->required_certs ?? [],
            'priority' => $data['priority'] ?? $vacancy?->priority,
            'visibility' => $data['visibility'] ?? $vacancy?->visibility ?? 'Public',
            'published' => $data['published'] ?? $vacancy?->published ?? false,
        ], fn ($value) => $value !== null);
    }

    private function dateOrNull(mixed $value): mixed
    {
        return $value === '' ? null : $value;
    }
}
