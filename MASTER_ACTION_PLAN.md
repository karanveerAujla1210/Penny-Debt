# 🎯 MASTER ACTION PLAN - PENNY DEBT CRM

## Based on Deep Analysis - Layer by Layer

---

## 📊 CURRENT STATE ASSESSMENT

### ✅ WHAT'S OK
- 15 MongoDB models with proper schemas
- 11 roles seeded to database
- Database connection working
- RBAC middleware structure exists
- TypeScript interfaces complete
- Form configurations ready
- Dropdown constants defined
- 5 new CRM routes created (leads, cases, loans, programs, settlements)

### 🔴 CRITICAL GAPS (Beyond Initial List)
1. **Auth not connected** - JWT middleware exists but not wired
2. **No token refresh strategy** - Will break on expiry
3. **No standardized error responses** - Frontend can't rely on format
4. **Public routes not whitelisted** - Login will fail
5. **Validators empty** - No business rule validation
6. **Missing routes** - tickets, mandates, documents incomplete
7. **No indexes on DB** - Performance will suffer
8. **No audit trail** - Can't track changes
9. **File upload not configured** - Can't handle documents
10. **Payment webhook missing** - Can't process payments

### 🧹 EXTRA/DANGEROUS
- Duplicate models (models/ vs models-website/ vs src/models/)
- Legacy SQL schemas still present
- Multiple auth files (middleware/auth.js vs src/middleware/auth.js)
- Test login pages scattered everywhere
- Unused controllers referencing non-existent services

---

## 🩹 CURE PLAN - EXACT ORDER

### PHASE 1: BACKEND CORE (Week 1)

#### Day 1: Authentication & Security
**Priority**: CRITICAL - Nothing works without this

1. **Fix Auth Middleware** (2 hours)
   - File: `apps/crm-backend/middleware/auth.js`
   - Add proper JWT verification
   - Add role population
   - Add standardized errors
   - Add token expiry handling

2. **Whitelist Public Routes** (1 hour)
   - Update `src/app.js`
   - Exclude `/api/v1/crm/auth/*` from auth
   - Exclude `/webhook/*` from auth

3. **Connect Auth to All CRM Routes** (1 hour)
   - Add auth middleware to route index
   - Test with Postman

4. **Standardize Error Responses** (1 hour)
   - Create error handler utility
   - Update all controllers

#### Day 2: Validators & Business Rules
**Priority**: CRITICAL - Prevents bad data

1. **Create Validation Schemas** (4 hours)
   - `src/validators/leads.js`
   - `src/validators/cases.js`
   - `src/validators/loans.js`
   - `src/validators/programs.js`
   - `src/validators/settlements.js`
   - `src/validators/payments.js`
   - `src/validators/customers.js`

2. **Add Business Rules** (2 hours)
   - SIP amount > 0
   - Duration 3-72 months
   - Cross-field validation
   - Loan ownership checks

3. **Wire Validators to Routes** (1 hour)

#### Day 3: Missing Routes
**Priority**: HIGH - Core functionality

1. **Create Tickets Routes** (2 hours)
   - CRUD operations
   - Status updates
   - Message threading

2. **Create Mandates Routes** (2 hours)
   - Create mandate
   - Update status
   - Link to program

3. **Update Documents Routes** (2 hours)
   - Typed documents
   - Verification flow
   - Link to entities

#### Day 4: Database Optimization
**Priority**: HIGH - Performance & integrity

1. **Add Indexes** (2 hours)
   ```javascript
   // In each model
   customerIdIndex
   statusIndex
   assignedToIndex
   createdAtIndex
   ```

2. **Add Schema Validation** (2 hours)
   - Enums for all status fields
   - Min/max for amounts
   - Required fields

3. **Setup Audit Trail** (2 hours)
   - Auto-log all updates
   - Track field changes
   - Store previous values

#### Day 5: File Upload & Email
**Priority**: MEDIUM - User experience

1. **Configure File Upload** (3 hours)
   - Setup multer
   - Local storage for dev
   - S3 config for prod
   - File type validation
   - Size limits

2. **Setup Email Service** (2 hours)
   - Configure nodemailer
   - Create templates
   - Test sending

3. **Test End-to-End** (2 hours)

---

### PHASE 2: FRONTEND CRM MVP (Week 2)

#### Day 1: Foundation
1. **API Client Setup** (2 hours)
   - Create `src/services/api.ts`
   - JWT attachment
   - Error handling
   - Response standardization

2. **Auth Context** (2 hours)
   - AuthProvider
   - Login/logout
   - Permission checks
   - Token refresh

3. **Standardized Error Handling** (1 hour)

#### Day 2: Counsellor Flow
1. **Lead List** (2 hours)
   - Fetch from API
   - Display in table
   - Filters & search

2. **Lead Form** (3 hours)
   - Use form configs
   - Dynamic rendering
   - Validation
   - Submit to API

3. **Lead Assignment** (1 hour)

