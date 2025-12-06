# 👥 ROLE DEFINITIONS & RESPONSIBILITIES

## Complete Role-Based Access & Workflow Guide

---

## 🔵 1. COUNSELLOR

### Role Summary
**Title**: Debt Relief Counsellor  
**Level**: Entry to Mid  
**Department**: Operations  
**Direct Reports**: None

### Detailed Responsibilities

#### Primary Functions
1. **Lead Intake** (40% of time)
   - Answer incoming calls within 30 seconds
   - Respond to WhatsApp messages within 5 minutes
   - Greet with empathy and warmth
   - Confirm basic identity (name, phone, city)

2. **Emotional Assessment** (30% of time)
   - Gauge stress level (LOW/MEDIUM/HIGH/EXTREME)
   - Identify harassment type (NONE/CALLS/THREATS/HOME_VISIT/EMPLOYER_CONTACT)
   - Assess urgency (EXPLORING/NEED_HELP/DEFAULTED/LEGAL_NOTICE)
   - Build trust and calm anxiety

3. **Financial Snapshot** (20% of time)
   - Collect approximate income
   - Collect approximate total EMI
   - Count number of lenders
   - Identify employment type

4. **Qualification & Assignment** (10% of time)
   - Determine eligibility
   - Assign to appropriate Advisor
   - Set priority flags
   - Schedule follow-up if needed

### Data Access Rights

#### CAN CREATE
- `leads` collection (all fields)
- `customers.basic` (name, phone, city only)
- `audit_logs` (auto-generated)

#### CAN READ
- `leads` (own assignments)
- `customers.basic` (limited view)
- `users` (own profile)

#### CAN UPDATE
- `leads.status` (NEW → IN_PROGRESS → CONVERTED/REJECTED)
- `leads.counsellorNotes`
- `leads.followUpDate`
- `leads.assignedAdvisor`

#### CANNOT ACCESS
- `loans` collection
- `programs` collection
- `settlements` collection
- `payments` collection
- `mandates` collection
- Customer financial details
- Credit scores
- Legal cases

### CRM Screens Access

✅ **Accessible**
- Lead Dashboard
- Lead Intake Form
- Lead List (own leads)
- Basic Customer Profile
- Call Log
- WhatsApp Integration

❌ **Restricted**
- Case Management
- Loan Details
- Program Configuration
- Settlement Module
- Payment Module
- Credit Analysis
- Legal Module

### Workflow Steps

```
1. Lead Received (Auto-assigned or manual pickup)
   ↓
2. Make First Contact (Call/WhatsApp)
   ↓
3. Conduct Empathy-Driven Conversation
   ↓
4. Fill Lead Intake Form
   - Basic Info
   - Lead Source
   - Employment Type
   - Approx Income/EMI
   - Stress/Harassment/Urgency Levels
   ↓
5. Qualification Decision
   ├─ QUALIFIED → Assign to Advisor
   ├─ NOT QUALIFIED → Mark REJECTED with reason
   └─ NEEDS NURTURE → Schedule follow-up
   ↓
6. Update CRM & Notify Advisor
```

### KPIs & Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| First Contact Time | < 15 min | Time from lead creation to first call |
| Lead Qualification Rate | > 60% | Qualified leads / Total leads |
| Conversion to Advisor | > 70% | Leads assigned / Qualified leads |
| Daily Lead Volume | 20-30 | Leads handled per day |
| Call Answer Rate | > 80% | Answered / Total attempts |
| Customer Satisfaction | > 4.2/5 | Post-call survey score |
| Lead Data Completeness | > 95% | Required fields filled |

### Performance Evaluation

**Monthly Review Criteria**
- Lead volume handled
- Qualification accuracy
- Speed of response
- Customer feedback scores
- CRM data quality
- Team collaboration

**Bonus Triggers**
- Leads converted to enrolled programs
- High customer satisfaction scores
- Zero data quality issues

### Training Requirements

