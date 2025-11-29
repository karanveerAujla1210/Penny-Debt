# 🔄 Migration Guide - Penny-Debt v2.0

## Overview

This guide helps you migrate from the old structure to the new modern mono-repo architecture.

## 🎯 What Changed?

### Backend Changes

**Old Structure:**
```
backend/
├── routes/
│   ├── auth.js
│   ├── leads.js
│   └── crm/
└── server.js
```

**New Structure:**
```
backend/
├── src/
│   ├── config/
│   ├── routes/
│   │   ├── website/
│   │   ├── crm/
│   │   └── mobile/
│   └── app.js
└── server.js
```

### API Endpoint Changes

| Old Endpoint | New Endpoint | Status |
|--------------|--------------|--------|
| `/api/auth` | `/api/v1/website/auth` | Both work |
| `/api/leads` | `/api/v1/website/leads` | Both work |
| `/api/crm/auth` | `/api/v1/crm/auth` | Both work |
| - | `/api/v1/mobile/auth` | New |

## 📋 Migration Steps

### Step 1: Backup Current Code

```bash
# Create backup
cd c:\Users\DELL\Desktop
cp -r Penny-Debt Penny-Debt-backup
```

### Step 2: Install New Dependencies

```bash
# Backend
cd Penny-Debt/backend
npm install

# Website
cd ../frontend/website
npm install

# CRM
cd ../crm
npm install

# Mobile (optional)
cd ../../mobile
npm install
```

### Step 3: Update Environment Variables

**Backend (.env):**
```env
# No changes needed - all existing variables work
MONGODB_URI=your_connection_string
JWT_SECRET=your_secret
SMTP_USER=care@pennyanddebt.in
SMTP_PASS=your_app_password
```

**Website (.env):**
```env
# Update API URL (optional - old URL still works)
VITE_API_BASE_URL=http://localhost:5000/api/v1/website
```

**CRM (.env):**
```env
# Update API URL (optional - old URL still works)
VITE_API_BASE_URL=http://localhost:5000/api/v1/crm
```

### Step 4: Test Backend

```bash
cd backend
npm run dev
```

Visit: http://localhost:5000/health

Expected response:
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "development",
  "mongodb": {
    "connected": true,
    "state": "connected"
  }
}
```

### Step 5: Test Frontend

```bash
# Terminal 1 - Website
cd frontend/website
npm run dev

# Terminal 2 - CRM
cd frontend/crm
npm run dev
```

### Step 6: Update Frontend API Calls (Optional)

**Old way (still works):**
```javascript
axios.get('/api/leads')
```

**New way (recommended):**
```javascript
axios.get('/api/v1/website/leads')
```

## 🔧 Troubleshooting

### Issue: Module not found

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Port already in use

**Solution:**
```bash
# Kill process on port 5000
npx kill-port 5000

# Or use different port
PORT=5001 npm run dev
```

### Issue: MongoDB connection failed

**Solution:**
1. Check MongoDB Atlas whitelist
2. Verify connection string in `.env`
3. Check network connectivity

### Issue: CORS errors

**Solution:**
Update `ALLOWED_ORIGINS` in backend `.env`:
```env
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3001
```

## 📱 Mobile App Setup (Optional)

```bash
cd mobile
npm install

# Start Expo
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

## 🚀 Deployment Changes

### Backend (Render)

No changes needed! The new `server.js` is backward compatible.

### Frontend (Vercel)

**Website:**
```bash
cd frontend/website
vercel --prod
```

**CRM:**
```bash
cd frontend/crm
vercel --prod
```

## ✅ Verification Checklist

- [ ] Backend starts without errors
- [ ] Website loads correctly
- [ ] CRM loads correctly
- [ ] API calls work from website
- [ ] API calls work from CRM
- [ ] MongoDB connection successful
- [ ] File uploads work
- [ ] Authentication works
- [ ] All routes accessible

## 🔄 Rollback Plan

If something goes wrong:

```bash
# Stop all servers
# Restore backup
cd c:\Users\DELL\Desktop
rm -rf Penny-Debt
mv Penny-Debt-backup Penny-Debt
```

## 📞 Support

If you encounter issues:

1. Check the logs in terminal
2. Verify environment variables
3. Check MongoDB Atlas connection
4. Review [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
5. Check [DEPLOYMENT_SECURITY_GUIDE.md](./DEPLOYMENT_SECURITY_GUIDE.md)

## 🎉 Benefits After Migration

✅ No more build conflicts  
✅ Clear API separation  
✅ Better code organization  
✅ Easier to maintain  
✅ Ready for mobile app  
✅ Modern tech stack  
✅ Scalable architecture  

## 📝 Notes

- Old API endpoints still work (backward compatible)
- Gradually migrate to new endpoints
- Mobile APIs are ready for future use
- Shared utilities reduce code duplication
