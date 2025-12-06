# 🔐 ACCESS CONTROL MATRIX

## Complete Role-Based Access Control (RBAC) System

---

## 📊 MASTER ACCESS MATRIX

### Legend
- ✅ **CREATE**: Can create new records
- 📖 **READ**: Can view data
- ✏️ **UPDATE**: Can modify existing data
- ❌ **DELETE**: Can remove records
- 🔒 **RESTRICTED**: No access
- 🟡 **CONDITIONAL**: Access with conditions

---

## 🗂️ COLLECTION-LEVEL ACCESS

| Collection | Counsellor | Advisor | Credit | Operations | Negotiator | Legal | Finance | Support | Recovery | Compliance |
|------------|------------|---------|--------|------------|------------|-------|---------|---------|----------|------------|
| **users** | 📖 (self) | 📖 (self) | 📖 (self) | 📖 (self) | 📖 (self) | 📖 (self) | 📖 (self) | 📖 (self) | 📖 (self) | 📖✏️ (all) |
| **roles** | 📖 (own) | 📖 (own) | 📖 (own) | 📖 (own) | 📖 (own) | 📖 (own) | 📖 (own) | 📖 (own) | 📖 (own) | 📖✏️ (all) |
| **customers** | ✅📖✏️ (basic) | ✅📖✏️ (full) | 📖 (financial) | 📖 (contact) | 📖 (full) | 📖 (full) | 📖 (payment) | 📖✏️ (contact) | 📖✏️ (full) | 📖 (all) |
| **leads** | ✅📖✏️ (own) | 📖✏️ (assigned) | 🔒 | 🔒 | 🔒 | 🔒 | 🔒 | 📖 (support) | 📖 (recovery) | 📖 (all) |
| **cases** | 🔒 | ✅📖✏️ (own) | 📖✏️ (credit) | 📖✏️ (ops) | 📖 (full) | 📖✏️ (legal) | 📖 (finance) | 📖 (support) | 📖✏️ (recovery) | 📖 (all) |
| **loans** | 🔒 | ✅📖✏️ (full) | 📖✏️ (risk) | 📖 (status) | 📖✏️ (nego) | 📖✏️ (legal) | 📖 (payment) | 📖 (view) | 📖 (view) | 📖 (all) |
| **programs** | 🔒 | ✅📖✏️ (config) | 📖 (view) | 📖✏️ (status) | 📖 (full) | 📖 (view) | 📖✏️ (finance) | 📖 (view) | 📖✏️ (modify) | 📖 (all) |
| **settlements** | 🔒 | 📖 (view) | 🔒 | 📖 (status) | ✅📖✏️ (full) | 📖 (view) | 📖✏️ (payment) | 📖 (view) | 📖 (view) | 📖 (all) |
| **payments** | 🔒 | 📖 (view) | 🔒 | 📖✏️ (sip) | 📖 (view) | 🔒 | ✅📖✏️ (full) | 📖 (view) | 📖 (view) | 📖 (all) |
| **mandates** | 🔒 | 📖 (view) | 🔒 | ✅📖✏️ (full) | 🔒 | 🔒 | 📖 (view) | 📖 (view) | 📖 (view) | 📖 (all) |
| **harassment_cases** | 🔒 | 📖 (view) | 🔒 | 🔒 | 🔒 | ✅📖✏️ (full) | 🔒 | ✅📖 (intake) | 🔒 | 📖 (all) |
| **legal_cases** | 🔒 | 📖 (view) | 🔒 | 🔒 | 🔒 | ✅📖✏️ (full) | 🔒 | 📖 (view) | 🔒 | 📖 (all) |
| **tickets** | 🔒 | 📖 (own) | 🔒 | 📖 (own) | 📖 (own) | 📖 (own) | 📖 (own) | ✅📖✏️ (all) | 📖 (own) | 📖 (all) |
| **documents** | 🔒 | ✅📖 (case) | 📖 (verify) | 📖 (mandate) | 📖 (noc) | ✅📖 (legal) | 📖 (payment) | 📖 (support) | 📖 (view) | 📖 (all) |
| **audit_logs** | 🔒 | 🔒 | 🔒 | 🔒 | 🔒 | 🔒 | 🔒 | 🔒 | 🔒 | 📖 (all) |

---

## 🔍 FIELD-LEVEL ACCESS CONTROL

### customers Collection

