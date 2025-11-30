# 🏗️ Penny-Debt Architecture - Visual Guide

## 🎯 System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     PENNY-DEBT CRM SYSTEM                        │
│                         Version 2.0                              │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   WEBSITE    │     │     CRM      │     │    MOBILE    │
│  (Public)    │     │  (Internal)  │     │   (Future)   │
│              │     │              │     │              │
│ Port: 5173   │     │ Port: 3001   │     │ Port: 8081   │
└──────┬───────┘     └──────┬───────┘     └──────┬───────┘
       │                    │                    │
       │                    │                    │
       └────────────────────┼────────────────────┘
                            │
                            ▼
                ┌───────────────────────┐
                │   BACKEND API SERVER  │
                │   Node.js + Express   │
                │     Port: 5000        │
                └───────────┬───────────┘
                            │
                            ▼
                ┌───────────────────────┐
                │   MongoDB Atlas       │
                │   Database: pennydebt │
                └───────────────────────┘
```

---

## 🔌 API Routes Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      BACKEND API ROUTES                          │
└─────────────────────────────────────────────────────────────────┘

/api/v1/website/*  ──────────────┐
                                  │
  ├─ /auth/login                 │
  ├─ /auth/register              │
  ├─ /leads/submit               │──► Website Frontend
  ├─ /contacts/submit            │    (Public Access)
  ├─ /careers/submit             │
  ├─ /loan-applications/submit   │
  ├─ /testimonials               │
  ├─ /services                   │
  ├─ /faqs                       │
  ├─ /blogs                      │
  └─ /otp/send, /otp/verify     ┘


/api/v1/crm/*  ──────────────────┐
                                  │
  ├─ /auth/login                 │
  ├─ /dashboard/stats            │
  ├─ /leads (CRUD)               │
  ├─ /customers (CRUD)           │──► CRM Frontend
  ├─ /applications (CRUD)        │    (Employee Access)
  ├─ /employees (CRUD)           │
  ├─ /cases (CRUD)               │
  ├─ /payments (CRUD)            │
  ├─ /tasks (CRUD)               │
  ├─ /documents (CRUD)           │
  └─ /reports/*                  ┘


/api/v1/mobile/*  ───────────────┐
                                  │
  ├─ /auth/*                     │──► Mobile App
  ├─ /customer/*                 │    (Future)
  └─ /employee/*                 ┘
```

---

## 📁 Project Structure (Detailed)

