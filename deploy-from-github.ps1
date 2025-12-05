# Deploy from GitHub with Hook
param(
    [Parameter(Mandatory=$true)]
    [string]$Token
)

$projectId = "prj_ES2OaWPM99CANPSeIayZWMg2nhIC"

$headers = @{
    "Authorization" = "Bearer $Token"
    "Content-Type" = "application/json"
}

# Trigger deployment via hook
Write-Host "Triggering deployment via GitHub hook..." -ForegroundColor Yellow

$hookUrl = "https://api.vercel.com/v1/integrations/deploy/$projectId/main"

try {
    $response = Invoke-WebRequest -Uri $hookUrl -Method POST -Headers $headers
    Write-Host "`n✅ Deployment triggered!" -ForegroundColor Green
    Write-Host "Check: https://vercel.com/karanveeraujla1210/penny-debt/deployments" -ForegroundColor Cyan
} catch {
    Write-Host "`n❌ Failed" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
}
