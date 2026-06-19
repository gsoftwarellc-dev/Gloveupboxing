<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Client extends Model
{
    protected $fillable = ['name'];

    public function contacts(): HasMany
    {
        return $this->hasMany(ClientContact::class);
    }

    public function disciplines(): HasMany
    {
        return $this->hasMany(ClientDiscipline::class);
    }

    public function projects(): HasMany
    {
        return $this->hasMany(Project::class);
    }
}