| Field Path | Counsellor | Advisor | Credit | Operations | Negotiator | Legal | Finance | Support | Recovery | Compliance |
|------------|------------|---------|--------|------------|------------|-------|---------|---------|----------|------------|
| **basic.fullName** | ✏️ | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | ✏️ | ✏️ | 📖 |
| **basic.gender** | ✏️ | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 |
| **basic.dob** | ✏️ | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 |
| **basic.primaryMobile** | ✏️ | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | ✏️ | ✏️ | 📖 |
| **basic.email** | ✏️ | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | ✏️ | ✏️ | 📖 |
| **kyc.pan** | 🔒 | ✏️ | 📖 | 📖 | 🔒 | 📖 | 📖 | 🔒 | 🔒 | 📖 |
| **kyc.aadhaar** | 🔒 | ✏️ | 📖 | 📖 | 🔒 | 📖 | 📖 | 🔒 | 🔒 | 📖 |
| **kyc.panVerified** | 🔒 | 🔒 | ✏️ | 📖 | 🔒 | 📖 | 📖 | 🔒 | 🔒 | ✏️ |
| **kyc.aadhaarVerified** | 🔒 | 🔒 | ✏️ | 📖 | 🔒 | 📖 | 📖 | 🔒 | 🔒 | ✏️ |
| **address.*** | ✏️ | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | ✏️ | ✏️ | 📖 |
| **employment.type** | ✏️ | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 |
| **employment.monthlyNetIncome** | 🔒 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | ✏️ | 📖 |
| **employment.salaryBank** | 🔒 | ✏️ | 📖 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 |
| **expenses.*** | 🔒 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | ✏️ | 📖 |
| **expenses.total** | 🔒 | 🔒 (auto) | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 |

### loans Collection

| Field Path | Counsellor | Advisor | Credit | Operations | Negotiator | Legal | Finance | Support | Recovery | Compliance |
|------------|------------|---------|--------|------------|------------|-------|---------|---------|----------|------------|
| **lender.name** | 🔒 | ✏️ | 📖 | 📖 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 |
| **lender.category** | 🔒 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 |
| **details.productType** | 🔒 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 |
| **details.accountNumber** | 🔒 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 |
| **details.originalAmount** | 🔒 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 |
| **details.currentOutstanding** | 🔒 | ✏️ | ✏️ | 📖 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 |
| **details.emiAmount** | 🔒 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 |
| **status.dpdStatus** | 🔒 | 📖 | ✏️ | 📖 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 |
| **status.lastPaymentDate** | 🔒 | ✏️ | ✏️ | 📖 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 |
| **risk.harassmentFlag** | 🔒 | ✏️ | 📖 | 📖 | 📖 | ✏️ | 📖 | 📖 | 📖 | 📖 |
| **risk.legalNotice** | 🔒 | 📖 | ✏️ | 📖 | 📖 | ✏️ | 📖 | 📖 | 📖 | 📖 |
| **includeInProgram** | 🔒 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | ✏️ |

### programs Collection

| Field Path | Counsellor | Advisor | Credit | Operations | Negotiator | Legal | Finance | Support | Recovery | Compliance |
|------------|------------|---------|--------|------------|------------|-------|---------|---------|----------|------------|
| **config.programType** | 🔒 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | ✏️ | 📖 |
| **config.startDate** | 🔒 | ✏️ | 📖 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 |
| **config.sipAmount** | 🔒 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | ✏️ | 📖 |
| **config.sipDebitDay** | 🔒 | ✏️ | 📖 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 |
| **config.strategy** | 🔒 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 |
| **loans[].priority** | 🔒 | ✏️ | 📖 | 📖 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 |
| **loans[].expectedSettlementPct** | 🔒 | ✏️ | 📖 | 📖 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 |
| **totals.enrolledDebt** | 🔒 | 🔒 (auto) | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 |
| **totals.expectedSavings** | 🔒 | 🔒 (auto) | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 | 📖 |

### settlements Collection

| Field Path | Counsellor | Advisor | Credit | Operations | Negotiator | Legal | Finance | Support | Recovery | Compliance |
|------------|------------|---------|--------|------------|------------|-------|---------|---------|----------|------------|
| **status** | 🔒 | 📖 | 🔒 | 📖 | ✏️ | 📖 | ✏️ | 📖 | 📖 | 📖 |
| **lenderOffer.amount** | 🔒 | 📖 | 🔒 | 📖 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 |
| **lenderOffer.percentage** | 🔒 | 📖 | 🔒 | 📖 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 |
| **internalTargetPct** | 🔒 | 📖 | 🔒 | 📖 | ✏️ | 📖 | 📖 | 🔒 | 📖 | 📖 |
| **customerDecision** | 🔒 | 📖 | 🔒 | 📖 | ✏️ | 📖 | 📖 | 📖 | 📖 | 📖 |
| **noc.received** | 🔒 | 📖 | 🔒 | 📖 | ✏️ | 📖 | ✏️ | 📖 | 📖 | 📖 |

