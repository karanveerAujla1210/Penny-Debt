@echo off
echo ========================================
echo Testing Database Connection
echo ========================================
echo.

cd apps\crm-backend
node scripts\testConnection.js

echo.
pause
