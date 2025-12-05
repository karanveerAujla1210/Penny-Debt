# Vercel API Configuration Guide

## Your Project ID
```
prj_ES2OaWPM99CANPSeIayZWMg2nhIC
```

## Option 1: Manual Dashboard (Easiest)

1. Go to: https://vercel.com/karanveeraujla1210/penny-debt/settings
2. Scroll to **Root Directory**
3. Enter: `apps/website`
4. Click **Save**
5. Go to Deployments → Redeploy

## Option 2: Using Vercel CLI

### Install Vercel CLI:
```bash
npm install -g vercel
```

### Login:
```bash
vercel login
```

### Link Project:
```bash
cd apps/website
vercel link
```

### Set Root Directory:
```bash
vercel project set rootDirectory apps/website
```

### Deploy:
```bash
vercel --prod
```

## Option 3: Using API Script

### Get Vercel Token:
1. Go to: https://vercel.com/account/tokens
2. Create new token
3. Copy token

### Run Script:
```bash
# Set token
set VERCEL_TOKEN=your_token_here

# Run script
node update-vercel-config.js
```

## Option 4: Direct API Call (PowerShell)

```powershell
$token = "YOUR_VERCEL_TOKEN"
$projectId = "prj_ES2OaWPM99CANPSeIayZWMg2nhIC"

$headers = @{
    "Authorization" = "Bearer $token"
    "Content-Type" = "application/json"
}

$body = @{
    rootDirectory = "apps/website"
    framework = "vite"
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://api.vercel.com/v9/projects/$projectId" -Method PATCH -Headers $headers -Body $body
```

## Verify Configuration

After setting, check:
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://api.vercel.com/v9/projects/prj_ES2OaWPM99CANPSeIayZWMg2nhIC
```

Look for:
```json
{
  "rootDirectory": "apps/website",
  "framework": "vite"
}
```

## Quick Links

- **Project Settings**: https://vercel.com/karanveeraujla1210/penny-debt/settings
- **Deployments**: https://vercel.com/karanveeraujla1210/penny-debt/deployments
- **API Tokens**: https://vercel.com/account/tokens
- **Vercel Docs**: https://vercel.com/docs/rest-api

## Expected Result

After configuration, new deployments will show:
```
✅ Using root directory: apps/website
✅ Installing dependencies in apps/website
✅ Building from apps/website
✅ Deployment successful
```
