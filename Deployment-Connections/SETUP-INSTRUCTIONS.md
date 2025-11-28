# Deployment Setup Instructions

## ✅ Current Status

Connection test files created. Configure your actual deployment URLs to test.

## 🔧 Setup Steps

### 1. MongoDB Atlas
1. Go to https://cloud.mongodb.com
2. Create/Login to account
3. Create cluster (free tier available)
4. Get connection string
5. Add to `backend/.env`:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pennydebt
   ```

### 2. Render (Backend)
1. Go to https://render.com
2. Connect GitHub repo
3. Use `render.yaml` for configuration
4. Add environment variables from `backend/.env`
5. Deploy
6. Copy URL and add to `Deployment-Connections/.env`:
   ```env
   RENDER_URL=https://your-app.onrender.com
   ```

### 3. Vercel (Website)
1. Go to https://vercel.com
2. Import project
3. Set root directory: `frontend/website`
4. Add environment variable:
   ```env
   VITE_API_BASE_URL=https://your-app.onrender.com/api
   ```
5. Deploy
6. Copy URL

### 4. Vercel (CRM)
1. Create new project on Vercel
2. Import same repo
3. Set root directory: `frontend/crm`
4. Add environment variable:
   ```env
   VITE_API_BASE_URL=https://your-app.onrender.com/api/crm
   ```
5. Deploy
6. Copy URL

## 🧪 Test Connections

### Local Test
```bash
cd Deployment-Connections
npm run test:local
```

### Production Test
1. Update `.env` with your URLs
2. Run:
```bash
npm test
```

## 📝 Files Created

- `render.yaml` - Render backend config
- `vercel-website.json` - Vercel website config
- `vercel-crm.json` - Vercel CRM config
- `mongodb-connection.md` - MongoDB setup guide
- `test-connections.js` - Production connection test
- `test-local.js` - Local connection test
- `package.json` - Test dependencies

## ⚠️ Important

Update `backend/.env` with real MongoDB URI before testing!
