# GitHub to IONOS deployment

This repo is set up for one-way deployment from GitHub to IONOS:

- Frontend build output is deployed to the live IONOS site root at `/home/www/clickandbuilds/BackfillConstructionRecruitment`.
- Laravel backend code is deployed to `/home/www/clickandbuilds/BackfillConstructionRecruitment/backend/laravel`.
- The Laravel routing files in `backend/root` are deployed to `/home/www/clickandbuilds/BackfillConstructionRecruitment/backend`.
- The production database stays on IONOS and is not synced from GitHub.

## GitHub Actions secrets

Create this repository secret in GitHub:

- `FTP_PASSWORD`

The workflow hardcodes the IONOS SSH host, username, live frontend root, and live backend path.

## IONOS database

Keep the live database on IONOS and set the production `.env` on the server to the same database name you want to use there.

Do not try to store the live database in GitHub. Use GitHub for code and migrations only.

## Brand name

If you want the brand name to stay hardcoded, keep it in source code and config values, not in GitHub secrets.

## Deploy flow

On every push to `main`, GitHub Actions will:

1. Install frontend dependencies.
2. Build the frontend.
3. Install Laravel dependencies.
4. Upload the frontend and root `.htaccess` to `/home/www/clickandbuilds/BackfillConstructionRecruitment`.
5. Upload the Laravel backend to `/home/www/clickandbuilds/BackfillConstructionRecruitment/backend`.
6. Clear stale Laravel cache files on IONOS and rebuild config, route, and view caches.
