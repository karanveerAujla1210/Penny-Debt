# 🖥️ PENNY-DEBT TERMINAL COMMANDS GUIDE

## 🚀 QUICK FIX (Run in Order)

### Step 1: Clean Structure
```cmd
FIX_STRUCTURE.bat
```

### Step 2: Install Dependencies
```cmd
INSTALL_ALL_DEPS.bat
```

### Step 3: Verify Setup
```cmd
VERIFY_SETUP.bat
```

### Step 4: Start All Services
```cmd
start-all.bat
```

---

## 📋 MANUAL COMMANDS (If Batch Files Don't Work)

### PHASE 1: Structure Cleanup

```cmd
REM 1. Archive Junk folder
mkdir archived
move Junk archived\Junk_backup

REM 2. Remove empty backend folder
rmdir /s /q backend

REM 3. Clean backend duplicates
cd apps\backend
rmdir /s /q models
rmdir /s /q models-website
rmdir /s /q routes
rmdir /s /q routes-website
del /q database\*.sql
del /q config\database.js
cd ..\..

REM 4. Organize docs
mkdir docs
move *_GUIDE.md docs\
move *_SUMMARY.md docs\
move DEPLOYMENT*.md docs\
```

---

### PHASE 2: Fix Package.json Files

```cmd
REM 1. Backup current files
copy package.json package.json.backup
copy apps\mobile\package.json apps\mobile\package.json.backup

REM 2. Replace with fixed versions
copy /y package.json.NEW package.json
copy /y apps\mobile\package.json.NEW apps\mobile\package.json

REM 3. Remove backup files
del package.json.NEW
del apps\mobile\package.json.NEW
```

---

### PHASE 3: Install Dependencies

```cmd
REM 1. Clean install root
del /q package-lock.json
rmdir /s /q node_modules
npm install

REM 2. Install backend
cd apps\backend
del /q package-lock.json
rmdir /s /q node_modules
npm install
cd ..\..

REM 3. Install website
cd apps\website
del /q package-lock.json
rmdir /s /q node_modules
npm install
cd ..\..

REM 4. Install CRM
cd apps\crm
del /q package-lock.json
rmdir /s /q node_modules
npm install
cd ..\..

REM 5. Install mobile
cd apps\mobile
del /q package-lock.json
rmdir /s /q node_modules
npm install
cd ..\..
```

---

### PHASE 4: Configure Environment

```cmd
REM 1. Check backend .env
type apps\backend\.env

REM 2. Add SMTP password (edit manually)
notepad apps\backend\.env

REM Add this line:
REM SMTP_PASS=your_gmail_app_password_here

REM 3. Verify all .env files exist
dir /b apps\backend\.env
dir /b apps\website\.env
dir /b apps\crm\.env
```

---

### PHASE 5: Test Setup

```cmd
REM 1. Test MongoDB connection
cd apps\backend
node scripts\mongo-ping.js
cd ..\..

REM 2. Check package versions
npm list --depth=0
cd apps\backend && npm list --depth=0 && cd ..\..
cd apps\website && npm list --depth=0 && cd ..\..
cd apps\crm && npm list --depth=0 && cd ..\..

REM 3. Verify no duplicate dependencies
npm ls nodemailer
npm ls vite
```

---

### PHASE 6: Start Services

#### Option A: All at Once (Recommended)
```cmd
start-all.bat
```

#### Option B: Individual Terminals

**Terminal 1 - Backend:**
```cmd
cd apps\backend
npm run dev
```

**Terminal 2 - Website:**
```cmd
cd apps\website
npm run dev
```

**Terminal 3 - CRM:**
```cmd
cd apps\crm
npm run dev
```

**Terminal 4 - Mobile (Optional):**
```cmd
cd apps\mobile
npm start
```

---

## 🔍 VERIFICATION COMMANDS

### Check Running Services
```cmd
REM Check if ports are in use
netstat -ano | findstr :5000
netstat -ano | findstr :5173
netstat -ano | findstr :3001
```

### Test API Endpoints
```cmd
REM Backend health check
curl http://localhost:5000/health

REM Website API
curl http://localhost:5000/api/v1/website/services

REM CRM API (requires auth)
curl http://localhost:5000/api/v1/crm/dashboard/stats
```

### Check Logs
```cmd
REM Backend logs
cd apps\backend
type logs\error.log
type logs\combined.log

REM Check for errors
findstr /i "error" logs\combined.log
```

---

## 🛠️ TROUBLESHOOTING COMMANDS

### Port Already in Use
```cmd
REM Find process using port 5000
netstat -ano | findstr :5000

REM Kill process (replace PID with actual process ID)
taskkill /PID <PID> /F

REM Or kill all node processes
taskkill /IM node.exe /F
```

### Clear All Node Modules
```cmd
REM Remove all node_modules
for /d /r . %d in (node_modules) do @if exist "%d" rd /s /q "%d"

REM Remove all package-lock.json
del /s /q package-lock.json

REM Reinstall everything
npm install
cd apps\backend && npm install && cd ..\..
cd apps\website && npm install && cd ..\..
cd apps\crm && npm install && cd ..\..
cd apps\mobile && npm install && cd ..\..
```

