# 🏦 Penny Debt CRM - Complete Flow Documentation

## 📋 Case ID System

### Unique Case ID Format
```
Format: PD-YYYY-XXXXX
Example: PD-2024-00001

PD = Penny Debt
YYYY = Year
XXXXX = Sequential 5-digit number
```

### Case ID Generation Rules
- Auto-generated on case creation
- Unique across entire system
- Never reused
- Immutable once created
- Used for tracking across all modules

---

## 🔄 Complete CRM Flow

### 1. LEAD GENERATION (Entry Point)
**Sources:**
- Website form submission
- Phone inquiry
- Email inquiry
- Social media
- Referral
- Walk-in

**Lead Stages:**
```
New → Contacted → Qualified → Converted → Lost
```

**Route:** `/leads`

---

### 2. LEAD QUALIFICATION
**Handled by:** Sales Team, Advisors

**Qualification Criteria:**
- Debt amount ≥ ₹50,000
- Monthly income verification
- Employment status
- Credit score check
- Willingness to enroll

**Actions:**
- Initial call
- Document collection
- Financial assessment
- Eligibility check

**Route:** `/leads/:id`

---

### 3. CASE CREATION (Lead → Case Conversion)
**Trigger:** Lead marked as "Qualified"

**Case Creation Process:**
1. Generate unique Case ID (PD-YYYY-XXXXX)
2. Create customer profile
3. Assign case to counsellor
4. Set initial status: "New"
5. Create case folder for documents

**Route:** `/cases/create`

---

### 4. CASE STAGES & WORKFLOW

#### Stage 1: DOCUMENTATION (Status: New)
**Assigned to:** Operations Team, Verifier

**Required Documents:**
- PAN Card
- Aadhaar Card
- Bank statements (6 months)
- Salary slips (3 months)
- Credit card statements
- Loan statements
- Employment proof

**Actions:**
- Document upload
- Document verification
- KYC completion
- CIBIL report generation

**Route:** `/cases/:caseId/documents`

---

#### Stage 2: CREDIT ANALYSIS (Status: Under Review)
**Assigned to:** Credit Team

**Analysis:**
- Total debt calculation
- Creditor identification
- Interest rate analysis
- EMI burden assessment
- Repayment capacity
- Credit score impact

**Output:**
- Debt summary report
- Recommended settlement amount
- Payment plan options

**Route:** `/cases/:caseId/credit-analysis`

---

#### Stage 3: COUNSELLING (Status: In Counselling)
**Assigned to:** Debt Counsellor

**Activities:**
- Financial counselling session
- Debt management education
- Budget planning
- Settlement strategy discussion
- Program enrollment

**Route:** `/cases/:caseId/counselling`

---

#### Stage 4: ENROLLMENT (Status: Enrolled)
**Assigned to:** Finance Team

**Enrollment Process:**
1. Program fee calculation
2. Payment plan setup
3. Agreement signing
4. Escrow account setup
5. Monthly payment schedule

**Route:** `/cases/:caseId/enrollment`

---

#### Stage 5: NEGOTIATION (Status: In Negotiation)
**Assigned to:** Negotiation Team, Legal Team

**Negotiation Process:**
- Contact creditors
- Settlement offers
- Counter-offers
- Legal review
- Agreement drafting

**Creditor Status:**
- Pending
- In Discussion
- Offer Made
- Accepted
- Rejected
- Settled

**Route:** `/cases/:caseId/negotiation`

---

#### Stage 6: SETTLEMENT (Status: In Settlement)
**Assigned to:** Finance Team, Legal Team

**Settlement Activities:**
- Payment to creditors
- Settlement letter collection
- NOC (No Objection Certificate)
- Account closure confirmation
- Credit bureau updates

**Route:** `/cases/:caseId/settlement`

---

#### Stage 7: PAYMENT TRACKING (Ongoing)
**Assigned to:** Collection Team

**Payment Monitoring:**
- Monthly payment tracking
- Escrow account management
- Payment reminders
- Default management
- Payment history

**Route:** `/cases/:caseId/payments`

---

#### Stage 8: CASE CLOSURE (Status: Closed)
**Assigned to:** Operations Manager

**Closure Criteria:**
- All debts settled
- All payments completed
- All NOCs received
- Final report generated
- Customer satisfaction survey

**Route:** `/cases/:caseId/closure`

---

## 👥 Role-Based Dashboard Access

### 1. CEO Dashboard
**Route:** `/dashboard/ceo`
**Access:**
- Company-wide metrics
- Revenue analytics
- Team performance
- Strategic reports
- All cases overview

