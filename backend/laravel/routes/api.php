<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CallLogController;
use App\Http\Controllers\Api\CandidateController;
use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\CvController;
use App\Http\Controllers\Api\EmailCampaignController;
use App\Http\Controllers\Api\GeoController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\VacancyController;
use App\Models\CandidateAssignment;
use App\Models\ProjectAssignment;
use App\Support\FrontendPayload;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::get('/health', function () {
    DB::connection()->getPdo();

    return response()->json([
        'status' => 'ok',
        'app' => config('app.name'),
        'database' => config('database.default'),
        'timestamp' => now()->toISOString(),
    ]);
});

Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/forgot-password', function (Request $request) {
    $data = $request->validate(['email' => ['required', 'email']]);

    $user = \App\Models\User::where('email', $data['email'])->first();

    if (!$user) {
        return response()->json(['message' => 'If this email exists in our system, a reset link has been sent.']);
    }

    $token = \Illuminate\Support\Str::random(64);

    \Illuminate\Support\Facades\DB::table('password_reset_tokens')->updateOrInsert(
        ['email' => $user->email],
        ['token' => hash('sha256', $token), 'created_at' => now()]
    );

    $frontendUrl = rtrim(env('FRONTEND_URL', 'http://localhost:5173'), '/');
    $resetLink = $frontendUrl . '/admin/reset-password?token=' . $token . '&email=' . urlencode($user->email);

    $html = "
        <div style='font-family:Arial,sans-serif;max-width:520px;margin:0 auto;padding:40px 32px;background:#f4f4f4;'>
            <div style='background:#161c2d;border-radius:12px;padding:32px;text-align:center;margin-bottom:24px;'>
                <h1 style='color:#d4af5a;font-size:22px;margin:0 0 4px;'>Bravo CRM</h1>
                <p style='color:rgba(255,255,255,0.5);font-size:13px;margin:0;'>Construction Recruitment</p>
            </div>
            <div style='background:#ffffff;border-radius:12px;padding:32px;'>
                <h2 style='color:#161c2d;margin:0 0 16px;font-size:20px;'>Reset Your Password</h2>
                <p style='color:#555;line-height:1.6;'>Hi {$user->name},</p>
                <p style='color:#555;line-height:1.6;'>We received a request to reset your CRM password. Click the button below to choose a new password.</p>
                <div style='text-align:center;margin:32px 0;'>
                    <a href='{$resetLink}' style='background:linear-gradient(135deg,#b8942e,#d4af5a);color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:700;font-size:15px;display:inline-block;'>Reset Password</a>
                </div>
                <p style='color:#888;font-size:13px;line-height:1.6;'>This link expires in <strong>1 hour</strong>. If you did not request a password reset, you can safely ignore this email.</p>
                <hr style='border:none;border-top:1px solid #eee;margin:24px 0;'>
                <p style='color:#aaa;font-size:12px;'>If the button does not work, copy and paste this link into your browser:<br><a href='{$resetLink}' style='color:#b8942e;word-break:break-all;'>{$resetLink}</a></p>
            </div>
        </div>
    ";

    $sent = \App\Support\Brevo::send(
        ['email' => $user->email, 'name' => $user->name],
        'Reset your Bravo CRM password',
        $html
    );

    if (!$sent) {
        return response()->json(['message' => 'Failed to send reset email. Please try again.'], 500);
    }

    return response()->json(['message' => 'A password reset link has been sent to your email address.']);
});