```
Penny-Debt/
│
├── 🔧 backend/                          # Node.js Backend
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js                    # ✅ MongoDB connection
│   │   │
│   │   ├── routes/
│   │   │   ├── website/                 # ✅ Public API routes
│   │   │   │   ├── auth.js
│   │   │   │   ├── leads.js
│   │   │   │   ├── contacts.js
│   │   │   │   ├── careers.js
│   │   │   │   ├── loanApplications.js
│   │   │   │   ├── testimonials.js
│   │   │   │   ├── services.js
│   │   │   │   ├── faqs.js
│   │   │   │   ├── blogs.js
│   │   │   │   └── otp.js
│   │   │   │
│   │   │   ├── crm/                     # ✅ CRM API routes
│   │   │   │   ├── auth.js
│   │   │   │   ├── dashboard.js
│   │   │   │   ├── leads.js
│   │   │   │   ├── customers.js
│   │   │   │   ├── applications.js
│   │   │   │   ├── employees.js
│   │   │   │   ├── cases.js
│   │   │   │   ├── payments.js
│   │   │   │   ├── tasks.js
│   │   │   │   ├── documents.js
│   │   │   │   └── reports.js
│   │   │   │
│   │   │   └── mobile/                  # ✅ Mobile API routes
│   │   │       ├── auth.js
│   │   │       ├── customer.js
│   │   │       └── employee.js
│   │   │
│   │   └── app.js                       # ✅ Express app setup
│   │
│   ├── models-website/                  # ✅ MongoDB Models
│   │   ├── Lead.js
│   │   ├── Activity.js
│   │   ├── Customer.js
│   │   ├── Contact.js
│   │   ├── Career.js
│   │   ├── LoanApplication.js
│   │   ├── Testimonial.js
│   │   ├── Service.js
│   │   ├── FAQ.js
│   │   └── Blog.js
│   │
│   ├── middleware/                      # ✅ Middleware
│   │   ├── auth.js
│   │   ├── validation.js
│   │   ├── security.js
│   │   └── fileUpload.js
│   │
│   ├── .env                             # ✅ Environment variables
│   ├── server.js                        # ✅ Entry point
│   ├── package.json                     # ✅ Dependencies
│   └── render.yaml                      # ✅ Deployment config
│
├── 🌐 frontend/
│   │
│   ├── website/                         # Public Website
│   │   ├── src/
│   │   │   ├── components/              # ✅ UI Components
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Header.jsx
│   │   │   │   └── ...
│   │   │   │
│   │   │   ├── pages/                   # ✅ Pages
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── About.jsx
│   │   │   │   ├── Services.jsx
│   │   │   │   ├── Contact.jsx
│   │   │   │   ├── ApplyLoan.jsx
│   │   │   │   ├── Careers.jsx
│   │   │   │   ├── Blog.jsx
│   │   │   │   └── FAQ.jsx
│   │   │   │
│   │   │   ├── services/                # ✅ NEW - API Layer
│   │   │   │   └── api.js               # ✅ Centralized API
│   │   │   │
│   │   │   ├── config/                  # ✅ Configuration
│   │   │   │   └── production.js
│   │   │   │
│   │   │   ├── App.jsx                  # ✅ Main app
│   │   │   └── main.jsx                 # ✅ Entry point
│   │   │
│   │   ├── .env                         # ✅ Environment
│   │   ├── package.json                 # ✅ Dependencies
│   │   ├── vite.config.js               # ✅ Build config
│   │   └── vercel.json                  # ✅ Deployment
│   │
│   └── crm/                             # Internal CRM
│       ├── src/
│       │   ├── components/              # ✅ UI Components
│       │   │   ├── CRMSidebar.jsx
│       │   │   └── ...
│       │   │
│       │   ├── pages/                   # ✅ Role-based Pages
│       │   │   ├── Auth/
│       │   │   │   ├── EmployeeLogin.jsx
│       │   │   │   └── CustomerLogin.jsx
│       │   │   │
│       │   │   ├── Admin/               # Admin Dashboard
│       │   │   ├── CEO/                 # CEO Dashboard
│       │   │   ├── Manager/             # Manager Dashboard
│       │   │   ├── Advisor/             # Advisor Dashboard
│       │   │   ├── Credit/              # Credit Dashboard
│       │   │   ├── Operations/          # Operations Dashboard
│       │   │   ├── Support/             # Support Dashboard
│       │   │   ├── Customer/            # Customer Portal
│       │   │   └── ... (18+ roles)
│       │   │
│       │   ├── services/                # ✅ NEW - API Layer
│       │   │   └── api.js               # ✅ Centralized API
│       │   │
│       │   ├── utils/                   # ✅ Utilities
│       │   │   ├── auth.js              # Authentication
│       │   │   └── roleAccess.js        # Role management
│       │   │
│       │   ├── App.jsx                  # ✅ Main app
│       │   └── main.jsx                 # ✅ Entry point
│       │
│       ├── .env                         # ✅ Environment
│       ├── package.json                 # ✅ Dependencies
│       ├── vite.config.js               # ✅ Build config
│       └── vercel.json                  # ✅ Deployment
│
├── 📱 mobile/                           # Mobile App (Future)
│   ├── app/
│   ├── components/
│   └── services/
│
├── 🔧 shared/                           # Shared Code
│   ├── utils/
│   ├── constants/
│   └── validation/
│
├── 📜 scripts/                          # Build Scripts
│   ├── build-all.sh
│   └── verify-env.js
│
├── 🐳 infra/                            # Infrastructure
│   ├── docker/
│   ├── nginx/
│   └── vercel/
│
└── 📚 Documentation/                    # ✅ NEW - Guides
    ├── START_HERE_FIXED.md              # ✅ Quick start
    ├── QUICK_FIX_GUIDE.md               # ✅ Setup guide
    ├── PROJECT_STATUS_AND_FIXES.md      # ✅ Technical details
    ├── FIXES_APPLIED_SUMMARY.md         # ✅ Complete summary
    ├── ARCHITECTURE_VISUAL.md           # ✅ This file
    └── verify-setup.js                  # ✅ Verification script
```

