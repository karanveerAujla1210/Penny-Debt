@echo off
echo ========================================
echo Installing Missing UI Libraries
echo ========================================
echo.

cd /d "%~dp0"

echo [1/4] Installing Radix UI components...
call npm install @radix-ui/react-accordion @radix-ui/react-label @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tabs @radix-ui/react-tooltip @radix-ui/react-select

echo.
echo [2/4] Installing utility libraries...
call npm install class-variance-authority tailwind-merge @hookform/resolvers

echo.
echo [3/4] Installing animation libraries...
call npm install gsap lottie-react

echo.
echo [4/4] Installing state management...
call npm install zustand

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Update tailwind.config.js with ShadCN theme
echo 2. Replace old pages with enhanced versions
echo 3. Test all forms and components
echo.
pause
