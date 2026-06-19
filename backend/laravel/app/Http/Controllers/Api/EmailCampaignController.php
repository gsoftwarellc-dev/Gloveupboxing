<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use App\Models\EmailCampaign;
use App\Support\Brevo;
use App\Support\FrontendPayload;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmailCampaignController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = EmailCampaign::query()
            ->with('recipients')
            ->when($request->filled('status'), fn ($query) => $query->where('status', $request->string('status')))
            ->when($request->filled('channel'), fn ($query) => $query->where('channel', $request->string('channel')))
            ->orderByDesc('created_at');

        $perPage = min((int) $request->integer('per_page', 50), 200);

        return response()->json(
            FrontendPayload::paginated($query->paginate($perPage), fn (EmailCampaign $campaign) => FrontendPayload::campaign($campaign))
        );
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'channel' => ['sometimes', 'string', 'max:40'],
            'audience' => ['nullable', 'string', 'max:255'],
            'subject' => ['nullable', 'string', 'max:255'],
            'body' => ['required', 'string'],
            'sendMode' => ['sometimes', 'string', 'max:40'],
            'send_mode' => ['sometimes', 'string', 'max:40'],
            'scheduledAt' => ['nullable', 'date'],
            'scheduled_at' => ['nullable', 'date'],
            'status' => ['sometimes', 'string', 'max:80'],
            'filters' => ['sometimes', 'array'],
            'candidateIds' => ['sometimes', 'array'],
            'candidateIds.*' => ['integer', 'exists:candidates,id'],
            'candidate_ids' => ['sometimes', 'array'],
            'candidate_ids.*' => ['integer', 'exists:candidates,id'],
            // Free-form recipients (clients, project contacts, or any contact not tied to a candidate).
            // Email is required for the 'email' channel but optional for 'sms' (phone-only) sends.
            'recipients' => ['sometimes', 'array'],
            'recipients.*.email' => ['nullable', 'email'],
            'recipients.*.name' => ['nullable', 'string', 'max:255'],
            'recipients.*.phone' => ['nullable', 'string', 'max:60'],
        ]);

        $campaign = DB::transaction(function () use ($request, $data): EmailCampaign {
            $sendMode = $data['sendMode'] ?? $data['send_mode'] ?? 'now';
            $channel = $data['channel'] ?? 'email';
            $campaign = EmailCampaign::create([
                'created_by' => $request->user()?->id,
                'channel' => $channel,
                'audience' => $data['audience'] ?? null,
                'subject' => $data['subject'] ?? null,
                'body' => $data['body'],
                'send_mode' => $sendMode,
                'scheduled_at' => $data['scheduledAt'] ?? $data['scheduled_at'] ?? null,
                'status' => $data['status'] ?? ($sendMode === 'scheduled' ? 'scheduled' : 'draft'),
                'filters' => $data['filters'] ?? [],
            ]);

            // SMS dedups by phone (no email needed); email/other channels dedup by email.
            $dedupKey = fn (?string $email, ?string $phone): string => $channel === 'sms'
                ? strtolower(trim((string) $phone))
                : strtolower(trim((string) $email));

            $seen = [];

            $candidateIds = $data['candidateIds'] ?? $data['candidate_ids'] ?? [];
            Candidate::whereIn('id', $candidateIds)->get()->each(function (Candidate $candidate) use ($campaign, &$seen, $dedupKey): void {
                $key = $dedupKey($candidate->email, $candidate->phone);
                if ($key === '' || isset($seen[$key])) {
                    return;
                }
                $seen[$key] = true;
                $campaign->recipients()->create([
                    'candidate_id' => $candidate->id,
                    'email' => $candidate->email,
                    'phone' => $candidate->phone,
                    'status' => 'pending',
                ]);
            });

            foreach ($data['recipients'] ?? [] as $recipient) {
                $key = $dedupKey($recipient['email'] ?? null, $recipient['phone'] ?? null);
                if ($key === '' || isset($seen[$key])) {
                    continue;
                }
                $seen[$key] = true;
                $campaign->recipients()->create([
                    'candidate_id' => null,
                    'email' => $recipient['email'] ?? null,
                    'phone' => $recipient['phone'] ?? null,
                    'status' => 'pending',
                ]);
            }

            return $campaign->load('recipients');
        });

        // Send immediately if sendMode is 'now'.
        if (($campaign->send_mode === 'now') && ($campaign->channel === 'email') && $campaign->recipients->isNotEmpty()) {
            $recipients = $campaign->recipients
                ->filter(fn ($r) => !empty($r->email))
                ->map(fn ($r) => [
                    'email' => $r->email,
                    'name'  => $r->candidate?->name ?? '',
                ])
                ->values()
                ->all();

            if (!empty($recipients)) {
                $result = Brevo::sendBulk(
                    $recipients,
                    $campaign->subject ?? 'Message from Bravo Construction',
                    $campaign->body
                );

                $campaign->update([
                    'status' => $result['failed'] === 0 ? 'sent' : 'partial',
                    'sent_at' => now(),
                ]);

                $campaign->recipients()->update(['status' => 'sent']);
            }
        }

        if (($campaign->send_mode === 'now') && ($campaign->channel === 'sms') && $campaign->recipients->isNotEmpty()) {
            $recipients = $campaign->recipients
                ->filter(fn ($r) => !empty($r->phone))
                ->map(fn ($r) => [
                    'phone' => $r->phone,
                    'name'  => $r->candidate?->name ?? '',
                ])
                ->values()
                ->all();

            if (!empty($recipients)) {
                $result = Brevo::sendBulkSms($recipients, $campaign->body);

                $campaign->update([
                    'status' => $result['failed'] === 0 ? 'sent' : 'partial',
                    'sent_at' => now(),
                ]);

                $campaign->recipients()->update(['status' => 'sent']);
            }
        }

        return response()->json(['data' => FrontendPayload::campaign($campaign->refresh()->load('recipients'))], 201);
    }

    public function show(EmailCampaign $campaign): JsonResponse
    {
        return response()->json(['data' => FrontendPayload::campaign($campaign->load('recipients'))]);
    }

    public function update(Request $request, EmailCampaign $campaign): JsonResponse
    {
        $data = $request->validate([
            'channel' => ['sometimes', 'string', 'max:40'],
            'audience' => ['nullable', 'string', 'max:255'],
            'subject' => ['nullable', 'string', 'max:255'],
            'body' => ['sometimes', 'string'],
            'sendMode' => ['sometimes', 'string', 'max:40'],
            'send_mode' => ['sometimes', 'string', 'max:40'],
            'scheduledAt' => ['nullable', 'date'],
            'scheduled_at' => ['nullable', 'date'],
            'status' => ['sometimes', 'string', 'max:80'],
            'filters' => ['sometimes', 'array'],
        ]);

        $campaign->update(array_filter([
            'channel' => $data['channel'] ?? null,
            'audience' => $data['audience'] ?? null,
            'subject' => $data['subject'] ?? null,
            'body' => $data['body'] ?? null,
            'send_mode' => $data['sendMode'] ?? $data['send_mode'] ?? null,
            'scheduled_at' => $data['scheduledAt'] ?? $data['scheduled_at'] ?? null,
            'status' => $data['status'] ?? null,
            'filters' => $data['filters'] ?? null,
        ], fn ($value) => $value !== null));

        return response()->json(['data' => FrontendPayload::campaign($campaign->refresh()->load('recipients'))]);
    }

    public function destroy(EmailCampaign $campaign): JsonResponse
    {
        $campaign->delete();

        return response()->json(status: 204);
    }
}
