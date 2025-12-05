@echo off
echo ========================================
echo   PENNY-DEBT LOCAL DEVELOPMENT
echo ========================================
echo.

echo Starting Backend Server...
cd apps\crm-backend
start cmd /k "npm run dev"
timeout /t 3 /nobreak >nul

echo.
echo Starting Website Frontend...
cd ..\website
start cmd /k "npm run dev"
timeout /t 2 /nobreak >nul

echo.
echo Starting CRM Frontend...
cd ..\crm-frontend
start cmd /k "npm run dev"

echo.
echo ========================================
echo   ALL SERVERS STARTED
echo ========================================
echo.
echo Backend:  http://localhost:5000
echo Website:  http://localhost:5173
echo CRM:      http://localhost:3001
echo.
echo Press any key to close this window...
pause >nul
