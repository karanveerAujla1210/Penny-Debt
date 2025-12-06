// Role → allowed modules mapping (used by ProtectedRoute)
export const ROLE_ACCESS = {
  CEO: ['reports', 'cases', 'finance', 'operations', 'negotiation', 'settlement'],
  COE: ['reports', 'cases', 'finance', 'operations'],
  CO: ['reports', 'cases', 'operations'],
  Admin: ['reports', 'cases', 'finance', 'operations', 'documents', 'leads'],
  Manager: ['leads', 'cases', 'reports', 'tasks'],
  TeamLead: ['leads', 'cases', 'reports', 'tasks'],
  Advisor: ['cases', 'credit', 'documents'],
  Counsellor: ['leads', 'cases'],
  Negotiator: ['negotiation', 'settlement'],
  Legal: ['cases', 'legal', 'documents'],
  Credit: ['credit', 'cases'],
  Recovery: ['cases', 'payments', 'reports'],
  Finance: ['payments', 'reports'],
  Support: ['tickets'],
  Verifier: ['cases', 'documents'],
  HR: ['users'],
  Tech: ['tech'],
};

export function roleHasAccess(role = '', moduleName = '') {
  if (!role || !moduleName) return false;
  const allowed = ROLE_ACCESS[role] || ROLE_ACCESS[role.toUpperCase()] || ROLE_ACCESS[capitalize(role)];
  if (!allowed) return false;
  return allowed.includes(moduleName);
}

function capitalize(s){ if(!s) return s; return s.charAt(0).toUpperCase()+s.slice(1);} 
