# CRM DB Migration Guide

Goal: consolidate CRM domain on MongoDB and provide compatibility shims while migrating legacy models.

Decisions
- Primary CRM DB: MongoDB (use `MONGODB_URI` environment variable).
- Website (marketing) data may remain in SQL or separate DB; keep bounded contexts.

What we changed
- Added new CRM domain models under `src/models/crm/`: `DebtAccount`, `DebtPlan`, `DebtPlanItem`, `IncomeExpenseProfile`, `RiskFlag`.
- Added `src/models/index.js` as a compatibility shim to re-export models.
- Ensure `apps/crm-backend/src/config/db.js` uses `MONGODB_URI`.

Migration steps
1. Ensure backups of SQL schemas if website uses SQL.
2. Start with read-only sync: write scripts that copy website customer rows into Mongo `customers` collection if needed.
3. Create debt accounts from existing `Loan`/`Payment` records using a migration script that:
   - maps loans to `DebtAccount` documents
   - calculates `currentPrincipal` from latest balance
   - copies lender metadata
4. Create initial `DebtPlan` documents for a small pilot set (or generate placeholder plan with `status: DRAFT`).
5. Gradually update API endpoints to reference the new models. Use feature flags to toggle between old and new implementations.

Compatibility
- Use `src/models/index.js` to import models centrally: `const { DebtAccount } = require('../models');`
- For legacy code that requires `../models/Loan`, leave as-is while refactoring to `src/models/index.js` references.

Testing
- Run migration scripts in a staging environment.
- Run smoke tests (`apps/crm-backend/scripts/smoke-test.js`) to validate create→loan→plan flows.

Rollback
- Because migrations are additive (creating new documents), rollback can be done by dropping collections created during migration.
- Keep old data intact until full cutover is complete.

Notes
- Normalize model filenames & require paths to lowercase filenames on non-Windows platforms.
- Audit logs (`audit_logs`) are used to capture sensitive updates; ensure they are populated during migration where relevant.

*** End of Guide
