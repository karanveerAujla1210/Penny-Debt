# 🏦 Penny Debt CRM System v2.0

Modern full-stack debt relief CRM application with React frontend, Node.js backend, and MongoDB database.

## ✨ What's New in v2.0

🎯 **Complete Architecture Overhaul**
- ✅ Modern mono-repo structure
- ✅ Separated API routes (Website, CRM, Mobile)
- ✅ Zero build conflicts
- ✅ Mobile app ready
- ✅ Shared utilities across platforms
- ✅ Production-grade security
- ✅ Docker & CI/CD ready

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- MongoDB Atlas account
- Gmail account (for SMTP)

### Installation

```bash
# Windows
install-all.bat

# Linux/Mac
chmod +x scripts/build-all.sh
./scripts/build-all.sh
```

### Configuration

1. **Backend** (`backend/.env`):
```env
MONGODB_URI=your_mongodb_connection_string
SMTP_USER=care@pennyanddebt.in
SMTP_PASS=your_gmail_app_password
JWT_SECRET=your_secret_key
```

2. **Website** (`frontend/website/.env`):
```env
VITE_API_BASE_URL=http://localhost:5000/api/v1/website
```

3. **CRM** (`frontend/crm/.env`):
```env
VITE_API_BASE_URL=http://localhost:5000/api/v1/crm
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

## 🌐 Access

### Development
- **Backend API**: http://localhost:5000
- **Website**: http://localhost:5173
- **CRM**: http://localhost:3001
- **Health Check**: http://localhost:5000/health

### Production
- **Website**: https://pennyanddebt.in
- **CRM**: https://crmpennyanddebt.in
- **Backend API**: https://api.pennyanddebt.in

## 📁 Project Structure

```
Penny-Debt/
├── backend/              # Node.js + Express + MongoDB
│   ├── src/
│   │   ├── config/      # DB, ENV configuration
│   │   ├── routes/
│   │   │   ├── website/ # Public API routes
│   │   │   ├── crm/     # CRM API routes
│   │   │   └── mobile/  # Mobile API routes
│   │   └── app.js       # Express app
│   └── server.js        # Entry point
│
├── frontend/
│   ├── website/         # Public website (React + Vite)
│   └── crm/             # Internal CRM (React + Vite)
│
├── mobile/              # Mobile app (React Native + Expo)
│   ├── app/
│   ├── components/
│   └── services/
│
├── shared/              # Shared code (Web + Mobile)
│   ├── utils/
│   ├── constants/
│   └── validation/
│
├── scripts/             # Build & deployment scripts
├── infra/               # Docker, Vercel, Nginx configs
└── Junk/                # Old files (archived)
```

## 🔌 API Routes

### New API Structure (v1)

| Service | Base URL | Description |
|---------|----------|-------------|
| Website | `/api/v1/website/*` | Public website APIs |
| CRM | `/api/v1/crm/*` | Internal CRM APIs |
| Mobile | `/api/v1/mobile/*` | Mobile app APIs |

### Legacy Routes (Backward Compatible)

| Service | Base URL | Status |
|---------|----------|--------|
| Website | `/api/*` | ⚠️ Deprecated |
| CRM | `/api/crm/*` | ⚠️ Deprecated |

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT + bcryptjs
- **Email**: Nodemailer
- **Security**: Helmet, CORS, Rate Limiting
- **Validation**: Joi, Express Validator

### Frontend (Website)
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, ShadCN
- **Animations**: Framer Motion, GSAP, Lottie
- **State**: Zustand
- **Routing**: React Router v6
- **HTTP**: Axios

### Frontend (CRM)
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Tables**: AG Grid, React Table
- **Charts**: Recharts, Chart.js
- **Forms**: React Hook Form + Zod
- **State**: Zustand
- **Routing**: React Router v6

### Mobile
- **Framework**: React Native
- **Platform**: Expo
- **Navigation**: Expo Router
- **Animations**: Reanimated, Moti
- **Storage**: Expo Secure Store
- **HTTP**: Axios

## 📦 Features

### Website (Public)
- ✅ Landing page with animations
- ✅ Service pages
- ✅ Lead generation forms
- ✅ Contact forms
- ✅ Career applications
- ✅ Blog system
- ✅ FAQ section
- ✅ Testimonials

### CRM (Internal)
- ✅ Role-based dashboards (18+ employee types)
- ✅ Lead management
- ✅ Customer management
- ✅ Application tracking
- ✅ Case management
- ✅ Payment tracking
- ✅ Task management
- ✅ Document management
- ✅ Reporting & analytics
- ✅ Employee management

### Mobile (Coming Soon)
- 🔄 Customer portal
- 🔄 Employee field app
- 🔄 Push notifications
- 🔄 Biometric authentication
- 🔄 Offline support

## 🔐 Security Features

- ✅ JWT authentication
- ✅ Password hashing (bcrypt)
- ✅ Rate limiting
- ✅ CORS protection
- ✅ Helmet security headers
- ✅ MongoDB injection protection
- ✅ XSS protection
- ✅ HTTPS enforcement (production)
- ✅ Input validation
- ✅ File upload restrictions

## 📚 Documentation

- **[INSTALL.md](./INSTALL.md)** - Complete installation guide
- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Architecture details
- **[MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)** - Migration from v1 to v2
- **[DEPLOYMENT_SECURITY_GUIDE.md](./DEPLOYMENT_SECURITY_GUIDE.md)** - Production deployment
- **[backend/README.md](./backend/README.md)** - Backend API documentation

## 🚀 Deployment

### Backend (Render)

```bash
# Automatic deployment via GitHub
git push origin main
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

### Docker

```bash
# Build all images
docker-compose up -d
```

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend/website
npm test

cd frontend/crm
npm test
```

## 📊 Monitoring

- **Health Check**: `/health`
- **API Status**: `/api/v1/status`
- **MongoDB**: MongoDB Atlas Dashboard
- **Logs**: Render Dashboard / Winston logs

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 Environment Variables

### Required

- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT secret key
- `SMTP_USER` - Email username
- `SMTP_PASS` - Email password

### Optional

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `ALLOWED_ORIGINS` - CORS origins
- `RATE_LIMIT_WINDOW_MS` - Rate limit window
- `RATE_LIMIT_MAX_REQUESTS` - Max requests per window

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

1. Check MongoDB Atlas IP whitelist
2. Verify connection string
3. Test connection: `node backend/scripts/mongo-ping.js`

### Build Errors

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

- **Email**: care@pennyanddebt.in
- **Website**: https://pennyanddebt.in
- **Documentation**: [Full Docs](./docs/)

## 📄 License

MIT License - see [LICENSE](./LICENSE) file

## 🎉 Acknowledgments

- Built with ❤️ for Penny & Debt
- Modern fintech-grade architecture
- Production-ready and scalable

---

**Version**: 2.0.0  
**Last Updated**: 2024  
**Status**: ✅ Production Ready
