@echo off
echo 🔧 PENNY DEBT - AUTOMATED INSTALLATION & SETUP
echo ================================================

echo.
echo 📦 Step 1: Installing root dependencies...
call npm install --legacy-peer-deps

echo.
echo 🔧 Step 2: Installing backend dependencies...
cd apps\crm-backend
call npm install --legacy-peer-deps
cd ..\..

echo.
echo 🎨 Step 3: Installing website dependencies...
cd apps\website
call npm install --legacy-peer-deps
cd ..\..

echo.
echo 💼 Step 4: Installing CRM dependencies...
cd apps\crm-frontend
call npm install --legacy-peer-deps
cd ..\..

echo.
echo 📱 Step 5: Installing mobile app dependencies...
cd apps\mobileApp
call npm install --legacy-peer-deps
cd ..\..

echo.
echo ✅ INSTALLATION COMPLETE!
echo.
echo 🚀 To start development:
echo    npm run dev          (All services)
echo    npm run dev:backend  (Backend only)
echo    npm run dev:website  (Website only)
echo    npm run dev:crm      (CRM only)
echo.
echo 🏗️ To build for production:
echo    npm run build        (Website)
echo    npm run build:all    (All frontends)
echo.
pause