---

## 🔄 Data Flow Diagram

### Website Lead Submission Flow

```
┌─────────────┐
│   User      │
│ (Website)   │
└──────┬──────┘
       │ 1. Fills form
       ▼
┌─────────────────────┐
│  ApplyLoan.jsx      │
│  (Frontend Page)    │
└──────┬──────────────┘
       │ 2. Calls API
       ▼
┌─────────────────────┐
│  leadService.submit │
│  (API Service)      │
└──────┬──────────────┘
       │ 3. POST /api/v1/website/leads/submit
       ▼
┌─────────────────────┐
│  Backend Route      │
│  leads.js           │
└──────┬──────────────┘
       │ 4. Validates data
       ▼
┌─────────────────────┐
│  Lead Model         │
│  (MongoDB)          │
└──────┬──────────────┘
       │ 5. Saves to DB
       ▼
┌─────────────────────┐
│  Response           │
│  { success: true }  │
└─────────────────────┘
```

### CRM Dashboard Flow

```
┌─────────────┐
│  Employee   │
│  (CRM User) │
└──────┬──────┘
       │ 1. Logs in
       ▼
┌─────────────────────┐
│  EmployeeLogin.jsx  │
└──────┬──────────────┘
       │ 2. Authenticates
       ▼
┌─────────────────────┐
│  authService.login  │
└──────┬──────────────┘
       │ 3. POST /api/v1/crm/auth/login
       ▼
┌─────────────────────┐
│  Backend Auth       │
│  Validates & JWT    │
└──────┬──────────────┘
       │ 4. Returns token
       ▼
┌─────────────────────┐
│  Dashboard          │
│  (Role-based)       │
└──────┬──────────────┘
       │ 5. Fetches data
       ▼
┌─────────────────────┐
│  dashboardService   │
│  .getStats()        │
└──────┬──────────────┘
       │ 6. GET /api/v1/crm/dashboard/stats
       ▼
┌─────────────────────┐
│  Backend Aggregates │
│  Data from MongoDB  │
└──────┬──────────────┘
       │ 7. Returns stats
       ▼
┌─────────────────────┐
│  Dashboard UI       │
│  Displays data      │
└─────────────────────┘
```

---

## 🔐 Security Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    SECURITY LAYERS                           │
└─────────────────────────────────────────────────────────────┘

Layer 1: Network Security
├─ HTTPS (Production)
├─ CORS Protection
└─ Rate Limiting

Layer 2: Application Security
├─ Helmet (Security Headers)
├─ MongoDB Sanitization
├─ HPP Protection
└─ Input Validation

Layer 3: Authentication
├─ JWT Tokens
├─ Password Hashing (bcrypt)
└─ Session Management

Layer 4: Authorization
├─ Role-based Access Control
├─ Permission Checks
└─ Route Protection

Layer 5: Data Security
├─ Environment Variables
├─ Secure Database Connection
└─ File Upload Restrictions
```

---

## 🚀 Deployment Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PRODUCTION SETUP                          │
└─────────────────────────────────────────────────────────────┘

┌──────────────────┐
│   GitHub Repo    │
│  (Source Code)   │
└────────┬─────────┘
         │
         ├─────────────────┬─────────────────┬──────────────┐
         │                 │                 │              │
         ▼                 ▼                 ▼              ▼
┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌──────────┐
│   Render    │   │   Vercel    │   │   Vercel    │   │ MongoDB  │
│  (Backend)  │   │  (Website)  │   │    (CRM)    │   │  Atlas   │
│             │   │             │   │             │   │          │
│ Port: 443   │   │ Port: 443   │   │ Port: 443   │   │ Cloud DB │
└─────────────┘   └─────────────┘   └─────────────┘   └──────────┘
      │                  │                  │                │
      │                  │                  │                │
      └──────────────────┴──────────────────┴────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │   Custom Domains │
                    ├──────────────────┤
                    │ api.pennyanddebt.in      │
                    │ pennyanddebt.in          │
                    │ crmpennyanddebt.in       │
                    └──────────────────┘
```

---

## 📊 Technology Stack

