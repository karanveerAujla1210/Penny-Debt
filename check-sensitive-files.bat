@echo off
REM ============================================
REM Check for Sensitive Files in Repository
REM ============================================

echo.
echo ========================================
echo Checking for Sensitive Files
echo ========================================
echo.

echo Checking for .env files...
git ls-files | findstr /i "\.env" && echo [FOUND] .env files in git || echo [OK] No .env files tracked

echo.
echo Checking for credential files...
git ls-files | findstr /i "CREDENTIAL" && echo [FOUND] Credential files in git || echo [OK] No credential files tracked
git ls-files | findstr /i "ACCESS\.md" && echo [FOUND] Access files in git || echo [OK] No access files tracked

echo.
echo Checking for keystores...
git ls-files | findstr /i "\.keystore" && echo [FOUND] Keystore files in git || echo [OK] No keystore files tracked
git ls-files | findstr /i "\.jks" && echo [FOUND] JKS files in git || echo [OK] No JKS files tracked

echo.
echo Checking for archives...
git ls-files | findstr /i "\.zip" && echo [FOUND] ZIP files in git || echo [OK] No ZIP files tracked
git ls-files | findstr /i "crm-backend\.zip" && echo [FOUND] crm-backend.zip in git || echo [OK] No crm-backend.zip tracked

echo.
echo Checking for CSV files...
git ls-files | findstr /i "\.csv" && echo [FOUND] CSV files in git || echo [OK] No CSV files tracked
git ls-files | findstr /i "master_loan" && echo [FOUND] master_loan files in git || echo [OK] No master_loan files tracked

echo.
echo Checking for node_modules...
git ls-files | findstr /i "node_modules" && echo [WARNING] node_modules in git || echo [OK] No node_modules tracked

echo.
echo Checking for dist/build folders...
git ls-files | findstr /i "\\dist\\" && echo [WARNING] dist folder in git || echo [OK] No dist folder tracked
git ls-files | findstr /i "\\build\\" && echo [WARNING] build folder in git || echo [OK] No build folder tracked

echo.
echo ========================================
echo Scan Complete
echo ========================================
echo.
echo If any [FOUND] or [WARNING] items appear above,
echo run cleanup-secrets.bat to remove them.
echo.
pause
