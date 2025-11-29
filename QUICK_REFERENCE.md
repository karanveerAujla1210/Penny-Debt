# ⚡ Quick Reference - Penny-Debt v2.0

## 🚀 Quick Commands

### Installation
```bash
# Windows
install-all.bat

# Linux/Mac
./scripts/build-all.sh
```

### Start Development
```bash
# Windows
start-all.bat

# Linux/Mac - Use 3 terminals
cd backend && npm run dev
cd frontend/website && npm run dev
cd frontend/crm && npm run dev
```

### Verify Setup
```bash
node scripts/verify-env.js
```

## 🌐 URLs

| Service | Development | Production |
|---------|-------------|------------|
| Backend | http://localhost:5000 | https://api.pennyanddebt.in |
| Website | http://localhost:5173 | https://pennyanddebt.in |
| CRM | http://localhost:3001 | https://crmpennyanddebt.in |
| Health | http://localhost:5000/health | https://api.pennyanddebt.in/health |

## 🔌 API Endpoints

### Website API
```
/api/v1/website/auth
/api/v1/website/leads
/api/v1/website/customers
/api/v1/website/contacts
/api/v1/website/careers
/api/v1/website/services
/api/v1/website/testimonials
/api/v1/website/faqs
/api/v1/website/blogs
```

### CRM API
```
/api/v1/crm/auth
/api/v1/crm/dashboard
/api/v1/crm/leads
/api/v1/crm/customers
/api/v1/crm/applications
/api/v1/crm/employees
/api/v1/crm/cases
/api/v1/crm/payments
/api/v1/crm/tasks
/api/v1/crm/documents
/api/v1/crm/reports
```

### Mobile API
```
/api/v1/mobile/auth
/api/v1/mobile/customer
/api/v1/mobile/employee
```

## 📁 Project Structure

```
Penny-Debt/
├── backend/              # Node.js API
├── frontend/
│   ├── website/         # Public site
│   └── crm/             # Employee dashboard
├── mobile/              # React Native app
├── shared/              # Common code
├── scripts/             # Build scripts
└── infra/               # DevOps configs
```

## ⚙️ Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your_secret
SMTP_USER=care@pennyanddebt.in
SMTP_PASS=your_app_password
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3001
```

### Website (.env)
```env
VITE_API_BASE_URL=http://localhost:5000/api/v1/website
```

### CRM (.env)
```env
VITE_API_BASE_URL=http://localhost:5000/api/v1/crm
```

## 🔧 Common Tasks

### Install Dependencies
```bash
cd backend && npm install
cd frontend/website && npm install
cd frontend/crm && npm install
```

### Build for Production
```bash
cd frontend/website && npm run build
cd frontend/crm && npm run build
```

### Run Tests
```bash
cd backend && npm test
```

### Generate Secret
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Kill Port
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5000 | xargs kill -9
```

## 🐛 Troubleshooting

### MongoDB Connection Failed
```bash
# Test connection
cd backend
node scripts/mongo-ping.js
```

### Port Already in Use
```bash
# Use different port
PORT=5001 npm run dev
```

### Module Not Found
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### CORS Error
```env
# Update backend/.env
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3001
```

## 📚 Documentation

| File | Description |
|------|-------------|
| [README.md](./README.md) | Main documentation |
| [INSTALL.md](./INSTALL.md) | Installation guide |
| [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) | Architecture |
| [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) | Migration steps |
| [backend/README.md](./backend/README.md) | API docs |

## 🚀 Deployment

### Backend (Render)
```bash
git push origin main
# Auto-deploys via GitHub
```

### Website (Vercel)
```bash
cd frontend/website
vercel --prod
```

### CRM (Vercel)
```bash
cd frontend/crm
vercel --prod
```

## 📦 Tech Stack

**Backend**: Express + MongoDB + JWT  
**Frontend**: React + Vite + Tailwind  
**Mobile**: React Native + Expo  
**Animations**: Framer Motion + GSAP + Lottie  
**State**: Zustand  
**Forms**: React Hook Form + Zod  
**Tables**: AG Grid  
**Charts**: Recharts  

## 🔐 Security

- ✅ JWT authentication
- ✅ Password hashing
- ✅ Rate limiting
- ✅ CORS protection
- ✅ Helmet headers
- ✅ Input validation
- ✅ MongoDB sanitization

## 📞 Support

**Email**: care@pennyanddebt.in  
**Website**: https://pennyanddebt.in  

---

**Version**: 2.0.0  
**Status**: ✅ Production Ready
