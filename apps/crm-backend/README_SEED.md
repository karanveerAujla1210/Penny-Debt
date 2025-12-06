# CRM Backend Seed

Quick seed for local development.

Run from repository root or from `apps/crm-backend`:

```pwsh
# from repo root
node .\apps\crm-backend\scripts\seed.js

# or from apps/crm-backend
node scripts/seed.js
```

Requirements:
- MongoDB accessible via `MONGODB_URI` in `.env` or environment.

What it creates:
- Roles: Admin, Advisor, Agent, Case
- Sample user: `admin@example.com` (password `password123`)
- Sample customer: `jane.doe@example.com`
