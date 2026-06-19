<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Candidate extends Model
{
    protected $fillable = [
        'name',
        'role',
        'status',
        'location',
        'postcode',
        'discipline',
        'email',
        'phone',
        'salary',
        'experience_years',
        'travel_radius',
        'rating',
        'tags',
        'availability',
        'notice_period',
        'source',
        'recruiter',
        'date_added',
        'last_contacted',
        'right_to_work',
        'notes',
        'certificates',
        'skills',
        'employment_history',
        'references',
    ];

    protected function casts(): array
    {
        return [
            'salary' => 'decimal:2',
            'rating' => 'decimal:1',
            'tags' => 'array',
            'certificates' => 'array',
            'skills' => 'array',
            'employment_history' => 'array',
            'references' => 'array',
            'date_added' => 'date:Y-m-d',
            'last_contacted' => 'date:Y-m-d',
            'right_to_work' => 'boolean',
        ];
    }

    public function cvs(): HasMany
    {
        return $this->hasMany(Cv::class);
    }

    public function projectAssignments(): HasMany
    {
        return $this->hasMany(ProjectAssignment::class);
    }

    public function assignments(): HasMany
    {
        return $this->hasMany(CandidateAssignment::class);
    }
}
