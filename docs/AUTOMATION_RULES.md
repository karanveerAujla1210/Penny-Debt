# ⚙️ AUTOMATION RULES & TRIGGERS

## Complete System Automation Framework

---

## 🎯 AUTOMATION PHILOSOPHY

**Automate Everything That:**
1. Is repetitive
2. Follows clear rules
3. Doesn't require human judgment
4. Can reduce response time
5. Improves consistency

**Keep Human-in-Loop For:**
1. Complex decisions
2. Customer empathy moments
3. Negotiation strategies
4. Compliance overrides
5. Escalations

---

## 🔔 NOTIFICATION AUTOMATIONS

### 1. Lead Assignment Notifications

```javascript
TRIGGER: New lead created
CONDITIONS: Always
ACTIONS:
  - Assign to counsellor (round-robin or priority-based)
  - Send WhatsApp to counsellor: "New lead assigned: [Name] - [Phone]"
  - Send CRM notification
  - Start 15-minute SLA timer
  - If stress_level = EXTREME: Mark as priority + notify team lead
```

### 2. SLA Breach Alerts

```javascript
TRIGGER: Time-based check (every 5 minutes)
CONDITIONS:
  - Lead status = NEW
  - Created > 15 minutes ago
  - No contact attempt made
ACTIONS:
  - Send alert to counsellor
  - Send alert to team lead
  - Escalate to supervisor if > 30 minutes
  - Log SLA breach in audit
```

### 3. Document Upload Reminders

```javascript
TRIGGER: Case created + documents requested
CONDITIONS:
  - Documents not uploaded
  - Reminder schedule: Day 1, Day 2, Day 3, Day 5
ACTIONS:
  - Send WhatsApp reminder to customer
  - Send email with upload link
  - Send push notification (if app installed)
  - Notify advisor if Day 5 reached
```

### 4. SIP Debit Reminders

```javascript
TRIGGER: 3 days before SIP date
CONDITIONS: Program status = ACTIVE
ACTIONS:
  - Send WhatsApp: "Your SIP of ₹X will be debited on [DATE]"
  - Send email reminder
  - Send push notification
  - Check mandate status (if not approved, alert operations)
```

### 5. Settlement Offer Notifications

```javascript
TRIGGER: Settlement status = OFFER_RECEIVED
CONDITIONS: Always
ACTIONS:
  - Send push notification to customer app
  - Send WhatsApp: "We have a settlement offer for [Lender]. Tap to review."
  - Send email with offer details
  - Create in-app notification badge
  - Set 7-day response timer
```

---

## 🤖 WORKFLOW AUTOMATIONS

### 1. Lead Auto-Assignment

```javascript
TRIGGER: New lead created
LOGIC:
  IF lead_source = "PARTNER" AND partner_has_dedicated_counsellor:
    ASSIGN TO partner_counsellor
  ELSE IF stress_level IN ["HIGH", "EXTREME"]:
    ASSIGN TO senior_counsellor (round-robin)
  ELSE IF urgency_level = "LEGAL_NOTICE":
    ASSIGN TO senior_counsellor + FLAG as priority
  ELSE:
    ASSIGN TO available_counsellor (round-robin)
  
  THEN:
    - Update lead.assignedCounsellor
    - Update lead.status = "ASSIGNED"
    - Send notifications
    - Start SLA timer
```

### 2. Credit Verification Auto-Trigger

```javascript
TRIGGER: Advisor marks case as "Ready for Credit Review"
CONDITIONS:
  - All required documents uploaded
  - Loan inventory completed
  - Financial data filled
ACTIONS:
  - Create credit_review_task
  - Assign to available credit analyst (round-robin)
  - Send notification to credit team
  - Start 24-hour SLA timer
  - Update case.status = "CREDIT_REVIEW"
```

### 3. Mandate Auto-Generation

