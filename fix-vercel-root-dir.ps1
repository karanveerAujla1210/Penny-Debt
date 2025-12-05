# Fix Vercel Root Directory Setting
param(
    [Parameter(Mandatory=$true)]
    [string]$Token
)

$projectId = "prj_ES2OaWPM99CANPSeIayZWMg2nhIC"

$headers = @{
    "Authorization" = "Bearer $Token"
    "Content-Type" = "application/json"
}

Write-Host "Updating Root Directory setting..." -ForegroundColor Yellow

$body = @{
    rootDirectory = "apps/website"
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "https://api.vercel.com/v9/projects/$projectId" -Method PATCH -Headers $headers -Body $body
    
    Write-Host "`n✅ Root Directory updated!" -ForegroundColor Green
    Write-Host "Root Directory: $($response.rootDirectory)" -ForegroundColor Cyan
    
    # Now delete all deployments to force fresh start
    Write-Host "`nFetching deployments to delete..." -ForegroundColor Yellow
    $deployments = Invoke-RestMethod -Uri "https://api.vercel.com/v6/deployments?projectId=$projectId" -Method GET -Headers $headers
    
    foreach ($deployment in $deployments.deployments) {
        Write-Host "Deleting deployment: $($deployment.uid)" -ForegroundColor Gray
        try {
            Invoke-RestMethod -Uri "https://api.vercel.com/v13/deployments/$($deployment.uid)" -Method DELETE -Headers $headers
        } catch {
            # Ignore errors
        }
    }
    
    Write-Host "`n✅ Old deployments deleted!" -ForegroundColor Green
    Write-Host "`nNow push a new commit to trigger fresh deployment" -ForegroundColor Yellow
    
} catch {
    Write-Host "`n❌ Failed" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
}