**Initial Training** (2 weeks)
- Empathy & active listening
- Debt relief basics
- CRM system usage
- Call handling techniques
- Stress assessment methods
- Compliance & data privacy

**Ongoing Training** (Monthly)
- Product updates
- New lead sources
- Best practices sharing
- Soft skills enhancement

### Tools & Systems

- **CRM**: Lead Management Module
- **Communication**: WhatsApp Business API, VoIP System
- **Documentation**: Lead Intake Forms
- **Reporting**: Daily Lead Report Dashboard

### Escalation Path

**Escalate to Counsellor Team Lead when:**
- Lead shows extreme stress/suicidal ideation
- Harassment is severe (threats, violence)
- Customer is aggressive/abusive
- Technical issues prevent work
- Unclear eligibility decision

**Escalate to Advisor when:**
- Customer has complex financial situation
- Multiple legal notices involved
- High-value case (debt > ₹10L)

---

## 🔵 2. ADVISOR

### Role Summary
**Title**: Debt Relief Advisor  
**Level**: Mid to Senior  
**Department**: Operations  
**Direct Reports**: None

### Detailed Responsibilities

#### Primary Functions
1. **Case Assessment** (35% of time)
   - Review qualified leads from Counsellors
   - Conduct detailed financial interviews
   - Collect and verify documents
   - Build complete customer profile

2. **Financial Analysis** (25% of time)
   - Analyze bank statements
   - Calculate net income
   - Map all expenses
   - Create loan inventory
   - Calculate DBR (Debt-to-Income Ratio)
   - Identify surplus capacity

3. **Program Design** (25% of time)
   - Design debt relief strategy
   - Calculate optimal SIP amount
   - Determine program duration
   - Select settlement strategy (Avalanche/Snowball/Custom)
   - Create multiple scenarios
   - Estimate savings

4. **Customer Enrollment** (15% of time)
   - Present program to customer
   - Explain terms and conditions
   - Address concerns and objections
   - Obtain program agreement
   - Handover to Operations

### Data Access Rights

#### CAN CREATE
- `cases` collection
- `customers` (complete profile)
- `loans` collection
- `programs` collection
- `documents` (upload customer docs)

#### CAN READ
- `leads` (assigned to them)
- `customers` (full access)
- `loans` (all details)
- `programs` (all details)
- `credit_scores` (read-only)
- `mandates` (status only)

#### CAN UPDATE
- `customers.basic.*`
- `customers.kyc.*` (before verification)
- `customers.address.*`
- `customers.employment.*`
- `customers.household.*`
- `customers.expenses.*`
- `loans.*` (all fields)
- `programs.config.*`
- `programs.loans[]` (priority, target %)
- `cases.status`

#### CANNOT ACCESS
- `mandates.status` (Operations only)
- `settlements.*` (Negotiator only)
- `payments.status` (Finance only)
- `legal_cases.status` (Legal only)
- `credit_scores` (cannot edit)

### CRM Screens Access

✅ **Accessible**
- Case Dashboard
- Customer Profile (Full)
- Financial Assessment Form
- Loan Management
- Program Designer
- Document Manager
- Scenario Calculator
- Enrollment Module
- Reports & Analytics

❌ **Restricted**
- Mandate Approval
- Settlement Negotiation
- Payment Processing
- Legal Case Management
- Credit Score Editing
- Compliance Overrides

### Workflow Steps

