# Check Vercel Project Configuration
param(
    [Parameter(Mandatory=$true)]
    [string]$Token
)

$projectId = "prj_ES2OaWPM99CANPSeIayZWMg2nhIC"

$headers = @{
    "Authorization" = "Bearer $Token"
}

Write-Host "Fetching Vercel project configuration..." -ForegroundColor Yellow

try {
    $response = Invoke-RestMethod -Uri "https://api.vercel.com/v9/projects/$projectId" -Method GET -Headers $headers
    
    Write-Host "`n✅ Current Configuration:" -ForegroundColor Green
    Write-Host "  Name: $($response.name)" -ForegroundColor White
    Write-Host "  Root Directory: $($response.rootDirectory)" -ForegroundColor Cyan
    Write-Host "  Framework: $($response.framework)" -ForegroundColor Cyan
    Write-Host "  Build Command: $($response.buildCommand)" -ForegroundColor White
    Write-Host "  Output Directory: $($response.outputDirectory)" -ForegroundColor White
    Write-Host "  Install Command: $($response.installCommand)" -ForegroundColor White
    
} catch {
    Write-Host "`n❌ FAILED to fetch config" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
}
