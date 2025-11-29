# Vercel Deployment Guide

## Deploy Website (Public)

### Step 1: Push to GitHub
```bash
cd frontend/website
git add .
git commit -m "Add production config"
git push
```

### Step 2: Import to Vercel
1. Go to: https://vercel.com/new
2. Click "Import Git Repository"
3. Select your repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend/website`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Step 3: Add Environment Variables
Click "Environment Variables":
```
Key: VITE_API_BASE_URL
Value: https://penny-debt-backend.onrender.com/api
Environment: Production
```

### Step 4: Deploy
- Click "Deploy"
- Wait 2-3 minutes
- Get URL: `https://your-website.vercel.app`

---

## Deploy CRM (Internal)

### Step 1: Import to Vercel
1. Go to: https://vercel.com/new
2. Click "Import Git Repository"
3. Select same repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend/crm`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Step 2: Add Environment Variables
```
Key: VITE_API_BASE_URL
Value: https://penny-debt-backend.onrender.com/api/crm
Environment: Production
```

### Step 3: Deploy
- Click "Deploy"
- Get URL: `https://your-crm.vercel.app`

---

## Update Backend CORS

After getting Vercel URLs, update `render.yaml`:

```yaml
- key: ALLOWED_ORIGINS
  value: https://your-website.vercel.app,https://your-crm.vercel.app,https://pennyanddebt.in
```

Redeploy backend on Render.

---

## Custom Domains (Optional)

### Website: pennyanddebt.in
1. Vercel Dashboard → Website Project → Settings → Domains
2. Add: `pennyanddebt.in` and `www.pennyanddebt.in`
3. Update DNS records at domain registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### CRM: crm.pennyanddebt.in
1. Vercel Dashboard → CRM Project → Settings → Domains
2. Add: `crm.pennyanddebt.in`
3. Update DNS:
   ```
   Type: CNAME
   Name: crm
   Value: cname.vercel-dns.com
   ```

---

## Deployment Checklist

- [ ] Website deployed to Vercel
- [ ] CRM deployed to Vercel
- [ ] Environment variables added
- [ ] Backend CORS updated with Vercel URLs
- [ ] Custom domains configured (if applicable)
- [ ] Test all API endpoints
- [ ] Verify authentication works
- [ ] Check browser console for errors

---

## Troubleshooting

### Build Fails
- Check `package.json` scripts
- Verify all dependencies installed
- Check build logs in Vercel dashboard

### API Calls Fail
- Verify `VITE_API_BASE_URL` is correct
- Check CORS settings in backend
- Inspect Network tab in browser DevTools

### 404 on Refresh
Add `vercel.json` in project root:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
