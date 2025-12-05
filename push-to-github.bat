@echo off
echo ========================================
echo  Pushing Penny-Debt to GitHub
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed or not in PATH
    pause
    exit /b 1
)

echo [1/5] Checking current branch...
git branch --show-current
echo.

echo [2/5] Adding all changes...
git add .
echo.

echo [3/5] Checking status...
git status
echo.

echo [4/5] Committing changes...
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Update: Push all changes to GitHub

git commit -m "%commit_msg%"
echo.

echo [5/5] Pushing to GitHub...
git push origin main
echo.

if errorlevel 1 (
    echo.
    echo ========================================
    echo  Push FAILED!
    echo ========================================
    echo.
    echo Possible reasons:
    echo - Authentication required
    echo - Network issues
    echo - Branch conflicts
    echo.
    echo Try: git push origin main --force (use with caution!)
    echo.
    pause
    exit /b 1
) else (
    echo.
    echo ========================================
    echo  Successfully pushed to GitHub!
    echo ========================================
    echo.
    echo Repository: https://github.com/karanveerAujla1210/Penny-Debt
    echo.
)

pause
