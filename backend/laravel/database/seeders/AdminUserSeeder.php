<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => env('CRM_ADMIN_EMAIL', 'admin@backfill.local')],
            [
                'name' => env('CRM_ADMIN_NAME', 'Backfill Admin'),
                'password' => Hash::make(env('CRM_ADMIN_PASSWORD', 'password')),
                'role' => 'admin',
            ]
        );

        User::updateOrCreate(
            ['email' => 'backfillconstruction@gmail.com'],
            [
                'name' => 'Backfill Construction',
                'password' => Hash::make('password'),
                'role' => 'admin',
            ]
        );

        User::updateOrCreate(
            ['email' => 'Taylor@Backfillconstruction.co.uk'],
            [
                'name' => 'Taylor',
                'password' => Hash::make('password'),
                'role' => 'admin',
            ]
        );
    }
}