```javascript
TRIGGER: Program agreement eSigned by customer
CONDITIONS:
  - Bank details provided
  - Mandate type selected
ACTIONS:
  - Generate mandate form (NACH/eNACH/UPI)
  - Pre-fill customer details
  - Send to customer for approval
  - Update mandate.status = "SENT"
  - Start tracking timer
  - Notify operations team
```

### 4. SIP Debit Scheduling

```javascript
TRIGGER: Mandate approved
CONDITIONS: Program status = ACTIVE_PENDING_MANDATE
ACTIONS:
  - Calculate first SIP date (next occurrence of sipDebitDay)
  - Create payment record with status = "SCHEDULED"
  - Update program.status = "ACTIVE"
  - Schedule recurring SIP (monthly)
  - Send confirmation to customer
  - Notify operations team
```

### 5. Failed Payment Retry Logic

```javascript
TRIGGER: Payment status = FAILED
CONDITIONS: Retry count < 3
ACTIONS:
  - Schedule retry after 2 days
  - Send WhatsApp to customer: "SIP failed. Please ensure sufficient balance."
  - Send email with payment link (manual payment option)
  - Notify operations team
  - If retry_count = 3:
    - Notify recovery team
    - Update program.status = "AT_RISK"
    - Create recovery task
```

### 6. Settlement Approval Workflow

```javascript
TRIGGER: Customer approves settlement offer in app
CONDITIONS: settlement.status = "OFFER_RECEIVED"
ACTIONS:
  - Update settlement.status = "APPROVED_BY_CUSTOMER"
  - Update settlement.customerDecision = "APPROVED"
  - Notify negotiator
  - Notify finance team
  - Create payment task for finance
  - Send confirmation to customer
  - Start NOC tracking timer
```

### 7. Program Completion Detection

```javascript
TRIGGER: Daily check (midnight)
CONDITIONS:
  - All enrolled loans have settlement.status = "SETTLED"
  - All NOCs received
ACTIONS:
  - Update program.status = "COMPLETED"
  - Generate completion certificate
  - Send to customer via email + app
  - Trigger customer satisfaction survey
  - Notify advisor for follow-up call
  - Archive case data
```

---

## 📊 DATA AUTOMATION

### 1. Auto-Calculate Fields

```javascript
// Expenses Total
TRIGGER: Any expense field updated
CALCULATION:
  customers.expenses.total = 
    rentOrHomeEmi + utilities + groceries + 
    schoolFees + transport + insurance + otherAmount

// Enrolled Debt Total
TRIGGER: Loan added/removed from program OR loan outstanding updated
CALCULATION:
  programs.totals.enrolledDebt = 
    SUM(loans WHERE includeInProgram = true).currentOutstanding

// Expected Savings
TRIGGER: Settlement target updated OR enrolled debt updated
CALCULATION:
  programs.totals.expectedSavings = 
    enrolledDebt - SUM(loans.targetSettlementAmount)

// DBR (Debt-to-Income Ratio)
TRIGGER: Income or EMI updated
CALCULATION:
  cases.dbr = (SUM(loans.emiAmount) / customers.employment.monthlyNetIncome) × 100
```

### 2. Status Auto-Updates

```javascript
// Lead Status
TRIGGER: Counsellor assigns to advisor
ACTION: Update lead.status = "CONVERTED"

// Case Status
TRIGGER: Credit approval received
ACTION: Update case.status = "APPROVED"

// Program Status
TRIGGER: First SIP successful
ACTION: Update program.status = "ACTIVE"

// Loan Status
TRIGGER: Settlement paid + NOC received
ACTION: Update loan.status = "SETTLED"
```

### 3. Audit Log Auto-Creation

```javascript
TRIGGER: Any sensitive field updated
CONDITIONS:
  - Field in [kyc, financial, status, payment, settlement]
ACTIONS:
  - Create audit_log entry
  - Capture: userId, timestamp, entityType, entityId, action, previousData, newData
  - If field is immutable: Block update + alert compliance
```

---

## ⏰ TIME-BASED AUTOMATIONS

### 1. Daily Automations (Run at 6:00 AM)

