// Shared constants across web and mobile

export const USER_ROLES = {
  CUSTOMER: 'customer',
  EMPLOYEE: 'employee',
  ADMIN: 'admin',
  MANAGER: 'manager',
};

export const CASE_STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in_progress',
  RESOLVED: 'resolved',
  CLOSED: 'closed',
};

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
  REFUNDED: 'refunded',
};

export const EMPLOYEE_DEPARTMENTS = {
  SALES: 'sales',
  CREDIT: 'credit',
  COLLECTION: 'collection',
  DISBURSEMENT: 'disbursement',
  OPERATIONS: 'operations',
  LEGAL: 'legal',
  HR: 'hr',
  IT: 'it',
};

export const LEAD_STATUS = {
  NEW: 'new',
  CONTACTED: 'contacted',
  QUALIFIED: 'qualified',
  CONVERTED: 'converted',
  LOST: 'lost',
};

export const APPLICATION_STATUS = {
  DRAFT: 'draft',
  SUBMITTED: 'submitted',
  UNDER_REVIEW: 'under_review',
  APPROVED: 'approved',
  REJECTED: 'rejected',
};

export const DOCUMENT_TYPES = {
  AADHAAR: 'aadhaar',
  PAN: 'pan',
  BANK_STATEMENT: 'bank_statement',
  SALARY_SLIP: 'salary_slip',
  AGREEMENT: 'agreement',
  OTHER: 'other',
};

export const API_ENDPOINTS = {
  WEBSITE: '/api/v1/website',
  CRM: '/api/v1/crm',
  MOBILE: '/api/v1/mobile',
};
