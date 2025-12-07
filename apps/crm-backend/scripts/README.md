Scripts in this folder:

- `seed-dev.js` - seed development DB with roles, a local admin user, sample customers, a loan, a program, and a payment. Run with:

  ```powershell
  $Env:MONGODB_URI = 'mongodb://localhost:27017/penny-dev'
  node .\apps\crm-backend\scripts\seed-dev.js
  ```

- `smoke-test.js` - basic HTTP smoke tests hitting a running backend. Configure `BASE_URL` in `.env` or set `BASE_URL` env var.

- `migrations/` - put migration scripts here. Use templates like `0001_migrate_loans_to_debt_accounts.template.js` and run with `--dry-run` first.

Guidance:
- Always point `MONGODB_URI` at a staging DB for dry-run and use `--dry-run` where supported.
- Keep backups: `mongodump --uri="${MONGODB_URI}" --archive=backup.gz --gzip`
- For sensitive migrations, record before/after snapshots to a `migrations` collection for audit.
