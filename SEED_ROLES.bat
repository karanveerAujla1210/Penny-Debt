@echo off
echo ========================================
echo Seeding Roles to Database
echo ========================================
echo.

cd apps\crm-backend
node scripts\seedRoles.js

echo.
pause
