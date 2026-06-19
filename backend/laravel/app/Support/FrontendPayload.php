<?php

namespace App\Support;

use App\Models\Candidate;
use App\Models\CandidateAssignment;
use App\Models\CallLog;
use App\Models\Client;
use App\Models\Cv;
use App\Models\EmailCampaign;
use App\Models\Project;
use App\Models\ProjectAssignment;
use App\Models\Vacancy;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

class FrontendPayload
{
    public static function paginated(LengthAwarePaginator $paginator, callable $transform): array
    {
        return [
            'data' => Collection::make($paginator->items())->map($transform)->values(),
            'meta' => [
                'currentPage' => $paginator->currentPage(),
                'perPage' => $paginator->perPage(),
                'total' => $paginator->total(),
                'lastPage' => $paginator->lastPage(),
            ],
        ];
    }

    public static function client(Client $client): array
    {
        return [
            'id' => $client->id,
            'name' => $client->name,
            'disciplines' => $client->disciplines->pluck('name')->values(),
            'contacts' => $client->contacts->map(fn ($contact) => [
                'id' => $contact->id,
                'name' => $contact->name,
                'role' => $contact->role,
                'email' => $contact->email,
                'phone' => $contact->phone,
            ])->values(),
            'createdAt' => optional($client->created_at)->toISOString(),
            'updatedAt' => optional($client->updated_at)->toISOString(),
        ];
    }

    public static function project(Project $project): array
    {
        return [
            'id' => $project->id,
            'name' => $project->name,
            'clientId' => $project->client_id,
            'client' => $project->client_name ?? $project->client?->name ?? '',
            'location' => $project->location ?? '',
            'postcode' => $project->postcode ?? '',
            'status' => $project->status,
            'stage' => $project->stage ?? '',
            'startDate' => optional($project->start_date)->format('Y-m-d') ?? '',
            'endDate' => optional($project->end_date)->format('Y-m-d') ?? '',
            'value' => $project->value ?? '',
            'rolesNeeded' => $project->roles_needed,
            'contacts' => $project->contacts->map(fn ($contact) => [
                'id' => $contact->id,
                'type' => $contact->type,
                'name' => $contact->name,
                'role' => $contact->role,
                'email' => $contact->email,
                'phone' => $contact->phone,
            ])->values(),
            'opportunityScore' => $project->opportunity_score,
            'sector' => $project->sector,
            'priority' => $project->priority,
            'mainContractor' => $project->main_contractor,
            'tags' => $project->tags ?? [],
            'notes' => $project->notes,
            'createdAt' => optional($project->created_at)->toISOString(),
            'updatedAt' => optional($project->updated_at)->toISOString(),
        ];
    }

    public static function candidate(Candidate $candidate): array
    {
        return [
            'id' => $candidate->id,
            'name' => $candidate->name,
            'role' => $candidate->role ?? '',
            'status' => $candidate->status,
            'location' => $candidate->location ?? '',
            'postcode' => $candidate->postcode ?? '',
            'discipline' => $candidate->discipline ?? '',
            'email' => $candidate->email ?? '',
            'phone' => $candidate->phone ?? '',
            'salary' => $candidate->salary === null ? null : (float) $candidate->salary,
            'experienceYears' => $candidate->experience_years,
            'travelRadius' => $candidate->travel_radius,
            'rating' => (float) $candidate->rating,
            'tags' => $candidate->tags ?? [],
            'availability' => $candidate->availability,
            'noticePeriod' => $candidate->notice_period,
            'source' => $candidate->source,
            'recruiter' => $candidate->recruiter ?? '',
            'dateAdded' => optional($candidate->date_added)->format('Y-m-d') ?? '',
            'lastContacted' => optional($candidate->last_contacted)->format('Y-m-d') ?? '',
            'rightToWork' => (bool) $candidate->right_to_work,
            'notes' => $candidate->notes,
            'certificates' => $candidate->certificates ?? [],
            'skills' => $candidate->skills ?? [],
            'employmentHistory' => $candidate->employment_history ?? [],
            'references' => $candidate->references ?? [],
        ];
    }

