# Update Vercel Project Configuration
# Usage: .\update-vercel.ps1 YOUR_VERCEL_TOKEN

param(
    [Parameter(Mandatory=$true)]
    [string]$Token
)

$projectId = "prj_ES2OaWPM99CANPSeIayZWMg2nhIC"

$headers = @{
    "Authorization" = "Bearer $Token"
    "Content-Type" = "application/json"
}

$body = @{
    rootDirectory = "apps/website"
    framework = "vite"
    buildCommand = "npm run build"
    outputDirectory = "dist"
    installCommand = "npm install"
} | ConvertTo-Json

Write-Host "Updating Vercel project configuration..." -ForegroundColor Yellow

try {
    $response = Invoke-RestMethod -Uri "https://api.vercel.com/v9/projects/$projectId" -Method PATCH -Headers $headers -Body $body
    
    Write-Host "`n✅ SUCCESS! Vercel project updated" -ForegroundColor Green
    Write-Host "`nConfiguration:" -ForegroundColor Cyan
    Write-Host "  Root Directory: $($response.rootDirectory)" -ForegroundColor White
    Write-Host "  Framework: $($response.framework)" -ForegroundColor White
    Write-Host "`nNext: Go to Vercel Dashboard and redeploy" -ForegroundColor Yellow
    
} catch {
    Write-Host "`n❌ FAILED to update" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "`nPlease update manually in Vercel Dashboard:" -ForegroundColor Yellow
    Write-Host "https://vercel.com/karanveeraujla1210/penny-debt/settings" -ForegroundColor Cyan
}
