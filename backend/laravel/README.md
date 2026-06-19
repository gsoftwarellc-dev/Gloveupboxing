# Backfill CRM Backend

Laravel API backend for the existing React CRM in `../crm-frontend`, using MySQL as the persistence layer.

## Local Setup

```bash
cd crm-backend
composer install
cp .env.example .env
php artisan key:generate
mysql -uroot -e "CREATE DATABASE IF NOT EXISTS gloveupbowing_crm CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
php artisan migrate:fresh --seed
php artisan serve --host=127.0.0.1 --port=8000
```

The default local admin seeded by `AdminUserSeeder` is:

```text
Email: admin@backfill.local
Password: password
```

Change `CRM_ADMIN_EMAIL` and `CRM_ADMIN_PASSWORD` in `.env` before using this outside local development.

## Data Source

Runtime CRM data lives in MySQL and is accessed through Laravel API routes.
The React app does not keep clients, projects, candidates, vacancies, CVs, campaigns, coordinates, or assignments in TypeScript data files.

`php artisan migrate --seed` creates the default local admin user only. Import production data into MySQL using database imports, admin workflows, or API write endpoints.

## Main API Routes

```text
GET    /api/health
POST   /api/auth/login
GET    /api/auth/me
POST   /api/auth/logout

GET    /api/clients?all=1
POST   /api/clients
GET    /api/clients/{client}
PATCH  /api/clients/{client}
DELETE /api/clients/{client}

GET    /api/projects?all=1
POST   /api/projects
GET    /api/projects/{project}
PATCH  /api/projects/{project}
DELETE /api/projects/{project}
GET    /api/project-assignments
GET    /api/projects/{project}/assignments
POST   /api/projects/{project}/assignments
DELETE /api/projects/{project}/assignments/{candidate}

GET    /api/candidates?all=1
POST   /api/candidates
GET    /api/candidate-assignments
POST   /api/candidate-assignments
DELETE /api/candidate-assignments/{candidateAssignment}
GET    /api/vacancies?all=1
POST   /api/vacancies
GET    /api/cvs?all=1
POST   /api/cvs
POST   /api/applications

GET    /api/email-campaigns
POST   /api/email-campaigns
GET    /api/postcode-coordinates
GET    /api/geo/projects-near?postcode=CB2%203BU&radius=25
```

List all routes with:

```bash
php artisan route:list --path=api
```

## Verification

```bash
php artisan test
php artisan route:list --path=api
php artisan tinker --execute="echo App\\Models\\Client::count();"
```
