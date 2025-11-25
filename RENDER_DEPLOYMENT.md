# Penny Debt CRM — Render Deployment Guide

## Overview
This guide covers deploying both the backend (Node.js + MongoDB) and frontend (React + Vite) to Render.

## Backend Deployment to Render

### Step 1: Create a Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub or email
3. Connect your GitHub repository

### Step 2: Deploy Backend Service
1. In Render dashboard, click **New +** → **Web Service**
2. Select your `penny-debt-crm` repository
3. Configure:
   - **Name**: `penny-debt-crm-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Branch**: `fix/mongo-integration` (or your deployment branch)
   - **Root Directory**: (leave empty if server.js is at repo root, or set to `backend/` if using the backend folder)

### Step 3: Set Environment Variables
In Render dashboard for the backend service, go to **Environment** and add:

```
NODE_ENV=production
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/pennydebt?retryWrites=true&w=majority
PORT=5000
JWT_SECRET=your-super-secret-jwt-key-change-in-production
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=care@pennyanddebt.in
EMAIL_PASS=your-app-specific-password
FRONTEND_URL=https://your-frontend-domain.render.app
SUPABASE_URL=https://your-supabase-project.supabase.co
SUPABASE_KEY=your-supabase-anon-key
```

### Step 4: Deploy
- Click **Create Web Service**
- Render will automatically deploy on each push to your branch
- Your backend will be available at: `https://penny-debt-crm-backend.render.app`

---

## Frontend Deployment to Render

### Step 1: Create Static Site on Render
1. In Render dashboard, click **New +** → **Static Site**
2. Select your repository
3. Configure:
   - **Name**: `penny-debt-crm-frontend`
   - **Root Directory**: `crm-frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Branch**: `fix/mongo-integration` (or your deployment branch)

### Step 2: Set Frontend Environment Variable
In Render dashboard for the frontend static site, go to **Environment** and add:

```
VITE_API_BASE_URL=https://penny-debt-crm-backend.render.app
```

### Step 3: Deploy
- Click **Create Static Site**
- Frontend will build and deploy automatically
- Your frontend will be available at: `https://penny-debt-crm-frontend.render.app`

---

## Connecting Frontend to Backend

Update your frontend code to use the `VITE_API_BASE_URL` environment variable. Example in `crm-frontend/src/pages/Website/Signup.jsx`:

```javascript
const API_BASE_URL = import.meta.env?.VITE_API_BASE_URL || "http://localhost:5000";

// Use API_BASE_URL in all API calls:
const res = await axios.post(`${API_BASE_URL}/api/customers/signup`, payload, {
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
});
```

---

## MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster (free tier available)
3. Create a database user with a strong password
4. Get your connection string: `mongodb+srv://<user>:<pass>@cluster0.mongodb.net/pennydebt?retryWrites=true&w=majority`
5. Whitelist Render's IP ranges (or allow all IPs for development)
6. Copy the connection string and paste it into `MONGODB_URI` in Render environment variables

---

## Deployment Checklist

- [ ] MongoDB Atlas cluster created and accessible
- [ ] `fix/mongo-integration` branch pushed to GitHub
- [ ] Backend service created on Render with correct environment variables
- [ ] Frontend static site created on Render with `VITE_API_BASE_URL` set
- [ ] CORS configured in backend to allow frontend domain
- [ ] Email credentials (Gmail) added to backend environment
- [ ] JWT_SECRET set to a strong random value
- [ ] Test health endpoint: `https://penny-debt-crm-backend.render.app/health`
- [ ] Test frontend loads and can reach API

---

## Troubleshooting

### Backend not starting
- Check logs in Render dashboard
- Verify `MONGODB_URI` is correct
- Ensure `npm start` works locally: `NODE_ENV=production npm start`

### Frontend can't reach API
- Verify `VITE_API_BASE_URL` is set correctly in Render environment
- Check CORS headers in backend (should allow frontend domain)
- Inspect browser console for network errors

### Database connection failed
- Verify `MONGODB_URI` is correct
- Check MongoDB Atlas IP whitelist includes Render's IPs (or allow all: `0.0.0.0/0`)
- Ensure database user password doesn't contain special chars that need URL encoding

---

## Custom Domain (Optional)

1. In Render dashboard, go to **Settings** for your service
2. Under **Custom Domain**, add your domain
3. Update DNS records as instructed by Render
4. Wait for DNS propagation (5-15 minutes)

---

## Auto-Deploy on Git Push

Render automatically deploys whenever you push to the connected branch:
- Push to `fix/mongo-integration` → Backend redeploys
- Push to `fix/mongo-integration` (with frontend changes) → Frontend rebuilds

---

Your production deployment is ready! 🚀
