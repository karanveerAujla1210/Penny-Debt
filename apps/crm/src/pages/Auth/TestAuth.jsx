import React, { useState } from 'react';
import { authenticateEmployee } from '../../utils/auth';

const TestAuth = () => {
  const [result, setResult] = useState(null);

  const testLogin = (email, password) => {
    console.log('Testing login:', email, password);
    try {
      const authResult = authenticateEmployee(email, password);
      console.log('Auth result:', authResult);
      setResult(authResult);
    } catch (error) {
      console.error('Auth error:', error);
      setResult({ success: false, message: error.message });
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Segoe UI' }}>
      <h2>🧪 Authentication Test Page</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => testLogin('admin@pennyanddebt.in', 'PennyAdmin@2024#Secure')}
          style={{ margin: '5px', padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Test Admin Login
        </button>
        
        <button 
          onClick={() => testLogin('manager@pennyanddebt.in', 'DebtManager$2024!Strong')}
          style={{ margin: '5px', padding: '10px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Test Manager Login
        </button>
        
        <button 
          onClick={() => testLogin('sales1@pennyanddebt.in', 'SalesLead#2024@Power')}
          style={{ margin: '5px', padding: '10px', background: '#ffc107', color: 'black', border: 'none', borderRadius: '5px' }}
        >
          Test Sales Login
        </button>
        
        <button 
          onClick={() => testLogin('wrong@email.com', 'wrongpassword')}
          style={{ margin: '5px', padding: '10px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Test Wrong Credentials
        </button>
      </div>

      {result && (
        <div style={{
          padding: '15px',
          border: '1px solid #ddd',
          borderRadius: '5px',
          background: result.success ? '#d4edda' : '#f8d7da',
          color: result.success ? '#155724' : '#721c24'
        }}>
          <h3>Test Result:</h3>
          <p><strong>Success:</strong> {result.success ? 'YES' : 'NO'}</p>
          {result.success ? (
            <div>
              <p><strong>User:</strong> {result.user.name}</p>
              <p><strong>Role:</strong> {result.user.role}</p>
              <p><strong>Email:</strong> {result.user.email}</p>
              <p><strong>Permissions:</strong> {result.user.permissions.join(', ')}</p>
            </div>
          ) : (
            <p><strong>Error:</strong> {result.message}</p>
          )}
        </div>
      )}

      <div style={{ marginTop: '30px', padding: '15px', background: '#f8f9fa', borderRadius: '5px' }}>
        <h4>Debug Info:</h4>
        <p>Check browser console for detailed logs</p>
        <p>Authentication function type: {typeof authenticateEmployee}</p>
      </div>
    </div>
  );
};

export default TestAuth;