---

### 2. COO Dashboard
**Route:** `/dashboard/coo`
**Access:**
- Operational metrics
- Process efficiency
- Team productivity
- Case pipeline
- Resource allocation

---

### 3. CTO Dashboard
**Route:** `/dashboard/cto`
**Access:**
- System health
- API performance
- Security logs
- Technical issues
- Integration status

---

### 4. Admin Dashboard
**Route:** `/dashboard/admin`
**Access:**
- User management
- Role assignment
- System settings
- Audit logs
- All modules

---

### 5. Finance Dashboard
**Route:** `/dashboard/finance`
**Access:**
- Payment tracking
- Revenue reports
- Settlement amounts
- Escrow accounts
- Financial analytics

---

### 6. Legal Dashboard
**Route:** `/dashboard/legal`
**Access:**
- Legal cases
- Settlement agreements
- Compliance tracking
- Document review
- Legal notices

---

### 7. HR Dashboard
**Route:** `/dashboard/hr`
**Access:**
- Employee management
- Attendance
- Performance reviews
- Recruitment
- Training

---

### 8. Operations Dashboard
**Route:** `/dashboard/operations`
**Access:**
- Case assignments
- Document verification
- Field investigations
- Process tracking
- Quality checks

---

### 9. Credit Dashboard
**Route:** `/dashboard/credit`
**Access:**
- Credit analysis
- CIBIL reports
- Bank statement analysis
- Debt assessment
- Risk evaluation

---

### 10. Counsellor Dashboard
**Route:** `/dashboard/counsellor`
**Access:**
- Assigned cases
- Counselling sessions
- Client communication
- Progress tracking
- Session notes

---

### 11. Advisor Dashboard
**Route:** `/dashboard/advisor`
**Access:**
- Client portfolio
- Financial advice
- Case recommendations
- Performance metrics
- Client feedback

---

### 12. Recovery Dashboard
**Route:** `/dashboard/recovery`
**Access:**
- Overdue payments
- Collection activities
- Payment reminders
- Default cases
- Recovery reports

---

### 13. Compliance Dashboard
**Route:** `/dashboard/compliance`
**Access:**
- Regulatory compliance
- Audit trails
- Policy adherence
- Risk assessment
- Compliance reports

---

### 14. Support Dashboard
**Route:** `/dashboard/support`
**Access:**
- Customer queries
- Ticket management
- Issue resolution
- Support metrics
- Customer satisfaction

---

### 15. Team Lead Dashboard
**Route:** `/dashboard/teamlead`
**Access:**
- Team cases
- Team performance
- Task assignment
- Quality monitoring
- Team reports

---

### 16. Verifier Dashboard
**Route:** `/dashboard/verifier`
**Access:**
- Document verification queue
- KYC verification
- Verification status
- Rejected documents
- Verification reports

---

### 17. Tech Dashboard
**Route:** `/dashboard/tech`
**Access:**
- Technical support
- System issues
- Bug tracking
- Feature requests
- Technical documentation

---

### 18. Manager Dashboard
**Route:** `/dashboard/manager`
**Access:**
- Department overview
- Team management
- Performance tracking
- Resource planning
- Manager reports

---

### 19. Employee Dashboard
**Route:** `/dashboard/employee`
**Access:**
- Assigned tasks
- Personal cases
- Daily activities
- Performance metrics
- Personal profile

---

### 20. Customer Dashboard
**Route:** `/dashboard/customer`
**Access:**
- Case status
- Payment history
- Documents
- Progress tracking
- Support chat

---

## 🔀 Complete Routing Structure