### MongoDB Connection Issues
```cmd
REM Test MongoDB connection
cd apps\backend
node -e "require('dotenv').config(); const mongoose = require('mongoose'); mongoose.connect(process.env.MONGODB_URI).then(() => { console.log('✓ Connected'); process.exit(0); }).catch(err => { console.error('✗ Failed:', err.message); process.exit(1); });"
cd ..\..
```

### Build Errors
```cmd
REM Clear Vite cache
cd apps\website
rmdir /s /q node_modules\.vite
npm run build
cd ..\..

cd apps\crm
rmdir /s /q node_modules\.vite
npm run build
cd ..\..
```

### Dependency Conflicts
```cmd
REM Check for duplicate dependencies
npm ls nodemailer
npm ls vite
npm ls react

REM Force clean install
npm ci
cd apps\backend && npm ci && cd ..\..
cd apps\website && npm ci && cd ..\..
cd apps\crm && npm ci && cd ..\..
```

---

## 📊 MONITORING COMMANDS

### Check Service Status
```cmd
REM Create status check script
echo @echo off > check-status.bat
echo echo Backend: >> check-status.bat
echo curl -s http://localhost:5000/health ^| findstr "OK" ^&^& echo ✓ Running ^|^| echo ✗ Down >> check-status.bat
echo echo Website: >> check-status.bat
echo curl -s http://localhost:5173 ^>nul 2^>^&1 ^&^& echo ✓ Running ^|^| echo ✗ Down >> check-status.bat
echo echo CRM: >> check-status.bat
echo curl -s http://localhost:3001 ^>nul 2^>^&1 ^&^& echo ✓ Running ^|^| echo ✗ Down >> check-status.bat

REM Run status check
check-status.bat
```

### Watch Logs in Real-time
```cmd
REM Backend logs (PowerShell)
powershell -command "Get-Content apps\backend\logs\combined.log -Wait -Tail 50"

REM Or use tail for Windows (if installed)
tail -f apps\backend\logs\combined.log
```

---

## 🚀 DEPLOYMENT COMMANDS

### Build for Production
```cmd
REM Build website
cd apps\website
npm run build
cd ..\..

REM Build CRM
cd apps\crm
npm run build
cd ..\..

REM Test production builds
cd apps\website
npm run preview
cd ..\..

cd apps\crm
npm run preview
cd ..\..
```

### Deploy to Vercel
```cmd
REM Install Vercel CLI
npm install -g vercel

REM Deploy website
cd apps\website
vercel --prod
cd ..\..

REM Deploy CRM
cd apps\crm
vercel --prod
cd ..\..
```

### Deploy Backend to Render
```cmd
REM Commit and push to trigger deployment
git add .
git commit -m "Deploy backend"
git push origin main
```

---

## 📝 MAINTENANCE COMMANDS

### Update Dependencies
```cmd
REM Check outdated packages
npm outdated
cd apps\backend && npm outdated && cd ..\..
cd apps\website && npm outdated && cd ..\..
cd apps\crm && npm outdated && cd ..\..

REM Update all packages
npm update
cd apps\backend && npm update && cd ..\..
cd apps\website && npm update && cd ..\..
cd apps\crm && npm update && cd ..\..
```

### Security Audit
```cmd
REM Run security audit
npm audit
cd apps\backend && npm audit && cd ..\..
cd apps\website && npm audit && cd ..\..
cd apps\crm && npm audit && cd ..\..

REM Fix vulnerabilities
npm audit fix
cd apps\backend && npm audit fix && cd ..\..
cd apps\website && npm audit fix && cd ..\..
cd apps\crm && npm audit fix && cd ..\..
```

### Clean Build Artifacts
```cmd
REM Remove all build folders
rmdir /s /q apps\website\dist
rmdir /s /q apps\crm\dist
rmdir /s /q apps\backend\uploads

REM Remove all cache
rmdir /s /q .cache
rmdir /s /q apps\website\node_modules\.vite
rmdir /s /q apps\crm\node_modules\.vite
```

---

## 🎯 QUICK REFERENCE

### Start Development
```cmd
start-all.bat
```

### Stop All Services
```cmd
taskkill /IM node.exe /F
```

### Restart Backend Only
```cmd
cd apps\backend
npm run dev
```

### Rebuild Frontend
```cmd
cd apps\website
npm run build
cd ..\..

cd apps\crm
npm run build
cd ..\..
```

### Check Everything
```cmd
VERIFY_SETUP.bat
```

---

## 📞 SUPPORT COMMANDS

### Generate System Report
```cmd
echo System Report > system-report.txt
echo ============== >> system-report.txt
echo Node Version: >> system-report.txt
node --version >> system-report.txt
echo NPM Version: >> system-report.txt
npm --version >> system-report.txt
echo. >> system-report.txt
echo Installed Packages: >> system-report.txt
npm list --depth=0 >> system-report.txt
echo. >> system-report.txt
echo Backend Packages: >> system-report.txt
cd apps\backend && npm list --depth=0 >> ..\..\system-report.txt && cd ..\..
echo. >> system-report.txt
echo Environment Check: >> system-report.txt
dir /b apps\backend\.env >> system-report.txt
dir /b apps\website\.env >> system-report.txt
dir /b apps\crm\.env >> system-report.txt

type system-report.txt
```

---

**Last Updated**: 2024
**Version**: 2.0.0
**Status**: Production Ready