```javascript
// SIP Debit Day Checks
FOR each program WHERE sipDebitDay = TODAY:
  - Trigger SIP debit process
  - Send final reminder to customer
  - Alert operations team

// Overdue Document Reminders
FOR each case WHERE documents_pending > 3 days:
  - Send reminder to customer
  - Alert advisor

// Pending Mandate Follow-ups
FOR each mandate WHERE status = "SENT" AND sent_date > 7 days ago:
  - Send reminder to customer
  - Alert operations team
```

### 2. Weekly Automations (Run Monday 9:00 AM)

```javascript
// Performance Reports
- Generate weekly KPI reports for all teams
- Send to department heads
- Highlight red flags

// At-Risk Program Detection
FOR each program WHERE missed_sips >= 2:
  - Flag as AT_RISK
  - Assign to recovery team
  - Send alert to advisor

// NOC Follow-ups
FOR each settlement WHERE noc_pending > 14 days:
  - Alert negotiator
  - Send follow-up to lender
```

### 3. Monthly Automations (Run 1st of month)

```javascript
// Performance Scorecards
- Calculate monthly KPIs for all employees
- Generate scorecards
- Send to managers for review

// Program Health Checks
FOR each active program:
  - Calculate actual vs projected performance
  - Flag deviations > 20%
  - Alert advisor for review

// Revenue Reconciliation
- Match all payments with bank statements
- Flag discrepancies
- Send report to finance head
```

---

## 🚨 ALERT AUTOMATIONS

### 1. Critical Alerts (Immediate Action Required)

```javascript
// Payment Gateway Down
TRIGGER: Payment API returns error for > 5 consecutive attempts
ACTIONS:
  - Alert operations head (SMS + Call)
  - Alert tech team
  - Display banner in CRM
  - Pause all SIP debits

// Fraud Detection
TRIGGER: Fraud score > 80
ACTIONS:
  - Block case immediately
  - Alert compliance team
  - Alert credit head
  - Freeze all related transactions
  - Create investigation task

// Legal Emergency
TRIGGER: Harassment level = "EXTREME" OR legal_notice_type = "ARREST_WARRANT"
ACTIONS:
  - Alert legal head (SMS + Call)
  - Create priority legal case
  - Assign to senior legal team member
  - Send immediate response template to customer
```

### 2. Warning Alerts (Action within 24 hours)

```javascript
// High Dropout Risk
TRIGGER: Missed SIPs = 2 OR customer_engagement_score < 30
ACTIONS:
  - Alert recovery team
  - Create recovery task
  - Send re-engagement message to customer

// Document Verification Issues
TRIGGER: Credit analyst flags document as suspicious
ACTIONS:
  - Alert advisor
  - Alert compliance team
  - Request additional documents from customer
  - Put case on hold

// Settlement Offer Expiring
TRIGGER: Settlement offer expires in 3 days AND customer_decision = "PENDING"
ACTIONS:
  - Send urgent reminder to customer
  - Alert negotiator
  - Prepare to re-negotiate if needed
```

### 3. Info Alerts (Monitor)

```javascript
// Milestone Achievements
TRIGGER: Customer completes 6 SIPs OR first settlement achieved
ACTIONS:
  - Send congratulations message to customer
  - Update progress dashboard
  - Notify advisor

// Positive Feedback
TRIGGER: Customer satisfaction score = 5
ACTIONS:
  - Alert team lead
  - Request testimonial from customer
  - Add to success stories

// Target Achievement
TRIGGER: Employee achieves monthly target
ACTIONS:
  - Send congratulations message
  - Notify manager
  - Update leaderboard
```

---

## 🔄 INTEGRATION AUTOMATIONS

### 1. WhatsApp Business API

```javascript
// Auto-Responses
TRIGGER: Customer sends WhatsApp message
CONDITIONS: Outside business hours (9 PM - 9 AM)
RESPONSE:
  "Thank you for contacting Penny & Debt. Our team will respond within 2 hours during business hours (9 AM - 9 PM). For urgent issues, please call [PHONE]."

// Status Updates
TRIGGER: Case status changes
ACTIONS:
  - Send WhatsApp update to customer
  - Include next steps
  - Provide relevant links
```

