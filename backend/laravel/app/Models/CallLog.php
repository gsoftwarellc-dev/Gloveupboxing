<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CallLog extends Model
{
    protected $fillable = [
        'client_id',
        'project_id',
        'candidate_id',
        'contact_name',
        'contact_phone',
        'contact_email',
        'notes',
        'requirements',
        'call_back_date',
        'called_at',
    ];

    protected function casts(): array
    {
        return [
            'call_back_date' => 'date',
            'called_at' => 'datetime',
        ];
    }

    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function candidate(): BelongsTo
    {
        return $this->belongsTo(Candidate::class);
    }
}
