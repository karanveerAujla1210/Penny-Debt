# 🏗️ Penny-Debt Architecture v2.0

## 🎯 System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     PENNY-DEBT ECOSYSTEM                     │
└─────────────────────────────────────────────────────────────┘

┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   Website    │  │     CRM      │  │    Mobile    │
│  (Public)    │  │  (Internal)  │  │     App      │
│              │  │              │  │              │
│ React + Vite │  │ React + Vite │  │ React Native │
│   Port 5173  │  │   Port 3001  │  │   Expo       │
└──────┬───────┘  └──────┬───────┘  └──────┬───────┘
       │                 │                 │
       │                 │                 │
       └─────────────────┼─────────────────┘
                         │
                         ▼
              ┌──────────────────┐
              │   Backend API    │
              │  Node.js + Express│
              │    Port 5000     │
              └────────┬─────────┘
                       │
                       ▼
              ┌──────────────────┐
              │  MongoDB Atlas   │
              │   (Database)     │
              └──────────────────┘
```

## 🔌 API Architecture

```
Backend API (Port 5000)
│
├── /api/v1/website/*     ← Website Frontend
│   ├── /auth
│   ├── /leads
│   ├── /customers
│   ├── /contacts
│   ├── /careers
│   ├── /services
│   ├── /testimonials
│   ├── /faqs
│   └── /blogs
│
├── /api/v1/crm/*         ← CRM Frontend
│   ├── /auth
│   ├── /dashboard
│   ├── /leads
│   ├── /customers
│   ├── /applications
│   ├── /employees
│   ├── /cases
│   ├── /payments
│   ├── /tasks
│   ├── /documents
│   └── /reports
│
└── /api/v1/mobile/*      ← Mobile App
    ├── /auth
    ├── /customer
    └── /employee
```

## 📁 Directory Architecture

```
Penny-Debt/
│
├── 🔧 backend/                    # Backend API Server
│   ├── src/
│   │   ├── config/               # Configuration
│   │   │   ├── db.js            # MongoDB connection
│   │   │   └── env.js           # Environment config
│   │   │
│   │   ├── models/               # Database models
│   │   │   ├── User.js
│   │   │   ├── Lead.js
│   │   │   ├── Customer.js
│   │   │   ├── Case.js
│   │   │   └── ...
│   │   │
│   │   ├── controllers/          # Business logic
│   │   │   ├── authController.js
│   │   │   ├── leadController.js
│   │   │   └── ...
│   │   │
│   │   ├── middlewares/          # Express middlewares
│   │   │   ├── auth.js
│   │   │   ├── validation.js
│   │   │   └── security.js
│   │   │
│   │   ├── services/             # Business services
│   │   │   ├── emailService.js
│   │   │   ├── smsService.js
│   │   │   └── ...
│   │   │
│   │   ├── routes/               # API routes
│   │   │   ├── website/         # Public routes
│   │   │   ├── crm/             # CRM routes
│   │   │   └── mobile/          # Mobile routes
│   │   │
│   │   ├── utils/                # Utilities
│   │   ├── validations/          # Input validations
│   │   └── app.js                # Express app
│   │
│   ├── tests/                    # Test files
│   ├── uploads/                  # File uploads
│   ├── server.js                 # Entry point
│   └── package.json
│
├── 🌐 frontend/                   # Frontend Applications
│   │
│   ├── website/                  # Public Website
│   │   ├── src/
│   │   │   ├── pages/           # Page components
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── Services.jsx
│   │   │   │   ├── About.jsx
│   │   │   │   └── ...
│   │   │   │
│   │   │   ├── components/      # Reusable components
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Hero.jsx
│   │   │   │   └── ...
│   │   │   │
│   │   │   ├── layouts/         # Layout components
│   │   │   ├── hooks/           # Custom hooks
│   │   │   ├── utils/           # Utilities
│   │   │   ├── assets/          # Images, fonts
│   │   │   └── routes/          # Routing
│   │   │
│   │   └── package.json
│   │
│   └── crm/                      # Internal CRM
│       ├── src/
│       │   ├── pages/           # CRM pages
│       │   │   ├── Dashboard.jsx
│       │   │   ├── Leads.jsx
│       │   │   ├── Customers.jsx
│       │   │   └── ...
│       │   │
│       │   ├── components/      # CRM components
│       │   │   ├── Sidebar.jsx
│       │   │   ├── DataTable.jsx
│       │   │   ├── Charts.jsx
│       │   │   └── ...
│       │   │
│       │   ├── modules/         # Feature modules
│       │   │   ├── leads/
│       │   │   ├── credit/
│       │   │   ├── collection/
│       │   │   └── ...
│       │   │
│       │   ├── layouts/         # Dashboard layouts
│       │   ├── hooks/           # Custom hooks
│       │   ├── context/         # React context
│       │   └── routes/          # CRM routing
│       │
│       └── package.json
│
├── 📱 mobile/                     # Mobile Application
│   ├── app/                      # Screens
│   │   ├── auth/                # Auth screens
│   │   ├── customer/            # Customer screens
│   │   ├── employee/            # Employee screens
│   │   └── shared/              # Shared screens
│   │
│   ├── components/               # Reusable components
│   ├── constants/                # Constants
│   ├── hooks/                    # Custom hooks
│   ├── services/                 # API services
│   ├── assets/                   # Images, fonts
│   ├── App.js                    # Entry point
│   └── package.json
│
├── 🔄 shared/                     # Shared Code
│   ├── utils/                    # Shared utilities
│   │   └── formatters.js        # Format functions
│   │
│   ├── constants/                # Shared constants
│   │   └── index.js             # Constants
│   │
│   ├── validation/               # Shared validations
│   │   └── schemas.js           # Validation schemas
│   │
│   └── types/                    # TypeScript types
│
├── 🚀 scripts/                    # Build & Deploy Scripts
│   ├── build-all.sh             # Build all projects
│   ├── deploy-website.sh        # Deploy website
│   ├── deploy-crm.sh            # Deploy CRM
│   └── verify-env.js            # Verify environment
│
├── 🏗️ infra/                      # Infrastructure
│   ├── vercel/                  # Vercel configs
│   │   ├── website.json
│   │   └── crm.json
│   │
│   ├── docker/                  # Docker configs
│   │   ├── backend.Dockerfile
│   │   ├── website.Dockerfile
│   │   └── crm.Dockerfile
│   │
│   └── nginx/                   # Nginx configs
│       └── website.conf
│
└── 📚 Documentation
    ├── README.md
    ├── INSTALL.md
    ├── PROJECT_STRUCTURE.md
    ├── MIGRATION_GUIDE.md
    └── ARCHITECTURE_V2.md
```

## 🔐 Security Architecture

```
┌─────────────────────────────────────────┐
│         Security Layers                  │
└─────────────────────────────────────────┘

1. Network Layer
   ├── HTTPS/TLS Encryption
   ├── CORS Protection
   └── Rate Limiting

2. Application Layer
   ├── JWT Authentication
   ├── Password Hashing (bcrypt)
   ├── Input Validation
   └── MongoDB Sanitization

3. Data Layer
   ├── Encrypted Connections
   ├── Access Control
   └── Backup & Recovery
```

## 📊 Data Flow

### Website Lead Submission

```
User Form → Website Frontend → Backend API → MongoDB
                                    ↓
                              Email Service
                                    ↓
                            Notification Sent
```

### CRM Employee Login

```
Login Form → CRM Frontend → Backend API → Verify JWT
                                ↓
                          Check Permissions
                                ↓
                          Return Dashboard Data
```

### Mobile Customer Portal

```
Mobile App → Mobile API → Verify Token → MongoDB
                ↓
          Return Customer Data
                ↓
          Display in App
```

## 🚀 Deployment Architecture

```
┌─────────────────────────────────────────┐
│         Production Environment           │
└─────────────────────────────────────────┘

Website (Vercel)
├── Domain: pennyanddebt.in
├── CDN: Global Edge Network
└── Build: Automatic on push

CRM (Vercel)
├── Domain: crmpennyanddebt.in
├── CDN: Global Edge Network
└── Build: Automatic on push

Backend (Render)
├── Domain: api.pennyanddebt.in
├── Region: Mumbai (bom1)
├── Auto-scaling: Enabled
└── Health Checks: /health

Database (MongoDB Atlas)
├── Region: Mumbai (ap-south-1)
├── Tier: M10 (Production)
├── Backup: Daily snapshots
└── Monitoring: 24/7
```

## 🔄 Development Workflow

```
1. Local Development
   ├── Backend: localhost:5000
   ├── Website: localhost:5173
   └── CRM: localhost:3001

2. Git Push
   └── Push to GitHub

3. Automatic Deployment
   ├── Backend → Render
   ├── Website → Vercel
   └── CRM → Vercel

4. Production
   ├── Backend: api.pennyanddebt.in
   ├── Website: pennyanddebt.in
   └── CRM: crmpennyanddebt.in
```

## 📦 Package Management

```
Each project has isolated dependencies:

backend/
└── node_modules/        # Backend only

frontend/website/
└── node_modules/        # Website only

frontend/crm/
└── node_modules/        # CRM only

mobile/
└── node_modules/        # Mobile only

✅ No conflicts!
✅ Independent builds!
✅ Clean separation!
```

## 🎯 Key Benefits

### 1. Scalability
- ✅ Each service scales independently
- ✅ Microservices-ready architecture
- ✅ Easy to add new features

### 2. Maintainability
- ✅ Clear code organization
- ✅ Separated concerns
- ✅ Easy to debug

### 3. Performance
- ✅ Optimized builds
- ✅ CDN delivery
- ✅ Caching strategies

### 4. Security
- ✅ Multiple security layers
- ✅ JWT authentication
- ✅ Rate limiting

### 5. Developer Experience
- ✅ Hot reload
- ✅ Clear structure
- ✅ Good documentation

---

**Version**: 2.0.0  
**Architecture**: Modern Mono-Repo  
**Status**: ✅ Production Ready
