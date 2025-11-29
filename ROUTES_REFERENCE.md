# Quick Routes Reference

## 🌐 Website Routes (frontend/website)

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page |
| `/about` | About | About us page |
| `/services` | Services | Services offered |
| `/contact` | Contact | Contact form |
| `/apply` | ApplyForm | Debt relief application |
| `/apply-loan` | ApplyLoan | Loan application |
| `/apply-loan-basic` | ApplyLoanBasicDetails | Basic loan details |
| `/blog` | Blog | Blog posts |
| `/careers` | Careers | Job openings |
| `/faq` | FAQ | FAQs |
| `/how-it-works` | HowItWorks | Process explanation |
| `/pricing` | Pricing | Pricing plans |
| `/privacy` | PrivacyPolicy | Privacy policy |
| `/terms` | Terms | Terms & conditions |
| `/signup` | Signup | User registration |

## 🏢 CRM Routes (frontend/crm)

### Authentication
| Route | Component | Access |
|-------|-----------|--------|
| `/login/employee` | EmployeeLogin | Public |
| `/login/customer` | CustomerLogin | Public |

### Dashboards (Role-Based)
| Route | Component | Role |
|-------|-----------|------|
| `/dashboard/admin` | AdminDashboard | Admin |
| `/dashboard/advisor` | AdvisorDashboard | Advisor |
| `/dashboard/ceo` | CEODashboard | CEO |
| `/dashboard/coo` | COODashboard | COO |
| `/dashboard/cto` | CTODashboard | CTO |
| `/dashboard/compliance` | ComplianceDashboard | Compliance |
| `/dashboard/counsellor` | CounsellorDashboard | Counsellor |
| `/dashboard/credit` | CreditDashboard | Credit |
| `/dashboard/finance` | FinanceDashboard | Finance |
| `/dashboard/hr` | HRDashboard | HR |
| `/dashboard/legal` | LegalDashboard | Legal |
| `/dashboard/operations` | OperationsDashboard | Operations |
| `/dashboard/recovery` | RecoveryDashboard | Recovery |
| `/dashboard/support` | SupportDashboard | Support |
| `/dashboard/teamlead` | TeamLeadDashboard | Team Lead |
| `/dashboard/tech` | TechDashboard | Tech |
| `/dashboard/verifier` | VerifierDashboard | Verifier |
| `/dashboard/customer` | CustomerDashboard | Customer |
| `/dashboard/employee` | EmployeeDashboard | Employee |
| `/dashboard/manager` | ManagerDashboard | Manager |

### Functional Pages
| Route | Component | Description |
|-------|-----------|-------------|
| `/leads` | LeadsList | All leads |
| `/leads/create` | CreateLead | Create new lead |
| `/leads/:id` | LeadDetails | Lead details |
| `/cases` | CaseList | All cases |

## 🔌 Backend API Endpoints

### Website API (`/api/*`)
```
Auth:
POST /api/auth/register
POST /api/auth/login

OTP:
POST /api/otp/send
POST /api/otp/verify

Leads:
GET  /api/leads
POST /api/leads

Customers:
GET  /api/customers
POST /api/customers

Careers:
GET  /api/careers
POST /api/careers

Loan Applications:
GET  /api/loan-applications
POST /api/loan-applications

Contacts:
POST /api/contacts

Content:
GET  /api/testimonials
GET  /api/services
GET  /api/faqs
GET  /api/blog
GET  /api/stats
```

### CRM API (`/api/crm/*`)
```
Auth:
POST /api/crm/auth/login

Dashboard:
GET  /api/crm/dashboard/stats

Employees:
GET    /api/crm/employees
POST   /api/crm/employees
GET    /api/crm/employees/:id
PUT    /api/crm/employees/:id
DELETE /api/crm/employees/:id

Cases:
GET  /api/crm/cases
POST /api/crm/cases
GET  /api/crm/cases/:id
PUT  /api/crm/cases/:id
POST /api/crm/cases/:id/notes

Payments:
GET   /api/crm/payments
POST  /api/crm/payments
GET   /api/crm/payments/:id
GET   /api/crm/payments/customer/:customerId
PATCH /api/crm/payments/:id/status

Tasks:
GET   /api/crm/tasks
POST  /api/crm/tasks
GET   /api/crm/tasks/employee/:employeeId
PUT   /api/crm/tasks/:id
PATCH /api/crm/tasks/:id/complete

Documents:
GET   /api/crm/documents
POST  /api/crm/documents
GET   /api/crm/documents/customer/:customerId
GET   /api/crm/documents/case/:caseId
PATCH /api/crm/documents/:id/verify

Reports:
GET /api/crm/reports
POST /api/crm/reports
GET /api/crm/reports/:id
PUT /api/crm/reports/:id

Data:
GET /api/crm/leads
GET /api/crm/customers
GET /api/crm/applications
```

## 🗄️ MongoDB Collections

| Collection | Model File | Purpose |
|------------|------------|---------|
| users | User.js | Website users |
| employees | Employee.js | CRM employees |
| leads | Lead.js | Sales leads |
| customers | Customer.js | Customers |
| cases | Case.js | Debt relief cases |
| payments | Payment.js | Payment records |
| documents | Document.js | Document management |
| tasks | Task.js | Task management |
| reports | Report.js | Analytics reports |
| applications | Application.js | Applications |
| blogs | Blog.js | Blog posts |
| careers | Career.js | Job postings |
| contacts | Contact.js | Contact submissions |
| faqs | FAQ.js | FAQs |
| loanapplications | LoanApplication.js | Loan applications |
| otps | OTP.js | OTP verification |
| services | Service.js | Services |
| testimonials | Testimonial.js | Testimonials |
| activities | Activity.js | Activity logs |

## 🎨 Navigation Components

### Website
- **Component**: `frontend/website/src/components/Navbar.jsx`
- **Features**: Active links, responsive, sticky header

### CRM
- **Component**: `frontend/crm/src/components/CRMSidebar.jsx`
- **Features**: Role-based menus, active links, icons

## 🚀 Quick Start Commands

```bash
# Backend
cd backend && npm run dev

# Website
cd frontend/website && npm run dev

# CRM
cd frontend/crm && npm run dev
```

## 🌍 Access URLs

- Backend: http://localhost:5000
- Website: http://localhost:5173
- CRM: http://localhost:3001
