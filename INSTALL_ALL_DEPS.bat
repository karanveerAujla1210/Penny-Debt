@echo off
echo ========================================
echo PENNY-DEBT DEPENDENCY INSTALLATION
echo ========================================
echo.

REM Step 1: Install root dependencies
echo [1/5] Installing root workspace dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Root installation failed
    pause
    exit /b 1
)
echo ✓ Root dependencies installed
echo.

REM Step 2: Install backend dependencies
echo [2/5] Installing backend dependencies...
cd apps\backend
call npm install
if %errorlevel% neq 0 (
    echo ❌ Backend installation failed
    cd ..\..
    pause
    exit /b 1
)
cd ..\..
echo ✓ Backend dependencies installed
echo.

REM Step 3: Install website dependencies
echo [3/5] Installing website dependencies...
cd apps\website
call npm install
if %errorlevel% neq 0 (
    echo ❌ Website installation failed
    cd ..\..
    pause
    exit /b 1
)
cd ..\..
echo ✓ Website dependencies installed
echo.

REM Step 4: Install CRM dependencies
echo [4/5] Installing CRM dependencies...
cd apps\crm
call npm install
if %errorlevel% neq 0 (
    echo ❌ CRM installation failed
    cd ..\..
    pause
    exit /b 1
)
cd ..\..
echo ✓ CRM dependencies installed
echo.

REM Step 5: Install mobile dependencies
echo [5/5] Installing mobile dependencies...
cd apps\mobile
call npm install
if %errorlevel% neq 0 (
    echo ❌ Mobile installation failed
    cd ..\..
    pause
    exit /b 1
)
cd ..\..
echo ✓ Mobile dependencies installed
echo.

echo ========================================
echo ✅ ALL DEPENDENCIES INSTALLED
echo ========================================
echo.
echo NEXT STEPS:
echo 1. Edit apps\backend\.env and add SMTP_PASS
echo 2. Run: VERIFY_SETUP.bat
echo 3. Run: start-all.bat
echo.
pause
