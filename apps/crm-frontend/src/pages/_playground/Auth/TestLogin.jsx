import React, { useState } from 'react';

const TestLogin = () => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const testLogin = async () => {
    setLoading(true);
    setResult('Testing...');

    try {
      const response = await fetch('https://penny-debt-crm.onrender.com/api/auth/employee-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'admin@pennyanddebt.in',
          password: 'PennyAdmin@2024#Secure'
        })
      });

      const data = await response.json();
      
      setResult(`Response Status: ${response.status}\nResponse Data: ${JSON.stringify(data, null, 2)}`);
      
      if (data.success) {
        setResult('✅ SUCCESS: Login working! User: ' + data.user.name);
        localStorage.setItem('employee', JSON.stringify(data.user));
      } else {
        setResult('❌ FAILED: ' + data.message);
      }
    } catch (error) {
      setResult('❌ ERROR: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h2>Login Test Page</h2>
      <button 
        onClick={testLogin} 
        disabled={loading}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        {loading ? 'Testing...' : 'Test Login'}
      </button>
      
      <div style={{
        marginTop: '1rem',
        padding: '1rem',
        background: '#f8f9fa',
        border: '1px solid #ddd',
        borderRadius: '5px',
        minHeight: '50px'
      }}>
        {result || 'Click button to test login'}
      </div>
      
      <div style={{ marginTop: '1rem', fontSize: '14px', color: '#666' }}>
        <p><strong>Test Credentials:</strong></p>
        <p>Email: admin@pennyanddebt.in</p>
        <p>Password: PennyAdmin@2024#Secure</p>
        <p><strong>Backend URL:</strong> https://penny-debt-crm.onrender.com</p>
      </div>
    </div>
  );
};

export default TestLogin;
