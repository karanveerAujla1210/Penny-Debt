// Employee Authentication System
const EMPLOYEE_ACCOUNTS = {
  // Admin Level
  'admin@pennyanddebt.in': {
    password: 'PennyAdmin@2024#Secure',
    role: 'admin',
    name: 'System Administrator',
    permissions: ['view_all', 'edit_all', 'delete', 'manage_users']
  },
  
  // Manager Level
  'manager@pennyanddebt.in': {
    password: 'DebtManager$2024!Strong',
    role: 'manager', 
    name: 'Operations Manager',
    permissions: ['view_all', 'edit_leads', 'assign_leads']
  },
  
  // Sales Team
  'sales1@pennyanddebt.in': {
    password: 'SalesLead#2024@Power',
    role: 'sales',
    name: 'Sales Executive 1',
    permissions: ['view_leads', 'edit_assigned', 'call_logs']
  },
  
  'sales2@pennyanddebt.in': {
    password: 'DebtSales*2024$Pro',
    role: 'sales',
    name: 'Sales Executive 2', 
    permissions: ['view_leads', 'edit_assigned', 'call_logs']
  },
  
  // Support Team
  'support@pennyanddebt.in': {
    password: 'Support&2024!Help',
    role: 'support',
    name: 'Customer Support',
    permissions: ['view_leads', 'add_notes', 'update_status']
  }
};

export const authenticateEmployee = (email, password) => {
  const account = EMPLOYEE_ACCOUNTS[email.toLowerCase()];
  
  if (!account || account.password !== password) {
    return { success: false, message: 'Invalid credentials' };
  }
  
  const sessionData = {
    email: email.toLowerCase(),
    role: account.role,
    name: account.name,
    permissions: account.permissions,
    loginTime: new Date().toISOString()
  };
  
  // Store in localStorage
  localStorage.setItem('employeeSession', JSON.stringify(sessionData));
  
  return { success: true, user: sessionData };
};

export const getCurrentUser = () => {
  const session = localStorage.getItem('employeeSession');
  return session ? JSON.parse(session) : null;
};

export const logout = () => {
  localStorage.removeItem('employeeSession');
};

export const hasPermission = (permission) => {
  const user = getCurrentUser();
  return user && user.permissions.includes(permission);
};

export default { authenticateEmployee, getCurrentUser, logout, hasPermission };