# Deployment Connections

## 🚀 Services

### Render (Backend)
- **File**: `render.yaml`
- **Deploy**: Backend Node.js + MongoDB
- **URL**: https://your-app.onrender.com
- **Port**: 5000

### Vercel (Website)
- **File**: `vercel-website.json`
- **Deploy**: Public website frontend
- **URL**: https://your-website.vercel.app
- **Build**: `frontend/website`

### Vercel (CRM)
- **File**: `vercel-crm.json`
- **Deploy**: Internal CRM frontend
- **URL**: https://your-crm.vercel.app
- **Build**: `frontend/crm`

### MongoDB Atlas
- **File**: `mongodb-connection.md`
- **Database**: pennydebt
- **Connection**: MongoDB Atlas cluster

## 🧪 Test Connections

```bash
cd Deployment-Connections
npm install
npm test
```

## 📝 Environment Variables

### Render (Backend)
```env
MONGODB_URI=mongodb+srv://...
SMTP_USER=care@pennyanddebt.in
SMTP_PASS=your_password
JWT_SECRET=your_secret
ALLOWED_ORIGINS=https://your-website.vercel.app,https://your-crm.vercel.app
```

### Vercel Website
```env
VITE_API_BASE_URL=https://your-app.railway.app/api
```

### Vercel CRM
```env
VITE_API_BASE_URL=https://your-app.railway.app/api/crm
```

## 🔗 Connection Flow

```
Website (Vercel) ──→ Backend (Render) ──→ MongoDB (Atlas)
                          ↑
CRM (Vercel) ─────────────┘
```

## ✅ Deployment Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Render backend deployed
- [ ] Vercel website deployed
- [ ] Vercel CRM deployed
- [ ] Environment variables set
- [ ] CORS origins configured
- [ ] Test connections passed