### payments Collection

| Field Path | Counsellor | Advisor | Credit | Operations | Negotiator | Legal | Finance | Support | Recovery | Compliance |
|------------|------------|---------|--------|------------|------------|-------|---------|---------|----------|------------|
| **paymentType** | 🔒 | 📖 | 🔒 | ✏️ | 📖 | 🔒 | ✏️ | 📖 | 📖 | 📖 |
| **amount** | 🔒 | 📖 | 🔒 | 📖 | 📖 | 🔒 | ✏️ | 📖 | 📖 | 📖 |
| **scheduledDate** | 🔒 | 📖 | 🔒 | ✏️ | 📖 | 🔒 | ✏️ | 📖 | 📖 | 📖 |
| **paidDate** | 🔒 | 📖 | 🔒 | 📖 | 📖 | 🔒 | ✏️ | 📖 | 📖 | 📖 |
| **status** | 🔒 | 📖 | 🔒 | ✏️ | 📖 | 🔒 | ✏️ | 📖 | 📖 | 📖 |
| **referenceId** | 🔒 | 📖 | 🔒 | 📖 | 📖 | 🔒 | ✏️ | 📖 | 📖 | 📖 |

### mandates Collection

| Field Path | Counsellor | Advisor | Credit | Operations | Negotiator | Legal | Finance | Support | Recovery | Compliance |
|------------|------------|---------|--------|------------|------------|-------|---------|---------|----------|------------|
| **bank.name** | 🔒 | 📖 | 🔒 | ✏️ | 🔒 | 🔒 | 📖 | 📖 | 📖 | 📖 |
| **bank.accountNumber** | 🔒 | 📖 | 🔒 | ✏️ | 🔒 | 🔒 | 📖 | 📖 | 📖 | 📖 |
| **bank.ifsc** | 🔒 | 📖 | 🔒 | ✏️ | 🔒 | 🔒 | 📖 | 📖 | 📖 | 📖 |
| **mandateType** | 🔒 | 📖 | 🔒 | ✏️ | 🔒 | 🔒 | 📖 | 📖 | 📖 | 📖 |
| **status** | 🔒 | 📖 | 🔒 | ✏️ | 🔒 | 🔒 | 📖 | 📖 | 📖 | 📖 |
| **statusReason** | 🔒 | 📖 | 🔒 | ✏️ | 🔒 | 🔒 | 📖 | 📖 | 📖 | 📖 |

---

## 🚦 STATUS TRANSITION PERMISSIONS

### leads.status

| From → To | Counsellor | Advisor | Others |
|-----------|------------|---------|--------|
| NEW → IN_PROGRESS | ✅ | ✅ | ❌ |
| IN_PROGRESS → CONVERTED | ✅ | ✅ | ❌ |
| IN_PROGRESS → REJECTED | ✅ | ✅ | ❌ |
| * → NURTURE | ✅ | ✅ | ❌ |

### cases.status

| From → To | Advisor | Credit | Operations | Compliance |
|-----------|---------|--------|------------|------------|
| DRAFT → ACTIVE | ✅ | ❌ | ❌ | ❌ |
| ACTIVE → ON_HOLD | ✅ | ❌ | ✅ | ✅ |
| ON_HOLD → ACTIVE | ✅ | ❌ | ✅ | ✅ |
| ACTIVE → COMPLETED | ❌ | ❌ | ✅ | ✅ |
| * → CANCELLED | ❌ | ❌ | ❌ | ✅ |

### programs.status

| From → To | Advisor | Operations | Recovery | Compliance |
|-----------|---------|------------|----------|------------|
| DRAFT → ACTIVE_PENDING_MANDATE | ✅ | ❌ | ❌ | ❌ |
| ACTIVE_PENDING_MANDATE → ACTIVE | ❌ | ✅ | ❌ | ❌ |
| ACTIVE → ON_HOLD | ❌ | ✅ | ✅ | ✅ |
| ON_HOLD → ACTIVE | ❌ | ✅ | ✅ | ✅ |
| ACTIVE → COMPLETED | ❌ | ✅ | ❌ | ✅ |
| * → CANCELLED | ❌ | ❌ | ❌ | ✅ |

### settlements.status

