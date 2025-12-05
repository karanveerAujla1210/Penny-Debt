# Force New Deployment from Latest Commit
param(
    [Parameter(Mandatory=$true)]
    [string]$Token
)

$projectId = "prj_ES2OaWPM99CANPSeIayZWMg2nhIC"

$headers = @{
    "Authorization" = "Bearer $Token"
    "Content-Type" = "application/json"
}

Write-Host "Creating new deployment from latest commit..." -ForegroundColor Yellow

$body = @{
    name = "penny-debt"
    gitSource = @{
        type = "github"
        repo = "karanveerAujla1210/Penny-Debt"
        ref = "main"
    }
    target = "production"
    projectSettings = @{
        rootDirectory = "apps/website"
        framework = "vite"
        buildCommand = "npm run build"
        outputDirectory = "dist"
        installCommand = "npm install"
    }
} | ConvertTo-Json -Depth 10

try {
    $response = Invoke-RestMethod -Uri "https://api.vercel.com/v13/deployments" -Method POST -Headers $headers -Body $body
    Write-Host "`n✅ New deployment created!" -ForegroundColor Green
    Write-Host "Deployment ID: $($response.id)" -ForegroundColor Cyan
    Write-Host "URL: https://$($response.url)" -ForegroundColor Cyan
    Write-Host "`nMonitor at: https://vercel.com/karanveeraujla1210/penny-debt/deployments" -ForegroundColor Yellow
} catch {
    Write-Host "`n❌ Failed" -ForegroundColor Red
    $errorDetails = $_.ErrorDetails.Message | ConvertFrom-Json
    Write-Host "Error: $($errorDetails.error.message)" -ForegroundColor Red
}
