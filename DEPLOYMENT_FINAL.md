# Penny Debt CRM — Production Deployment Guide
## Stack: Vercel (Frontend) + Render (Backend) + MongoDB (Database)

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     User Browser                             │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
        ┌────────────────────────────┐
        │  Vercel (Frontend)         │
        │  penny-debt-crm.vercel.app │
        │  - React + Vite            │
        │  - Static site             │
        └────────────┬───────────────┘
                     │ HTTPS
                     │ API calls to backend
                     ▼
        ┌────────────────────────────┐
        │  Render (Backend)          │
        │  penny-debt-backend.onrender.com
        │  - Node.js + Express       │
        │  - Mongoose ORM            │
        └────────────┬───────────────┘
                     │
                     ▼
        ┌────────────────────────────┐
        │  MongoDB Atlas (Database)  │
        │  - Cloud MongoDB cluster   │
        │  - Automatic backups       │
        └────────────────────────────┘
```

---

## Prerequisites

- GitHub account with repo access
- Vercel account (sign up with GitHub)
- Render account (sign up with GitHub)
- MongoDB Atlas account (free tier available)
- Gmail account with app-specific password (for emails)

---

## Step 1: Setup MongoDB Atlas

### 1.1 Create Cluster
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Create a new project (e.g., "Penny Debt CRM")
4. Click **Build a Cluster** → Select **Free Tier**
5. Choose region closest to your users (e.g., `us-east-1`)
6. Click **Create Cluster**
7. Wait ~3-5 minutes for cluster to start

### 1.2 Create Database User
1. Go to **Database Access** → **Add New User**
2. Set username: `pennydebt_user`
3. Set password: Generate strong password (save it!)
4. Click **Add User**

### 1.3 Whitelist IP
1. Go to **Network Access** → **Add IP Address**
2. Option A (safer): Add Render's IP ranges and Vercel's IPs
3. Option B (easier for testing): Allow all IPs (`0.0.0.0/0`)
4. Click **Confirm**

### 1.4 Get Connection String
1. Go to **Clusters** → click **Connect**
2. Select **Drivers** → **Node.js**
3. Copy the connection string:
   ```
   mongodb+srv://<username>:<password>@cluster0.mongodb.net/pennydebt?retryWrites=true&w=majority
   ```
4. Replace `<username>` and `<password>` with your credentials
5. Save this — you'll need it for both Render and Vercel env vars

---

## Step 2: Deploy Backend on Render

### 2.1 Create Web Service
1. Go to [render.com](https://render.com)
2. Sign up/log in with GitHub
3. Click **New +** → **Web Service**
4. Connect your `penny-debt-crm` repository
5. Configure:
   - **Service Name**: `penny-debt-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Branch**: `fix/mongo-integration` (or `main`)
   - **Root Directory**: `.` (root of repo where `server.js` is)

### 2.2 Add Environment Variables
Click **Advanced** → **Add Environment Variable** and add:

```
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/pennydebt?retryWrites=true&w=majority
NODE_ENV=production
JWT_SECRET=your-super-secret-jwt-key-min-32-chars-change-this
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-specific-password
FRONTEND_URL=https://penny-debt-crm.vercel.app
```

Replace placeholders with actual values.

### 2.3 Deploy
1. Click **Create Web Service**
2. Render starts building immediately
3. Monitor logs for errors
4. Once deployed, your backend URL is shown (e.g., `https://penny-debt-backend-xxxx.onrender.com`)

### 2.4 Test Backend
```bash
curl https://penny-debt-backend-xxxx.onrender.com/health
# Expected: {"status":"OK"}

curl https://penny-debt-backend-xxxx.onrender.com/api/test
# Expected: {"message":"API is working!"}
```

---

## Step 3: Deploy Frontend on Vercel