#### Day 3: Advisor Flow
1. **Case List** (2 hours)
2. **Case Creation Wizard** (4 hours)
   - Step 1: Customer profile
   - Step 2: Income/expenses
   - Step 3: Loans
   - Step 4: Program

#### Day 4: Program Management
1. **Program Dashboard** (3 hours)
2. **Loan Inventory** (2 hours)
3. **Status Updates** (1 hour)

#### Day 5: Polish & Testing
1. **Role-based Navigation** (2 hours)
2. **Clean Up Duplicate Pages** (2 hours)
3. **End-to-End Testing** (3 hours)

---

### PHASE 3: PAYMENTS & AUTOMATION (Week 3)

#### Day 1-2: Payment Gateway
1. **Razorpay Integration** (4 hours)
2. **Webhook Handler** (3 hours)
3. **Payment Reconciliation** (3 hours)

#### Day 3-4: Notifications
1. **Email Templates** (3 hours)
2. **SMS Gateway** (2 hours)
3. **WhatsApp Business API** (3 hours)

#### Day 5: Automation
1. **Cron Jobs Setup** (2 hours)
2. **SIP Reminders** (2 hours)
3. **Failed Payment Escalation** (2 hours)

---

### PHASE 4: CUSTOMER PORTAL (Week 4)

#### Mobile or Web First?
**Decision**: Web first, then reuse in mobile

#### Day 1-2: Customer Dashboard
1. **Auth Flow** (2 hours)
2. **Dashboard** (4 hours)
3. **Program View** (3 hours)

#### Day 3: Settlement Flow
1. **Offer List** (2 hours)
2. **Approval UI** (3 hours)
3. **API Integration** (2 hours)

#### Day 4: Documents & Support
1. **Document Upload** (3 hours)
2. **Ticket Creation** (2 hours)
3. **Harassment Report** (2 hours)

#### Day 5: Testing & Polish

---

## 🎯 IMMEDIATE ACTIONS (TODAY)

### 1. Fix Authentication (2 hours)
```bash
cd apps/crm-backend
# Update middleware/auth.js
# Update src/app.js
# Test with Postman
```

### 2. Create Validators (2 hours)
```bash
# Create validation schemas
# Wire to routes
```

### 3. Test Core Flow (1 hour)
```bash
# Start server
# Test: Login → Create Lead → Create Case → Add Loan
```

---

## 📋 CLEANUP TASKS

### Remove/Archive
- [ ] `database/schema.sql` (not using SQL)
- [ ] Duplicate models in `models-website/`
- [ ] Test login pages (keep only one)
- [ ] Unused controllers
- [ ] Legacy route files

### Consolidate
- [ ] Merge duplicate auth middleware
- [ ] Single source for models
- [ ] Unified error handling
- [ ] Centralized constants

---

## 🚨 CRITICAL DECISIONS NEEDED

### 1. Token Strategy
**Options**:
- A) Short-lived (1h) + refresh token
- B) Medium-lived (24h) + re-login
- **Recommendation**: B for MVP, A for production

### 2. File Storage
**Options**:
- A) Local filesystem (dev)
- B) S3 (prod)
- **Recommendation**: Both, env-based

### 3. Payment Gateway
**Options**:
- A) Razorpay (India-focused)
- B) Stripe (Global)
- **Recommendation**: Razorpay for India market

### 4. Mobile Strategy
**Options**:
- A) React Native (current)
- B) PWA (web-based)
- **Recommendation**: PWA first, native later

---

## 📊 SUCCESS METRICS

### Week 1 (Backend)
- [ ] All APIs protected with auth
- [ ] All validators working
- [ ] All routes responding
- [ ] Database indexed
- [ ] File upload working

### Week 2 (Frontend)
- [ ] Login working
- [ ] Counsellor can create leads
- [ ] Advisor can create cases
- [ ] Program creation working
- [ ] End-to-end flow tested

### Week 3 (Payments)
- [ ] Payment gateway integrated
- [ ] Webhooks working
- [ ] Email notifications sent
- [ ] Automation running

### Week 4 (Customer)
- [ ] Customer can login
- [ ] View program details
- [ ] Approve settlements
- [ ] Upload documents

---

## 🎯 MVP DEFINITION

**System is MVP-ready when**:
1. ✅ Employee can login
2. ✅ Counsellor can create & assign leads
3. ✅ Advisor can create cases with loans
4. ✅ Advisor can create programs
5. ✅ Customer can view program
6. ✅ Customer can approve settlements
7. ✅ Payments are tracked
8. ✅ Documents can be uploaded

**NOT required for MVP**:
- Mobile app
- WhatsApp integration
- Advanced analytics
- ML risk scoring
- Multi-language

---

## 📝 DAILY CHECKLIST

### Every Morning
- [ ] Pull latest code
- [ ] Check database connection
- [ ] Review pending tasks
- [ ] Prioritize for the day

### Every Evening
- [ ] Commit working code
- [ ] Update progress
- [ ] Document blockers
- [ ] Plan next day

---

**Start Date**: Today  
**MVP Target**: 4 weeks  
**Production Target**: 8 weeks

