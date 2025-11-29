# Domain Deployment Guide

## 🌐 Domain Architecture

```
pennyanddebt.in (Main Website)
    ↓
    Employee Login Button
    ↓
crmpennyanddebt.in (CRM System)
```

## 📋 Deployment Overview

| Component | Domain | Platform | Directory |
|-----------|--------|----------|-----------|
| **Website** | pennyanddebt.in | Vercel | `frontend/website` |
| **CRM** | crmpennyanddebt.in | Vercel | `frontend/crm` |
| **Backend API** | api.pennyanddebt.in | Render | `backend` |

---

## 🚀 Step-by-Step Deployment

### 1. Backend Deployment (Render)

#### A. Deploy to Render
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **New** → **Web Service**
3. Connect GitHub: `karanveerAujla1210/penny-debt-crm`
4. Configure:
   - **Name**: `penny-debt-backend`
   - **Root Directory**: `backend`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or paid)

#### B. Set Environment Variables
In Render Dashboard → Environment:
```
NODE_ENV=production
MONGODB_URI=mongodb+srv://singh2212karanveer_db_user:tVENTkpkJJIekGBA@cluster0.0xgwopz.mongodb.net/pennydebt
JWT_SECRET=PennyDebt2024$SecretKey#CRM@System!9876
SESSION_SECRET=PennyDebt2024$Session#Secret@Key!5432
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=care@pennyanddebt.in
SMTP_PASS=<your_gmail_app_password>
FRONTEND_URL=https://pennyanddebt.in
ALLOWED_ORIGINS=https://pennyanddebt.in,https://www.pennyanddebt.in,https://crmpennyanddebt.in
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

#### C. Configure Custom Domain
1. In Render → Settings → Custom Domain
2. Add: `api.pennyanddebt.in`
3. Copy the CNAME record provided by Render

---

### 2. Website Deployment (Vercel)

#### A. Deploy to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Add New** → **Project**
3. Import: `karanveerAujla1210/penny-debt-crm`
4. Configure:
   - **Project Name**: `penny-debt-website`
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend/website`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

#### B. Set Environment Variables
In Vercel → Settings → Environment Variables:
```
VITE_API_BASE_URL=https://api.pennyanddebt.in/api
VITE_CRM_URL=https://crmpennyanddebt.in
```

#### C. Configure Custom Domain
1. Vercel → Settings → Domains
2. Add: `pennyanddebt.in`
3. Add: `www.pennyanddebt.in` (redirect to main)
4. Update DNS records at your domain registrar

---

### 3. CRM Deployment (Vercel)

#### A. Deploy to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Add New** → **Project**
3. Import: `karanveerAujla1210/penny-debt-crm`
4. Configure:
   - **Project Name**: `penny-debt-crm`
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend/crm`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

#### B. Set Environment Variables
In Vercel → Settings → Environment Variables:
```
VITE_API_BASE_URL=https://api.pennyanddebt.in/api/crm
VITE_WEBSITE_URL=https://pennyanddebt.in
```

#### C. Configure Custom Domain
1. Vercel → Settings → Domains
2. Add: `crmpennyanddebt.in`
3. Update DNS records at your domain registrar

---

## 🔧 DNS Configuration

### At Your Domain Registrar (e.g., GoDaddy, Namecheap)

#### For pennyanddebt.in (Website)
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel IP)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### For crmpennyanddebt.in (CRM)
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel IP)

OR

Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

#### For api.pennyanddebt.in (Backend)
```
Type: CNAME
Name: api
Value: <your-render-app>.onrender.com
```

---

## 🔐 Security Checklist

### MongoDB Atlas
- ✅ Add Render IPs to whitelist:
  - `74.220.48.0/24`
  - `74.220.56.0/24`
- ✅ Verify database user permissions

### Gmail SMTP
- ✅ Enable 2-Step Verification
- ✅ Generate App Password for `care@pennyanddebt.in`
- ✅ Add to Render environment variables

### SSL/TLS
- ✅ Vercel provides automatic HTTPS
- ✅ Render provides automatic HTTPS
- ✅ Force HTTPS redirect enabled in backend

---

## 🧪 Testing After Deployment

### 1. Test Website
```bash
# Check if website loads
curl -I https://pennyanddebt.in

