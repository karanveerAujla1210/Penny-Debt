# Trigger New Vercel Deployment
param(
    [Parameter(Mandatory=$true)]
    [string]$Token
)

$projectId = "prj_ES2OaWPM99CANPSeIayZWMg2nhIC"

$headers = @{
    "Authorization" = "Bearer $Token"
    "Content-Type" = "application/json"
}

# Get latest deployment
Write-Host "Fetching latest deployment..." -ForegroundColor Yellow
$deploymentsUrl = "https://api.vercel.com/v6/deployments?projectId=$projectId&limit=1"
$latestDeployment = Invoke-RestMethod -Uri $deploymentsUrl -Method GET -Headers $headers

$deploymentId = $latestDeployment.deployments[0].uid

Write-Host "Latest deployment: $deploymentId" -ForegroundColor Cyan

# Trigger redeploy
Write-Host "`nTriggering redeploy with new configuration..." -ForegroundColor Yellow

$redeployUrl = "https://api.vercel.com/v13/deployments"
$body = @{
    deploymentId = $deploymentId
    name = "penny-debt"
    target = "production"
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri $redeployUrl -Method POST -Headers $headers -Body $body
    Write-Host "`n✅ Deployment triggered!" -ForegroundColor Green
    Write-Host "Deployment URL: $($response.url)" -ForegroundColor Cyan
    Write-Host "`nCheck status at: https://vercel.com/karanveeraujla1210/penny-debt/deployments" -ForegroundColor Yellow
} catch {
    Write-Host "`n❌ Failed to trigger deployment" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "`nManually redeploy from: https://vercel.com/karanveeraujla1210/penny-debt/deployments" -ForegroundColor Yellow
}
