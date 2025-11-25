# Clean Production Deployment Guide

## 🎯 Target Architecture (ACTIVE)
- ✅ **Frontend**: Vercel (https://penny-debt-crm.vercel.app)
- ✅ **Backend**: Render (https://penny-debt-backend.onrender.com)
- ✅ **Database**: MongoDB Atlas (cluster0.0xgwopz.mongodb.net)

## ❌ DEACTIVATED Services (To Avoid Conflicts)
- ❌ Railway (removed railway.json, .railwayignore, Procfile)
- ❌ Supabase (removed supabase configs and dependencies)
- ❌ MySQL (using MongoDB Atlas only)

## 🚀 Deployment Steps

### 1. Backend Deployment (Render)
1. Go to [render.com](https://render.com)
2. Connect GitHub repository
3. Create new Web Service
4. Select `backend` folder as root directory
5. Use these settings:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Node
   - **Health Check Path**: `/health`

### 2. Environment Variables (Render Dashboard)
```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://singh2212karanveer_db_user:tVENTkpkJJIekGBA@cluster0.0xgwopz.mongodb.net/pennydebt
JWT_SECRET=PennyDebt2024$SecretKey#CRM@System!9876
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=care@pennyanddebt.in
SMTP_PASS=your_gmail_app_password
FRONTEND_URL=https://penny-debt-crm.vercel.app
```

### 3. Frontend Deployment (Vercel)
- Already deployed at: https://penny-debt-crm.vercel.app
- Auto-deploys on git push to main branch
- No additional configuration needed

### 4. Database (MongoDB Atlas)
- Already configured and running
- Connection string: `mongodb+srv://singh2212karanveer_db_user:tVENTkpkJJIekGBA@cluster0.0xgwopz.mongodb.net/pennydebt`
- Collections: users, customers, leads, contacts, careers, otps, activities

## 🔧 Testing Endpoints

### Backend Health Check
```bash
curl https://penny-debt-backend.onrender.com/health
```

### Employee Login Test
```bash
curl -X POST https://penny-debt-backend.onrender.com/api/auth/employee-login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@pennyanddebt.in","password":"PennyAdmin@2024#Secure"}'
```

## 🎯 Employee Credentials
- **Admin**: admin@pennyanddebt.in / PennyAdmin@2024#Secure
- **Manager**: manager@pennyanddebt.in / DebtManager$2024!Strong
- **Sales**: sales1@pennyanddebt.in / SalesLead#2024@Power
- **Support**: support@pennyanddebt.in / Support&2024!Help

## 🔄 Deployment Workflow
1. Make changes locally
2. Test locally with `npm run dev`
3. Commit and push to GitHub
4. Vercel auto-deploys frontend
5. Render auto-deploys backend
6. Test production endpoints

## 🚨 Important Notes
- Only use ONE deployment service per component
- Keep Railway and Supabase accounts inactive
- MongoDB Atlas is the single source of truth for data
- All CORS origins are configured for production domains

## 🔍 Troubleshooting
- Check Render logs for backend issues
- Verify MongoDB Atlas connection
- Test CORS settings if frontend can't reach backend
- Ensure environment variables are set correctly in Render dashboard