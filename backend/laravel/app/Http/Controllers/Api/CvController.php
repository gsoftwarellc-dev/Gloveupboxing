<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use App\Models\Cv;
use App\Support\FrontendPayload;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CvController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Cv::query()
            ->when($request->filled('search'), function ($query) use ($request): void {
                $search = (string) $request->string('search');
                $query->where(function ($query) use ($search): void {
                    $query->where('candidate_name', 'like', "%{$search}%")
                        ->orWhere('role', 'like', "%{$search}%")
                        ->orWhere('discipline', 'like', "%{$search}%")
                        ->orWhere('location', 'like', "%{$search}%")
                        ->orWhere('raw_text', 'like', "%{$search}%");
                });
            })
            ->when($request->filled('discipline'), fn ($query) => $query->where('discipline', $request->string('discipline')))
            ->orderByDesc('submitted_at');

        if ($request->boolean('all')) {
            return response()->json([
                'data' => $query->get()->map(fn (Cv $cv) => FrontendPayload::cv($cv))->values(),
            ]);
        }

        $perPage = min((int) $request->integer('per_page', 100), 500);

        return response()->json(
            FrontendPayload::paginated($query->paginate($perPage), fn (Cv $cv) => FrontendPayload::cv($cv))
        );
    }

    public function store(Request $request): JsonResponse
    {
        $cv = Cv::create($this->cvAttributes($request->validate($this->cvRules()), $request));

        return response()->json(['data' => FrontendPayload::cv($cv)], 201);
    }

    public function show(Cv $cv): JsonResponse
    {
        return response()->json(['data' => FrontendPayload::cv($cv)]);
    }

    public function update(Request $request, Cv $cv): JsonResponse
    {
        $cv->update($this->cvAttributes($request->validate($this->cvRules(updating: true)), $request, $cv));

        return response()->json(['data' => FrontendPayload::cv($cv->refresh())]);
    }

    public function destroy(Cv $cv): JsonResponse
    {
        $cv->delete();

        return response()->json(status: 204);
    }

    public function application(Request $request): JsonResponse
    {
        $data = $request->validate([
            'firstName' => ['required', 'string', 'max:120'],
            'lastName' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:80'],
            'location' => ['required', 'string', 'max:255'],
            'postcode' => ['required', 'string', 'max:40'],
            'jobTitle' => ['required', 'string', 'max:255'],
            'discipline' => ['required', 'string', 'max:120'],
            'experience' => ['nullable', 'integer', 'min:0'],
            'salary' => ['nullable'],
            'noticePeriod' => ['nullable', 'string', 'max:120'],
            'travelRadius' => ['nullable'],
            'rightToWork' => ['nullable', 'string', 'max:80'],
            'certificates' => ['sometimes', 'array'],
            'skills' => ['sometimes', 'array'],
            'cvText' => ['nullable', 'string'],
            'file' => ['nullable', 'file', 'max:10240'],
            'cvFile' => ['nullable', 'file', 'max:10240'],
        ]);

        [$candidate, $cv] = DB::transaction(function () use ($request, $data): array {
            $candidate = Candidate::create([
                'name' => trim($data['firstName'].' '.$data['lastName']),
                'role' => $data['jobTitle'],
                'status' => 'new',
                'location' => $data['location'],
                'postcode' => strtoupper($data['postcode']),
                'discipline' => $data['discipline'],
                'email' => $data['email'],
                'phone' => $data['phone'],
                'salary' => $this->moneyToNumber($data['salary'] ?? null),
                'experience_years' => $data['experience'] ?? 0,
                'travel_radius' => is_numeric($data['travelRadius'] ?? null) ? (int) $data['travelRadius'] : null,
                'rating' => 0,
                'tags' => [],
                'notice_period' => $data['noticePeriod'] ?? null,
                'source' => 'Application Form',
                'date_added' => now()->toDateString(),
                'right_to_work' => ($data['rightToWork'] ?? 'No') === 'Yes',
                'certificates' => $data['certificates'] ?? [],
                'skills' => $data['skills'] ?? [],
                'employment_history' => [],
                'references' => [],
            ]);

            $cv = Cv::create($this->cvAttributes([
                'candidate_id' => $candidate->id,
                'candidateName' => $candidate->name,
                'role' => $candidate->role,
                'discipline' => $candidate->discipline,
                'location' => $candidate->location,
                'postcode' => $candidate->postcode,
                'email' => $candidate->email,
                'phone' => $candidate->phone,
                'experienceYears' => $candidate->experience_years,
                'skills' => $data['skills'] ?? [],
                'certificates' => $data['certificates'] ?? [],
                'rawText' => $data['cvText'] ?? '',
                'source' => 'Application Form',
            ], $request));

            return [$candidate, $cv];
        });

        return response()->json([
            'candidate' => FrontendPayload::candidate($candidate),
            'cv' => FrontendPayload::cv($cv),
        ], 201);
    }

    private function cvRules(bool $updating = false): array
    {
        return [
            'id' => ['sometimes', 'string', 'max:64'],
            'candidate_id' => ['nullable', 'integer', 'exists:candidates,id'],
            'candidateId' => ['nullable', 'integer', 'exists:candidates,id'],
            'candidateName' => [$updating ? 'sometimes' : 'required_without:candidate_name', 'string', 'max:255'],
            'candidate_name' => [$updating ? 'sometimes' : 'required_without:candidateName', 'string', 'max:255'],
            'role' => ['nullable', 'string', 'max:255'],
            'discipline' => ['nullable', 'string', 'max:120'],
            'location' => ['nullable', 'string', 'max:255'],
            'postcode' => ['nullable', 'string', 'max:40'],
            'email' => ['nullable', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:80'],
            'experienceYears' => ['nullable', 'integer', 'min:0'],
            'experience_years' => ['nullable', 'integer', 'min:0'],
            'skills' => ['sometimes', 'array'],
            'certificates' => ['sometimes', 'array'],
            'rawText' => ['nullable', 'string'],
            'raw_text' => ['nullable', 'string'],
            'fileName' => ['nullable', 'string', 'max:255'],
            'file_name' => ['nullable', 'string', 'max:255'],
            'submittedAt' => ['nullable', 'date'],
            'submitted_at' => ['nullable', 'date'],
            'source' => ['sometimes', 'string', 'max:120'],
            'file' => ['nullable', 'file', 'max:10240'],
            'cvFile' => ['nullable', 'file', 'max:10240'],
        ];
    }

    private function cvAttributes(array $data, Request $request, ?Cv $cv = null): array
    {
        $file = $request->file('file') ?? $request->file('cvFile');
        $filePath = $cv?->file_path;
        $fileName = $data['fileName'] ?? $data['file_name'] ?? $cv?->file_name;

        if ($file) {
            $filePath = $file->store('cvs');
            $fileName = $file->getClientOriginalName();
        }

        return array_filter([
            'id' => $data['id'] ?? $cv?->id ?? 'cv-'.Str::uuid(),
            'candidate_id' => $data['candidate_id'] ?? $data['candidateId'] ?? $cv?->candidate_id,
            'candidate_name' => $data['candidateName'] ?? $data['candidate_name'] ?? $cv?->candidate_name,
            'role' => $data['role'] ?? $cv?->role,
            'discipline' => $data['discipline'] ?? $cv?->discipline,
            'location' => $data['location'] ?? $cv?->location,
            'postcode' => isset($data['postcode']) ? strtoupper($data['postcode']) : $cv?->postcode,
            'email' => $data['email'] ?? $cv?->email,
            'phone' => $data['phone'] ?? $cv?->phone,
            'experience_years' => $data['experienceYears'] ?? $data['experience_years'] ?? $cv?->experience_years,
            'skills' => $data['skills'] ?? $cv?->skills ?? [],
            'certificates' => $data['certificates'] ?? $cv?->certificates ?? [],
            'raw_text' => $data['rawText'] ?? $data['raw_text'] ?? $cv?->raw_text,
            'file_name' => $fileName,
            'file_path' => $filePath,
            'submitted_at' => $this->dateOrNull($data['submittedAt'] ?? $data['submitted_at'] ?? $cv?->submitted_at ?? now()),
            'source' => $data['source'] ?? $cv?->source ?? 'Application Form',
        ], fn ($value) => $value !== null);
    }

    private function moneyToNumber(mixed $value): ?float
    {
        if ($value === null || $value === '') {
            return null;
        }

        $number = preg_replace('/[^\d.]/', '', (string) $value);

        return $number === '' ? null : (float) $number;
    }

    private function dateOrNull(mixed $value): mixed
    {
        return $value === '' ? null : $value;
    }
}
