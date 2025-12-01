// CRM Complete Routing Configuration

export const ROUTES = {
  // Authentication
  AUTH: {
    EMPLOYEE_LOGIN: '/login/employee',
    CUSTOMER_LOGIN: '/login/customer',
    LOGOUT: '/logout'
  },

  // Dashboards (Role-based)
  DASHBOARD: {
    CEO: '/dashboard/ceo',
    COO: '/dashboard/coo',
    CTO: '/dashboard/cto',
    ADMIN: '/dashboard/admin',
    FINANCE: '/dashboard/finance',
    LEGAL: '/dashboard/legal',
    HR: '/dashboard/hr',
    OPERATIONS: '/dashboard/operations',
    CREDIT: '/dashboard/credit',
    COUNSELLOR: '/dashboard/counsellor',
    ADVISOR: '/dashboard/advisor',
    RECOVERY: '/dashboard/recovery',
    COMPLIANCE: '/dashboard/compliance',
    SUPPORT: '/dashboard/support',
    TEAM_LEAD: '/dashboard/teamlead',
    VERIFIER: '/dashboard/verifier',
    TECH: '/dashboard/tech',
    MANAGER: '/dashboard/manager',
    EMPLOYEE: '/dashboard/employee',
    CUSTOMER: '/dashboard/customer'
  },

  // Leads Management
  LEADS: {
    LIST: '/leads',
    CREATE: '/leads/create',
    DETAILS: (id) => `/leads/${id}`,
    EDIT: (id) => `/leads/${id}/edit`,
    CONVERT: (id) => `/leads/${id}/convert`
  },

  // Cases Management
  CASES: {
    LIST: '/cases',
    CREATE: '/cases/create',
    DETAILS: (caseId) => `/cases/${caseId}`,
    EDIT: (caseId) => `/cases/${caseId}/edit`,
    DOCUMENTS: (caseId) => `/cases/${caseId}/documents`,
    CREDIT_ANALYSIS: (caseId) => `/cases/${caseId}/credit-analysis`,
    COUNSELLING: (caseId) => `/cases/${caseId}/counselling`,
    ENROLLMENT: (caseId) => `/cases/${caseId}/enrollment`,
    NEGOTIATION: (caseId) => `/cases/${caseId}/negotiation`,
    SETTLEMENT: (caseId) => `/cases/${caseId}/settlement`,
    PAYMENTS: (caseId) => `/cases/${caseId}/payments`,
    CLOSURE: (caseId) => `/cases/${caseId}/closure`,
    TIMELINE: (caseId) => `/cases/${caseId}/timeline`,
    NOTES: (caseId) => `/cases/${caseId}/notes`
  },

  // Customer Management
  CUSTOMERS: {
    LIST: '/customers',
    DETAILS: (id) => `/customers/${id}`,
    CASES: (id) => `/customers/${id}/cases`,
    PAYMENTS: (id) => `/customers/${id}/payments`,
    DOCUMENTS: (id) => `/customers/${id}/documents`
  },

  // Payment Management
  PAYMENTS: {
    LIST: '/payments',
    PENDING: '/payments/pending',
    COMPLETED: '/payments/completed',
    OVERDUE: '/payments/overdue',
    DETAILS: (id) => `/payments/${id}`
  },

  // Document Management
  DOCUMENTS: {
    LIST: '/documents',
    PENDING: '/documents/pending',
    VERIFIED: '/documents/verified',
    REJECTED: '/documents/rejected'
  },

  // Reports
  REPORTS: {
    PERFORMANCE: '/reports/performance',
    COLLECTION: '/reports/collection',
    SETTLEMENT: '/reports/settlement',
    FINANCIAL: '/reports/financial',
    OPERATIONAL: '/reports/operational'
  },

  // Tasks
  TASKS: {
    LIST: '/tasks',
    MY_TASKS: '/tasks/my-tasks',
    CREATE: '/tasks/create',
    DETAILS: (id) => `/tasks/${id}`
  },

  // Notifications
  NOTIFICATIONS: {
    LIST: '/notifications',
    UNREAD: '/notifications/unread'
  },

  // Settings
  SETTINGS: {
    PROFILE: '/settings/profile',
    SECURITY: '/settings/security',
    NOTIFICATIONS: '/settings/notifications',
    SYSTEM: '/settings/system'
  },

  // Support
  SUPPORT: {
    TICKETS: '/support/tickets',
    CHAT: '/support/chat',
    FAQ: '/support/faq'
  },

  // Audit
  AUDIT: {
    LOGS: '/audit/logs',
    ACTIVITIES: '/audit/activities'
  }
};

// Role-based dashboard mapping
export const ROLE_DASHBOARD_MAP = {
  'ceo': ROUTES.DASHBOARD.CEO,
  'coo': ROUTES.DASHBOARD.COO,
  'cto': ROUTES.DASHBOARD.CTO,
  'admin': ROUTES.DASHBOARD.ADMIN,
  'finance': ROUTES.DASHBOARD.FINANCE,
  'legal': ROUTES.DASHBOARD.LEGAL,
  'hr': ROUTES.DASHBOARD.HR,
  'operations': ROUTES.DASHBOARD.OPERATIONS,
  'credit': ROUTES.DASHBOARD.CREDIT,
  'counsellor': ROUTES.DASHBOARD.COUNSELLOR,
  'advisor': ROUTES.DASHBOARD.ADVISOR,
  'recovery': ROUTES.DASHBOARD.RECOVERY,
  'compliance': ROUTES.DASHBOARD.COMPLIANCE,
  'support': ROUTES.DASHBOARD.SUPPORT,
  'teamlead': ROUTES.DASHBOARD.TEAM_LEAD,
  'verifier': ROUTES.DASHBOARD.VERIFIER,
  'tech': ROUTES.DASHBOARD.TECH,
  'manager': ROUTES.DASHBOARD.MANAGER,
  'employee': ROUTES.DASHBOARD.EMPLOYEE,
  'customer': ROUTES.DASHBOARD.CUSTOMER
};

// Case status workflow
export const CASE_STATUS = {
  NEW: 'new',
  IN_REVIEW: 'in_review',
  IN_COUNSELLING: 'in_counselling',
  ENROLLED: 'enrolled',
  IN_NEGOTIATION: 'in_negotiation',
  IN_SETTLEMENT: 'in_settlement',
  PARTIALLY_SETTLED: 'partially_settled',
  FULLY_SETTLED: 'fully_settled',
  CLOSED: 'closed',
  ON_HOLD: 'on_hold',
  REJECTED: 'rejected',
  CANCELLED: 'cancelled',
  DEFAULTED: 'defaulted'
};

// Case priority levels
export const CASE_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  CRITICAL: 'critical'
};

// Lead status
export const LEAD_STATUS = {
  NEW: 'new',
  CONTACTED: 'contacted',
  QUALIFIED: 'qualified',
  CONVERTED: 'converted',
  LOST: 'lost'
};

export default ROUTES;