### 2. Email Automations

```javascript
// Welcome Email
TRIGGER: Customer account created
CONTENT:
  - Welcome message
  - How to use the app
  - What to expect next
  - Contact information

// Weekly Progress Report
TRIGGER: Every Monday for active programs
CONTENT:
  - SIPs completed vs remaining
  - Amount accumulated
  - Settlements achieved
  - Next steps
```

### 3. SMS Automations

```javascript
// OTP for Login
TRIGGER: Customer login attempt
ACTION: Send 6-digit OTP valid for 10 minutes

// Payment Confirmation
TRIGGER: SIP payment successful
ACTION: Send SMS with payment details and receipt number

// Critical Alerts
TRIGGER: Legal notice received OR harassment escalation
ACTION: Send SMS with immediate action items
```

### 4. Push Notifications

```javascript
// Real-time Updates
TRIGGER: Settlement offer received OR payment failed OR document approved
ACTION: Send push notification to mobile app

// Daily Reminders
TRIGGER: 9:00 AM daily
CONDITIONS: Pending actions exist
ACTION: Send summary of pending items
```

---

## 🎛️ CONDITIONAL AUTOMATIONS

### 1. Smart Lead Routing

```javascript
IF lead.leadSource = "GOOGLE" AND lead.city IN ["Mumbai", "Delhi", "Bangalore"]:
  priority = "HIGH"
  assign_to = "senior_counsellor"
ELSE IF lead.approxDebt > 500000:
  priority = "HIGH"
  assign_to = "senior_counsellor"
ELSE IF lead.stressLevel = "EXTREME":
  priority = "CRITICAL"
  assign_to = "team_lead"
  notify = "operations_head"
ELSE:
  priority = "NORMAL"
  assign_to = "round_robin"
```

### 2. Dynamic SIP Adjustment

```javascript
IF customer.missed_sips >= 2 AND customer.income_reduced = true:
  - Suggest SIP reduction
  - Create advisor review task
  - Send options to customer
ELSE IF customer.income_increased > 20%:
  - Suggest SIP increase
  - Show faster completion timeline
  - Send proposal to customer
```

### 3. Settlement Strategy Selection

```javascript
IF loan.dpdStatus = "DPD_90+" AND loan.lender.category = "FINTECH":
  expected_settlement_pct = 35-40%
  negotiation_strategy = "AGGRESSIVE"
ELSE IF loan.dpdStatus = "DPD_60" AND loan.lender.category = "BANK":
  expected_settlement_pct = 50-55%
  negotiation_strategy = "MODERATE"
ELSE IF loan.risk.legalNotice != "NONE":
  expected_settlement_pct = 45-50%
  negotiation_strategy = "URGENT"
  priority = "HIGH"
```

---

## 📈 PREDICTIVE AUTOMATIONS

### 1. Dropout Risk Prediction

```javascript
TRIGGER: Daily ML model run
INPUTS:
  - SIP payment history
  - Customer engagement score
  - Support ticket frequency
  - App usage patterns
  - Income stability indicators

OUTPUT: Risk score (0-100)

ACTIONS:
  IF risk_score > 70:
    - Flag as HIGH_RISK
    - Assign to recovery team
    - Trigger proactive outreach
  ELSE IF risk_score > 50:
    - Flag as MEDIUM_RISK
    - Increase engagement touchpoints
    - Send motivational content
```

### 2. Settlement Success Prediction

```javascript
TRIGGER: Before starting negotiation
INPUTS:
  - Lender type
  - DPD status
  - Loan age
  - Customer payment history
  - Historical settlement data

OUTPUT: Predicted settlement % range

ACTIONS:
  - Set internal target
  - Assign to appropriate negotiator
  - Prepare negotiation strategy
```

---

