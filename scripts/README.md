Create role wrapper pages from `src/pages/Shared/`

Usage:

- Dry run (shows what would change):

  node scripts/create-role-wrappers.js

- Apply changes and overwrite existing files:

  node scripts/create-role-wrappers.js --apply --force

What it does:

- Scans `apps/crm-frontend/src/pages/` for role folders (excludes `Shared`, `Auth`, `Customer`, `Employee`, `Dashboard`).
- For each role folder it will create or (with `--force`) overwrite these pages to be thin wrappers that import the corresponding component from `Shared`:
  - `Clients.jsx`
  - `Leads.jsx`
  - `Reports.jsx`
  - `Settings.jsx`
  - `Tasks.jsx`

Notes & next steps:

- This script only replaces the page files themselves. It does not update routes or other imports elsewhere.
- After generating wrappers, search the repo for duplicate `ProtectedRoute.jsx` files and consolidate imports to one canonical implementation.
- Review generated files before committing.
