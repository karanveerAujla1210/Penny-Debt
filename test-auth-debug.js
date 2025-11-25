// Test authentication system debug
const EMPLOYEE_ACCOUNTS = {
  'admin@pennyanddebt.in': {
    password: 'PennyAdmin@2024#Secure',
    role: 'admin',
    name: 'System Administrator',
    permissions: ['view_all', 'edit_all', 'delete', 'manage_users']
  },
  'manager@pennyanddebt.in': {
    password: 'DebtManager$2024!Strong',
    role: 'manager', 
    name: 'Operations Manager',
    permissions: ['view_all', 'edit_leads', 'assign_leads']
  },
  'sales1@pennyanddebt.in': {
    password: 'SalesLead#2024@Power',
    role: 'sales',
    name: 'Sales Executive 1',
    permissions: ['view_leads', 'edit_assigned', 'call_logs']
  },
  'support@pennyanddebt.in': {
    password: 'Support&2024!Help',
    role: 'support',
    name: 'Customer Support',
    permissions: ['view_leads', 'add_notes', 'update_status']
  }
};

const authenticateEmployee = (email, password) => {
  console.log('🔍 Debug - Input email:', email);
  console.log('🔍 Debug - Input password:', password);
  console.log('🔍 Debug - Email toLowerCase:', email.toLowerCase());
  
  const account = EMPLOYEE_ACCOUNTS[email.toLowerCase()];
  console.log('🔍 Debug - Found account:', account ? 'YES' : 'NO');
  
  if (!account) {
    console.log('❌ Debug - No account found for email:', email.toLowerCase());
    console.log('🔍 Debug - Available emails:', Object.keys(EMPLOYEE_ACCOUNTS));
    return { success: false, message: 'Account not found' };
  }
  
  console.log('🔍 Debug - Stored password:', account.password);
  console.log('🔍 Debug - Password match:', account.password === password);
  
  if (account.password !== password) {
    console.log('❌ Debug - Password mismatch');
    return { success: false, message: 'Invalid password' };
  }
  
  const sessionData = {
    email: email.toLowerCase(),
    role: account.role,
    name: account.name,
    permissions: account.permissions,
    loginTime: new Date().toISOString()
  };
  
  console.log('✅ Debug - Login successful, session data:', sessionData);
  return { success: true, user: sessionData };
};

// Test all accounts
console.log('🧪 TESTING AUTHENTICATION SYSTEM');
console.log('=================================');

const testCases = [
  { email: 'admin@pennyanddebt.in', password: 'PennyAdmin@2024#Secure' },
  { email: 'manager@pennyanddebt.in', password: 'DebtManager$2024!Strong' },
  { email: 'sales1@pennyanddebt.in', password: 'SalesLead#2024@Power' },
  { email: 'support@pennyanddebt.in', password: 'Support&2024!Help' },
  { email: 'admin@pennyanddebt.in', password: 'wrongpassword' },
  { email: 'nonexistent@pennyanddebt.in', password: 'anypassword' }
];

testCases.forEach((test, index) => {
  console.log(`\n--- Test ${index + 1} ---`);
  const result = authenticateEmployee(test.email, test.password);
  console.log('Result:', result.success ? '✅ SUCCESS' : '❌ FAILED');
  if (!result.success) {
    console.log('Error:', result.message);
  }
});

console.log('\n🎯 SUMMARY:');
console.log('- Authentication function is working');
console.log('- All valid credentials should pass');
console.log('- Invalid credentials should fail');
console.log('- Check browser console for detailed logs');