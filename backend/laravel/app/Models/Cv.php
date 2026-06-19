<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Cv extends Model
{
    public $incrementing = false;

    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'candidate_id',
        'candidate_name',
        'role',
        'discipline',
        'location',
        'postcode',
        'email',
        'phone',
        'experience_years',
        'skills',
        'certificates',
        'raw_text',
        'file_name',
        'file_path',
        'submitted_at',
        'source',
    ];

    protected function casts(): array
    {
        return [
            'skills' => 'array',
            'certificates' => 'array',
            'submitted_at' => 'datetime',
        ];
    }

    public function candidate(): BelongsTo
    {
        return $this->belongsTo(Candidate::class);
    }
}