```
1. Receive Qualified Lead from Counsellor
   ↓
2. Review Lead Notes & Contact Customer
   ↓
3. Conduct Deep Financial Interview
   - Employment details
   - Income sources
   - Household situation
   - Monthly expenses
   ↓
4. Request Documents
   - PAN, Aadhaar
   - Bank statements (6 months)
   - Salary slips (3 months)
   - Loan statements (all lenders)
   ↓
5. Create Loan Inventory
   For each loan:
   - Lender name & category
   - Product type
   - Account number
   - Original amount
   - Current outstanding
   - EMI amount & due date
   - DPD status
   - Harassment flag
   ↓
6. Financial Analysis
   - Calculate total income
   - Calculate total expenses
   - Calculate DBR
   - Identify surplus
   - Assess risk factors
   ↓
7. Coordinate with Credit Team
   - Submit for verification
   - Wait for credit approval
   - Address any red flags
   ↓
8. Design Program
   - Select loans to include
   - Calculate SIP amount
   - Determine duration
   - Choose strategy
   - Estimate settlements
   - Calculate savings
   ↓
9. Create Scenarios (2-3 options)
   - Aggressive (higher SIP, shorter duration)
   - Moderate (balanced)
   - Conservative (lower SIP, longer duration)
   ↓
10. Present to Customer
    - Explain each scenario
    - Show savings calculation
    - Address questions
    - Recommend best option
    ↓
11. Obtain Agreement
    - Generate program agreement PDF
    - Send for eSign
    - Confirm enrollment
    ↓
12. Handover to Operations
    - Update case status
    - Notify Operations team
    - Provide mandate details
```

### KPIs & Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Lead to Enrollment | > 50% | Enrolled / Leads received |
| Case Completion Time | < 7 days | Time from lead to enrollment |
| Document Collection | > 90% | Complete docs / Total cases |
| Program Accuracy | > 85% | Actual vs projected performance |
| Customer Satisfaction | > 4.5/5 | Post-enrollment survey |
| Daily Enrollments | 2-3 | Programs enrolled per day |
| DBR Accuracy | ±5% | Calculated vs actual |

### Performance Evaluation

**Monthly Review Criteria**
- Enrollment conversion rate
- Case quality score
- Document completeness
- Program design accuracy
- Customer feedback
- Handover quality to Operations

**Bonus Triggers**
- High enrollment rate
- Zero case rejections from Credit
- Excellent customer satisfaction
- Fast turnaround time

### Training Requirements

**Initial Training** (4 weeks)
- Financial analysis fundamentals
- Debt relief strategies
- CRM advanced features
- Document verification
- Program design methodology
- Customer psychology
- Compliance & regulations

**Ongoing Training** (Monthly)
- Advanced financial modeling
- New product features
- Industry best practices
- Case study reviews

### Tools & Systems

- **CRM**: Case Management, Program Designer
- **Financial Tools**: DBR Calculator, Scenario Simulator
- **Document Management**: Upload, Verify, Store
- **eSign**: Agreement generation and signing
- **Communication**: Video calls, Screen sharing

### Escalation Path

**Escalate to Operations Head when:**
- Customer refuses to provide documents
- Income/expense mismatch is significant
- Customer has unrealistic expectations
- Case is too complex (debt > ₹20L)

**Escalate to Credit Team when:**
- Suspected fraud
- Document authenticity concerns
- High-risk indicators

**Escalate to Legal Team when:**
- Multiple legal notices
- Court cases already filed
- Severe harassment reported

---

## 🔵 3. CREDIT ANALYST

### Role Summary
**Title**: Credit & Risk Analyst  
**Level**: Mid to Senior  
**Department**: Credit & Risk  
**Direct Reports**: None

### Detailed Responsibilities

#### Primary Functions
1. **Document Verification** (40% of time)
   - Verify bank statements authenticity
   - Cross-check salary slips
   - Validate loan statements
   - Detect document tampering

2. **Credit Analysis** (30% of time)
   - Pull CIBIL reports
   - Analyze credit behavior
   - Verify DPD status
   - Check loan stacking
   - Identify write-offs

3. **Risk Assessment** (20% of time)
   - Calculate risk score
   - Identify fraud patterns
   - Flag high-risk cases
   - Recommend approval/rejection

4. **Reporting** (10% of time)
   - Provide feedback to Advisors
   - Document findings
   - Update risk database
   - Generate risk reports

### Data Access Rights

#### CAN CREATE
- `credit_reports` collection
- `risk_assessments` collection
- `fraud_flags` collection

#### CAN READ
- `customers` (financial data)
- `loans` (all details)
- `cases` (assigned cases)
- `documents` (statements, proofs)
- `programs` (read-only)

