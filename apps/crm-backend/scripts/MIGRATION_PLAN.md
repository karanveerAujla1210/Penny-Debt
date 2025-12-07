# Migration & Cleanup Plan (CRM)

This document describes a safe, repeatable process for performing data/model migrations and cleaning up legacy files.

Principles
- Always run on a staging copy first; export a DB snapshot before running anything on production.
- Keep legacy files backed up (`*.bak.js`) and use reversible shims where possible.
- Prefer additive changes (new fields) and backfill data in background jobs.
- Use small, well-tested migration scripts and include a rollback plan for each change.

High-level steps
1. Review mapping: inspect `scripts/model-mapping.json` to identify canonical targets.
2. Create migration script (in `scripts/migrations/`) that:
   - connects to DB using `MONGODB_URI`
   - reads records in manageable batches (e.g. 500)
   - writes changes using `updateOne` with idempotent transforms
   - records progress to a `migrations` collection with timestamps and a resume cursor
3. Run migration on staging with `--dry-run` first to collect a report.
4. Verify application behavior and run smoke tests.
5. Deploy migration to production during a maintenance window; keep backups handy.
6. After successful migration and verification, mark legacy files for archival and create canonical imports.

Rollback strategy
- For data changes, maintain an audit collection with before/after snapshots when feasible.
- For destructive changes (rare), keep a nightly dump and a `mongodump` artifact you can restore from.
- For code changes, deploy shims that fallback to legacy `*.bak.js` until fully verified.

Operational checklist (pre-migration)
- [ ] Ensure latest backup/`mongodump` exists and is restorable.
- [ ] Run `node scripts/check-models.js` to ensure models load.
- [ ] Run unit and integration tests against staging.
- [ ] Notify stakeholders and schedule maintenance window.

Post-migration
- Monitor application logs and key metrics for at least 2x expected error window.
- Keep read-only mode for some endpoints if necessary while validating.
- Archive legacy files and update `UNIFY_MODELS.md` with final decisions.

Contact
- Migration author: add your name here and point to PR with the migration script.
