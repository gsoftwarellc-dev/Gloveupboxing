<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class EmailCampaign extends Model
{
    protected $fillable = [
        'created_by',
        'channel',
        'audience',
        'subject',
        'body',
        'send_mode',
        'scheduled_at',
        'status',
        'filters',
    ];

    protected function casts(): array
    {
        return [
            'scheduled_at' => 'datetime',
            'filters' => 'array',
        ];
    }

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function recipients(): HasMany
    {
        return $this->hasMany(EmailRecipient::class);
    }
}