```
┌─────────────────────────────────────────────────────────────┐
│                    TECHNOLOGY STACK                          │
└─────────────────────────────────────────────────────────────┘

BACKEND
├─ Runtime:        Node.js 18+
├─ Framework:      Express.js
├─ Database:       MongoDB + Mongoose
├─ Authentication: JWT + bcryptjs
├─ Email:          Nodemailer
├─ Security:       Helmet, CORS, Rate Limiting
└─ Validation:     Joi, Express Validator

FRONTEND (Website)
├─ Framework:      React 18
├─ Build Tool:     Vite
├─ Styling:        Tailwind CSS
├─ UI Components:  Radix UI, ShadCN
├─ Animations:     Framer Motion, GSAP, Lottie
├─ State:          Zustand
├─ Routing:        React Router v6
└─ HTTP:           Axios

FRONTEND (CRM)
├─ Framework:      React 18
├─ Build Tool:     Vite
├─ Styling:        Tailwind CSS
├─ Tables:         AG Grid, React Table
├─ Charts:         Recharts, Chart.js
├─ Forms:          React Hook Form + Zod
├─ State:          Zustand
├─ Routing:        React Router v6
└─ HTTP:           Axios

DEPLOYMENT
├─ Backend:        Render
├─ Website:        Vercel
├─ CRM:            Vercel
├─ Database:       MongoDB Atlas
└─ CI/CD:          GitHub Actions
```

---

## 🎯 API Service Architecture

### Website API Service (`frontend/website/src/services/api.js`)

```javascript
api.js
├─ axios instance (baseURL, interceptors)
├─ leadService
│  ├─ submit()
│  └─ getAll()
├─ contactService
│  └─ submit()
├─ careerService
│  ├─ submit()
│  └─ getAll()
├─ loanApplicationService
│  └─ submit()
├─ testimonialService
│  └─ getAll()
├─ serviceService
│  └─ getAll()
├─ faqService
│  └─ getAll()
├─ blogService
│  ├─ getAll()
│  └─ getById()
├─ otpService
│  ├─ send()
│  └─ verify()
└─ authService
   ├─ login()
   ├─ register()
   └─ logout()
```

### CRM API Service (`frontend/crm/src/services/api.js`)

```javascript
api.js
├─ axios instance (baseURL, interceptors)
├─ authService
│  ├─ login()
│  └─ logout()
├─ dashboardService
│  ├─ getStats()
│  └─ getRecentActivity()
├─ leadService (CRUD)
├─ customerService (CRUD)
├─ applicationService (CRUD)
├─ employeeService (CRUD)
├─ caseService (CRUD)
├─ paymentService (CRUD)
├─ taskService (CRUD)
├─ documentService (Upload/Delete)
└─ reportService (Various reports)
```

---

## ✅ VERIFICATION STATUS

```
┌─────────────────────────────────────────────────────────────┐
│              COMPONENT VERIFICATION STATUS                   │
└─────────────────────────────────────────────────────────────┘

Backend
├─ ✅ Structure verified
├─ ✅ Routes configured
├─ ✅ Models created
├─ ✅ Middleware setup
├─ ✅ Database connected
└─ ✅ Dependencies installed

Website Frontend
├─ ✅ Structure verified
├─ ✅ Pages created
├─ ✅ API service created
├─ ✅ Environment configured
└─ ✅ Dependencies installed

CRM Frontend
├─ ✅ Structure verified
├─ ✅ 18+ dashboards created
├─ ✅ API service created
├─ ✅ Environment configured
└─ ✅ Dependencies installed

Deployment
├─ ✅ Render config ready
├─ ✅ Vercel configs ready
├─ ✅ MongoDB Atlas connected
└─ ✅ GitHub connected

Documentation
├─ ✅ START_HERE_FIXED.md
├─ ✅ QUICK_FIX_GUIDE.md
├─ ✅ PROJECT_STATUS_AND_FIXES.md
├─ ✅ FIXES_APPLIED_SUMMARY.md
├─ ✅ ARCHITECTURE_VISUAL.md
└─ ✅ verify-setup.js

OVERALL STATUS: ✅ 100% VERIFIED & READY
```

---

**Last Updated**: 2024  
**Version**: 2.0.0  
**Status**: ✅ Production Ready
