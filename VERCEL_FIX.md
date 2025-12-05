# Vercel Deployment Fix

## Common Issues & Solutions

### Issue 1: Monorepo Structure
**Problem**: Vercel doesn't know where to build from in a monorepo.

**Solution**: Updated `vercel.json` with correct paths:
```json
{
  "buildCommand": "cd apps/website && npm run build",
  "outputDirectory": "apps/website/dist",
  "installCommand": "cd apps/website && npm install"
}
```

### Issue 2: Environment Variables
**Problem**: Missing `VITE_API_BASE_URL` in Vercel.

**Solution**: Add in Vercel Dashboard → Settings → Environment Variables:
```
VITE_API_BASE_URL=https://api.pennyanddebt.in/api/v1/website
```

### Issue 3: Node Version
**Problem**: Wrong Node.js version.

**Solution**: Vercel uses Node 18+ (already set in `.nvmrc`)

### Issue 4: Build Command Fails
**Problem**: Dependencies not installing correctly.

**Solutions**:
1. Clear Vercel cache: Settings → Clear Cache
2. Redeploy from Vercel Dashboard
3. Check build logs for specific errors

## Vercel Dashboard Setup

### 1. Project Settings
- **Framework Preset**: Vite
- **Root Directory**: Leave empty (we handle it in vercel.json)
- **Build Command**: `cd apps/website && npm run build`
- **Output Directory**: `apps/website/dist`
- **Install Command**: `cd apps/website && npm install`

### 2. Environment Variables
Add these in Vercel Dashboard:
```
VITE_API_BASE_URL=https://api.pennyanddebt.in/api/v1/website
NODE_ENV=production
```

### 3. Domain Settings
- **Production Domain**: pennyanddebt.in
- **Git Branch**: main

## Manual Deployment Steps

### Option 1: Via Vercel CLI
```bash
cd apps/website
npm install -g vercel
vercel --prod
```

### Option 2: Via GitHub
```bash
git add .
git commit -m "fix: Vercel deployment configuration"
git push origin main
```
Vercel will auto-deploy from GitHub.

### Option 3: Via Vercel Dashboard
1. Go to Vercel Dashboard
2. Select your project
3. Click "Deployments"
4. Click "Redeploy" on latest deployment

## Troubleshooting

### Check Build Logs
1. Go to Vercel Dashboard
2. Click on failed deployment
3. Check "Building" logs for errors

### Common Errors

#### Error: "Module not found"
**Fix**: Missing dependency
```bash
cd apps/website
npm install <missing-package>
git add package.json package-lock.json
git commit -m "fix: Add missing dependency"
git push
```

#### Error: "Build exceeded maximum duration"
**Fix**: Optimize build
- Remove unused dependencies
- Check for circular imports
- Reduce bundle size

#### Error: "Command failed with exit code 1"
**Fix**: Check specific error in logs
- Usually a TypeScript error
- Or missing environment variable
- Or import path issue

## Verify Deployment

After successful deployment:
1. Visit: https://pennyanddebt.in
2. Check console for errors (F12)
3. Test all routes
4. Verify API calls work

## Quick Fix Script

Run this if deployment fails:
```bash
cd apps/website
rm -rf node_modules package-lock.json
npm install
npm run build
```

If build succeeds locally, push to GitHub:
```bash
git add .
git commit -m "fix: Rebuild dependencies"
git push origin main
```