## 🛠️ SYSTEM MAINTENANCE AUTOMATIONS

### 1. Data Cleanup

```javascript
// Archive Old Leads
TRIGGER: Monthly (1st of month)
CONDITIONS: Lead status = "REJECTED" AND created > 6 months ago
ACTION: Move to archive database

// Delete Temporary Files
TRIGGER: Daily (2:00 AM)
CONDITIONS: File type = "TEMP" AND created > 7 days ago
ACTION: Delete from storage

// Compress Old Audit Logs
TRIGGER: Quarterly
CONDITIONS: Audit logs > 3 months old
ACTION: Compress and move to cold storage
```

### 2. Performance Monitoring

```javascript
// API Response Time Check
TRIGGER: Every 5 minutes
CONDITIONS: Avg response time > 2 seconds
ACTIONS:
  - Alert tech team
  - Log performance issue
  - Scale up servers if needed

// Database Query Optimization
TRIGGER: Daily (3:00 AM)
ACTION: Analyze slow queries and create optimization tasks
```

---

## 🔐 SECURITY AUTOMATIONS

### 1. Suspicious Activity Detection

```javascript
// Multiple Failed Login Attempts
TRIGGER: Failed login attempts > 5 in 10 minutes
ACTIONS:
  - Lock account for 30 minutes
  - Send alert to user
  - Log security event
  - Alert compliance team if employee account

// Unusual Data Access
TRIGGER: Employee accesses > 50 customer records in 1 hour
ACTIONS:
  - Alert compliance team
  - Log access pattern
  - Require justification
  - Temporary access restriction if no valid reason
```

### 2. Compliance Checks

```javascript
// KYC Expiry Check
TRIGGER: Daily
CONDITIONS: KYC documents expiring in 30 days
ACTIONS:
  - Alert customer to update documents
  - Alert advisor
  - Flag account for review

// Audit Log Integrity Check
TRIGGER: Hourly
ACTION: Verify audit log chain integrity, alert if tampering detected
```

---

## 📱 CUSTOMER APP AUTOMATIONS

### 1. Onboarding Flow

```javascript
TRIGGER: Customer downloads app and registers
SEQUENCE:
  Day 0: Welcome email + app tour
  Day 1: Reminder to complete profile
  Day 2: Reminder to upload documents
  Day 3: Advisor introduction
  Day 7: Check-in message
```

### 2. Engagement Automations

```javascript
// Inactivity Detection
TRIGGER: Customer hasn't opened app in 7 days
ACTION: Send push notification with personalized message

// Milestone Celebrations
TRIGGER: SIP milestones (3, 6, 12 months)
ACTION: Send congratulations message + progress report

// Educational Content
TRIGGER: Weekly (based on customer's stage)
ACTION: Send relevant financial tips and debt management advice
```

---

## 🎯 BUSINESS RULE AUTOMATIONS

### 1. Eligibility Checks

```javascript
// Minimum Eligibility
TRIGGER: Counsellor tries to qualify lead
CHECKS:
  - Income >= 15000
  - Debt >= 50000
  - Age between 21-65
  - Employment status valid
  
IF all_checks_pass:
  ALLOW qualification
ELSE:
  SHOW rejection reason
  SUGGEST alternatives
```

### 2. Approval Workflows

```javascript
// High-Value Case Approval
TRIGGER: Case value > ₹10L
WORKFLOW:
  1. Advisor creates case
  2. Auto-assign to senior advisor for review
  3. Require operations head approval
  4. Require compliance clearance
  5. Then proceed to credit verification

// Settlement Approval
TRIGGER: Settlement % < 35% (very aggressive)
WORKFLOW:
  1. Negotiator proposes settlement
  2. Require negotiation head approval
  3. Require finance head approval
  4. Then present to customer
```

---

## 🔧 CONFIGURATION

All automations are configurable via admin panel:
- Enable/disable individual automations
- Adjust thresholds and timers
- Customize notification templates
- Set business hours
- Configure retry logic
- Define escalation paths

---

