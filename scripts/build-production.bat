@echo off
echo 🚀 Building Penny Debt for Production...

echo.
echo 📦 Installing dependencies...
call npm run install:all

echo.
echo 🏗️ Building Website...
cd apps\website
call npm run build
cd ..\..

echo.
echo 🏗️ Building CRM...
cd apps\crm-frontend
call npm run build
cd ..\..

echo.
echo ✅ Production build complete!
echo 📁 Website: apps\website\dist
echo 📁 CRM: apps\crm-frontend\dist