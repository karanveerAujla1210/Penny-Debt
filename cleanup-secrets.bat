@echo off
REM ============================================
REM Penny Debt CRM - Security Cleanup Script
REM ============================================
REM WARNING: This script removes sensitive files from git
REM Make sure you have backups before running!
REM ============================================

echo.
echo ========================================
echo Penny Debt CRM - Security Cleanup
echo ========================================
echo.
echo WARNING: This will remove sensitive files from git tracking
echo Make sure you have created backups first!
echo.
pause

REM Check if we're in a git repository
git rev-parse --git-dir >nul 2>&1
if errorlevel 1 (
    echo ERROR: Not a git repository!
    pause
    exit /b 1
)

echo.
echo Step 1: Creating backup directory...
set BACKUP_DIR=%USERPROFILE%\penny-backups\%date:~-4,4%-%date:~-10,2%-%date:~-7,2%
if not exist "%BACKUP_DIR%" mkdir "%BACKUP_DIR%"
echo Backup directory: %BACKUP_DIR%

echo.
echo Step 2: Backing up sensitive files...
if exist .env copy .env "%BACKUP_DIR%\root.env"
if exist backend\.env copy backend\.env "%BACKUP_DIR%\backend.env"
if exist crm-backend\.env copy crm-backend\.env "%BACKUP_DIR%\crm-backend.env"
if exist crm-frontend\.env copy crm-frontend\.env "%BACKUP_DIR%\crm-frontend.env"
if exist EMPLOYEE_CREDENTIALS.md copy EMPLOYEE_CREDENTIALS.md "%BACKUP_DIR%\"
if exist ADMIN_ACCESS.md copy ADMIN_ACCESS.md "%BACKUP_DIR%\"
if exist crm-backend.zip copy crm-backend.zip "%BACKUP_DIR%\"
if exist crm-backend\master_loan.csv.zip copy crm-backend\master_loan.csv.zip "%BACKUP_DIR%\"
if exist crm-backend\master_loan.csv.csv copy crm-backend\master_loan.csv.csv "%BACKUP_DIR%\"
if exist mobileApp\android\app\debug.keystore copy mobileApp\android\app\debug.keystore "%BACKUP_DIR%\"
echo Backup complete!

echo.
echo Step 3: Removing files from git tracking...
git rm --cached .env 2>nul
git rm --cached backend\.env 2>nul
git rm --cached crm-backend\.env 2>nul
git rm --cached crm-frontend\.env 2>nul
git rm --cached EMPLOYEE_CREDENTIALS.md 2>nul
git rm --cached ADMIN_ACCESS.md 2>nul
git rm --cached crm-backend.zip 2>nul
git rm --cached crm-backend\master_loan.csv.zip 2>nul
git rm --cached crm-backend\master_loan.csv.csv 2>nul
git rm --cached mobileApp\android\app\debug.keystore 2>nul
echo Files removed from git tracking!

echo.
echo Step 4: Staging .gitignore...
git add .gitignore
echo .gitignore staged!

echo.
echo Step 5: Creating commit...
git commit -m "security: Remove sensitive files and update .gitignore"
echo Commit created!

echo.
echo ========================================
echo Cleanup Complete!
echo ========================================
echo.
echo Backups saved to: %BACKUP_DIR%
echo.
echo NEXT STEPS:
echo 1. Review the changes: git status
echo 2. Push to remote: git push origin main
echo 3. Rotate ALL secrets (MongoDB, JWT, SMTP, keystores)
echo 4. Update environment variables in Railway and Vercel
echo 5. Consider purging git history with BFG Repo Cleaner
echo.
echo See SECURITY_CLEANUP.md for detailed instructions
echo.
pause
