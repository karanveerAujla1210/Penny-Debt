// Enums
export type Gender = 'MALE' | 'FEMALE' | 'OTHER' | 'NA';
export type MaritalStatus = 'SINGLE' | 'MARRIED' | 'DIVORCED' | 'WIDOWED';
export type EmploymentType = 'SALARIED' | 'SELF_EMPLOYED' | 'UNEMPLOYED' | 'STUDENT' | 'RETIRED';
export type HouseholdType = 'NUCLEAR' | 'JOINT' | 'SINGLE';
export type SpouseWorking = 'YES' | 'NO' | 'NA';

export type LeadSource = 'META' | 'GOOGLE' | 'REFERRAL' | 'WHATSAPP' | 'PARTNER' | 'WEBSITE' | 'OTHER';
export type FirstChannel = 'CALL' | 'WHATSAPP' | 'FORM' | 'EMAIL';
export type StressLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'EXTREME';
export type HarassmentLevel = 'NONE' | 'CALLS' | 'THREATS' | 'HOME_VISIT' | 'EMPLOYER_CONTACT';
export type UrgencyLevel = 'EXPLORING' | 'NEED_HELP' | 'DEFAULTED' | 'LEGAL_NOTICE';
export type LeadStatus = 'NEW' | 'IN_PROGRESS' | 'CONVERTED' | 'REJECTED' | 'NURTURE';

export type LenderCategory = 'BANK' | 'NBFC' | 'FINTECH' | 'CARD';
export type ProductType = 'CREDIT_CARD' | 'PERSONAL_LOAN' | 'BUSINESS_LOAN' | 'BNPL' | 'AUTO_LOAN' | 'HOME_LOAN' | 'LINE_OF_CREDIT';
export type DpdStatus = 'CURRENT' | 'DPD_30' | 'DPD_60' | 'DPD_90' | 'WRITE_OFF' | 'SETTLED';
export type LegalNoticeType = 'NONE' | 'SEC_138' | 'ARBITRATION' | 'CIVIL' | 'OTHER';

export type ProgramType = 'FULL' | 'PARTIAL' | 'EMI_RESTRUCTURE' | 'LEGAL_ONLY';
export type StrategyType = 'AVALANCHE' | 'SNOWBALL' | 'CUSTOM';
export type ProgramStatus = 'DRAFT' | 'ACTIVE_PENDING_MANDATE' | 'ACTIVE' | 'ON_HOLD' | 'COMPLETED' | 'CANCELLED';

export type SettlementStatus = 'NEGOTIATING' | 'OFFER_RECEIVED' | 'APPROVED_BY_CUSTOMER' | 'REJECTED' | 'SETTLED';
export type CustomerDecision = 'PENDING' | 'APPROVED' | 'REJECTED' | 'THINKING';

export type PaymentType = 'SIP' | 'SETTLEMENT' | 'FEE' | 'REFUND';
export type PaymentStatus = 'PENDING' | 'SUCCESS' | 'FAILED';

export type MandateType = 'NACH' | 'E_NACH' | 'UPI_AUTOPAY' | 'CARD_AUTO_DEBIT';
export type MandateStatus = 'NOT_SENT' | 'SENT' | 'APPROVED' | 'FAILED' | 'CANCELLED';

export type CaseStatus = 'DRAFT' | 'ACTIVE' | 'ON_HOLD' | 'COMPLETED' | 'CANCELLED';

// Interfaces
export interface Customer {
  _id: string;
  userId: string;
  basic: {
    fullName: string;
    gender?: Gender;
    dob?: string;
    maritalStatus?: MaritalStatus;
    primaryMobile: string;
    whatsappMobile?: string;
    email?: string;
  };
  kyc: {
    pan?: string;
    aadhaar?: string;
    panVerified: boolean;
    aadhaarVerified: boolean;
  };
  address?: {
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    pincode?: string;
  };
  employment?: {
    type?: EmploymentType;
    employerName?: string;
    industry?: string;
    monthlyNetIncome?: number;
    variableIncome?: number;
    salaryBank?: string;
    salaryCreditDate?: number;
  };
  household?: {
    householdType?: HouseholdType;
    dependentsCount?: number;
    spouseWorking?: SpouseWorking;
    spouseIncome?: number;
  };
  expenses: {
    rentOrHomeEmi: number;
    utilities: number;
    groceries: number;
    schoolFees?: number;
    transport?: number;
    insurance?: number;
    otherLabel?: string;
    otherAmount?: number;
    total: number;
  };
  createdBy?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Lead {
  _id: string;
  customerId?: string;
  counsellorId: string;
  leadSource: LeadSource;
  firstChannel?: FirstChannel;
  financialSnapshot?: {
    approxIncome?: number;
    approxEmi?: number;
    loanCount?: number;
  };
  stress?: {
    stressLevel?: StressLevel;
    harassmentLevel?: HarassmentLevel;
    urgencyLevel?: UrgencyLevel;
  };
  status: LeadStatus;
  counsellorNotes?: string;
  rejectionReason?: string;
  assignedAdvisor?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Loan {
  _id: string;
  customerId: string;
  caseId: string;
  lender: {
    name: string;
    category: LenderCategory;
  };
  details: {
    productType: ProductType;
    accountNumber?: string;
    originalAmount: number;
    currentOutstanding: number;
    emiAmount?: number;
    emiDueDay?: number;
  };
  status: {
    dpdStatus: DpdStatus;
    lastPaymentDate?: string;
    lastPaymentAmount?: number;
  };
  risk: {
    harassmentFlag: boolean;
    legalNotice: LegalNoticeType;
  };
  includeInProgram: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Program {
  _id: string;
  caseId: string;
  config: {
    programType: ProgramType;
    startDate?: string;
    expectedDuration?: number;
    sipAmount: number;
    sipDebitDay?: number;
    strategy: StrategyType;
  };
  loans: {
    loanId: string;
    priority?: number;
    expectedSettlementPct?: number;
    targetSettlementAmount?: number;
  }[];
  totals: {
    enrolledDebt: number;
    expectedSavings: number;
  };
  status: ProgramStatus;
  createdBy?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Settlement {
  _id: string;
  loanId: string;
  programId: string;
  negotiatorId: string;
  status: SettlementStatus;
  lenderOffer?: {
    amount?: number;
    percentage?: number;
    validUntil?: string;
  };
  internalTargetPct?: number;
  customerDecision: CustomerDecision;
  customerReason?: string;
  customerDecidedAt?: string;
  noc: {
    expectedDate?: string;
    received: boolean;
    receivedDate?: string;
    documentId?: string;
  };
  settlementPaid: boolean;
  paidDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Payment {
  _id: string;
  customerId: string;
  programId: string;
  loanId?: string;
  paymentType: PaymentType;
  amount: number;
  scheduledDate?: string;
  paidDate?: string;
  status: PaymentStatus;
  referenceId?: string;
  failureReason?: string;
  retryCount: number;
  createdAt: string;
}

export interface Mandate {
  _id: string;
  customerId: string;
  programId: string;
  bank: {
    name?: string;
    accountNumber?: string;
    ifsc?: string;
  };
  mandateType: MandateType;
  status: MandateStatus;
  statusReason?: string;
  mandateId?: string;
  approvedDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Case {
  _id: string;
  customerId: string;
  leadId?: string;
  advisorId: string;
  status: CaseStatus;
  creditApproval?: {
    approved?: boolean;
    creditScore?: number;
    riskScore?: number;
    approvedBy?: string;
    approvedAt?: string;
    remarks?: string;
  };
  dbr?: number;
  createdAt: string;
  updatedAt: string;
}
