export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'select' | 'date' | 'toggle';
  editable: boolean;
  required?: boolean;
  auto?: boolean;
  options?: { label: string; value: string | number }[];
}

export interface FormConfig {
  formId: string;
  title: string;
  role: string;
  entity: string;
  fields: FormField[];
}

export const CounsellorLeadForm: FormConfig = {
  formId: 'counsellor-intake',
  title: 'Lead Intake',
  role: 'COUNSELLOR',
  entity: 'Lead',
  fields: [
    { name: 'fullName', label: 'Full Name', type: 'text', editable: true, required: true },
    { name: 'phone', label: 'Phone Number', type: 'text', editable: true, required: true },
    {
      name: 'leadSource',
      label: 'Lead Source',
      type: 'select',
      editable: true,
      required: true,
      options: [
        { label: 'Meta Ads', value: 'META' },
        { label: 'Google Ads', value: 'GOOGLE' },
        { label: 'Referral', value: 'REFERRAL' },
        { label: 'WhatsApp', value: 'WHATSAPP' },
        { label: 'Website', value: 'WEBSITE' },
        { label: 'Partner', value: 'PARTNER' },
        { label: 'Other', value: 'OTHER' }
      ]
    },
    {
      name: 'employmentType',
      label: 'Employment Type',
      type: 'select',
      editable: true,
      options: [
        { label: 'Salaried', value: 'SALARIED' },
        { label: 'Self-Employed', value: 'SELF_EMPLOYED' },
        { label: 'Unemployed', value: 'UNEMPLOYED' },
        { label: 'Student', value: 'STUDENT' },
        { label: 'Retired', value: 'RETIRED' }
      ]
    },
    { name: 'approxIncome', label: 'Approx Income (₹)', type: 'number', editable: true },
    { name: 'approxEmi', label: 'Approx EMI Total (₹)', type: 'number', editable: true },
    {
      name: 'stressLevel',
      label: 'Stress Level',
      type: 'select',
      editable: true,
      required: true,
      options: [
        { label: 'Low', value: 'LOW' },
        { label: 'Medium', value: 'MEDIUM' },
        { label: 'High', value: 'HIGH' },
        { label: 'Extreme', value: 'EXTREME' }
      ]
    },
    {
      name: 'harassmentLevel',
      label: 'Harassment Level',
      type: 'select',
      editable: true,
      options: [
        { label: 'None', value: 'NONE' },
        { label: 'Calls Only', value: 'CALLS' },
        { label: 'Threats', value: 'THREATS' },
        { label: 'Home Visit', value: 'HOME_VISIT' },
        { label: 'Employer Contact', value: 'EMPLOYER_CONTACT' }
      ]
    }
  ]
};

export const AdvisorFinancialForm: FormConfig = {
  formId: 'advisor-financial',
  title: 'Financial Profile',
  role: 'ADVISOR',
  entity: 'Customer',
  fields: [
    {
      name: 'employment.type',
      label: 'Employment Type',
      type: 'select',
      editable: true,
      options: [
        { label: 'Salaried', value: 'SALARIED' },
        { label: 'Self-Employed', value: 'SELF_EMPLOYED' },
        { label: 'Unemployed', value: 'UNEMPLOYED' }
      ]
    },
    { name: 'employment.monthlyNetIncome', label: 'Net Income (₹)', type: 'number', editable: true },
    { name: 'employment.variableIncome', label: 'Variable Income (₹)', type: 'number', editable: true },
    { name: 'expenses.groceries', label: 'Groceries (₹)', type: 'number', editable: true },
    { name: 'expenses.rentOrHomeEmi', label: 'Rent/Home EMI (₹)', type: 'number', editable: true },
    { name: 'expenses.total', label: 'Total Expenses', type: 'number', editable: false, auto: true }
  ]
};

