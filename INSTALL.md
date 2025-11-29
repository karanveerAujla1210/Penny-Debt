# 🚀 Installation Guide - Penny-Debt v2.0

Complete installation guide for the Penny-Debt CRM system.

## 📋 Prerequisites

- **Node.js** 16+ ([Download](https://nodejs.org/))
- **MongoDB Atlas** account ([Sign up](https://www.mongodb.com/cloud/atlas))
- **Git** ([Download](https://git-scm.com/))
- **Gmail** account for SMTP

## 🎯 Quick Install (Recommended)

### Windows

```bash
# Clone repository
git clone https://github.com/your-repo/Penny-Debt.git
cd Penny-Debt

# Run installation script
install-all.bat
```

### Linux/Mac

```bash
# Clone repository
git clone https://github.com/your-repo/Penny-Debt.git
cd Penny-Debt

# Make script executable
chmod +x scripts/build-all.sh

# Run installation
./scripts/build-all.sh
```

## 📦 Manual Installation

### Step 1: Install Backend

```bash
cd backend
npm install
```

### Step 2: Install Website

```bash
cd frontend/website
npm install
```

### Step 3: Install CRM

```bash
cd frontend/crm
npm install
```

### Step 4: Install Mobile (Optional)

```bash
cd mobile
npm install
```

## ⚙️ Configuration

### 1. Backend Configuration

Create `backend/.env`:

```env
# Server
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pennydebt

# JWT
JWT_SECRET=generate-random-secret-here
SESSION_SECRET=generate-random-secret-here

# Email
SMTP_USER=care@pennyanddebt.in
SMTP_PASS=your-gmail-app-password

# CORS
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3001
```

**Generate secrets:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 2. Website Configuration

Create `frontend/website/.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api/v1/website
```

### 3. CRM Configuration

Create `frontend/crm/.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api/v1/crm
```

### 4. Mobile Configuration (Optional)

Create `mobile/.env`:

```env
API_BASE_URL=http://localhost:5000/api/v1/mobile
```

## 🗄️ Database Setup

### MongoDB Atlas

1. **Create Cluster**
   - Go to [MongoDB Atlas](https://cloud.mongodb.com)
   - Create new cluster (Free tier available)

2. **Create Database User**
   - Database Access → Add New User
   - Username: `penny_debt_user`
   - Password: Generate strong password

3. **Whitelist IP**
   - Network Access → Add IP Address
   - Add `0.0.0.0/0` (for development)
   - For production, add specific IPs

4. **Get Connection String**
   - Clusters → Connect → Connect your application
   - Copy connection string
   - Replace `<password>` with your password
   - Add to `backend/.env`

## 📧 Email Setup (Gmail)

1. **Enable 2-Step Verification**
   - Go to [Google Account](https://myaccount.google.com)
   - Security → 2-Step Verification

2. **Generate App Password**
   - Security → App passwords
   - Select app: Mail
   - Select device: Other (Custom name)
   - Name: "Penny Debt Backend"
   - Copy generated password

3. **Add to .env**
   ```env
   SMTP_USER=care@pennyanddebt.in
   SMTP_PASS=generated-app-password
   ```

## ✅ Verify Installation

Run verification script:

```bash
node scripts/verify-env.js
```

Expected output:
```
✅ All environment configurations are valid!
```

## 🚀 Start Development

### Option 1: Separate Terminals

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Website
cd frontend/website
npm run dev

# Terminal 3 - CRM
cd frontend/crm
npm run dev
```

### Option 2: Using start-all script (Windows)

```bash
start-all.bat
```

## 🌐 Access Applications

After starting all services:

- **Backend API**: http://localhost:5000
- **Website**: http://localhost:5173
- **CRM**: http://localhost:3001
- **Health Check**: http://localhost:5000/health

## 🧪 Test Installation

### Test Backend

```bash
curl http://localhost:5000/health
```

Expected response:
```json
{
  "status": "OK",
  "mongodb": {
    "connected": true
  }
}
```

### Test Website

Open browser: http://localhost:5173

### Test CRM

Open browser: http://localhost:3001

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5000 | xargs kill -9
```

### MongoDB Connection Failed

1. Check connection string format
2. Verify username/password
3. Check IP whitelist in MongoDB Atlas
4. Test connection:
   ```bash
   cd backend
   node scripts/mongo-ping.js
   ```

### Module Not Found

```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

### CORS Errors

Update `ALLOWED_ORIGINS` in `backend/.env`:
```env
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3001
```

## 📱 Mobile App Setup (Optional)

### Install Expo CLI

```bash
npm install -g expo-cli
```

### Start Mobile App

```bash
cd mobile
npm start
```

### Run on Device

1. Install Expo Go app on your phone
2. Scan QR code from terminal
3. App will load on your device

## 🔄 Update Installation

```bash
# Pull latest changes
git pull origin main

# Update dependencies
cd backend && npm install
cd ../frontend/website && npm install
cd ../crm && npm install
```

## 📚 Next Steps

1. ✅ Installation complete
2. 📖 Read [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
3. 🔄 Follow [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)
4. 🚀 Check [DEPLOYMENT_SECURITY_GUIDE.md](./DEPLOYMENT_SECURITY_GUIDE.md)
5. 💻 Start developing!

## 📞 Support

Need help?

- 📧 Email: care@pennyanddebt.in
- 📖 Documentation: [README.md](./README.md)
- 🐛 Issues: GitHub Issues

## 🎉 Success!

If you see all three applications running without errors, congratulations! 🎊

Your Penny-Debt development environment is ready!
