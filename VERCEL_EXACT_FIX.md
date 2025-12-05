# EXACT VERCEL FIX - Copy These Settings

## Project Structure
```
Penny-Debt/                    ← Root (where Vercel clones)
├── apps/
│   └── website/              ← Your React app is HERE
│       ├── package.json      ← Dependencies
│       ├── vite.config.js    ← Vite config
│       ├── index.html
│       └── src/
```

## VERCEL DASHBOARD SETTINGS

### Go To:
https://vercel.com/dashboard → Your Project → Settings → General

### Set EXACTLY:

**Root Directory:**
```
apps/website
```

**Framework Preset:**
```
Vite
```

**Build Command:** (leave default or set)
```
npm run build
```

**Output Directory:** (leave default or set)
```
dist
```

**Install Command:** (leave default or set)
```
npm install
```

**Node.js Version:**
```
18.x
```

### Environment Variables (Settings → Environment Variables):
```
VITE_API_BASE_URL=https://api.pennyanddebt.in/api/v1/website
NODE_ENV=production
```

## SAVE & REDEPLOY

1. Click **Save** at bottom
2. Go to **Deployments** tab
3. Find latest deployment
4. Click **"..."** menu → **Redeploy**
5. In popup, select: **"Use Project Settings"** (NOT "Use Existing Deployment Settings")
6. **UNCHECK** "Use existing Build Cache"
7. Click **Redeploy**

## Expected Build Logs After Fix:

```
✅ Using root directory: apps/website
✅ Running "install" command: npm install
   Installing in apps/website...
✅ Running "build" command: npm run build
   Building from apps/website...
✅ Build completed
✅ Output directory: apps/website/dist
```

## Why This Works:

Setting **Root Directory = apps/website** tells Vercel:
- Clone repo → cd into `apps/website/` → run all commands there
- This makes Vercel see your React app as if it's the root
- No more monorepo confusion

## If Still Shows Old Commit:

The deployment is cached. Force new one:
1. Make ANY small change (add space to README)
2. Commit & push
3. Vercel will auto-deploy with new settings
