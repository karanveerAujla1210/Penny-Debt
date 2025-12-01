# 🚀 PENNY-DEBT QUICK FIX GUIDE

## ⚡ EXECUTE IN ORDER

### Step 1: Run PowerShell Fix Script (5 min)
```powershell
# Open PowerShell as Administrator
cd C:\Users\DELL\Desktop\Penny-Debt
.\EXECUTE_FIX.ps1
```

This will:
- Archive old backend and Junk folders
- Rename folders: `backend→crm-backend`, `crm→crm-frontend`, `mobile→mobileApp`
- Remove duplicate model/route folders
- Clean all node_modules
- Install all dependencies

### Step 2: Replace Package.json Files (1 min)
```powershell
# Root package.json
copy /y package.json.FIXED package.json

# Backend package.json (after folders renamed)
copy /y backend-package.json.FIXED apps\crm-backend\package.json

# Mobile package.json (after folders renamed)
copy /y mobile-package.json.FIXED apps\mobileApp\package.json
```

### Step 3: Add SMTP Password (1 min)
```powershell
notepad apps\crm-backend\.env
```
Add:
```env
SMTP_PASS=your_gmail_app_password
```

### Step 4: Start Services (3 terminals)
```powershell
# Terminal 1 - Backend
npm run dev:backend

# Terminal 2 - Website
npm run dev:website

# Terminal 3 - CRM
npm run dev:crm
```

## ✅ VERIFY

- Backend: http://localhost:5000/health
- Website: http://localhost:5173
- CRM: http://localhost:3001

## 📁 FINAL STRUCTURE

```
Penny-Debt/
├── apps/
│   ├── crm-backend/     (was backend)
│   ├── website/         ✅
│   ├── crm-frontend/    (was crm)
│   └── mobileApp/       (was mobile)
├── archived/
│   ├── backend_old/
│   └── crm-backend-sql/
└── package.json         (cleaned)
```

## 🔧 MANUAL ALTERNATIVE

If PowerShell script fails:

```powershell
# 1. Archive
mkdir archived
move backend archived\backend_old
move Junk\crm-backend archived\crm-backend-sql

# 2. Rename
cd apps
ren backend crm-backend
ren crm crm-frontend
ren mobile mobileApp
cd ..

# 3. Clean backend
cd apps\crm-backend
rmdir /s /q models models-website routes routes-website
del /q database\*.sql config\database.js
cd ..\..

# 4. Clean & install
Get-ChildItem -Recurse -Filter "node_modules" | Remove-Item -Recurse -Force
Get-ChildItem -Recurse -Filter "package-lock.json" | Remove-Item -Force

cd apps\crm-backend && npm install && cd ..\..
cd apps\website && npm install && cd ..\..
cd apps\crm-frontend && npm install && cd ..\..
cd apps\mobileApp && npm install && cd ..\..
```

## 🎯 SUCCESS = All 3 services running with no errors