| From → To | Negotiator | Finance | Customer (App) |
|-----------|------------|---------|----------------|
| NEGOTIATING → OFFER_RECEIVED | ✅ | ❌ | ❌ |
| OFFER_RECEIVED → APPROVED_BY_CUSTOMER | ✅ | ❌ | ✅ |
| OFFER_RECEIVED → REJECTED | ✅ | ❌ | ✅ |
| APPROVED_BY_CUSTOMER → SETTLED | ❌ | ✅ | ❌ |

### payments.status

| From → To | Operations | Finance |
|-----------|------------|---------|
| PENDING → SUCCESS | ✅ | ✅ |
| PENDING → FAILED | ✅ | ✅ |
| FAILED → PENDING (retry) | ✅ | ❌ |

### mandates.status

| From → To | Operations | Finance |
|-----------|------------|---------|
| NOT_SENT → SENT | ✅ | ❌ |
| SENT → APPROVED | ✅ | ❌ |
| SENT → FAILED | ✅ | ❌ |
| APPROVED → CANCELLED | ✅ | ✅ |

---

## 🔐 SPECIAL PERMISSIONS

### Immutable Fields (Cannot be edited after creation)

| Field | Reason | Override By |
|-------|--------|-------------|
| `customers.kyc.pan` (after verification) | KYC compliance | Compliance only |
| `customers.kyc.aadhaar` (after verification) | KYC compliance | Compliance only |
| `loans.details.originalAmount` | Historical record | Compliance only |
| `payments.createdAt` | Audit trail | System only |
| `settlements.lenderOffer` (after customer decision) | Legal binding | Compliance only |

### Auto-Calculated Fields (System only)

| Field | Calculation |
|-------|-------------|
| `customers.expenses.total` | Sum of all expense fields |
| `programs.totals.enrolledDebt` | Sum of included loans' currentOutstanding |
| `programs.totals.expectedSavings` | enrolledDebt - sum(targetSettlementAmount) |
| `cases.dbr` | totalEMI / monthlyNetIncome |

### Conditional Access

#### Counsellor
- Can only see leads assigned to them or unassigned
- Cannot see other counsellors' leads

#### Advisor
- Can only see cases assigned to them
- Can see all customers in their cases
- Cannot modify cases assigned to other advisors

#### Credit Analyst
- Can only see cases submitted for credit review
- Cannot see cases not yet submitted

#### Negotiator
- Can only see programs with status = ACTIVE
- Cannot see draft programs

#### Support
- Can see all customer data (read-only)
- Can only update contact information
- Can create tickets for any customer

#### Recovery
- Can only see programs with missed SIPs
- Can modify program parameters with approval

#### Compliance
- Can see everything
- Can override most restrictions
- All actions are logged

---

## 🛡️ SECURITY RULES

### Data Masking

| Field | Masked For | Visible To |
|-------|------------|------------|
| `customers.kyc.pan` | Counsellor, Support | Advisor, Credit, Finance, Compliance |
| `customers.kyc.aadhaar` | Counsellor, Support | Advisor, Credit, Finance, Compliance |
| `mandates.bank.accountNumber` | All except Operations, Finance | Operations, Finance, Compliance |
| `settlements.internalTargetPct` | Customer (App), Support | Negotiator, Finance, Compliance |

### Rate Limiting

| Action | Limit | Role |
|--------|-------|------|
| CIBIL Pull | 5 per day | Credit Analyst |
| Bulk Export | 100 records | All roles |
| API Calls | 1000 per hour | All roles |
| Document Download | 50 per day | All roles |

### IP Restrictions

| Access Type | Restriction |
|-------------|-------------|
| CRM Login | Office IP + VPN only |
| API Access | Whitelisted IPs only |
| Database Access | Internal network only |
| Admin Panel | Office IP only |

---

## 📝 AUDIT REQUIREMENTS

### Actions That Trigger Audit Logs

- Any status change
- Any financial field modification
- Document upload/download
- Settlement approval/rejection
- Payment status change
- Mandate status change
- Customer KYC modification
- Program configuration change
- User role change
- Access denied attempts

### Audit Log Retention

- **Standard Logs**: 2 years
- **Financial Logs**: 7 years
- **Compliance Logs**: 10 years

---

## 🚨 VIOLATION HANDLING

### Automatic Actions

| Violation Type | Action |
|----------------|--------|
| Unauthorized field access | Block + Log + Alert Compliance |
| Multiple failed login attempts | Lock account for 30 minutes |
| Suspicious data export | Block + Alert Compliance |
| Status transition violation | Reject + Log |
| Rate limit exceeded | Temporary block |

### Manual Review Required

- Compliance override requests
- Bulk data access requests
- Cross-department data sharing
- External API access
- Production data export

---

