# 🚀 COMPLETE SYSTEM SETUP GUIDE

## Quick Setup (3 Steps)

### Step 1: Test Database Connection
```bash
# Windows
TEST_DATABASE.bat

# Linux/Mac
cd apps/crm-backend
node scripts/testConnection.js
```

**Expected Output:**
```
✅ MongoDB connected successfully!
📦 Checking Models...
✓ User                 - 0 documents
✓ Role                 - 0 documents
✓ Customer             - 0 documents
✓ Lead                 - 0 documents
✓ Case                 - 0 documents
✓ Loan                 - 0 documents
✓ Program              - 0 documents
✓ Settlement           - 0 documents
✓ Payment              - 0 documents
✓ Mandate              - 0 documents
✓ HarassmentCase       - 0 documents
✓ LegalCase            - 0 documents
✓ Ticket               - 0 documents
✓ Document             - 0 documents
✓ AuditLog             - 0 documents
✅ All models loaded successfully!
```

---

### Step 2: Seed Roles
```bash
# Windows
SEED_ROLES.bat

# Linux/Mac
cd apps/crm-backend
node scripts/seedRoles.js
```

**Expected Output:**
```
✓ COUNSELLOR role created/updated
✓ ADVISOR role created/updated
✓ CREDIT role created/updated
✓ OPERATIONS role created/updated
✓ NEGOTIATOR role created/updated
✓ LEGAL role created/updated
✓ FINANCE role created/updated
✓ SUPPORT role created/updated
✓ RECOVERY role created/updated
✓ COMPLIANCE role created/updated
✓ ADMIN role created/updated

✅ All roles seeded successfully
```

---

### Step 3: Start Backend
```bash
# Windows
cd apps\crm-backend
npm run dev

# Linux/Mac
cd apps/crm-backend
npm run dev
```

**Expected Output:**
```
🚀 ========================================
🚀 Server running on 0.0.0.0:5000
📦 Environment: development
🌐 ========================================
📍 API Endpoints:
   Website API: /api/v1/website/*
   CRM API:     /api/v1/crm/*
   Mobile API:  /api/v1/mobile/*
🌐 ========================================
```

---

## ✅ Verify Setup

### Test Health Endpoint
```bash
curl http://localhost:5000/health
```

**Expected Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "development",
  "mongodb": {
    "connected": true,
    "state": "connected"
  }
}
```

---

## 📋 Available API Endpoints

### CRM Routes (Require Authentication)

#### Leads
- `POST   /api/v1/crm/leads` - Create lead
- `GET    /api/v1/crm/leads` - Get all leads
- `PATCH  /api/v1/crm/leads/:id` - Update lead
- `POST   /api/v1/crm/leads/:id/assign` - Assign to advisor

#### Cases
- `POST   /api/v1/crm/cases` - Create case
- `GET    /api/v1/crm/cases` - Get all cases
- `GET    /api/v1/crm/cases/:id` - Get case with loans
- `PATCH  /api/v1/crm/cases/:id` - Update case

#### Loans
- `POST   /api/v1/crm/loans` - Create loan
- `GET    /api/v1/crm/loans/case/:caseId` - Get loans by case
- `PATCH  /api/v1/crm/loans/:id` - Update loan

#### Programs
- `POST   /api/v1/crm/programs` - Create program
- `GET    /api/v1/crm/programs` - Get all programs
- `PATCH  /api/v1/crm/programs/:id` - Update program

#### Settlements
- `POST   /api/v1/crm/settlements` - Create settlement
- `GET    /api/v1/crm/settlements` - Get all settlements
- `PATCH  /api/v1/crm/settlements/:id` - Update settlement
- `POST   /api/v1/crm/settlements/:id/approve` - Customer approval

---

## 🧪 Test API with Postman/cURL

### Example: Create Lead
```bash
curl -X POST http://localhost:5000/api/v1/crm/leads \
  -H "Content-Type: application/json" \
  -d '{
    "counsellorId": "USER_ID_HERE",
    "leadSource": "WEBSITE",
    "financialSnapshot": {
      "approxIncome": 50000,
      "approxEmi": 25000,
      "loanCount": 3
    },
    "stress": {
      "stressLevel": "HIGH",
      "harassmentLevel": "CALLS",
      "urgencyLevel": "NEED_HELP"
    }
  }'
```

---

## 🔐 Database Collections Created

After setup, your MongoDB will have these collections:

1. ✅ **users** - Employees + Customers
2. ✅ **roles** - 11 roles (COUNSELLOR to ADMIN)
3. ✅ **customers** - Customer profiles
4. ✅ **leads** - Lead intake data
5. ✅ **cases** - Advisor cases
6. ✅ **loans** - Debt inventory
7. ✅ **programs** - Debt relief plans
8. ✅ **settlements** - Negotiations
9. ✅ **payments** - SIP + settlements
10. ✅ **mandates** - NACH/UPI
11. ✅ **harassmentcases** - Legal protection
12. ✅ **legalcases** - Court cases
13. ✅ **tickets** - Support tickets
14. ✅ **documents** - File storage
15. ✅ **auditlogs** - Compliance tracking

---

## 🎯 Next Steps

### 1. Create First User (Admin)
You'll need to create an admin user manually or via script.

### 2. Build Frontend
Use the form configs and TypeScript types:
```typescript
import { CounsellorLeadForm } from '@shared/constants/formConfigs';
import { Lead } from '@shared/types';
```

### 3. Test Workflows
- Counsellor creates lead
- Advisor creates case
- Add loans
- Create program
- Negotiator creates settlement

---

## 🐛 Troubleshooting

### MongoDB Connection Failed
```
Error: connect ECONNREFUSED
```
**Solution:** Check `.env` file has correct `MONGODB_URI`

### Models Not Loading
```
Error: Cannot find module '../models/User'
```
**Solution:** Ensure all model files are created in `apps/crm-backend/models/`

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution:**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5000 | xargs kill -9
```

---

## 📊 System Status

✅ **15 MongoDB Models** - All created  
✅ **11 Roles** - Ready to seed  
✅ **5 API Route Modules** - Integrated  
✅ **RBAC Middleware** - Implemented  
✅ **Audit Logging** - Active  
✅ **TypeScript Types** - Complete  
✅ **Form Configs** - Ready  

---

**Status**: 🟢 READY FOR DEVELOPMENT  
**Version**: 2.0  
**Last Updated**: 2024

