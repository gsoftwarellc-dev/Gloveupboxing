<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProjectContact extends Model
{
    protected $fillable = ['project_id', 'type', 'name', 'role', 'email', 'phone'];

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }
}