export const AdvisorLoanForm: FormConfig = {
  formId: 'advisor-loan',
  title: 'Loan Details',
  role: 'ADVISOR',
  entity: 'Loan',
  fields: [
    { name: 'lender.name', label: 'Lender Name', type: 'text', editable: true },
    {
      name: 'lender.category',
      label: 'Lender Category',
      type: 'select',
      editable: true,
      options: [
        { label: 'Bank', value: 'BANK' },
        { label: 'NBFC', value: 'NBFC' },
        { label: 'Fintech', value: 'FINTECH' },
        { label: 'Credit Card Issuer', value: 'CARD' }
      ]
    },
    {
      name: 'details.productType',
      label: 'Loan Type',
      type: 'select',
      editable: true,
      options: [
        { label: 'Credit Card', value: 'CREDIT_CARD' },
        { label: 'Personal Loan', value: 'PERSONAL_LOAN' },
        { label: 'Business Loan', value: 'BUSINESS_LOAN' },
        { label: 'BNPL', value: 'BNPL' },
        { label: 'Auto Loan', value: 'AUTO_LOAN' },
        { label: 'Home Loan', value: 'HOME_LOAN' }
      ]
    },
    { name: 'details.originalAmount', label: 'Original Amount', type: 'number', editable: true },
    { name: 'details.currentOutstanding', label: 'Outstanding', type: 'number', editable: true },
    { name: 'details.emiAmount', label: 'EMI Amount', type: 'number', editable: true },
    { name: 'includeInProgram', label: 'Include in Program', type: 'toggle', editable: true }
  ]
};

export const AdvisorProgramForm: FormConfig = {
  formId: 'advisor-program-config',
  title: 'Program Setup',
  role: 'ADVISOR',
  entity: 'Program',
  fields: [
    {
      name: 'config.programType',
      label: 'Program Type',
      type: 'select',
      editable: true,
      required: true,
      options: [
        { label: 'Full Debt Relief', value: 'FULL' },
        { label: 'Partial', value: 'PARTIAL' },
        { label: 'EMI Restructuring', value: 'EMI_RESTRUCTURE' },
        { label: 'Legal Only', value: 'LEGAL_ONLY' }
      ]
    },
    { name: 'config.sipAmount', label: 'SIP Amount', type: 'number', editable: true },
    {
      name: 'config.strategy',
      label: 'Strategy',
      type: 'select',
      editable: true,
      options: [
        { label: 'Avalanche', value: 'AVALANCHE' },
        { label: 'Snowball', value: 'SNOWBALL' },
        { label: 'Custom', value: 'CUSTOM' }
      ]
    }
  ]
};

export const NegotiatorSettlementForm: FormConfig = {
  formId: 'negotiator-settlement',
  title: 'Settlement Offer',
  role: 'NEGOTIATOR',
  entity: 'Settlement',
  fields: [
    { name: 'lenderOffer.amount', label: 'Lender Offer Amount', type: 'number', editable: true },
    { name: 'lenderOffer.percentage', label: 'Offer %', type: 'number', editable: true },
    {
      name: 'customerDecision',
      label: 'Customer Decision',
      type: 'select',
      editable: true,
      options: [
        { label: 'Pending', value: 'PENDING' },
        { label: 'Approved', value: 'APPROVED' },
        { label: 'Rejected', value: 'REJECTED' },
        { label: 'Thinking', value: 'THINKING' }
      ]
    },
    { name: 'customerReason', label: 'Customer Reason', type: 'textarea', editable: true },
    { name: 'noc.expectedDate', label: 'Expected NOC Date', type: 'date', editable: true }
  ]
};

export const OperationsMandateForm: FormConfig = {
  formId: 'operations-mandate',
  title: 'Mandate Setup',
  role: 'OPERATIONS',
  entity: 'Mandate',
  fields: [
    { name: 'bank.name', label: 'Bank Name', type: 'text', editable: true },
    { name: 'bank.accountNumber', label: 'Account Number', type: 'text', editable: true },
    { name: 'bank.ifsc', label: 'IFSC Code', type: 'text', editable: true },
    {
      name: 'status',
      label: 'Mandate Status',
      type: 'select',
      editable: true,
      options: [
        { label: 'Not Sent', value: 'NOT_SENT' },
        { label: 'Sent', value: 'SENT' },
        { label: 'Approved', value: 'APPROVED' },
        { label: 'Failed', value: 'FAILED' },
        { label: 'Cancelled', value: 'CANCELLED' }
      ]
    }
  ]
};

export const ALL_FORM_CONFIGS = [
  CounsellorLeadForm,
  AdvisorFinancialForm,
  AdvisorLoanForm,
  AdvisorProgramForm,
  NegotiatorSettlementForm,
  OperationsMandateForm
];
