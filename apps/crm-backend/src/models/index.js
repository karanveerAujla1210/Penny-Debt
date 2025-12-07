// Central model exports (compatibility shim)
module.exports = {
  // existing top-level models
  User: require('./user'),
  Role: require('./role'),
  Customer: require('./customer'),
  Lead: require('./lead'),
  Loan: require('./loan'),
  Payment: require('./payment'),
  Case: require('./case'),
  Program: require('./program'),
  Settlement: require('./settlement'),
  Mandate: require('./mandate'),
  Ticket: require('./ticket'),
  AuditLog: require('./audit_log'),
  // CRM domain models
  DebtAccount: require('./crm/debtAccount'),
  DebtPlan: require('./crm/debtPlan'),
  DebtPlanItem: require('./crm/debtPlanItem'),
  IncomeExpenseProfile: require('./crm/incomeExpenseProfile'),
  RiskFlag: require('./crm/riskFlag')
};
