import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  }
};

const authenticateEmployee = (email, password) => {
  const account = EMPLOYEE_ACCOUNTS[email.toLowerCase()];
  if (!account || account.password !== password) {
    return { success: false, message: 'Invalid credentials' };
  }
  const sessionData = { email: email.toLowerCase(), role: account.role, name: account.name, permissions: account.permissions, loginTime: new Date().toISOString() };
  localStorage.setItem('employeeSession', JSON.stringify(sessionData));
  return { success: true, user: sessionData };
};

const IsolatedLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = authenticateEmployee(formData.email, formData.password);
    if (result.success) {
      setMessage('✅ Login successful! Redirecting to CRM...');
      setTimeout(() => navigate('/crm'), 1000);
    } else {
      setMessage('❌ Login failed: ' + result.message);
    }
  };

  const quickLogin = (email, password) => {
    const result = authenticateEmployee(email, password);
    if (result.success) {
      setMessage('✅ Quick login successful! Redirecting...');
      setTimeout(() => navigate('/crm'), 1000);
    } else {
      setMessage('❌ Quick login failed: ' + result.message);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px' }}>
      <div style={{ background: 'white', padding: 40, borderRadius: 15, boxShadow: '0 20px 40px rgba(0,0,0,0.15)', width: '100%', maxWidth: 500 }}>
        <h2 style={{ textAlign: 'center', marginBottom: 30 }}>🔬 Isolated Employee Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required style={{ width: '100%', padding: 12, marginBottom: 10 }} />
          <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} required style={{ width: '100%', padding: 12, marginBottom: 10 }} />
          <button type="submit" style={{ width: '100%', padding: 14, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', borderRadius: 8 }}>LOGIN</button>
        </form>
        {message && <div style={{ padding: 15, marginTop: 20, borderRadius: 8, background: message.includes('✅') ? '#d4edda' : '#f8d7da' }}>{message}</div>}
        <div style={{ marginTop: 20 }}>
          <button onClick={() => quickLogin('admin@pennyanddebt.in', 'PennyAdmin@2024#Secure')} style={{ display: 'block', width: '100%', padding: 10, margin: '6px 0' }}>Admin Login</button>
          <button onClick={() => quickLogin('manager@pennyanddebt.in', 'DebtManager$2024!Strong')} style={{ display: 'block', width: '100%', padding: 10, margin: '6px 0' }}>Manager Login</button>
        </div>
      </div>
    </div>
  );
};

export default IsolatedLogin;