```javascript
// Authentication
/login/employee
/login/customer

// Dashboards (Role-based)
/dashboard/ceo
/dashboard/coo
/dashboard/cto
/dashboard/admin
/dashboard/finance
/dashboard/legal
/dashboard/hr
/dashboard/operations
/dashboard/credit
/dashboard/counsellor
/dashboard/advisor
/dashboard/recovery
/dashboard/compliance
/dashboard/support
/dashboard/teamlead
/dashboard/verifier
/dashboard/tech
/dashboard/manager
/dashboard/employee
/dashboard/customer

// Leads Management
/leads                          // List all leads
/leads/create                   // Create new lead
/leads/:id                      // Lead details
/leads/:id/edit                 // Edit lead
/leads/:id/convert              // Convert to case

// Cases Management
/cases                          // List all cases
/cases/create                   // Create new case
/cases/:caseId                  // Case overview
/cases/:caseId/documents        // Document management
/cases/:caseId/credit-analysis  // Credit analysis
/cases/:caseId/counselling      // Counselling details
/cases/:caseId/enrollment       // Enrollment details
/cases/:caseId/negotiation      // Negotiation tracking
/cases/:caseId/settlement       // Settlement details
/cases/:caseId/payments         // Payment tracking
/cases/:caseId/closure          // Case closure
/cases/:caseId/timeline         // Case timeline
/cases/:caseId/notes            // Case notes
/cases/:caseId/edit             // Edit case

// Customer Management
/customers                      // List all customers
/customers/:id                  // Customer profile
/customers/:id/cases            // Customer cases
/customers/:id/payments         // Customer payments
/customers/:id/documents        // Customer documents

// Payment Management
/payments                       // All payments
/payments/pending               // Pending payments
/payments/completed             // Completed payments
/payments/overdue               // Overdue payments
/payments/:id                   // Payment details

// Document Management
/documents                      // All documents
/documents/pending              // Pending verification
/documents/verified             // Verified documents
/documents/rejected             // Rejected documents

// Reports
/reports/performance            // Performance reports
/reports/collection             // Collection reports
/reports/settlement             // Settlement reports
/reports/financial              // Financial reports
/reports/operational            // Operational reports

// Tasks
/tasks                          // All tasks
/tasks/my-tasks                 // My tasks
/tasks/create                   // Create task
/tasks/:id                      // Task details

// Notifications
/notifications                  // All notifications
/notifications/unread           // Unread notifications

// Settings
/settings/profile               // User profile
/settings/security              // Security settings
/settings/notifications         // Notification preferences
/settings/system                // System settings (Admin only)

// Support
/support/tickets                // Support tickets
/support/chat                   // Live chat
/support/faq                    // FAQ

// Audit
/audit/logs                     // Audit logs (Admin only)
/audit/activities               // Activity logs
```

---

## 📊 Case Status Flow

```
New
  ↓
Under Review (Document Verification)
  ↓
In Counselling
  ↓
Enrolled
  ↓
In Negotiation
  ↓
In Settlement
  ↓
Partially Settled
  ↓
Fully Settled
  ↓
Closed

Alternative Paths:
- On Hold (temporary pause)
- Rejected (not eligible)
- Cancelled (customer withdrawal)
- Defaulted (payment failure)
```

---

## 🎯 Key Features per Module

### Lead Module
- Lead capture
- Lead scoring
- Lead assignment
- Follow-up tracking
- Conversion tracking

### Case Module
- Case creation with unique ID
- Status tracking
- Assignment management
- Document management
- Timeline tracking
- Notes & comments

### Payment Module
- Payment scheduling
- Payment collection
- Escrow management
- Payment reminders
- Default handling

### Document Module
- Document upload
- Document verification
- Document storage
- Document sharing
- Version control

### Communication Module
- Email integration
- SMS notifications
- WhatsApp integration
- In-app chat
- Call logging

### Reporting Module
- Custom reports
- Scheduled reports
- Export functionality
- Data visualization
- Analytics dashboard

---

## 🔐 Security & Access Control

### Role Hierarchy
```
CEO/COO/CTO (Full Access)
  ↓
Admin (System Management)
  ↓
Department Heads (Finance, Legal, HR, Operations)
  ↓
Team Leads
  ↓
Specialists (Credit, Counsellor, Advisor, Verifier)
  ↓
Employees
  ↓
Customers (Limited Access)
```

### Permission Levels
- **View Only:** Read access
- **Edit:** Modify existing records
- **Create:** Create new records
- **Delete:** Remove records (restricted)
- **Admin:** Full system access

---

## 📱 Mobile App Integration

### Customer App Features
- Case status tracking
- Payment reminders
- Document upload
- Chat support
- Progress visualization

### Employee App Features
- Task management
- Field verification
- Document capture
- Quick updates
- Offline support

---

## 🚀 Implementation Priority

### Phase 1 (Immediate)
1. Case ID generation system
2. Basic routing structure
3. Dashboard templates
4. Case list & details pages

### Phase 2 (Next)
1. Document management
2. Payment tracking
3. Status workflow
4. Role-based access

### Phase 3 (Future)
1. Advanced analytics
2. Mobile app
3. AI-powered insights
4. Automation workflows

---

**Last Updated:** 2024
**Version:** 2.0
**Status:** ✅ Ready for Implementation
