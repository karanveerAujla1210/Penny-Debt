# Deployment Guide - Vercel + Render + MongoDB

## Production Stack

- **Frontend**: Vercel (static React + Vite build)
- **Backend**: Render (Node.js + Express)
- **Database**: MongoDB Atlas (cloud MongoDB)

See `DEPLOYMENT_FINAL.md` for comprehensive step-by-step deployment guide.

## Quick Summary

### 1. Frontend Deployment (Vercel)

- Connect GitHub repo to Vercel
- Set environment variable: `VITE_API_BASE_URL` = your Render backend URL
- Frontend auto-deploys on git push

### 2. Backend Deployment (Render)

- Create new Web Service on Render
- Connect GitHub repo, select `backend/` directory
- Set environment variables: `MONGODB_URI`, `JWT_SECRET`, email credentials
- Backend starts on `https://your-app.onrender.com`

### 3. Database Setup (MongoDB Atlas)

- Create free cluster on MongoDB Atlas
- Add IP whitelist for Render servers (or use `0.0.0.0/0` for development)
- Share connection string as `MONGODB_URI` environment variable

## Environment Variables

Set these in Vercel dashboard:

```bash
VITE_API_BASE_URL=https://your-render-backend.onrender.com
```

Set these in Render dashboard:

```bash
MONGODB_URI=mongodb+srv://user:password@cluster0.mongodb.net/pennydebt?retryWrites=true&w=majority
NODE_ENV=production
JWT_SECRET=your-secret-key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
FRONTEND_URL=https://your-vercel-app.vercel.app
```

## Verification

- Frontend: Visit `https://your-vercel-app.vercel.app`
- Backend: Visit `https://your-render-backend.onrender.com/health`
- Logs: Check Render dashboard for backend logs

## Email Setup

Use Gmail with App-Specific Password:

1. Enable 2-Factor Authentication on Gmail
2. Generate App-Specific Password for "Mail" app
3. Use this password as `EMAIL_PASS` environment variable
4. Set `EMAIL_USER` to your Gmail address

## Production Checklist

- ✅ Vercel frontend connected to GitHub

- ✅ Render backend connected to GitHub
- ✅ MongoDB Atlas cluster created and whitelisted
- ✅ Environment variables configured on both platforms
- ✅ Email credentials set up
- ✅ Frontend can call backend API
- ✅ Backend connects to MongoDB
- ✅ Health check endpoints working

## Monitoring

- **Frontend**: Vercel Analytics dashboard
- **Backend**: Render logs in dashboard
- **Database**: MongoDB Atlas monitoring

## Support

For detailed instructions, see `DEPLOYMENT_FINAL.md`
