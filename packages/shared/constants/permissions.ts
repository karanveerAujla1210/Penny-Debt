export const ROLE_PERMISSIONS = {
  COUNSELLOR: [
    'create:lead',
    'update:lead',
    'view:lead',
    'view:customer_basic'
  ],
  
  ADVISOR: [
    'view:lead',
    'update:lead',
    'create:case',
    'update:case',
    'view:case',
    'create:customer',
    'update:customer',
    'view:customer',
    'create:loan',
    'update:loan',
    'view:loan',
    'create:program',
    'update:program',
    'view:program'
  ],
  
  CREDIT: [
    'view:case',
    'view:customer',
    'view:loan',
    'update:credit',
    'verify:kyc',
    'update:loan_risk'
  ],
  
  OPERATIONS: [
    'view:program',
    'update:program_status',
    'create:mandate',
    'update:mandate',
    'view:payment',
    'update:payment'
  ],
  
  NEGOTIATOR: [
    'view:program',
    'view:loan',
    'create:settlement',
    'update:settlement',
    'view:settlement'
  ],
  
  LEGAL: [
    'view:customer',
    'view:loan',
    'create:legal_case',
    'update:legal_case',
    'create:harassment_case',
    'update:harassment_case'
  ],
  
  FINANCE: [
    'view:payment',
    'update:payment_status',
    'view:settlement',
    'update:settlement_payment',
    'view:finance_reports'
  ],
  
  SUPPORT: [
    'view:customer',
    'update:customer_contact',
    'create:ticket',
    'update:ticket',
    'view:ticket',
    'create:harassment_case'
  ],
  
  RECOVERY: [
    'view:program',
    'update:program',
    'view:customer',
    'view:payment'
  ],
  
  COMPLIANCE: [
    'view:all',
    'view:audit',
    'override:all'
  ],
  
  ADMIN: ['*']
};

export const FIELD_PERMISSIONS = {
  'customers.kyc.pan': ['ADVISOR', 'CREDIT', 'FINANCE', 'COMPLIANCE', 'ADMIN'],
  'customers.kyc.aadhaar': ['ADVISOR', 'CREDIT', 'FINANCE', 'COMPLIANCE', 'ADMIN'],
  'customers.kyc.panVerified': ['CREDIT', 'COMPLIANCE', 'ADMIN'],
  'customers.kyc.aadhaarVerified': ['CREDIT', 'COMPLIANCE', 'ADMIN'],
  'loans.status.dpdStatus': ['CREDIT', 'NEGOTIATOR', 'ADMIN'],
  'loans.risk.legalNotice': ['CREDIT', 'LEGAL', 'ADMIN'],
  'settlements.internalTargetPct': ['NEGOTIATOR', 'FINANCE', 'COMPLIANCE', 'ADMIN'],
  'payments.status': ['OPERATIONS', 'FINANCE', 'ADMIN'],
  'mandates.status': ['OPERATIONS', 'ADMIN']
};

export const IMMUTABLE_FIELDS = [
  'customers.kyc.pan',
  'customers.kyc.aadhaar',
  'loans.details.originalAmount',
  'payments.createdAt',
  'auditLogs.*'
];

export const AUTO_CALCULATED_FIELDS = [
  'customers.expenses.total',
  'programs.totals.enrolledDebt',
  'programs.totals.expectedSavings',
  'cases.dbr'
];
