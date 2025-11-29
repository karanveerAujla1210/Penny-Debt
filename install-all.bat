@echo off
echo ========================================
echo  Penny-Debt Installation Script v2.0
echo ========================================
echo.

echo [1/4] Installing Backend Dependencies...
cd backend
call npm install
if errorlevel 1 (
    echo ERROR: Backend installation failed!
    pause
    exit /b 1
)
echo ✓ Backend dependencies installed
echo.

echo [2/4] Installing Website Dependencies...
cd ..\frontend\website
call npm install
if errorlevel 1 (
    echo ERROR: Website installation failed!
    pause
    exit /b 1
)
echo ✓ Website dependencies installed
echo.

echo [3/4] Installing CRM Dependencies...
cd ..\crm
call npm install
if errorlevel 1 (
    echo ERROR: CRM installation failed!
    pause
    exit /b 1
)
echo ✓ CRM dependencies installed
echo.

echo [4/4] Verifying Environment Configuration...
cd ..\..\
node scripts\verify-env.js
echo.

echo ========================================
echo  Installation Complete! 🎉
echo ========================================
echo.
echo Next steps:
echo 1. Configure .env files (see INSTALL.md)
echo 2. Run 'start-all.bat' to start all services
echo 3. Visit http://localhost:5173 (Website)
echo 4. Visit http://localhost:3001 (CRM)
echo.
pause