# Test API connection
curl https://api.pennyanddebt.in/health
```

### 2. Test CRM
```bash
# Check if CRM loads
curl -I https://crmpennyanddebt.in

# Test CRM API
curl https://api.pennyanddebt.in/api/crm/health
```

### 3. Test Login Flow
1. Go to https://pennyanddebt.in
2. Click "Employee Login" in navigation
3. Should redirect to https://crmpennyanddebt.in
4. Login with employee credentials
5. Verify dashboard loads

### 4. Test CORS
```bash
# From website
curl -H "Origin: https://pennyanddebt.in" \
  -H "Access-Control-Request-Method: POST" \
  -X OPTIONS https://api.pennyanddebt.in/api/leads

# From CRM
curl -H "Origin: https://crmpennyanddebt.in" \
  -H "Access-Control-Request-Method: POST" \
  -X OPTIONS https://api.pennyanddebt.in/api/crm/auth
```

---

## 📝 Environment Variables Summary

### Backend (.env)
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://...
JWT_SECRET=PennyDebt2024$SecretKey#CRM@System!9876
SESSION_SECRET=PennyDebt2024$Session#Secret@Key!5432
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=care@pennyanddebt.in
SMTP_PASS=<app_password>
FRONTEND_URL=https://pennyanddebt.in
ALLOWED_ORIGINS=https://pennyanddebt.in,https://www.pennyanddebt.in,https://crmpennyanddebt.in
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Website (.env.production)
```env
VITE_API_BASE_URL=https://api.pennyanddebt.in/api
VITE_CRM_URL=https://crmpennyanddebt.in
```

### CRM (.env.production)
```env
VITE_API_BASE_URL=https://api.pennyanddebt.in/api/crm
VITE_WEBSITE_URL=https://pennyanddebt.in
```

---

## 🔄 Deployment Commands

### Push Changes
```bash
# Commit all changes
git add .
git commit -m "Configure production domains"
git push origin main
```

### Trigger Redeployment
- **Vercel**: Auto-deploys on push
- **Render**: Auto-deploys on push (if enabled)

### Manual Redeploy
- **Vercel**: Dashboard → Deployments → Redeploy
- **Render**: Dashboard → Manual Deploy → Deploy latest commit

---

## 🐛 Troubleshooting

### Issue: CORS Error
**Solution**: Verify `ALLOWED_ORIGINS` in Render includes all domains

### Issue: API Not Reachable
**Solution**: Check DNS propagation (can take 24-48 hours)
```bash
nslookup api.pennyanddebt.in
```

### Issue: Login Redirect Not Working
**Solution**: Verify `VITE_CRM_URL` in website environment variables

### Issue: MongoDB Connection Failed
**Solution**: Verify Render IPs are whitelisted in MongoDB Atlas

---

## 📊 Monitoring

### Render Logs
```
Dashboard → Logs → View real-time logs
```

### Vercel Logs
```
Dashboard → Deployments → Click deployment → View Function Logs
```

### MongoDB Atlas
```
Dashboard → Metrics → Monitor connections and queries
```

---

## 🎯 Post-Deployment Checklist

- [ ] Website loads at https://pennyanddebt.in
- [ ] CRM loads at https://crmpennyanddebt.in
- [ ] Employee Login redirects to CRM
- [ ] API responds at https://api.pennyanddebt.in/health
- [ ] CORS working for both domains
- [ ] MongoDB connection successful
- [ ] Email sending works
- [ ] SSL certificates active
- [ ] DNS propagated (check with nslookup)
- [ ] All environment variables set correctly

---

## 📞 Support

- **Render**: https://render.com/docs
- **Vercel**: https://vercel.com/support
- **MongoDB Atlas**: https://support.mongodb.com
