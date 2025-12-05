# QA Checklist — UI / Icons & Buttons

This checklist accompanies the PR `feat/ui/icons-and-buttons`.

## Visual checks
- [ ] Verify icon replacement on the following pages/components:
  - FinanceHome (services icons)
  - Header (login chevron)
  - PremiumFooter (social icons)
  - TrustBadges
  - WhatsAppWidget
  - ThemeToggle
- [ ] Check `CardIcon` placement on service cards for correct vertical alignment and spacing.
- [ ] Check color contrast for icons and buttons (AA for text contrast, buttons should meet accessible contrast ratios).

## Interaction checks
- [ ] Hover states: icons that are interactive show focus/hover outlines.
- [ ] ThemeToggle: toggles between sun/moon; confirm localStorage theme persisted and aria-label updates.
- [ ] WhatsApp widget: opens the correct WhatsApp URL on click.
- [ ] Mobile menu buttons (Header): verify `Customer Login`, `Employee Login`, and `Sign Up` links render as buttons and navigate correctly.

## Accessibility (axe)
- [ ] Run axe CLI: `npx @axe-core/cli http://localhost:5173 --reporter html --output reports/axe-report.html` (adjust port)
- [ ] Ensure no critical violations; fix color contrast / focus order / aria-labels if any violations appear.

## Performance / Lighthouse
- [ ] Run Lighthouse (desktop/mobile):
  - `npx lighthouse http://localhost:5173 --output html --output-path reports/lighthouse-desktop.html --preset=desktop`
  - `npx lighthouse http://localhost:5173 --output html --output-path reports/lighthouse-mobile.html --preset=mobile`
- [ ] Target improvements: Keep CLS low, reduce image weight (hero is large), and verify that animated SVG gradients are not causing performance issues.

## Files / artifacts to attach to PR
- `QA_CHECKLIST.md` (this file)
- `reports/axe-report.html` (axe output)
- `reports/lighthouse-desktop.html` and `reports/lighthouse-mobile.html` (Lighthouse reports)

## How to run locally (quick)
1. Install dependencies and build/preview the site:

```pwsh
cd apps/website
npm install
npm run build
npm run preview
# or for dev
npm run dev
```

2. Run axe and lighthouse (after server is up):

```pwsh
npx @axe-core/cli http://localhost:5173 --reporter html --output reports/axe-report.html
npx lighthouse http://localhost:5173 --output html --output-path reports/lighthouse-desktop.html --preset=desktop
npx lighthouse http://localhost:5173 --output html --output-path reports/lighthouse-mobile.html --preset=mobile
```

Adjust `localhost:5173` to the preview/dev port if different.

---

If you'd like, I can run these checks here now — say `Run checks` and I'll:
- Start the preview server (if available),
- Run axe and Lighthouse, and
- Commit the `reports/` files to the branch and push them for PR attachment.
