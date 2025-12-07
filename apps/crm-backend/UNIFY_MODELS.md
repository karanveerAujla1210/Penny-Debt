# Model Unification Plan

This document summarizes duplicate model files detected in the repository and proposes a safe, reversible plan to unify them under `apps/crm-backend/src/models/`.

Summary
- A script `scripts/list-duplicate-models.js` previously identified duplicate basenames across:
  - `apps/crm-backend/models/` (legacy)
  - `apps/crm-backend/models-website/` (website-facing legacy)
  - `apps/crm-backend/src/models/` (canonical)
- A non-destructive shim pass was applied to `apps/crm-backend/models/*` that:
  1. Creates a backup of the original model at `*.bak.js`.
  2. Replaces the original file with a shim that requires `../src/models/<name>` and falls back to the `.bak.js` backup.

Mapping file
- See `scripts/model-mapping.json` for a machine-readable mapping of basenames to canonical `src/models` paths and legacy locations.

Unification approach (per-model)
1. Review mapping entry and confirm canonical fields.
2. If canonical model is missing or incomplete, update `src/models/<model>.js` to include necessary fields and indexes. Keep backward-compatible field aliases if necessary (e.g., `email` vs `emailAddress`).
3. Run automated tests and `node ./scripts/check-models.js` to validate require-time load.
4. Update a small set of callers (controllers/services/routes) to use the canonical field names and the `src/models` exports directly.
5. Run integration/smoke tests to verify behavior.
6. After verification, remove the `.bak.js` file and the shim (delete legacy file and backups in a follow-up PR).

Suggested first target: `payment`
- Reason: `payment` is a largely isolated domain model with clear fields and has duplicates in `models/`, `models-website/`, and `src/models/`.
- Steps:
  1. Compare `models/Payment.bak.js`, `models-website/Payment.js`, and `src/models/payment.js` and produce a merged canonical schema in `src/models/payment.js` (preserve fields used by callers).
  2. Update controllers in `src/controllers` to rely on `Payment` from the central `src/models` and to use the canonical field names.
  3. Run smoke tests and seed scripts.

Risk & mitigation
- Risk: Differences in field names/types between legacy and canonical models could cause runtime errors.
  - Mitigation: Keep `.bak.js` backups, introduce aliases in canonical models where feasible, run targeted tests on endpoints that use the model before removing backups.
- Risk: Database documents may have different shapes (legacy documents). Data migration scripts should be prepared before changing runtime assumptions.
  - Mitigation: Create migration script per-model and run on staging with backups before production run.

Next actions I can perform (pick one):
- "Unify payment" — implement canonical `src/models/payment.js` merge and update callers.
- "Generate per-model migration plan" — create migration skeletons for `payment` and `loan`.
- "Run smoke tests" — execute `node ./apps/crm-backend/scripts/smoke-test.js` (or similar) to validate runtime behavior now.
