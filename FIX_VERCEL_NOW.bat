@echo off
echo FIXING VERCEL DEPLOYMENT ISSUES...

REM Fix CRM
cd frontend\crm
echo Creating fixed vercel.json for CRM...
(
echo {
echo   "buildCommand": "npm run build",
echo   "outputDirectory": "dist",
echo   "installCommand": "npm install --legacy-peer-deps",
echo   "framework": "vite",
echo   "rewrites": [{"source": "/(.*^)", "destination": "/index.html"}]
echo }
) > vercel.json

REM Fix Website
cd ..\website
echo Creating fixed vercel.json for Website...
(
echo {
echo   "buildCommand": "npm run build",
echo   "outputDirectory": "dist",
echo   "installCommand": "npm install --legacy-peer-deps",
echo   "framework": "vite",
echo   "rewrites": [{"source": "/(.*^)", "destination": "/index.html"}]
echo }
) > vercel.json

cd ..\..

REM Delete root vercel.json
del vercel.json 2>nul

echo.
echo FIXED! Now deploy:
echo 1. CRM: Set Root Directory = frontend/crm
echo 2. Website: Set Root Directory = frontend/website
pause
