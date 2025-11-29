@echo off
echo ========================================
echo  Starting Penny-Debt Services
echo ========================================
echo.

echo Starting Backend (Port 5000)...
start "Penny-Debt Backend" cmd /k "cd backend && npm run dev"
timeout /t 3 /nobreak >nul

echo Starting Website (Port 5173)...
start "Penny-Debt Website" cmd /k "cd frontend\website && npm run dev"
timeout /t 3 /nobreak >nul

echo Starting CRM (Port 3001)...
start "Penny-Debt CRM" cmd /k "cd frontend\crm && npm run dev"
timeout /t 3 /nobreak >nul

echo.
echo ========================================
echo  All Services Started! 🚀
echo ========================================
echo.
echo Services running:
echo - Backend:  http://localhost:5000
echo - Website:  http://localhost:5173
echo - CRM:      http://localhost:3001
echo.
echo Press any key to open services in browser...
pause >nul

start http://localhost:5000/health
timeout /t 2 /nobreak >nul
start http://localhost:5173
timeout /t 2 /nobreak >nul
start http://localhost:3001
