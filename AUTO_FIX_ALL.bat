@echo off
echo ========================================
echo AUTO-FIXING ENTIRE MONOREPO
echo ========================================

REM 1. Delete old junk
echo [1/8] Cleaning junk folders...
rmdir /S /Q backend 2>nul
rmdir /S /Q Junk 2>nul
rmdir /S /Q archived 2>nul

REM 2. Delete all node_modules and locks
echo [2/8] Removing all node_modules...
for /d /r . %%d in (node_modules) do @if exist "%%d" rmdir /s /q "%%d" 2>nul
del /S /Q package-lock.json 2>nul
del /S /Q apps\crm-backend\package-lock.json 2>nul
del /S /Q apps\crm-frontend\package-lock.json 2>nul
del /S /Q apps\website\package-lock.json 2>nul
del /S /Q apps\mobileApp\package-lock.json 2>nul

REM 3. Create root package.json
echo [3/8] Creating root package.json...
(
echo {
echo   "name": "penny-debt-monorepo",
echo   "version": "2.0.0",
echo   "private": true,
echo   "workspaces": ["apps/*", "packages/*"],
echo   "scripts": {
echo     "dev:backend": "npm --prefix apps/crm-backend run dev",
echo     "dev:crm": "npm --prefix apps/crm-frontend run dev",
echo     "dev:website": "npm --prefix apps/website run dev",
echo     "build:backend": "echo 'No build for backend'",
echo     "build:crm": "npm --prefix apps/crm-frontend run build",
echo     "build:website": "npm --prefix apps/website run build"
echo   },
echo   "engines": {
echo     "node": "^%=18.0.0"
echo   }
echo }
) > package.json

REM 4. Fix backend package.json
echo [4/8] Fixing backend package.json...
(
echo {
echo   "name": "@penny-debt/backend",
echo   "version": "2.0.0",
echo   "main": "server.js",
echo   "scripts": {
echo     "start": "node server.js",
echo     "dev": "nodemon server.js"
echo   },
echo   "dependencies": {
echo     "express": "^4.18.2",
echo     "mongoose": "^8.0.0",
echo     "dotenv": "^16.3.1",
echo     "bcryptjs": "^2.4.3",
echo     "jsonwebtoken": "^9.0.2",
echo     "cors": "^2.8.5",
echo     "helmet": "^7.1.0",
echo     "express-rate-limit": "^7.1.5",
echo     "nodemailer": "^6.9.7",
echo     "multer": "^1.4.5-lts.1"
echo   },
echo   "devDependencies": {
echo     "nodemon": "^3.0.1"
echo   }
echo }
) > apps\crm-backend\package.json

REM 5. Fix CRM package.json
echo [5/8] Fixing CRM package.json...
(
echo {
echo   "name": "@penny-debt/crm",
echo   "version": "2.0.0",
echo   "private": true,
echo   "type": "module",
echo   "scripts": {
echo     "dev": "vite --port 3001",
echo     "build": "vite build",
echo     "preview": "vite preview"
echo   },
echo   "dependencies": {
echo     "react": "^18.3.1",
echo     "react-dom": "^18.3.1",
echo     "react-router-dom": "^6.22.0",
echo     "axios": "^1.6.7",
echo     "framer-motion": "^11.0.7",
echo     "zustand": "^4.5.0"
echo   },
echo   "devDependencies": {
echo     "vite": "^5.1.2",
echo     "@vitejs/plugin-react": "^4.2.0",
echo     "tailwindcss": "^3.4.1",
echo     "postcss": "^8.4.33",
echo     "autoprefixer": "^10.4.17"
echo   }
echo }
) > apps\crm-frontend\package.json

REM 6. Fix Website package.json
echo [6/8] Fixing website package.json...
(
echo {
echo   "name": "@penny-debt/website",
echo   "version": "2.0.0",
echo   "private": true,
echo   "type": "module",
echo   "scripts": {
echo     "dev": "vite --port 5173",
echo     "build": "vite build",
echo     "preview": "vite preview"
echo   },
echo   "dependencies": {
echo     "react": "^18.3.1",
echo     "react-dom": "^18.3.1",
echo     "react-router-dom": "^6.22.0",
echo     "axios": "^1.6.7",
echo     "framer-motion": "^11.0.7",
echo     "gsap": "^3.12.2"
echo   },
echo   "devDependencies": {
echo     "vite": "^5.1.2",
echo     "@vitejs/plugin-react": "^4.2.0",
echo     "tailwindcss": "^3.4.1",
echo     "postcss": "^8.4.33",
echo     "autoprefixer": "^10.4.17"
echo   }
echo }
) > apps\website\package.json

REM 7. Install all
echo [7/8] Installing dependencies...
call npm install --legacy-peer-deps

REM 8. Build test
echo [8/8] Testing builds...
call npm run build:crm
call npm run build:website

echo.
echo ========================================
echo DONE! Structure fixed and ready.
echo ========================================
echo.
echo Start dev: npm run dev:backend ^& npm run dev:crm ^& npm run dev:website
pause