Route::post('/auth/reset-password', function (Request $request) {
    $data = $request->validate([
        'email'    => ['required', 'email'],
        'token'    => ['required', 'string'],
        'password' => ['required', 'string', 'min:8', 'confirmed'],
    ]);

    $record = \Illuminate\Support\Facades\DB::table('password_reset_tokens')
        ->where('email', $data['email'])
        ->first();

    if (!$record || !hash_equals($record->token, hash('sha256', $data['token']))) {
        return response()->json(['message' => 'Invalid or expired reset link.'], 422);
    }

    if (now()->diffInMinutes($record->created_at) > 60) {
        \Illuminate\Support\Facades\DB::table('password_reset_tokens')->where('email', $data['email'])->delete();
        return response()->json(['message' => 'This reset link has expired. Please request a new one.'], 422);
    }

    $user = \App\Models\User::where('email', $data['email'])->first();
    if (!$user) {
        return response()->json(['message' => 'Invalid or expired reset link.'], 422);
    }

    $user->update(['password' => \Illuminate\Support\Facades\Hash::make($data['password'])]);
    \Illuminate\Support\Facades\DB::table('password_reset_tokens')->where('email', $data['email'])->delete();

    return response()->json(['message' => 'Password reset successfully. You can now sign in.']);
});
Route::middleware('auth:sanctum')->group(function (): void {
    Route::get('/auth/me', [AuthController::class, 'me']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::post('/auth/change-password', [AuthController::class, 'changePassword']);
});

Route::apiResource('clients', ClientController::class);
Route::apiResource('projects', ProjectController::class);
Route::get('project-assignments', function () {
    return response()->json([
        'data' => ProjectAssignment::query()
            ->with('candidate')
            ->orderByDesc('created_at')
            ->get()
            ->map(fn (ProjectAssignment $assignment) => FrontendPayload::assignment($assignment))
            ->values(),
    ]);
});
Route::get('projects/{project}/assignments', [ProjectController::class, 'assignments']);
Route::post('projects/{project}/assignments', [ProjectController::class, 'assign']);
Route::delete('projects/{project}/assignments/{candidate}', [ProjectController::class, 'unassign']);
Route::apiResource('candidates', CandidateController::class);
Route::get('candidate-assignments', function () {
    return response()->json([
        'data' => CandidateAssignment::query()
            ->with(['client', 'vacancy', 'project'])
            ->orderByDesc('created_at')
            ->get()
            ->map(fn (CandidateAssignment $assignment) => FrontendPayload::candidateAssignment($assignment))
            ->values(),
    ]);
});
Route::post('candidate-assignments', function (Request $request) {
    $data = $request->validate([
        'candidate_id' => ['required', 'integer', 'exists:candidates,id'],
        'client_id' => ['nullable', 'integer', 'exists:clients,id'],
        'vacancy_id' => ['nullable', 'integer', 'exists:vacancies,id'],
        'project_id' => ['nullable', 'integer', 'exists:projects,id'],
        'startDate' => ['nullable', 'date'],
        'start_date' => ['nullable', 'date'],
        'status' => ['sometimes', 'string', 'max:80'],
        'notes' => ['nullable', 'string'],
    ]);

    $assignment = DB::transaction(function () use ($data): CandidateAssignment {
        $assignment = CandidateAssignment::create([
            'candidate_id' => $data['candidate_id'],
            'client_id' => $data['client_id'] ?? null,
            'vacancy_id' => $data['vacancy_id'] ?? null,
            'project_id' => $data['project_id'] ?? null,
            'start_date' => $data['startDate'] ?? $data['start_date'] ?? null,
            'status' => $data['status'] ?? 'assigned',
            'notes' => $data['notes'] ?? null,
        ]);

        $assignment->candidate()->update(['status' => 'placed']);

        return $assignment->load(['client', 'vacancy', 'project']);
    });

    return response()->json(['data' => FrontendPayload::candidateAssignment($assignment)], 201);
});
Route::patch('candidate-assignments/{candidateAssignment}', function (Request $request, CandidateAssignment $candidateAssignment) {
    $data = $request->validate([
        'status' => ['sometimes', 'string', 'max:80'],
        'notes' => ['nullable', 'string'],
        'startDate' => ['nullable', 'date'],
        'start_date' => ['nullable', 'date'],
    ]);

    $candidateAssignment->update([
        'status' => $data['status'] ?? $candidateAssignment->status,
        'notes' => $data['notes'] ?? $candidateAssignment->notes,
        'start_date' => $data['startDate'] ?? $data['start_date'] ?? $candidateAssignment->start_date,
    ]);

    return response()->json(['data' => FrontendPayload::candidateAssignment($candidateAssignment)]);
});
Route::delete('candidate-assignments/{candidateAssignment}', function (CandidateAssignment $candidateAssignment) {
    DB::transaction(function () use ($candidateAssignment): void {
        $candidate = $candidateAssignment->candidate;
        $candidateAssignment->delete();

        if ($candidate && ! $candidate->assignments()->exists() && ! $candidate->projectAssignments()->exists()) {
            $candidate->update(['status' => 'qualified']);
        }
    });

    return response()->json(status: 204);
});
Route::apiResource('vacancies', VacancyController::class);
Route::apiResource('cvs', CvController::class);
Route::post('applications', [CvController::class, 'application']);
Route::apiResource('email-campaigns', EmailCampaignController::class);
Route::apiResource('call-logs', CallLogController::class);
Route::get('postcode-coordinates', [GeoController::class, 'coordinates']);
Route::get('geo/projects-near', [GeoController::class, 'projectsNear']);

Route::get('settings/smtp', function () {
    $filePath = storage_path('app/settings_smtp.json');
    if (file_exists($filePath)) {
        $settings = json_decode(file_get_contents($filePath), true);
    } else {
        $settings = [
            'host' => config('mail.mailers.smtp.host'),
            'port' => config('mail.mailers.smtp.port'),
            'username' => config('mail.mailers.smtp.username'),
            'password' => '',
            'encryption' => config('mail.mailers.smtp.encryption'),
            'from_address' => config('mail.from.address'),
            'from_name' => config('mail.from.name'),
        ];
    }
    return response()->json(['data' => $settings]);
});

Route::post('settings/smtp', function (Request $request) {
    $data = $request->validate([
        'host' => ['required', 'string'],
        'port' => ['required', 'integer'],
        'username' => ['required', 'string'],
        'password' => ['nullable', 'string'],
        'encryption' => ['nullable', 'string'],
        'from_address' => ['required', 'email'],
        'from_name' => ['required', 'string'],
    ]);

    $filePath = storage_path('app/settings_smtp.json');
    if (file_exists($filePath)) {
        $existing = json_decode(file_get_contents($filePath), true);
    } else {
        $existing = [];
    }

    $settings = array_merge([
        'host' => $data['host'],
        'port' => (int) $data['port'],
        'username' => $data['username'],
        'encryption' => $data['encryption'] ?? 'tls',
        'from_address' => $data['from_address'],
        'from_name' => $data['from_name'],
    ], array_filter([
        'password' => $data['password'] ?? null,
    ]));

    if (!isset($settings['password']) && isset($existing['password'])) {
        $settings['password'] = $existing['password'];
    }

    file_put_contents($filePath, json_encode($settings, JSON_PRETTY_PRINT));

    return response()->json(['data' => $settings]);
});
