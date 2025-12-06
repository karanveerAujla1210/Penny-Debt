CRM Reorganization Guide

Goal: reorganize the CRM frontend into a modular, role-driven architecture without deleting or breaking existing pages.

What we added (non-destructive):

- `src/core/rbac/roleAccess.js` — central role → modules mapping and helper.
- `src/core/auth/ProtectedRoute.jsx` — a small wrapper to guard routes by role or module.
- `src/components/layout/MainLayout.jsx` — layout using the existing `CRMSidebar`.
- `src/modules/*` facades (e.g. `modules/leads`, `modules/cases`) that re-export existing pages.
- `src/roles/*` facades for role dashboards (example: `roles/Advisor/Dashboard.jsx`).

Migration strategy (incremental):

1. Create module facades (done). Start importing from `src/modules/...` in new code instead of scattered `pages/*` paths.
2. Replace duplicated pages by moving business logic into `modules/` and making role pages small (compose modules and widgets).
3. Use `ProtectedRoute` in `src/App.jsx` to gate module routes by `module` or `allowedRoles`.
4. Gradually remove duplicate pages once all callers are migrated to module facades.

Example route change (before):
  <Route path="/cases" element={<CaseList/>} />
After (recommended):
  import { CaseList } from './modules/cases';
  <Route path="/cases" element={<ProtectedRoute module="cases"><MainLayout><CaseList/></MainLayout></ProtectedRoute>} />

Notes:
- We intentionally did not move or delete any existing files. The facades re-export existing pages, providing immediate compatibility.
- Next step: I can update `src/App.jsx` to use `MainLayout` and `ProtectedRoute` for key routes and convert a selection of role routes to import from `modules/*`.

If you'd like, I can now:
- Update `src/App.jsx` to wire `ProtectedRoute` + `MainLayout` for primary routes (cases, leads, negotiation).
- Convert a small set of duplicate role pages to thin wrappers that compose `modules/*` components.
- Run a local dev build of `apps/crm-frontend` to ensure no import errors.

Tell me which one to do next (App wiring / role conversions / run dev build / other).