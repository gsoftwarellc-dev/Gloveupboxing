<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// On IONOS: this file lives at htdocs/backend/index.php
// Laravel app lives at htdocs/backend/laravel/
$laravelBase = __DIR__ . '/laravel';

if (file_exists($maintenance = $laravelBase . '/storage/framework/maintenance.php')) {
    require $maintenance;
}

require $laravelBase . '/vendor/autoload.php';

/** @var Application $app */
$app = require_once $laravelBase . '/bootstrap/app.php';

$app->handleRequest(Request::capture());
