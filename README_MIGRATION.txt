PENNY-DEBT MONOREPO MIGRATION
==============================

QUICK START:
1. Run: EXECUTE_MIGRATION.bat
2. Edit .env files in apps/backend, apps/crm, apps/website
3. Run: npm run dev

STRUCTURE:
apps/backend/    → Node.js API
apps/crm/        → CRM Frontend  
apps/website/    → Public Website
apps/mobile/     → React Native
packages/shared/ → Shared code

COMMANDS:
npm run dev              → Start all
npm run dev:backend      → Backend (port 5000)
npm run dev:website      → Website (port 5173)
npm run dev:crm          → CRM (port 3001)
npm run build            → Build all

VERCEL DEPLOYMENT:
CRM:
  Root Directory: apps/crm
  Build: npm run build
  Output: dist
  Install: npm install --legacy-peer-deps

Website:
  Root Directory: apps/website
  Build: npm run build
  Output: dist
  Install: npm install --legacy-peer-deps

RENDER DEPLOYMENT:
Backend:
  Root Directory: apps/backend
  Build: npm install
  Start: npm start

ENVIRONMENT VARIABLES:
Backend (.env):
  MONGODB_URI=your_mongodb_uri
  JWT_SECRET=your_secret
  SMTP_USER=care@pennyanddebt.in
  SMTP_PASS=your_gmail_password
  ALLOWED_ORIGINS=https://pennyanddebt.in,https://crmpennyanddebt.in

CRM (.env):
  VITE_API_BASE_URL=http://localhost:5000/api/v1/crm

Website (.env):
  VITE_API_BASE_URL=http://localhost:5000/api/v1/website

TROUBLESHOOTING:
- npm install fails → npm cache clean --force && npm install
- Port in use → netstat -ano | findstr :5000 && taskkill /PID <PID> /F
- Vercel fails → Check Root Directory is set correctly
- Import errors → Restart dev server

URLS:
Dev:  localhost:5000 (backend), localhost:5173 (website), localhost:3001 (crm)
Prod: api.pennyanddebt.in, pennyanddebt.in, crmpennyanddebt.in
