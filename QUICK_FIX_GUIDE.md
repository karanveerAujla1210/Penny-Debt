# 🚀 Quick Fix Guide - Penny Debt CRM

## ✅ What Was Fixed

1. **Backend Model Imports** - Fixed incorrect model paths
2. **API Endpoints** - Updated to v1 structure
3. **Frontend API Services** - Created centralized API layers
4. **Environment Variables** - Corrected API URLs

---

## 🔧 Installation & Setup

### Step 1: Install Dependencies

```bash
# Backend
cd backend
npm install

# Website Frontend
cd ../frontend/website
npm install

# CRM Frontend
cd ../frontend/crm
npm install
```

### Step 2: Configure Environment Variables

**Backend** (`backend/.env`):
```env
MONGODB_URI=mongodb+srv://singh2212karanveer_db_user:Aujla1210@cluster0.0xgwopz.mongodb.net/pennydebt?retryWrites=true&w=majority
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=care@pennyanddebt.in
SMTP_PASS=YOUR_GMAIL_APP_PASSWORD_HERE
JWT_SECRET=penny_debt_secret_key_2024
NODE_ENV=development
PORT=5000
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3001
```

**Website** (`frontend/website/.env`):
```env
VITE_API_BASE_URL=http://localhost:5000/api/v1/website
```

**CRM** (`frontend/crm/.env`):
```env
VITE_API_BASE_URL=http://localhost:5000/api/v1/crm
```

### Step 3: Start Development Servers

**Option A: Using Batch File (Windows)**
```bash
start-all.bat
```

**Option B: Manual Start (3 Terminals)**

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Website:
```bash
cd frontend/website
npm run dev
```

Terminal 3 - CRM:
```bash
cd frontend/crm
npm run dev
```

---

## 🌐 Access URLs

- **Backend API**: http://localhost:5000
- **Website**: http://localhost:5173
- **CRM**: http://localhost:3001
- **Health Check**: http://localhost:5000/health

---

## 🧪 Quick Test

### Test Backend
```bash
curl http://localhost:5000/health
```

Expected Response:
```json
{
  "status": "OK",
  "timestamp": "2024-...",
  "environment": "development",
  "mongodb": {
    "connected": true,
    "state": "connected"
  }
}
```

### Test Website API
```bash
curl http://localhost:5000/api/v1/website/services
```

### Test CRM API
```bash
curl http://localhost:5000/api/v1/crm/dashboard/stats
```

---

## 📁 New Files Created

1. `frontend/website/src/services/api.js` - Website API service
2. `frontend/crm/src/services/api.js` - CRM API service
3. `PROJECT_STATUS_AND_FIXES.md` - Detailed project analysis
4. `QUICK_FIX_GUIDE.md` - This file

---

## 🔄 How to Use New API Services

### Website Example (Lead Submission)

```javascript
import { leadService } from '../services/api';

const handleSubmit = async (formData) => {
  try {
    const response = await leadService.submit(formData);
    console.log('Success:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data);
  }
};
```

### CRM Example (Get Leads)

```javascript
import { leadService } from '../services/api';

const fetchLeads = async () => {
  try {
    const response = await leadService.getAll({ status: 'new' });
    console.log('Leads:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data);
  }
};
```

---

## ⚠️ Important Notes

1. **SMTP Password**: You must set `SMTP_PASS` in backend/.env for email functionality
2. **MongoDB**: Connection string is already configured and working
3. **CORS**: Localhost origins are already whitelisted
4. **Authentication**: CRM uses local authentication (see `frontend/crm/src/utils/auth.js`)

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### MongoDB Connection Error
- Check internet connection
- Verify MongoDB Atlas IP whitelist (0.0.0.0/0 for development)
- Test connection string

### Build Errors
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### CORS Errors
- Verify ALLOWED_ORIGINS in backend/.env
- Check frontend .env API URLs
- Restart backend server

---

## 📊 Project Structure Overview

```
Penny-Debt/
├── backend/                    # Node.js + Express + MongoDB
│   ├── src/
│   │   ├── routes/
│   │   │   ├── website/       # ✅ Public API
│   │   │   ├── crm/           # ✅ CRM API
│   │   │   └── mobile/        # ✅ Mobile API
│   │   ├── config/            # ✅ DB config
│   │   └── app.js             # ✅ Express app
│   ├── models-website/        # ✅ MongoDB models
│   └── server.js              # ✅ Entry point
│
├── frontend/
│   ├── website/               # ✅ Public website
│   │   └── src/services/      # ✅ NEW - API layer
│   └── crm/                   # ✅ Internal CRM
│       └── src/services/      # ✅ NEW - API layer
│
└── mobile/                    # 🔄 React Native (future)
```

---

## ✅ Verification Checklist

- [ ] Backend starts without errors
- [ ] Website starts on port 5173
- [ ] CRM starts on port 3001
- [ ] Health check returns OK
- [ ] MongoDB shows "connected"
- [ ] No CORS errors in browser console
- [ ] API services imported successfully

---

## 🎯 Next Development Steps

1. **Update Frontend Pages**
   - Import API services
   - Replace hardcoded API calls
   - Add error handling

2. **Implement Missing Routes**
   - Complete CRM route handlers
   - Add authentication middleware
   - Implement file upload routes

3. **Testing**
   - Test all API endpoints
   - Test form submissions
   - Test authentication flows

4. **Production Deployment**
   - Update production environment variables
   - Deploy to Render (backend)
   - Deploy to Vercel (frontends)

---

## 📞 Support

- **Email**: care@pennyanddebt.in
- **Documentation**: See PROJECT_STATUS_AND_FIXES.md
- **README**: See main README.md

---

**Status**: ✅ All Critical Fixes Applied
**Ready For**: Development & Testing
**Last Updated**: 2024