### 3.1 Create Vercel Project
1. Go to [vercel.com](https://vercel.com)
2. Sign up/log in with GitHub
3. Click **Add New...** → **Project**
4. Select `penny-debt-crm` repository
5. Configure:
   - **Framework Preset**: Auto-detect (should show Vite)
   - **Root Directory**: Leave blank (uses vercel.json)
   - **Build Command**: `cd crm-frontend && npm install && npm run build`
   - **Output Directory**: `crm-frontend/dist`
   - **Install Command**: `npm install`

### 3.2 Add Environment Variables
In Vercel project settings → **Environment Variables**, add:

```
VITE_API_BASE_URL=https://penny-debt-backend-xxxx.onrender.com
```

Replace with your actual Render backend URL.

### 3.3 Deploy
1. Click **Deploy**
2. Vercel automatically builds and deploys
3. Once done, your frontend URL is shown (e.g., `https://penny-debt-crm.vercel.app`)

### 3.4 Test Frontend
1. Navigate to `https://penny-debt-crm.vercel.app`
2. Check browser console for network errors
3. Test signup flow (if database is connected)
4. Verify API calls reach the backend using Network tab in DevTools

---

## Step 4: Connect Frontend to Backend

Frontend automatically uses `VITE_API_BASE_URL` env var. It's already configured in code:

```javascript
const API_BASE_URL = import.meta.env?.VITE_API_BASE_URL || "http://localhost:5000";

// All API calls use this:
axios.post(`${API_BASE_URL}/api/customers/signup`, payload, {...})
```

No code changes needed — just ensure `VITE_API_BASE_URL` is set in Vercel.

---

## Step 5: Verify Deployment

### 5.1 Health Checks
```bash
# Backend health
curl https://penny-debt-backend-xxxx.onrender.com/health

# Frontend loads and can call backend
# Check browser Network tab for successful API responses
```

### 5.2 Database Connection
- Check Render logs: should show `✅ Connected to MongoDB Atlas`
- Check MongoDB Atlas dashboard: should show active connections

### 5.3 End-to-End Test
1. Open frontend in browser
2. Try signup with test data
3. Check MongoDB Atlas to see new document in collection
4. Verify email sent (check Gmail sent folder)

---

## Environment Variables Summary

### Render Backend
```
MONGODB_URI=mongodb+srv://...
NODE_ENV=production
JWT_SECRET=<long-random-string>
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=<gmail>
EMAIL_PASS=<app-password>
FRONTEND_URL=https://penny-debt-crm.vercel.app
```

### Vercel Frontend
```
VITE_API_BASE_URL=https://penny-debt-backend-xxxx.onrender.com
```

---

## Troubleshooting

### Backend not starting on Render
1. Check **Logs** in Render dashboard
2. Verify `MONGODB_URI` format is correct
3. Ensure MongoDB user password doesn't have special chars (if it does, URL-encode them)
4. Test locally: `NODE_ENV=production npm start`

### Frontend can't reach backend
1. Verify `VITE_API_BASE_URL` is set in Vercel env vars
2. Check browser console for CORS errors
3. Ensure CORS allows Vercel domain in `backend/server.js` (already configured for `*.vercel.app`)
4. Test API directly: `curl https://backend-url/api/test`

### MongoDB connection failed
1. Check MongoDB Atlas cluster is running
2. Verify connection string (user, password, cluster name)
3. Check IP whitelist includes Render and Vercel IPs (or allow all `0.0.0.0/0`)
4. Test connection: `mongoose.connect(uri)` in Node REPL

### Emails not sending
1. Verify Gmail app-specific password (not regular password)
2. Check Gmail has 2FA enabled
3. Test locally with same credentials
4. Check Render logs for email errors

### Build failures
1. Vercel: Check **Deployments** → **Logs** for build errors
2. Render: Check **Logs** for build/start errors
3. Run `npm install && npm run build` locally to reproduce
4. Verify all dependencies in `package.json`

---

## Redeploying After Code Changes

### Deploy Backend
1. Push changes to `fix/mongo-integration` branch (or your deployment branch)
2. Render automatically redeploys on push
3. Monitor logs during deployment

### Deploy Frontend
1. Push changes to same branch
2. Vercel automatically rebuilds and redeploys
3. Once deployed, frontend gets new code

Both services auto-redeploy on push — no manual action needed!

---

## Custom Domains (Optional)

### Vercel Custom Domain
1. In Vercel project settings → **Domains**
2. Add your domain
3. Update DNS records as instructed
4. Wait for SSL certificate (~24h)

### Render Custom Domain
1. In Render service settings → **Custom Domain**
2. Add your domain
3. Update DNS records
4. Wait for SSL certificate

---

## Security Checklist

- [ ] All credentials in env vars (never in code)
- [ ] `.env` in `.gitignore`
- [ ] `JWT_SECRET` is strong (min 32 chars, random)
- [ ] MongoDB user has minimal permissions
- [ ] CORS restricted to frontend domain in production
- [ ] Email credentials are app-specific passwords
- [ ] SSL/TLS enabled (automatic on Vercel/Render)
- [ ] No hard-coded URLs (use env vars)

---

## Production Monitoring

- **Render**: Dashboard shows service status, auto-restarts on crash
- **Vercel**: Shows deploy status and analytics
- **MongoDB Atlas**: Shows active connections, query performance
- Set up email alerts for deployment failures

---

## Support & Debugging

- **Render docs**: https://render.com/docs
- **Vercel docs**: https://vercel.com/docs
- **MongoDB docs**: https://docs.mongodb.com
- **Stack Overflow**: Search `[render]` `[vercel]` tags

---

**Your production deployment is ready!** 🚀
