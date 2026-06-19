<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Vacancy extends Model
{
    protected $fillable = [
        'client_id',
        'project_id',
        'title',
        'client_name',
        'project_name',
        'location',
        'postcode',
        'salary',
        'discipline',
        'type',
        'status',
        'recruiter',
        'date_added',
        'deadline',
        'description',
        'applications',
        'shortlisted',
        'interviews',
        'required_certs',
        'priority',
        'visibility',
        'published',
    ];

    protected function casts(): array
    {
        return [
            'date_added' => 'date:Y-m-d',
            'deadline' => 'date:Y-m-d',
            'required_certs' => 'array',
            'published' => 'boolean',
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
}
