# Penny Debt - System Architecture

## 🏗️ System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     PENNY DEBT CRM SYSTEM                    │
└─────────────────────────────────────────────────────────────┘

┌──────────────────┐         ┌──────────────────┐
│  PUBLIC WEBSITE  │         │   INTERNAL CRM   │
│  (Port: 5173)    │         │   (Port: 3001)   │
└────────┬─────────┘         └────────┬─────────┘
         │                            │
         │                            │
         └────────────┬───────────────┘
                      │
                      ▼
         ┌────────────────────────┐
         │   BACKEND API SERVER   │
         │    (Port: 5000)        │
         └────────────┬───────────┘
                      │
                      ▼
         ┌────────────────────────┐
         │   MONGODB DATABASE     │
         │   (19 Collections)     │
         └────────────────────────┘
```

---

## 🌐 Frontend Architecture

### Website Frontend (Public)
```
frontend/website/
│
├── src/
│   ├── App.jsx ──────────────► Router Configuration
│   │
│   ├── components/
│   │   ├── Navbar.jsx ───────► Navigation (15 links)
│   │   └── Navbar.css ───────► Styling
│   │
│   └── pages/
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Services.jsx
│       ├── Contact.jsx
│       ├── ApplyForm.jsx
│       ├── ApplyLoan.jsx
│       ├── Blog.jsx
│       ├── Careers.jsx
│       ├── FAQ.jsx
│       ├── HowItWorks.jsx
│       ├── Pricing.jsx
│       ├── PrivacyPolicy.jsx
│       ├── Terms.jsx
│       └── Signup.jsx
```

### CRM Frontend (Internal)
```
frontend/crm/
│
├── src/
│   ├── App.jsx ──────────────► Router Configuration (25+ routes)
│   │
│   ├── components/
│   │   ├── CRMSidebar.jsx ──► Role-based Navigation
│   │   └── CRMSidebar.css ──► Styling
│   │
│   └── pages/
│       ├── Auth/
│       │   ├── EmployeeLogin.jsx
│       │   └── CustomerLogin.jsx
│       │
│       ├── Admin/
│       │   └── Dashboard.jsx
│       │
│       ├── [18+ Role Folders]/
│       │   ├── Advisor/
│       │   ├── CEO/
│       │   ├── COO/
│       │   ├── CTO/
│       │   ├── Compliance/
│       │   ├── Counsellor/
│       │   ├── Credit/
│       │   ├── Finance/
│       │   ├── HR/
│       │   ├── Legal/
│       │   ├── Operations/
│       │   ├── Recovery/
│       │   ├── Support/
│       │   ├── TeamLead/
│       │   ├── Tech/
│       │   ├── Verifier/
│       │   └── Manager/
│       │
│       ├── Customer/
│       │   └── CustomerDashboard.jsx
│       │
│       ├── Leads/
│       │   ├── LeadsList.jsx
│       │   ├── CreateLead.jsx
│       │   └── LeadDetails.jsx
│       │
│       └── Case/
│           └── CaseList.jsx
```

---

## 🔌 Backend Architecture

```
backend/
│
├── server.js ────────────────► Main Server File
│
├── config/
│   └── database.js ──────────► MongoDB Connection
│
├── middleware/
│   ├── auth.js ──────────────► Authentication
│   ├── security.js ──────────► Security Headers
│   └── validation.js ────────► Input Validation
│
├── models-website/
│   ├── User.js ──────────────► Website Users
│   ├── Employee.js ──────────► CRM Employees ✨
│   ├── Lead.js ──────────────► Sales Leads
│   ├── Customer.js ──────────► Customers
│   ├── Case.js ──────────────► Debt Cases ✨
│   ├── Payment.js ───────────► Payments ✨
│   ├── Document.js ──────────► Documents ✨
│   ├── Task.js ──────────────► Tasks ✨
│   ├── Report.js ────────────► Reports ✨
│   ├── Application.js
│   ├── Blog.js
│   ├── Career.js
│   ├── Contact.js
│   ├── FAQ.js
│   ├── LoanApplication.js
│   ├── OTP.js
│   ├── Service.js
│   ├── Testimonial.js
│   └── Activity.js
│
└── routes/
    ├── Website Routes (Public)
    │   ├── auth.js
    │   ├── otp.js
    │   ├── leads.js
    │   ├── customers.js
    │   ├── careers.js
    │   ├── loanApplications.js
    │   ├── contacts.js
    │   ├── applications.js
    │   ├── testimonials.js
    │   ├── services.js
    │   ├── faqs.js
    │   ├── blogs.js
    │   └── stats.js
    │
    └── CRM Routes (Internal)
        ├── crm/
        │   ├── auth.js
        │   └── dashboard.js
        ├── employees.js ✨
        ├── cases.js ✨
        ├── payments.js ✨
        ├── tasks.js ✨
        ├── documents.js ✨
        └── reports.js ✨
```

---

## 🗄️ Database Schema Relationships

```
┌─────────────┐
│    User     │
│  (Website)  │
└─────────────┘

┌─────────────┐         ┌─────────────┐
│  Employee   │────────►│    Task     │
│   (CRM)     │         │ (assignedTo)│
└──────┬──────┘         └─────────────┘
       │
       │ reportingTo
       │
       └──────────────┐
                      │
┌─────────────┐       │
│    Lead     │       │
│  (Website)  │       │
└─────────────┘       │
                      │
┌─────────────┐       │
│  Customer   │◄──────┘
│             │       assignedAgent
└──────┬──────┘
       │
       │ customer
       │
       ▼
