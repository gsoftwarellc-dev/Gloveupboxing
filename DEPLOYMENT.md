# GitHub to IONOS deployment

This repo is set up for one-way deployment from GitHub to IONOS:

- Frontend build output is deployed to the IONOS web root.
- Laravel backend code is deployed to `/backend/laravel`.
- The Laravel routing files in `backend/root` are deployed to `/backend`.
- The production database stays on IONOS and is not synced from GitHub.

## GitHub Actions secrets

Create these repository secrets in GitHub:

- `FTP_HOST`
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_TARGET`

`FTP_TARGET` should point to the IONOS public web root, for example `/home/www/public`.

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
4. Upload the frontend, root `.htaccess`, and backend files to IONOS.

