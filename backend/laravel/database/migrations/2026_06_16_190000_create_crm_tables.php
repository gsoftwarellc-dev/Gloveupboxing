<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table): void {
            if (! Schema::hasColumn('users', 'role')) {
                $table->string('role')->default('consultant')->after('password');
            }
        });

        Schema::create('clients', function (Blueprint $table): void {
            $table->id();
            $table->string('name')->index();
            $table->timestamps();
        });

        Schema::create('client_disciplines', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('client_id')->constrained()->cascadeOnDelete();
            $table->string('name')->index();
            $table->timestamps();

            $table->unique(['client_id', 'name']);
        });

        Schema::create('client_contacts', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('client_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('role')->nullable();
            $table->string('email')->nullable()->index();
            $table->string('phone')->nullable();
            $table->timestamps();
        });

        Schema::create('projects', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('client_id')->nullable()->constrained()->nullOnDelete();
            $table->string('name')->index();
            $table->string('client_name')->nullable()->index();
            $table->text('location')->nullable();
            $table->string('postcode')->nullable()->index();
            $table->string('status')->default('active')->index();
            $table->string('stage')->nullable()->index();
            $table->date('start_date')->nullable()->index();
            $table->date('end_date')->nullable();
            $table->string('value')->nullable();
            $table->unsignedSmallInteger('roles_needed')->default(0);
            $table->unsignedTinyInteger('opportunity_score')->default(0)->index();
            $table->string('sector')->nullable()->index();
            $table->string('priority')->nullable()->index();
            $table->string('main_contractor')->nullable()->index();
            $table->json('tags')->nullable();
            $table->longText('notes')->nullable();
            $table->timestamps();
        });

        Schema::create('project_contacts', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('project_id')->constrained()->cascadeOnDelete();
            $table->string('type')->default('person');
            $table->string('name');
            $table->string('role')->nullable();
            $table->string('email')->nullable()->index();
            $table->string('phone')->nullable();
            $table->timestamps();
        });

        Schema::create('candidates', function (Blueprint $table): void {
            $table->id();
            $table->string('name')->index();
            $table->string('role')->nullable()->index();
            $table->string('status')->default('new')->index();
            $table->string('location')->nullable()->index();
            $table->string('postcode')->nullable()->index();
            $table->string('discipline')->nullable()->index();
            $table->string('email')->nullable()->index();
            $table->string('phone')->nullable();
            $table->decimal('salary', 12, 2)->nullable();
            $table->unsignedSmallInteger('experience_years')->default(0);
            $table->unsignedSmallInteger('travel_radius')->nullable();
            $table->decimal('rating', 3, 1)->default(0);
            $table->json('tags')->nullable();
            $table->string('availability')->nullable();
            $table->string('notice_period')->nullable();
            $table->string('source')->default('Manual');
            $table->string('recruiter')->nullable();
            $table->date('date_added')->nullable()->index();
            $table->date('last_contacted')->nullable();
            $table->boolean('right_to_work')->default(false);
            $table->longText('notes')->nullable();
            $table->json('certificates')->nullable();
            $table->json('skills')->nullable();
            $table->json('employment_history')->nullable();
            $table->json('references')->nullable();
            $table->timestamps();
        });

        Schema::create('vacancies', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('client_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('project_id')->nullable()->constrained()->nullOnDelete();
            $table->string('title')->index();
            $table->string('client_name')->nullable()->index();
            $table->string('project_name')->nullable()->index();
            $table->string('location')->nullable()->index();
            $table->string('postcode')->nullable()->index();
            $table->string('salary')->nullable();
            $table->string('discipline')->nullable()->index();
            $table->string('type')->nullable()->index();
            $table->string('status')->default('active')->index();
            $table->string('recruiter')->nullable();
            $table->date('date_added')->nullable()->index();
            $table->date('deadline')->nullable();
            $table->longText('description')->nullable();
            $table->unsignedInteger('applications')->default(0);
            $table->unsignedInteger('shortlisted')->default(0);
            $table->unsignedInteger('interviews')->default(0);
            $table->json('required_certs')->nullable();
            $table->string('priority')->nullable()->index();
            $table->string('visibility')->default('Public')->index();
            $table->boolean('published')->default(false)->index();
            $table->timestamps();
        });

        Schema::create('cvs', function (Blueprint $table): void {
            $table->string('id', 64)->primary();
            $table->foreignId('candidate_id')->nullable()->constrained()->nullOnDelete();
            $table->string('candidate_name')->index();
            $table->string('role')->nullable()->index();
            $table->string('discipline')->nullable()->index();
            $table->string('location')->nullable()->index();
            $table->string('postcode')->nullable()->index();
            $table->string('email')->nullable()->index();
            $table->string('phone')->nullable();
            $table->unsignedSmallInteger('experience_years')->nullable();
            $table->json('skills')->nullable();
            $table->json('certificates')->nullable();
            $table->longText('raw_text')->nullable();
            $table->string('file_name')->nullable();
            $table->string('file_path')->nullable();
            $table->timestamp('submitted_at')->nullable()->index();
            $table->string('source')->default('Application Form');
            $table->timestamps();
        });

        Schema::create('project_assignments', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('project_id')->constrained()->cascadeOnDelete();
            $table->foreignId('candidate_id')->constrained()->cascadeOnDelete();
            $table->string('role')->nullable();
            $table->date('start_date')->nullable();
            $table->string('status')->default('assigned')->index();
            $table->longText('notes')->nullable();
            $table->timestamps();

            $table->unique(['project_id', 'candidate_id']);
        });

        Schema::create('email_campaigns', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
            $table->string('channel')->default('email')->index();
            $table->string('audience')->nullable();
            $table->string('subject')->nullable();
            $table->longText('body');
            $table->string('send_mode')->default('now');
            $table->timestamp('scheduled_at')->nullable()->index();
            $table->string('status')->default('draft')->index();
            $table->json('filters')->nullable();
            $table->timestamps();
        });

        Schema::create('email_recipients', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('email_campaign_id')->constrained()->cascadeOnDelete();
            $table->foreignId('candidate_id')->nullable()->constrained()->nullOnDelete();
            $table->string('email')->nullable()->index();
            $table->string('phone')->nullable();
            $table->string('status')->default('pending')->index();
            $table->timestamp('sent_at')->nullable();
            $table->text('failed_reason')->nullable();
            $table->timestamps();
        });

        Schema::create('postcode_coordinates', function (Blueprint $table): void {
            $table->string('postcode')->primary();
            $table->decimal('latitude', 10, 7);
            $table->decimal('longitude', 10, 7);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('postcode_coordinates');
        Schema::dropIfExists('email_recipients');
        Schema::dropIfExists('email_campaigns');
        Schema::dropIfExists('project_assignments');
        Schema::dropIfExists('cvs');
        Schema::dropIfExists('vacancies');
        Schema::dropIfExists('candidates');
        Schema::dropIfExists('project_contacts');
        Schema::dropIfExists('projects');
        Schema::dropIfExists('client_contacts');
        Schema::dropIfExists('client_disciplines');
        Schema::dropIfExists('clients');

        Schema::table('users', function (Blueprint $table): void {
            if (Schema::hasColumn('users', 'role')) {
                $table->dropColumn('role');
            }
        });
    }
};
