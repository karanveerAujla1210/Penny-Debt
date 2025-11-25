# Railway Deployment Guide

## Step 1: Prepare Repository
Your backend is now ready for Railway deployment with:
- ✅ `railway.json` - Railway configuration
- ✅ `Procfile` - Start command
- ✅ `.railwayignore` - Files to ignore
- ✅ Updated server.js for Railway hosting

## Step 2: Deploy to Railway

### Option A: GitHub Integration (Recommended)
1. Go to [railway.app](https://railway.app)
2. Sign up/Login with GitHub
3. Click **"New Project"**
4. Select **"Deploy from GitHub repo"**
5. Choose your `penny-debt-crm` repository
6. Select **"backend"** folder as root directory
7. Click **"Deploy"**

### Option B: Railway CLI
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Navigate to backend folder
cd backend

# Initialize and deploy
railway init
railway up
```

### Step 3: Environment Variables
Add these environment variables in Railway dashboard (or your chosen host):

### Required Variables:
```
NODE_ENV=production
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/pennydebt?retryWrites=true&w=majority
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=care@pennyanddebt.in
SMTP_PASS=your_app_password
JWT_SECRET=your_jwt_secret_key
FRONTEND_URL=https://your-frontend-domain.com
```

## Step 4: Database Setup
1. **Add MongoDB (Atlas) or external MongoDB service:**
   - For MongoDB Atlas, create a new cluster and whitelist Railway's IPs if needed.
   - Copy the connection string and paste it into `MONGODB_URI` environment variable.

2. **Schema / Collections:**
   - MongoDB is schema-less; collections will be created automatically by Mongoose models when the app runs.
   - If you have seed data, run a seed script or import JSON into the cluster.

## Step 5: Update Frontend
Update your frontend API calls to use Railway backend URL:
```javascript
const API_BASE_URL = 'https://your-app-name.railway.app/api';
```

## Step 6: Custom Domain (Optional)
1. In Railway dashboard, go to **Settings**
2. Click **"Domains"**
3. Add your custom domain
4. Update DNS records as instructed

## Railway Features:
- ✅ **Auto-deploy** on git push
- ✅ **Free tier** available
- ✅ **Built-in MySQL** database
- ✅ **Environment variables** management
- ✅ **Custom domains** support
- ✅ **Automatic HTTPS**
- ✅ **Logs and monitoring**

## Your Backend URLs:
- **Health Check:** `https://your-app.railway.app/health`
- **API Base:** `https://your-app.railway.app/api`

## Troubleshooting:
- Check **Logs** in Railway dashboard
- Verify **Environment Variables**
- Test **Health Check** endpoint
- Check **Database Connection**

Your backend will be live at: `https://your-app-name.railway.app`