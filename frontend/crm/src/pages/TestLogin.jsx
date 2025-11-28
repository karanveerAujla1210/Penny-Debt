import React from 'react';

const TestLogin = () => {
  const testCredentials = [
    { email: 'admin@pennyanddebt.in', password: 'PennyAdmin@2024#Secure', role: 'admin' },
    { email: 'manager@pennyanddebt.in', password: 'DebtManager$2024!Strong', role: 'manager' },
    { email: 'sales1@pennyanddebt.in', password: 'SalesLead#2024@Power', role: 'sales' },
    { email: 'support@pennyanddebt.in', password: 'Support&2024!Help', role: 'support' }
  ];

  const testLogin = (email, password) => {
    console.log('Testing login:', email, password);
    
    // Import auth function
    import('../../utils/auth').then(({ authenticateEmployee }) => {
      const result = authenticateEmployee(email, password);
      console.log('Login result:', result);
      
      if (result.success) {
        alert(`✅ Login SUCCESS for ${result.user.name} (${result.user.role})`);
      } else {
        alert(`❌ Login FAILED: ${result.message}`);
      }
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Segoe UI' }}>
      <h2>🔐 CRM Login Test</h2>
      <p>Click buttons to test each account:</p>
      
      {testCredentials.map((cred, index) => (
        <div key={index} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
          <strong>{cred.role.toUpperCase()}</strong><br/>
          <small>{cred.email}</small><br/>
          <button 
            onClick={() => testLogin(cred.email, cred.password)}
            style={{ 
              background: '#007bff', 
              color: 'white', 
              border: 'none', 
              padding: '8px 16px', 
              borderRadius: '4px', 
              cursor: 'pointer',
              marginTop: '5px'
            }}
          >
            Test Login
          </button>
        </div>
      ))}
      
      <div style={{ marginTop: '20px', padding: '15px', background: '#f8f9fa', borderRadius: '5px' }}>
        <h4>Manual Test:</h4>
        <p>Go to: <a href="/crm" target="_blank">/crm</a></p>
        <p>Try: <code>admin@pennyanddebt.in</code> / <code>PennyAdmin@2024#Secure</code></p>
      </div>
    </div>
  );
};

export default TestLogin;