    public static function vacancy(Vacancy $vacancy): array
    {
        return [
            'id' => $vacancy->id,
            'title' => $vacancy->title,
            'clientId' => $vacancy->client_id,
            'client' => $vacancy->client_name ?? $vacancy->client?->name ?? '',
            'projectId' => $vacancy->project_id,
            'project' => $vacancy->project_name ?? $vacancy->project?->name,
            'location' => $vacancy->location ?? '',
            'postcode' => $vacancy->postcode ?? '',
            'salary' => $vacancy->salary ?? '',
            'discipline' => $vacancy->discipline ?? '',
            'type' => $vacancy->type ?? '',
            'status' => $vacancy->status,
            'recruiter' => $vacancy->recruiter ?? '',
            'dateAdded' => optional($vacancy->date_added)->format('Y-m-d') ?? '',
            'deadline' => optional($vacancy->deadline)->format('Y-m-d') ?? '',
            'description' => $vacancy->description ?? '',
            'applications' => $vacancy->applications,
            'shortlisted' => $vacancy->shortlisted,
            'interviews' => $vacancy->interviews,
            'requiredCerts' => $vacancy->required_certs ?? [],
            'priority' => $vacancy->priority,
            'visibility' => $vacancy->visibility,
            'published' => (bool) $vacancy->published,
        ];
    }

    public static function cv(Cv $cv): array
    {
        return [
            'id' => $cv->id,
            'candidateId' => $cv->candidate_id,
            'candidateName' => $cv->candidate_name,
            'role' => $cv->role ?? '',
            'discipline' => $cv->discipline ?? '',
            'location' => $cv->location ?? '',
            'postcode' => $cv->postcode,
            'email' => $cv->email,
            'phone' => $cv->phone,
            'experienceYears' => $cv->experience_years,
            'skills' => $cv->skills ?? [],
            'certificates' => $cv->certificates ?? [],
            'rawText' => $cv->raw_text ?? '',
            'fileName' => $cv->file_name,
            'filePath' => $cv->file_path,
            'submittedAt' => optional($cv->submitted_at)->toISOString(),
            'source' => $cv->source,
        ];
    }

    public static function assignment(ProjectAssignment $assignment): array
    {
        return [
            'id' => $assignment->id,
            'projectId' => $assignment->project_id,
            'candidateId' => $assignment->candidate_id,
            'role' => $assignment->role,
            'startDate' => optional($assignment->start_date)->format('Y-m-d'),
            'status' => $assignment->status,
            'notes' => $assignment->notes,
            'candidate' => $assignment->relationLoaded('candidate')
                ? self::candidate($assignment->candidate)
                : null,
        ];
    }

    public static function candidateAssignment(CandidateAssignment $assignment): array
    {
        return [
            'id' => $assignment->id,
            'candidateId' => $assignment->candidate_id,
            'clientId' => $assignment->client_id,
            'vacancyId' => $assignment->vacancy_id,
            'projectId' => $assignment->project_id,
            'startDate' => optional($assignment->start_date)->format('Y-m-d'),
            'status' => $assignment->status,
            'notes' => $assignment->notes,
            'client' => $assignment->relationLoaded('client') ? $assignment->client?->name : null,
            'vacancy' => $assignment->relationLoaded('vacancy') ? $assignment->vacancy?->title : null,
            'project' => $assignment->relationLoaded('project') ? $assignment->project?->name : null,
        ];
    }

    public static function campaign(EmailCampaign $campaign): array
    {
        return [
            'id' => $campaign->id,
            'createdBy' => $campaign->created_by,
            'channel' => $campaign->channel,
            'audience' => $campaign->audience,
            'subject' => $campaign->subject,
            'body' => $campaign->body,
            'sendMode' => $campaign->send_mode,
            'scheduledAt' => optional($campaign->scheduled_at)->toISOString(),
            'status' => $campaign->status,
            'filters' => $campaign->filters ?? [],
            'recipients' => $campaign->recipients->map(fn ($recipient) => [
                'id' => $recipient->id,
                'candidateId' => $recipient->candidate_id,
                'email' => $recipient->email,
                'phone' => $recipient->phone,
                'status' => $recipient->status,
                'sentAt' => optional($recipient->sent_at)->toISOString(),
                'failedReason' => $recipient->failed_reason,
            ])->values(),
        ];
    }

    public static function callLog(CallLog $log): array
    {
        return [
            'id' => $log->id,
            'clientId' => $log->client_id,
            'projectId' => $log->project_id,
            'candidateId' => $log->candidate_id,
            'contactName' => $log->contact_name,
            'contactPhone' => $log->contact_phone,
            'contactEmail' => $log->contact_email,
            'notes' => $log->notes,
            'requirements' => $log->requirements,
            'callBackDate' => optional($log->call_back_date)->format('Y-m-d'),
            'calledAt' => optional($log->called_at)->toISOString(),
            'createdAt' => optional($log->created_at)->toISOString(),
            'updatedAt' => optional($log->updated_at)->toISOString(),
        ];
    }
}
