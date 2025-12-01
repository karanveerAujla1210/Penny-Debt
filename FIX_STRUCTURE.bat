@echo off
echo ========================================
echo PENNY-DEBT STRUCTURE FIX SCRIPT
echo ========================================
echo.

REM Step 1: Backup Junk folder
echo [1/5] Archiving Junk folder...
if exist Junk (
    if not exist archived mkdir archived
    move Junk archived\Junk_backup_%date:~-4,4%%date:~-10,2%%date:~-7,2%
    echo ✓ Junk folder archived
) else (
    echo ✓ Junk folder already removed
)
echo.

REM Step 2: Remove empty backend folder
echo [2/5] Removing empty backend folder...
if exist backend (
    rmdir /s /q backend
    echo ✓ Empty backend folder removed
) else (
    echo ✓ Backend folder already removed
)
echo.

REM Step 3: Clean up backend duplicates
echo [3/5] Cleaning backend duplicate folders...
cd apps\backend

if exist models (
    rmdir /s /q models
    echo ✓ Removed duplicate models folder
)

if exist models-website (
    rmdir /s /q models-website
    echo ✓ Removed models-website folder
)

if exist routes (
    rmdir /s /q routes
    echo ✓ Removed duplicate routes folder
)

if exist routes-website (
    rmdir /s /q routes-website
    echo ✓ Removed routes-website folder
)

if exist database (
    del /q database\*.sql 2>nul
    echo ✓ Removed old SQL files
)

if exist config\database.js (
    del /q config\database.js
    echo ✓ Removed old database.js
)

cd ..\..
echo.

REM Step 4: Clean up old documentation
echo [4/5] Organizing documentation...
if not exist docs mkdir docs
move /y *_GUIDE.md docs\ 2>nul
move /y *_SUMMARY.md docs\ 2>nul
move /y *_COMPLETE.md docs\ 2>nul
move /y DEPLOYMENT*.md docs\ 2>nul
echo ✓ Documentation organized
echo.

REM Step 5: Summary
echo [5/5] Structure cleanup complete!
echo.
echo ========================================
echo NEXT STEPS:
echo ========================================
echo 1. Run: INSTALL_ALL_DEPS.bat
echo 2. Edit apps\backend\.env and add SMTP_PASS
echo 3. Run: start-all.bat
echo ========================================
pause
