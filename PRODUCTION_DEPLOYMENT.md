# 🚀 Production Deployment Guide

## ✅ Current Status

- **GitHub**: Code pushed successfully
- **Database**: MongoDB Atlas connected and initialized
- **Repository**: https://github.com/karanveerAujla1210/penny-debt-crm

---

## 🔧 Environment Variables Configured

### Backend (Render)
```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://singh2212karanveer_db_user:Aujla1210@cluster0.0xgwopz.mongodb.net/pennydebt?retryWrites=true&w=majority
JWT_SECRET=penny_debt_secret_key_2024
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=care@pennyanddebt.in
SMTP_PASS=[Add your SMTP password in Render dashboard]
FRONTEND_URL=https://penny-debt-crm.vercel.app
ALLOWED_ORIGINS=https://penny-debt-crm.vercel.app,https://pennyanddebt.in
```

---

## 📦 Deployment Steps

### 1. Deploy Backend to Render

**Option A: Using render.yaml (Recommended)**
1. Go to https://dashboard.render.com
2. Click "New" → "Blueprint"
3. Connect your GitHub repository: `karanveerAujla1210/penny-debt-crm`
4. Render will automatically detect `render.yaml`
5. Click "Apply" to deploy

**Option B: Manual Setup**
1. Go to https://dashboard.render.com
2. Click "New" → "Web Service"
3. Connect GitHub repository
4. Configure:
   - **Name**: penny-debt-backend
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add environment variables from above
6. Click "Create Web Service"

**⚠️ Important**: Add `SMTP_PASS` manually in Render dashboard (not in render.yaml for security)

---

### 2. Deploy Website to Vercel

```bash
cd frontend/website
vercel --prod
```

**Or via Vercel Dashboard:**
1. Go to https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Import `karanveerAujla1210/penny-debt-crm`
4. Configure:
   - **Framework**: Vite
   - **Root Directory**: `frontend/website`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add environment variable:
   ```
   VITE_API_BASE_URL=https://your-backend-url.onrender.com/api
   ```
6. Deploy

---

### 3. Deploy CRM to Vercel

```bash
cd frontend/crm
vercel --prod
```

**Or via Vercel Dashboard:**
1. Create another project
2. Import same repository
3. Configure:
   - **Framework**: Vite
   - **Root Directory**: `frontend/crm`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add environment variable:
   ```
   VITE_API_BASE_URL=https://your-backend-url.onrender.com/api/crm
   ```
5. Deploy

---

## 🔗 Update URLs After Deployment

After deploying, update these files with actual URLs:

### 1. Update render.yaml
```yaml
- key: FRONTEND_URL
  value: https://your-actual-website.vercel.app
- key: ALLOWED_ORIGINS
  value: https://your-website.vercel.app,https://your-crm.vercel.app
```

### 2. Update Frontend .env files

**frontend/website/.env.production**
```env
VITE_API_BASE_URL=https://your-backend.onrender.com/api
```

**frontend/crm/.env.production**
```env
VITE_API_BASE_URL=https://your-backend.onrender.com/api/crm
```

---

## ✅ Post-Deployment Checklist

- [ ] Backend deployed on Render
- [ ] Website deployed on Vercel
- [ ] CRM deployed on Vercel
- [ ] All environment variables configured
- [ ] CORS origins updated with actual URLs
- [ ] Test backend health: `https://your-backend.onrender.com/health`
- [ ] Test website login
- [ ] Test CRM login with admin credentials
- [ ] Test database connection
- [ ] Test API endpoints

---

## 🔑 Default Login Credentials

### Admin
- **Email**: admin@pennyanddebt.in
- **Password**: Admin@2024

### Manager
- **Email**: manager@pennyanddebt.in
- **Password**: Manager@2024

---

## 🧪 Testing Production

### Test Backend Health
```bash
curl https://your-backend.onrender.com/health
```

Expected response:
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "mongodb": {
    "connected": true,
    "state": 1
  }
}
```

### Test API Endpoints
```bash
# Test website API
curl https://your-backend.onrender.com/api/faqs

# Test CRM API (requires auth)
curl https://your-backend.onrender.com/api/crm/dashboard
```

---

## 🐛 Troubleshooting

### Backend Issues
- Check Render logs: Dashboard → Your Service → Logs
- Verify environment variables are set correctly
- Ensure MongoDB URI is correct (no quotes in Render dashboard)

### Frontend Issues
- Check Vercel deployment logs
- Verify `VITE_API_BASE_URL` points to correct backend
- Check browser console for CORS errors

### Database Issues
- Run: `node backend/scripts/checkAndInitDB.js` locally
- Verify MongoDB Atlas network access allows Render IPs
- Check MongoDB Atlas logs

---

## 📊 Monitoring

### Render
- Monitor backend performance in Render dashboard
- Set up alerts for downtime
- Check logs regularly

### Vercel
- Monitor frontend deployments
- Check analytics for traffic
- Review error logs

### MongoDB Atlas
- Monitor database performance
- Check connection metrics
- Review slow queries

---

## 🔄 Continuous Deployment

Both Render and Vercel are configured for auto-deployment:
- Push to `main` branch → Automatic deployment
- Pull requests → Preview deployments (Vercel)

---

**Last Updated**: ${new Date().toLocaleString()}
