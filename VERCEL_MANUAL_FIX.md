# Vercel Manual Configuration Fix

## The Issue
Vercel is deploying old commit (d486df7) instead of latest (b442cba) with the fix.

## Quick Fix - Update Vercel Project Settings

### Go to Vercel Dashboard:
1. Visit: https://vercel.com/dashboard
2. Select your project: **Penny-Debt** or **pennyanddebt**
3. Go to: **Settings** → **General**

### Update These Settings:

#### Root Directory
- Leave **EMPTY** or set to: `.`

#### Build & Development Settings

**Framework Preset**: `Vite`

**Build Command** (Override):
```bash
npm run build --prefix apps/website
```

**Output Directory** (Override):
```bash
apps/website/dist
```

**Install Command** (Override):
```bash
npm install --prefix apps/website
```

### Save and Redeploy

1. Click **Save** at the bottom
2. Go to **Deployments** tab
3. Click **"..."** menu on latest deployment
4. Click **Redeploy**
5. Check **"Use existing Build Cache"** is UNCHECKED
6. Click **Redeploy**

---

## Alternative: Force New Deployment

Make a small change and push:

```bash
# Make a dummy commit to trigger new deployment
git commit --allow-empty -m "chore: trigger Vercel deployment"
git push origin main
```

---

## Verify Settings in Vercel

Your `vercel.json` should have:
```json
{
  "installCommand": "npm install --prefix apps/website",
  "buildCommand": "npm run build --prefix apps/website",
  "outputDirectory": "apps/website/dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## If Still Failing

### Option 1: Delete vercel.json and use Dashboard settings only
```bash
git rm vercel.json
git commit -m "fix: Remove vercel.json, use dashboard settings"
git push origin main
```

Then configure everything in Vercel Dashboard as shown above.

### Option 2: Use Root Directory setting
In Vercel Dashboard → Settings → General:
- **Root Directory**: `apps/website`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

This tells Vercel to treat `apps/website` as the project root.

---

## Expected Build Output

After fix, you should see:
```
Running "install" command: npm install --prefix apps/website
Installing in apps/website...
Running "build" command: npm run build --prefix apps/website
Building from apps/website...
✓ built in 45s
```

Not:
```
Running "install" command: npm install
added 332 packages (root level - WRONG!)
```
