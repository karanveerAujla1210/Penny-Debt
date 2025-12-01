@echo off
echo ========================================
echo PENNY-DEBT SETUP VERIFICATION
echo ========================================
echo.

set ERRORS=0

REM Check 1: Backend node_modules
echo [1/8] Checking backend dependencies...
if exist apps\backend\node_modules (
    echo ✓ Backend node_modules exists
) else (
    echo ❌ Backend node_modules missing
    set /a ERRORS+=1
)
echo.

REM Check 2: Website node_modules
echo [2/8] Checking website dependencies...
if exist apps\website\node_modules (
    echo ✓ Website node_modules exists
) else (
    echo ❌ Website node_modules missing
    set /a ERRORS+=1
)
echo.

REM Check 3: CRM node_modules
echo [3/8] Checking CRM dependencies...
if exist apps\crm\node_modules (
    echo ✓ CRM node_modules exists
) else (
    echo ❌ CRM node_modules missing
    set /a ERRORS+=1
)
echo.

REM Check 4: Mobile node_modules
echo [4/8] Checking mobile dependencies...
if exist apps\mobile\node_modules (
    echo ✓ Mobile node_modules exists
) else (
    echo ❌ Mobile node_modules missing
    set /a ERRORS+=1
)
echo.

REM Check 5: Backend .env
echo [5/8] Checking backend environment...
if exist apps\backend\.env (
    echo ✓ Backend .env exists
    findstr /C:"MONGODB_URI" apps\backend\.env >nul
    if %errorlevel% equ 0 (
        echo ✓ MONGODB_URI configured
    ) else (
        echo ❌ MONGODB_URI missing
        set /a ERRORS+=1
    )
    findstr /C:"JWT_SECRET" apps\backend\.env >nul
    if %errorlevel% equ 0 (
        echo ✓ JWT_SECRET configured
    ) else (
        echo ❌ JWT_SECRET missing
        set /a ERRORS+=1
    )
    findstr /C:"SMTP_PASS=" apps\backend\.env | findstr /V /C:"SMTP_PASS=$" >nul
    if %errorlevel% equ 0 (
        echo ✓ SMTP_PASS configured
    ) else (
        echo ⚠️  SMTP_PASS empty (emails won't work)
    )
) else (
    echo ❌ Backend .env missing
    set /a ERRORS+=1
)
echo.

REM Check 6: Website .env
echo [6/8] Checking website environment...
if exist apps\website\.env (
    echo ✓ Website .env exists
    findstr /C:"VITE_API_BASE_URL" apps\website\.env >nul
    if %errorlevel% equ 0 (
        echo ✓ VITE_API_BASE_URL configured
    ) else (
        echo ❌ VITE_API_BASE_URL missing
        set /a ERRORS+=1
    )
) else (
    echo ❌ Website .env missing
    set /a ERRORS+=1
)
echo.

REM Check 7: CRM .env
echo [7/8] Checking CRM environment...
if exist apps\crm\.env (
    echo ✓ CRM .env exists
    findstr /C:"VITE_API_BASE_URL" apps\crm\.env >nul
    if %errorlevel% equ 0 (
        echo ✓ VITE_API_BASE_URL configured
    ) else (
        echo ❌ VITE_API_BASE_URL missing
        set /a ERRORS+=1
    )
) else (
    echo ❌ CRM .env missing
    set /a ERRORS+=1
)
echo.

REM Check 8: Structure cleanup
echo [8/8] Checking structure cleanup...
if not exist backend (
    echo ✓ Empty backend folder removed
) else (
    echo ⚠️  Empty backend folder still exists
)
if not exist Junk (
    echo ✓ Junk folder archived
) else (
    echo ⚠️  Junk folder still exists
)
if not exist apps\backend\models (
    echo ✓ Duplicate models folder removed
) else (
    echo ⚠️  Duplicate models folder exists
)
if not exist apps\backend\routes (
    echo ✓ Duplicate routes folder removed
) else (
    echo ⚠️  Duplicate routes folder exists
)
echo.

REM Summary
echo ========================================
if %ERRORS% equ 0 (
    echo ✅ SETUP VERIFICATION PASSED
    echo ========================================
    echo.
    echo Ready to start! Run: start-all.bat
) else (
    echo ❌ SETUP VERIFICATION FAILED
    echo ========================================
    echo.
    echo Found %ERRORS% critical error(s)
    echo Please fix the issues above before starting
)
echo.
pause
