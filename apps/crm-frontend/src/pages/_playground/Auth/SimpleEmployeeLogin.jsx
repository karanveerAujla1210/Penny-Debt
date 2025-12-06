import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateEmployee } from '../../utils/auth';

const SimpleEmployeeLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const result = authenticateEmployee(formData.email, formData.password);
    if (result.success) {
      localStorage.setItem('employee', JSON.stringify(result.user));
      navigate('/crm');
    } else {
      setError(result.message);
    }
  };

  const testCredentials = [
    { email: 'admin@pennyanddebt.in', password: 'PennyAdmin@2024#Secure', role: 'Admin' },
    { email: 'manager@pennyanddebt.in', password: 'DebtManager$2024!Strong', role: 'Manager' }
  ];

  const quickLogin = (email, password) => {
    const result = authenticateEmployee(email, password);
    if (result.success) {
      localStorage.setItem('employee', JSON.stringify(result.user));
      navigate('/crm');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: 20 }}>
      <div style={{ background: 'white', padding: 40, borderRadius: 15, boxShadow: '0 20px 40px rgba(0,0,0,0.15)', width: '100%', maxWidth: 500 }}>
        <h2 style={{ textAlign: 'center', marginBottom: 30 }}>Employee Login (Simple)</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="employee@pennyanddebt.in" required style={{ width: '100%', padding: 12, marginBottom: 20, borderRadius: 8 }} />
          <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} placeholder="Enter password" required style={{ width: '100%', padding: 12, marginBottom: 20, borderRadius: 8 }} />
          {error && <div style={{ background: '#fee', color: '#c33', padding: 10, borderRadius: 5, marginBottom: 20 }}>{error}</div>}
          <button type="submit" style={{ width: '100%', padding: 14, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', borderRadius: 8 }}>Login</button>
        </form>
        <div style={{ marginTop: 20 }}>
          {testCredentials.map((cred, i) => (
            <button key={i} onClick={() => quickLogin(cred.email, cred.password)} style={{ display: 'block', width: '100%', padding: 10, margin: '6px 0' }}>{cred.role}: {cred.email}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleEmployeeLogin;