#### CAN UPDATE
- `customers.creditScore`
- `customers.riskScore`
- `loans.status.dpdStatus`
- `loans.risk.legalNotice`
- `cases.creditApproval`
- `cases.riskFlags`

#### CANNOT ACCESS
- `programs.config` (cannot edit)
- `settlements.*`
- `payments.*`
- `mandates.*`

### CRM Screens Access

✅ **Accessible**
- Credit Dashboard
- Case Review Queue
- Document Viewer
- CIBIL Integration
- Statement Analyzer
- Risk Scoring Tool
- Fraud Detection Module
- Approval/Rejection Interface

❌ **Restricted**
- Program Design
- Settlement Negotiation
- Payment Processing
- Mandate Management
- Customer Communication (limited)

### Workflow Steps

```
1. Receive Case from Advisor
   ↓
2. Review Submitted Documents
   - Bank statements
   - Salary slips
   - Loan statements
   - KYC documents
   ↓
3. Verify Document Authenticity
   - Check PDF properties
   - Verify bank logos/formats
   - Cross-reference data
   - Detect tampering
   ↓
4. Pull CIBIL Report
   - Obtain customer consent
   - Pull credit report
   - Analyze credit history
   - Note all active loans
   ↓
5. Verify Loan Details
   For each loan:
   - Match with CIBIL data
   - Verify outstanding amount
   - Confirm DPD status
   - Check for write-offs
   - Identify hidden loans
   ↓
6. Analyze Bank Statements
   - Calculate average monthly credits
   - Identify salary patterns
   - Check bounce history
   - Detect irregular transactions
   - Verify expense claims
   ↓
7. Calculate Risk Score
   Factors:
   - Credit score
   - DPD severity
   - Loan stacking
   - Income stability
   - Bounce history
   - Legal notices
   ↓
8. Fraud Detection
   Red flags:
   - Edited documents
   - Income mismatch
   - Hidden loans
   - Multiple applications
   - Suspicious patterns
   ↓
9. Make Decision
   ├─ APPROVED → Notify Advisor
   ├─ APPROVED WITH CONDITIONS → Specify conditions
   ├─ REJECTED → Provide detailed reason
   └─ NEEDS MORE INFO → Request additional docs
   ↓
10. Update CRM & Notify Advisor
```

### KPIs & Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Verification Accuracy | > 95% | Correct assessments / Total |
| Turnaround Time | < 24 hours | Time from submission to decision |
| Fraud Detection Rate | Track | Frauds caught / Total cases |
| False Positive Rate | < 5% | Wrong rejections / Total rejections |
| Daily Case Volume | 10-15 | Cases verified per day |
| Risk Score Accuracy | > 90% | Predicted vs actual risk |

### Performance Evaluation

**Monthly Review Criteria**
- Verification accuracy
- Fraud detection effectiveness
- Turnaround time
- Quality of feedback to Advisors
- Risk score calibration

**Bonus Triggers**
- High fraud detection rate
- Zero false negatives
- Fast turnaround
- Excellent accuracy

### Training Requirements

**Initial Training** (3 weeks)
- Credit analysis fundamentals
- CIBIL report interpretation
- Document verification techniques
- Fraud detection methods
- Risk scoring methodology
- CRM credit module

**Ongoing Training** (Monthly)
- New fraud patterns
- Industry updates
- Advanced analytics
- Case study reviews

### Tools & Systems

- **CRM**: Credit Module
- **CIBIL API**: Credit report pulling
- **Statement Analyzer**: Automated analysis tool
- **Fraud Detection**: Pattern recognition system
- **Risk Engine**: Automated risk scoring

### Escalation Path

**Escalate to Credit Head when:**
- Suspected major fraud
- Borderline risk cases
- Advisor disputes rejection
- Unusual patterns detected

**Escalate to Compliance when:**
- Confirmed fraud
- Policy violations
- Regulatory concerns

---

