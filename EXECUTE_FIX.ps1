# Penny-Debt Complete Fix Script
# Run this in PowerShell as Administrator

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "PENNY-DEBT STRUCTURE FIX" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Set-Location "C:\Users\DELL\Desktop\Penny-Debt"

# Step 1: Archive old folders
Write-Host "[1/6] Archiving old folders..." -ForegroundColor Yellow
if (!(Test-Path ".\archived")) { New-Item -ItemType Directory -Path ".\archived" | Out-Null }

if (Test-Path ".\backend") {
    Move-Item ".\backend" ".\archived\backend_old" -Force
    Write-Host "✓ Moved root backend folder" -ForegroundColor Green
}

if (Test-Path ".\Junk\crm-backend") {
    if (!(Test-Path ".\archived\Junk")) { New-Item -ItemType Directory -Path ".\archived\Junk" | Out-Null }
    Move-Item ".\Junk\crm-backend" ".\archived\crm-backend-sql" -Force
    Write-Host "✓ Archived old SQL backend" -ForegroundColor Green
}

# Step 2: Normalize folder names
Write-Host ""
Write-Host "[2/6] Normalizing folder names..." -ForegroundColor Yellow

if (Test-Path ".\apps\backend" -and -not (Test-Path ".\apps\crm-backend")) {
    Rename-Item ".\apps\backend" "crm-backend"
    Write-Host "✓ Renamed backend to crm-backend" -ForegroundColor Green
}

if (Test-Path ".\apps\crm" -and -not (Test-Path ".\apps\crm-frontend")) {
    Rename-Item ".\apps\crm" "crm-frontend"
    Write-Host "✓ Renamed crm to crm-frontend" -ForegroundColor Green
}

if (Test-Path ".\apps\mobile" -and -not (Test-Path ".\apps\mobileApp")) {
    Rename-Item ".\apps\mobile" "mobileApp"
    Write-Host "✓ Renamed mobile to mobileApp" -ForegroundColor Green
}

# Step 3: Clean backend duplicates
Write-Host ""
Write-Host "[3/6] Cleaning backend duplicates..." -ForegroundColor Yellow
Set-Location ".\apps\crm-backend"

if (Test-Path ".\models") { Remove-Item ".\models" -Recurse -Force; Write-Host "✓ Removed duplicate models/" -ForegroundColor Green }
if (Test-Path ".\models-website") { Remove-Item ".\models-website" -Recurse -Force; Write-Host "✓ Removed models-website/" -ForegroundColor Green }
if (Test-Path ".\routes") { Remove-Item ".\routes" -Recurse -Force; Write-Host "✓ Removed duplicate routes/" -ForegroundColor Green }
if (Test-Path ".\routes-website") { Remove-Item ".\routes-website" -Recurse -Force; Write-Host "✓ Removed routes-website/" -ForegroundColor Green }
if (Test-Path ".\database\*.sql") { Remove-Item ".\database\*.sql" -Force; Write-Host "✓ Removed SQL files" -ForegroundColor Green }
if (Test-Path ".\config\database.js") { Remove-Item ".\config\database.js" -Force; Write-Host "✓ Removed old database.js" -ForegroundColor Green }

Set-Location "..\..\.."

# Step 4: Clean all node_modules
Write-Host ""
Write-Host "[4/6] Cleaning all node_modules..." -ForegroundColor Yellow
Get-ChildItem -Recurse -Filter "node_modules" -ErrorAction SilentlyContinue | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
Get-ChildItem -Recurse -Filter "package-lock.json" -ErrorAction SilentlyContinue | Remove-Item -Force -ErrorAction SilentlyContinue
Write-Host "✓ Cleaned all node_modules and lockfiles" -ForegroundColor Green

# Step 5: Install dependencies
Write-Host ""
Write-Host "[5/6] Installing dependencies..." -ForegroundColor Yellow

Write-Host "  Installing backend..." -ForegroundColor Gray
Set-Location ".\apps\crm-backend"
npm install --silent
Set-Location "..\..\.."

Write-Host "  Installing website..." -ForegroundColor Gray
Set-Location ".\apps\website"
npm install --silent
Set-Location "..\..\.."

Write-Host "  Installing CRM frontend..." -ForegroundColor Gray
Set-Location ".\apps\crm-frontend"
npm install --silent
Set-Location "..\..\.."

Write-Host "  Installing mobile app..." -ForegroundColor Gray
Set-Location ".\apps\mobileApp"
npm install --silent
Set-Location "..\..\.."

Write-Host "✓ All dependencies installed" -ForegroundColor Green

# Step 6: Summary
Write-Host ""
Write-Host "[6/6] Fix complete!" -ForegroundColor Green
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "NEXT STEPS:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "1. Edit apps\crm-backend\.env and add SMTP_PASS" -ForegroundColor White
Write-Host "2. Run: npm run dev:backend" -ForegroundColor White
Write-Host "3. Run: npm run dev:website" -ForegroundColor White
Write-Host "4. Run: npm run dev:crm" -ForegroundColor White
Write-Host ""
