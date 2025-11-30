@echo off
echo PENNY-DEBT MONOREPO MIGRATION
echo ==============================

REM Create structure
mkdir apps\backend apps\crm apps\website apps\mobile packages\shared 2>nul

REM Move apps
xcopy backend apps\backend /E /I /H /Y /Q
xcopy frontend\crm apps\crm /E /I /H /Y /Q
xcopy frontend\website apps\website /E /I /H /Y /Q
xcopy mobile apps\mobile /E /I /H /Y /Q
xcopy shared packages\shared /E /I /H /Y /Q

REM Update configs
copy /Y NEW_ROOT_package.json package.json
copy /Y NEW_BACKEND_package.json apps\backend\package.json
copy /Y NEW_CRM_package.json apps\crm\package.json
copy /Y NEW_WEBSITE_package.json apps\website\package.json
copy /Y NEW_MOBILE_package.json apps\mobile\package.json
copy /Y NEW_CRM_vercel.json apps\crm\vercel.json
copy /Y NEW_WEBSITE_vercel.json apps\website\vercel.json
copy /Y NEW_BACKEND_render.yaml apps\backend\render.yaml
copy /Y NEW_BACKEND_.env.example apps\backend\.env.example
copy /Y NEW_CRM_.env.example apps\crm\.env.example
copy /Y NEW_WEBSITE_.env.example apps\website\.env.example
copy /Y NEW_.gitignore .gitignore

REM Clean old
rmdir /S /Q backend frontend mobile shared public crm-frontend Deployment-Connections 2>nul
del vercel.json 2>nul

REM Install
call npm install
call npm install --prefix apps/backend
call npm install --prefix apps/crm --legacy-peer-deps
call npm install --prefix apps/website --legacy-peer-deps
call npm install --prefix apps/mobile

REM Setup env
copy apps\backend\.env.example apps\backend\.env
copy apps\crm\.env.example apps\crm\.env
copy apps\website\.env.example apps\website\.env

echo.
echo DONE! Update .env files and run: npm run dev
pause
