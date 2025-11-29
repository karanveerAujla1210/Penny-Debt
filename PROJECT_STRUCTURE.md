# 🏗️ Penny-Debt Project Structure v2.0

## 📁 Complete Directory Structure

```
Penny-Debt/
│
├── backend/                        # Node.js + Express + MongoDB
│   ├── src/
│   │   ├── config/                 # Configuration files
│   │   │   ├── db.js              # MongoDB connection
│   │   │   └── env.js             # Environment variables
│   │   ├── models/                 # Mongoose models
│   │   ├── controllers/            # Business logic
│   │   ├── middlewares/            # Express middlewares
│   │   ├── services/               # Business services
│   │   ├── routes/
│   │   │   ├── crm/               # CRM API routes
│   │   │   ├── website/           # Public website routes
│   │   │   └── mobile/            # Mobile app routes
│   │   ├── utils/                  # Utility functions
│   │   ├── validations/            # Input validations
│   │   └── app.js                  # Express app setup
│   ├── tests/                      # Test files
│   │   └── integration/
│   ├── uploads/                    # File uploads
│   ├── server.js                   # Entry point
│   ├── package.json
│   ├── .env
│   └── README.md
│
├── frontend/
│   ├── website/                    # Public website (React + Vite)
│   │   ├── src/
│   │   │   ├── pages/             # Page components
│   │   │   ├── components/        # Reusable components
│   │   │   ├── layouts/           # Layout components
│   │   │   ├── hooks/             # Custom hooks
│   │   │   ├── utils/             # Utilities
│   │   │   ├── assets/            # Images, fonts
│   │   │   ├── routes/            # Routing configuration
│   │   │   └── main.jsx           # Entry point
│   │   ├── public/
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   └── tailwind.config.js
│   │
│   └── crm/                        # Internal CRM (React + Vite)
│       ├── src/
│       │   ├── pages/             # CRM pages
│       │   ├── components/        # CRM components
│       │   ├── modules/           # Feature modules
│       │   │   ├── leads/
│       │   │   ├── credit/
│       │   │   ├── collection/
│       │   │   ├── disbursement/
│       │   │   └── operations/
│       │   ├── layouts/           # Dashboard layouts
│       │   ├── hooks/             # Custom hooks
│       │   ├── context/           # React context
│       │   ├── utils/             # Utilities
│       │   ├── routes/            # CRM routing
│       │   └── main.jsx           # Entry point
│       ├── public/
│       ├── package.json
│       ├── vite.config.js
│       └── tailwind.config.js
│
├── mobile/                         # Mobile app (React Native + Expo)
│   ├── app/                        # Screens
│   │   ├── auth/                  # Authentication screens
│   │   ├── customer/              # Customer screens
│   │   ├── employee/              # Employee screens
│   │   └── shared/                # Shared screens
│   ├── components/                 # Reusable components
│   ├── constants/                  # Constants
│   ├── hooks/                      # Custom hooks
│   ├── services/                   # API services
│   │   └── api.js                 # API client
│   ├── assets/                     # Images, fonts
│   ├── App.js                      # Entry point
│   ├── app.json                    # Expo config
│   └── package.json
│
├── shared/                         # Shared code (Web + Mobile)
│   ├── utils/                      # Shared utilities
│   │   └── formatters.js          # Format functions
│   ├── constants/                  # Shared constants
│   │   └── index.js               # Constants
│   ├── validation/                 # Shared validations
│   │   └── schemas.js             # Validation schemas
│   └── types/                      # TypeScript types (future)
│
├── scripts/                        # Build & deployment scripts
│   ├── build-all.sh               # Build all projects
│   ├── deploy-website.sh          # Deploy website
│   ├── deploy-crm.sh              # Deploy CRM
│   └── verify-env.js              # Verify environment
│
├── infra/                          # Infrastructure & DevOps
│   ├── vercel/                    # Vercel configs
│   │   ├── website.json
│   │   └── crm.json
│   ├── docker/                    # Docker configs
│   │   ├── backend.Dockerfile
│   │   ├── website.Dockerfile
│   │   └── crm.Dockerfile
│   ├── nginx/                     # Nginx configs
│   │   └── website.conf
│   └── README.md
│
├── Junk/                           # Old/inactive files (archived)
│
├── .gitignore
├── package.json                    # Root package (optional)
├── README.md                       # Main documentation
├── PROJECT_STRUCTURE.md            # This file
└── MIGRATION_GUIDE.md              # Migration instructions
```

## 🔌 API Endpoint Structure

### New API Routes (v1)

| Service | Base URL | Description |
|---------|----------|-------------|
| Website | `/api/v1/website/*` | Public website APIs |
| CRM | `/api/v1/crm/*` | Internal CRM APIs |
| Mobile | `/api/v1/mobile/*` | Mobile app APIs |

### Legacy Routes (Deprecated)

| Service | Base URL | Status |
|---------|----------|--------|
| Website | `/api/*` | ⚠️ Backward compatible |
| CRM | `/api/crm/*` | ⚠️ Backward compatible |

## 🚀 Development URLs

| Service | Development | Production |
|---------|-------------|------------|
| Backend | http://localhost:5000 | https://api.pennyanddebt.in |
| Website | http://localhost:5173 | https://pennyanddebt.in |
| CRM | http://localhost:3001 | https://crmpennyanddebt.in |
| Mobile | http://localhost:8081 | - |

## 📦 Package Management

Each project has its own `package.json` and `node_modules`:

- ✅ **backend/package.json** - Backend dependencies
- ✅ **frontend/website/package.json** - Website dependencies
- ✅ **frontend/crm/package.json** - CRM dependencies
- ✅ **mobile/package.json** - Mobile dependencies

## 🔥 Key Features

### ✅ No More Build Conflicts
- Each app is completely isolated
- Separate `node_modules` for each project
- Independent build processes

### ✅ Clear API Separation
- Website APIs: `/api/v1/website/*`
- CRM APIs: `/api/v1/crm/*`
- Mobile APIs: `/api/v1/mobile/*`

### ✅ Shared Code
- Common utilities in `shared/`
- Reusable across web and mobile
- Single source of truth for constants

### ✅ Modern Tech Stack
- **Backend**: Express + MongoDB + JWT
- **Frontend**: React + Vite + Tailwind
- **Mobile**: React Native + Expo
- **Animations**: Framer Motion + GSAP + Lottie

## 📝 Next Steps

1. ✅ Structure created
2. ⏳ Install dependencies
3. ⏳ Migrate existing code
4. ⏳ Update API endpoints
5. ⏳ Test all routes
6. ⏳ Deploy to production

## 🔗 Related Documentation

- [README.md](./README.md) - Main documentation
- [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md) - How to migrate
- [DEPLOYMENT_SECURITY_GUIDE.md](./DEPLOYMENT_SECURITY_GUIDE.md) - Security setup
- [backend/README.md](./backend/README.md) - Backend docs
