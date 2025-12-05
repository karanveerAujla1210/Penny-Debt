import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Inline authentication function to avoid import issues
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
  console.log('🔍 Inline Auth - Email:', email);
  console.log('🔍 Inline Auth - Password:', password);
  
  const account = EMPLOYEE_ACCOUNTS[email.toLowerCase()];
  console.log('🔍 Inline Auth - Account found:', !!account);
  
  if (!account || account.password !== password) {
    console.log('❌ Inline Auth - Failed');
    return { success: false, message: 'Invalid credentials' };
  }
  
  const sessionData = {
    email: email.toLowerCase(),
    role: account.role,
    name: account.name,
    permissions: account.permissions,
    loginTime: new Date().toISOString()
  };
  
  console.log('✅ Inline Auth - Success:', sessionData);
  localStorage.setItem('employeeSession', JSON.stringify(sessionData));
  return { success: true, user: sessionData };
};

const IsolatedLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    
    console.log('🚀 Form submitted with:', formData);
    
    const result = authenticateEmployee(formData.email, formData.password);
    console.log('🎯 Login result:', result);
    
    if (result.success) {
      setMessage('✅ Login successful! Redirecting to CRM...');
      setTimeout(() => {
        navigate('/crm');
      }, 1000);
    } else {
      setMessage('❌ Login failed: ' + result.message);
    }
  };

  const quickLogin = (email, password) => {
    setFormData({ email, password });
    const result = authenticateEmployee(email, password);
    if (result.success) {
      setMessage('✅ Quick login successful! Redirecting...');
      setTimeout(() => navigate('/crm'), 1000);
    } else {
      setMessage('❌ Quick login failed: ' + result.message);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Segoe UI, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        width: '100%',
        maxWidth: '500px'
      }}>
        <h2 className="text-center" style={{
          color: '#2c3e50',
          marginBottom: '30px',
          fontSize: '28px',
          fontWeight: '700'
        }}>
          🔬 Isolated Employee Login
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            style={{
              width: '100%',
              padding: '12px',
              margin: '10px 0',
              border: '2px solid #e1e8ed',
              borderRadius: '8px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
            required
          />
          
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            style={{
              width: '100%',
              padding: '12px',
              margin: '10px 0',
              border: '2px solid #e1e8ed',
              borderRadius: '8px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
            required
          />
          
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              margin: '10px 0'
            }}
          >
            LOGIN
          </button>
        </form>

        {message && (
          <div className="text-center" style={{
            padding: '15px',
            margin: '20px 0',
            borderRadius: '8px',
            background: message.includes('✅') ? '#d4edda' : '#f8d7da',
            color: message.includes('✅') ? '#155724' : '#721c24',
            fontWeight: '600'
          }}>
            {message}
          </div>
        )}

        <div style={{ marginTop: '30px' }}>
          <h4>Quick Login Buttons:</h4>
          <button onClick={() => quickLogin('admin@pennyanddebt.in', 'PennyAdmin@2024#Secure')} 
                  style={{ display: 'block', width: '100%', margin: '5px 0', padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
            Admin Login
          </button>
          <button onClick={() => quickLogin('manager@pennyanddebt.in', 'DebtManager$2024!Strong')} 
                  style={{ display: 'block', width: '100%', margin: '5px 0', padding: '10px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}>
            Manager Login
          </button>
          <button onClick={() => quickLogin('sales1@pennyanddebt.in', 'SalesLead#2024@Power')} 
                  style={{ display: 'block', width: '100%', margin: '5px 0', padding: '10px', background: '#ffc107', color: 'black', border: 'none', borderRadius: '5px' }}>
            Sales Login
          </button>
          <button onClick={() => quickLogin('support@pennyanddebt.in', 'Support&2024!Help')} 
                  style={{ display: 'block', width: '100%', margin: '5px 0', padding: '10px', background: '#17a2b8', color: 'white', border: 'none', borderRadius: '5px' }}>
            Support Login
          </button>
        </div>

        <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
          <p>🔍 Check browser console for detailed logs</p>
          <p>📍 This uses inline authentication (no imports)</p>
        </div>
      </div>
    </div>
  );
};

export default IsolatedLogin;