┌─────────────┐         ┌─────────────┐
│    Case     │────────►│  Document   │
│             │         │             │
└──────┬──────┘         └─────────────┘
       │
       ├──────────────►┌─────────────┐
       │               │   Payment   │
       │               │             │
       │               └─────────────┘
       │
       └──────────────►┌─────────────┐
                       │    Task     │
                       │             │
                       └─────────────┘

┌─────────────┐         ┌─────────────┐
│   Report    │────────►│  Employee   │
│             │         │(generatedBy)│
└─────────────┘         └─────────────┘
```

---

## 🔐 Role-Based Access Flow

```
┌──────────────┐
│   Login      │
└──────┬───────┘
       │
       ▼
┌──────────────────────────────┐
│  Check User Role             │
└──────┬───────────────────────┘
       │
       ├─► Admin ──────────► Full Access Dashboard
       │
       ├─► CEO/CTO/COO ────► Executive Dashboard
       │
       ├─► Manager ────────► Team Management Dashboard
       │
       ├─► Advisor ────────► Client Management Dashboard
       │
       ├─► Counsellor ─────► Counseling Dashboard
       │
       ├─► Credit ─────────► Credit Analysis Dashboard
       │
       ├─► Finance ────────► Financial Dashboard
       │
       ├─► HR ─────────────► HR Dashboard
       │
       ├─► Legal ──────────► Legal Dashboard
       │
       ├─► Operations ─────► Operations Dashboard
       │
       ├─► Recovery ───────► Recovery Dashboard
       │
       ├─► Support ────────► Support Dashboard
       │
       ├─► Team Lead ──────► Team Dashboard
       │
       ├─► Tech ───────────► Technical Dashboard
       │
       ├─► Verifier ───────► Verification Dashboard
       │
       ├─► Employee ───────► General Employee Dashboard
       │
       └─► Customer ───────► Customer Portal
```

---

## 🔄 Data Flow

### Website Lead Submission
```
User Form ──► Website Frontend ──► POST /api/leads ──► Backend ──► MongoDB
                                                                      │
                                                                      ▼
                                                            Lead Collection
                                                                      │
                                                                      ▼
                                                            CRM Dashboard
```

### CRM Case Management
```
Employee ──► CRM Frontend ──► POST /api/crm/cases ──► Backend ──► MongoDB
                                                                     │
                                                                     ▼
                                                          Case Collection
                                                                     │
                                                                     ├──► Customer
                                                                     ├──► Documents
                                                                     ├──► Payments
                                                                     └──► Tasks
```

### Payment Processing
```
Customer ──► Payment Gateway ──► POST /api/crm/payments ──► Backend ──► MongoDB
                                                                           │
                                                                           ▼
                                                                  Payment Collection
                                                                           │
                                                                           ▼
                                                                    Update Case
```

---

## 📊 API Endpoint Structure

```
/api/
│
├── Website Endpoints (Public)
│   ├── /auth/*
│   ├── /otp/*
│   ├── /leads/*
│   ├── /customers/*
│   ├── /careers/*
│   ├── /loan-applications/*
│   ├── /contacts/*
│   ├── /testimonials/*
│   ├── /services/*
│   ├── /faqs/*
│   ├── /blog/*
│   └── /stats/*
│
└── CRM Endpoints (Internal)
    └── /crm/
        ├── /auth/*
        ├── /dashboard/*
        ├── /employees/*
        ├── /cases/*
        ├── /payments/*
        ├── /tasks/*
        ├── /documents/*
        ├── /reports/*
        ├── /leads/*
        ├── /customers/*
        └── /applications/*
```

---

## 🎨 Component Hierarchy

### Website
```
App
└── Router
    ├── Navbar (Persistent)
    └── Routes
        ├── Home
        ├── About
        ├── Services
        ├── Contact
        ├── ApplyForm
        ├── Blog
        ├── Careers
        ├── FAQ
        ├── HowItWorks
        ├── Pricing
        ├── Privacy
        ├── Terms
        └── Signup
```

### CRM
```
App
└── Router
    ├── Auth Routes
    │   ├── EmployeeLogin
    │   └── CustomerLogin
    │
    └── Protected Routes
        ├── CRMSidebar (Persistent)
        └── Dashboard Routes
            ├── AdminDashboard
            ├── AdvisorDashboard
            ├── CEODashboard
            ├── [15+ more dashboards]
            ├── CustomerDashboard
            ├── LeadsList
            ├── CreateLead
            ├── LeadDetails
            └── CaseList
```

---

## 🚀 Deployment Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    PRODUCTION                            │
└─────────────────────────────────────────────────────────┘

┌──────────────┐         ┌──────────────┐
│   Vercel     │         │   Vercel     │
│  (Website)   │         │    (CRM)     │
└──────┬───────┘         └──────┬───────┘
       │                        │
       └────────┬───────────────┘
                │
                ▼
       ┌────────────────┐
       │  Render/Railway│
       │   (Backend)    │
       └────────┬───────┘
                │
                ▼
       ┌────────────────┐
       │ MongoDB Atlas  │
       │   (Database)   │
       └────────────────┘
```

---

## 📱 Responsive Design

```
Desktop (>1024px)
├── Full Navigation
├── Sidebar Visible
└── Multi-column Layouts

Tablet (768px - 1024px)
├── Condensed Navigation
├── Collapsible Sidebar
└── Two-column Layouts

Mobile (<768px)
├── Hamburger Menu
├── Icon-only Sidebar
└── Single-column Layouts
```

---

This architecture provides:
✅ Separation of concerns
✅ Scalable structure
✅ Role-based access
✅ Clear data flow
✅ Modular components
✅ RESTful API design
