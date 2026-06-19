<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CallLog;
use App\Support\FrontendPayload;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CallLogController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = CallLog::query()
            ->when($request->filled('clientId'), fn ($query) => $query->where('client_id', $request->integer('clientId')))
            ->when($request->filled('projectId'), fn ($query) => $query->where('project_id', $request->integer('projectId')))
            ->when($request->filled('candidateId'), fn ($query) => $query->where('candidate_id', $request->integer('candidateId')))
            ->when($request->boolean('dueCallbacks'), fn ($query) => $query->whereNotNull('call_back_date')->whereDate('call_back_date', '<=', now()))
            ->when($request->filled('search'), function ($query) use ($request): void {
                $search = (string) $request->string('search');
                $query->where(function ($query) use ($search): void {
                    $query->where('contact_name', 'like', "%{$search}%")
                        ->orWhere('contact_phone', 'like', "%{$search}%")
                        ->orWhere('notes', 'like', "%{$search}%")
                        ->orWhere('requirements', 'like', "%{$search}%");
                });
            })
            ->orderByDesc('called_at');

        if ($request->boolean('all')) {
            return response()->json([
                'data' => $query->get()->map(fn (CallLog $log) => FrontendPayload::callLog($log))->values(),
            ]);
        }

        $perPage = min((int) $request->integer('per_page', 100), 500);

        return response()->json(
            FrontendPayload::paginated($query->paginate($perPage), fn (CallLog $log) => FrontendPayload::callLog($log))
        );
    }

    public function store(Request $request): JsonResponse
    {
        $data = $this->validated($request);

        $log = CallLog::create([
            'client_id' => $data['clientId'] ?? null,
            'project_id' => $data['projectId'] ?? null,
            'candidate_id' => $data['candidateId'] ?? null,
            'contact_name' => $data['contactName'],
            'contact_phone' => $data['contactPhone'] ?? null,
            'contact_email' => $data['contactEmail'] ?? null,
            'notes' => $data['notes'] ?? null,
            'requirements' => $data['requirements'] ?? null,
            'call_back_date' => $data['callBackDate'] ?? null,
            'called_at' => $data['calledAt'] ?? now(),
        ]);

        return response()->json(['data' => FrontendPayload::callLog($log)], 201);
    }

    public function show(CallLog $callLog): JsonResponse
    {
        return response()->json(['data' => FrontendPayload::callLog($callLog)]);
    }

    public function update(Request $request, CallLog $callLog): JsonResponse
    {
        $data = $this->validated($request, updating: true);

        $callLog->update(array_filter([
            'client_id' => $data['clientId'] ?? null,
            'project_id' => $data['projectId'] ?? null,
            'candidate_id' => $data['candidateId'] ?? null,
            'contact_name' => $data['contactName'] ?? null,
            'contact_phone' => $data['contactPhone'] ?? null,
            'contact_email' => $data['contactEmail'] ?? null,
            'notes' => $data['notes'] ?? null,
            'requirements' => $data['requirements'] ?? null,
            'call_back_date' => array_key_exists('callBackDate', $data) ? $data['callBackDate'] : null,
            'called_at' => $data['calledAt'] ?? null,
        ], fn ($value) => $value !== null));

        return response()->json(['data' => FrontendPayload::callLog($callLog->refresh())]);
    }

    public function destroy(CallLog $callLog): JsonResponse
    {
        $callLog->delete();

        return response()->json(status: 204);
    }

    private function validated(Request $request, bool $updating = false): array
    {
        return $request->validate([
            'clientId' => ['nullable', 'integer', 'exists:clients,id'],
            'projectId' => ['nullable', 'integer', 'exists:projects,id'],
            'candidateId' => ['nullable', 'integer', 'exists:candidates,id'],
            'contactName' => [$updating ? 'sometimes' : 'required', 'string', 'max:255'],
            'contactPhone' => ['nullable', 'string', 'max:60'],
            'contactEmail' => ['nullable', 'email', 'max:255'],
            'notes' => ['nullable', 'string'],
            'requirements' => ['nullable', 'string'],
            'callBackDate' => ['nullable', 'date'],
            'calledAt' => ['nullable', 'date'],
        ]);
    }
}
