<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostcodeCoordinate extends Model
{
    public $incrementing = false;

    protected $primaryKey = 'postcode';

    protected $keyType = 'string';

    protected $fillable = ['postcode', 'latitude', 'longitude'];
}
