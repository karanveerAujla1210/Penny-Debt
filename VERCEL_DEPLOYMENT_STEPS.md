# Vercel Deployment - Quick Steps

## 🌐 Two Separate Vercel Projects Required

### Project 1: Website (pennyanddebt.in)

1. **Vercel Dashboard** → **Add New** → **Project**
2. **Import**: `karanveerAujla1210/penny-debt-crm`
3. **Configure**:
   ```
   Project Name: penny-debt-website
   Framework: Vite
   Root Directory: frontend/website
   Build Command: npm run build
   Output Directory: dist
   ```
4. **Environment Variables**:
   ```
   VITE_API_BASE_URL=https://api.pennyanddebt.in/api
   VITE_CRM_URL=https://crmpennyanddebt.in
   ```
5. **Deploy**
6. **Settings** → **Domains** → Add `pennyanddebt.in`

---

### Project 2: CRM (crmpennyanddebt.in)

1. **Vercel Dashboard** → **Add New** → **Project**
2. **Import**: `karanveerAujla1210/penny-debt-crm` (same repo)
3. **Configure**:
   ```
   Project Name: penny-debt-crm
   Framework: Vite
   Root Directory: frontend/crm
   Build Command: npm run build
   Output Directory: dist
   ```
4. **Environment Variables**:
   ```
   VITE_API_BASE_URL=https://api.pennyanddebt.in/api/crm
   VITE_WEBSITE_URL=https://pennyanddebt.in
   ```
5. **Deploy**
6. **Settings** → **Domains** → Add `crmpennyanddebt.in`

---

## ✅ Verification

### Test Website
1. Visit: https://pennyanddebt.in
2. Click "Employee Login" in navbar
3. Should redirect to: https://crmpennyanddebt.in

### Test CRM
1. Visit: https://crmpennyanddebt.in
2. Should show employee login page
3. Login should work with backend API

---

## 🔧 If Build Fails

### Common Issues:

**Issue**: "Cannot find module"
- **Fix**: Verify `Root Directory` is set correctly
- Website: `frontend/website`
- CRM: `frontend/crm`

**Issue**: "Build command failed"
- **Fix**: Check environment variables are set
- Make sure `VITE_API_BASE_URL` is defined

**Issue**: "404 on routes"
- **Fix**: Ensure `vercel.json` has rewrites configured
- Both projects have this in their respective directories

---

## 📝 Important Notes

- ✅ Use **same GitHub repo** for both projects
- ✅ Use **different Root Directory** for each
- ✅ Set **different domains** for each
- ✅ Set **correct environment variables** for each
- ✅ Both will auto-deploy on git push

---

## 🚀 After Deployment

1. Update DNS records at domain registrar
2. Wait for DNS propagation (up to 48 hours)
3. Test all functionality
4. Monitor Vercel logs for errors
