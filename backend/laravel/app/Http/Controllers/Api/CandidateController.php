<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use App\Support\FrontendPayload;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CandidateController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Candidate::query()
            ->when($request->filled('search'), function ($query) use ($request): void {
                $search = (string) $request->string('search');
                $query->where(function ($query) use ($search): void {
                    $query->where('name', 'like', "%{$search}%")
                        ->orWhere('role', 'like', "%{$search}%")
                        ->orWhere('discipline', 'like', "%{$search}%")
                        ->orWhere('location', 'like', "%{$search}%")
                        ->orWhere('email', 'like', "%{$search}%");
                });
            })
            ->when($request->filled('status'), fn ($query) => $query->where('status', $request->string('status')))
            ->when($request->filled('discipline'), fn ($query) => $query->where('discipline', $request->string('discipline')))
            ->when($request->filled('location'), fn ($query) => $query->where('location', $request->string('location')))
            ->orderByDesc('date_added')
            ->orderBy('name');

        if ($request->boolean('all')) {
            return response()->json([
                'data' => $query->get()->map(fn (Candidate $candidate) => FrontendPayload::candidate($candidate))->values(),
            ]);
        }

        $perPage = min((int) $request->integer('per_page', 100), 500);

        return response()->json(
            FrontendPayload::paginated($query->paginate($perPage), fn (Candidate $candidate) => FrontendPayload::candidate($candidate))
        );
    }

    public function store(Request $request): JsonResponse
    {
        $candidate = Candidate::create($this->attributes($this->validated($request)));

        return response()->json(['data' => FrontendPayload::candidate($candidate)], 201);
    }

    public function show(Candidate $candidate): JsonResponse
    {
        return response()->json(['data' => FrontendPayload::candidate($candidate)]);
    }

    public function update(Request $request, Candidate $candidate): JsonResponse
    {
        $candidate->update($this->attributes($this->validated($request, updating: true), $candidate));

        return response()->json(['data' => FrontendPayload::candidate($candidate->refresh())]);
    }

    public function destroy(Candidate $candidate): JsonResponse
    {
        $candidate->delete();

        return response()->json(status: 204);
    }

    private function validated(Request $request, bool $updating = false): array
    {
        return $request->validate([
            'name' => [$updating ? 'sometimes' : 'required', 'string', 'max:255'],
            'role' => ['nullable', 'string', 'max:255'],
            'status' => ['sometimes', 'string', 'max:80'],
            'location' => ['nullable', 'string', 'max:255'],
            'postcode' => ['nullable', 'string', 'max:40'],
            'discipline' => ['nullable', 'string', 'max:120'],
            'email' => ['nullable', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:80'],
            'salary' => ['nullable', 'numeric', 'min:0'],
            'experienceYears' => ['sometimes', 'integer', 'min:0'],
            'experience_years' => ['sometimes', 'integer', 'min:0'],
            'travelRadius' => ['nullable', 'integer', 'min:0'],
            'travel_radius' => ['nullable', 'integer', 'min:0'],
            'rating' => ['sometimes', 'numeric', 'min:0', 'max:5'],
            'tags' => ['sometimes', 'array'],
            'availability' => ['nullable', 'string', 'max:120'],
            'noticePeriod' => ['nullable', 'string', 'max:120'],
            'notice_period' => ['nullable', 'string', 'max:120'],
            'source' => ['sometimes', 'string', 'max:120'],
            'recruiter' => ['nullable', 'string', 'max:120'],
            'dateAdded' => ['nullable', 'date'],
            'date_added' => ['nullable', 'date'],
            'lastContacted' => ['nullable', 'date'],
            'last_contacted' => ['nullable', 'date'],
            'rightToWork' => ['sometimes', 'boolean'],
            'right_to_work' => ['sometimes', 'boolean'],
            'notes' => ['nullable'],
            'certificates' => ['sometimes', 'array'],
            'skills' => ['sometimes', 'array'],
            'employmentHistory' => ['sometimes', 'array'],
            'employment_history' => ['sometimes', 'array'],
            'references' => ['sometimes', 'array'],
        ]);
    }

    private function attributes(array $data, ?Candidate $candidate = null): array
    {
        return array_filter([
            'name' => $data['name'] ?? $candidate?->name,
            'role' => $data['role'] ?? $candidate?->role,
            'status' => $data['status'] ?? $candidate?->status ?? 'new',
            'location' => $data['location'] ?? $candidate?->location,
            'postcode' => isset($data['postcode']) ? strtoupper($data['postcode']) : $candidate?->postcode,
            'discipline' => $data['discipline'] ?? $candidate?->discipline,
            'email' => $data['email'] ?? $candidate?->email,
            'phone' => $data['phone'] ?? $candidate?->phone,
            'salary' => $data['salary'] ?? $candidate?->salary,
            'experience_years' => $data['experienceYears'] ?? $data['experience_years'] ?? $candidate?->experience_years ?? 0,
            'travel_radius' => $data['travelRadius'] ?? $data['travel_radius'] ?? $candidate?->travel_radius,
            'rating' => $data['rating'] ?? $candidate?->rating ?? 0,
            'tags' => $data['tags'] ?? $candidate?->tags ?? [],
            'availability' => $data['availability'] ?? $candidate?->availability,
            'notice_period' => $data['noticePeriod'] ?? $data['notice_period'] ?? $candidate?->notice_period,
            'source' => $data['source'] ?? $candidate?->source ?? 'Manual',
            'recruiter' => $data['recruiter'] ?? $candidate?->recruiter,
            'date_added' => $this->dateOrNull($data['dateAdded'] ?? $data['date_added'] ?? $candidate?->date_added),
            'last_contacted' => $this->dateOrNull($data['lastContacted'] ?? $data['last_contacted'] ?? $candidate?->last_contacted),
            'right_to_work' => $data['rightToWork'] ?? $data['right_to_work'] ?? $candidate?->right_to_work ?? false,
            'notes' => $data['notes'] ?? $candidate?->notes,
            'certificates' => $data['certificates'] ?? $candidate?->certificates ?? [],
            'skills' => $data['skills'] ?? $candidate?->skills ?? [],
            'employment_history' => $data['employmentHistory'] ?? $data['employment_history'] ?? $candidate?->employment_history ?? [],
            'references' => $data['references'] ?? $candidate?->references ?? [],
        ], fn ($value) => $value !== null);
    }

    private function dateOrNull(mixed $value): mixed
    {
        return $value === '' ? null : $value;
    }
}
