# PR: feat(ui): unified gradient icon pack + CardIcon; migrate buttons to shared primitives

## Summary

This PR introduces a unified gradient icon pack and updates the UI primitives for consistent visuals and developer ergonomics.

Key changes:

- Adds a gradient SVG icon pack with animated stops: `src/components/ui/icons/index.jsx` (shield, phone, wallet, scale, people, sun, moon).
- Adds `CardIcon` to `src/components/ui/card.jsx` for consistent icon placement and sizing inside cards.
- Replaces emoji/SVG icons with the new icon pack across key components:
  - `src/pages/FinanceHome.jsx`
  - `src/components/Header.jsx`
  - `src/components/PremiumFooter.jsx`
  - `src/components/TrustBadges.jsx`
  - `src/components/WhatsAppWidget.jsx`
  - `src/components/ThemeToggle.jsx`
- Migrates several ad-hoc `btn` / `btn-*` usages to the shared `Button` component in multiple pages (uses `asChild` where preserving anchors is needed).
- Adds placeholder social SVG assets in `public/assets/social/`.

## Why

- Visual consistency: single source of truth for icons and card icon placement.
- Design polish: gradient and gentle motion improve perceived quality while keeping performance lightweight.
- Maintainability: centralized `Button` reduces style drift and simplifies future theme/token updates.

## Notes & Considerations

- Animated gradients use inline SVG `<animate>` on gradient stops; this works in modern browsers. If you prefer CSS-driven animation or JS-based approaches, I can change it.
- I added placeholder social SVGs; replace with final brand assets if available.
- No backend, auth, or sensitive changes were made.

## Files touched (high level)

- `src/components/ui/icons/index.jsx` (new/modified)
- `src/components/ui/card.jsx` (CardIcon export)
- `src/components/ThemeToggle.jsx`
- `src/components/TrustBadges.jsx`
- `src/components/WhatsAppWidget.jsx`
- `src/components/PremiumFooter.jsx`
- `src/components/Header.jsx`
- `src/pages/FinanceHome.jsx`
- `src/pages/HomeRevamped.jsx`
- `src/pages/PremiumServices.jsx`
- `src/pages/Eligibility.jsx`
- `public/assets/social/*.svg` (new placeholders)

## Next steps

- Sweep remaining pages for any leftover `btn-*` classes and complete migration.
- Optionally refine icon animations and create filled/outlined variants.
- Run Lighthouse and axe accessibility checks and address issues.

---

Open PR URL: https://github.com/karanveerAujla1210/Penny-Debt/pull/new/feat/ui/icons-and-buttons

Use the suggested title and this body when creating the PR via the GitHub UI, or paste this as-is.
