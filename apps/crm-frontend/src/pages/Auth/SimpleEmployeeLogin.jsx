import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateEmployee } from '../../utils/auth';

const SimpleEmployeeLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    console.log('Login attempt:', formData.email);
    const result = authenticateEmployee(formData.email, formData.password);
    console.log('Login result:', result);

    if (result.success) {
      alert('Login successful!');
      localStorage.setItem('employee', JSON.stringify(result.user));
      navigate('/crm'); // Redirect to CRM
    } else {
      setError(result.message);
      alert('Login failed: ' + result.message);
    }
  };

  const testCredentials = [
    { email: 'admin@pennyanddebt.in', password: 'PennyAdmin@2024#Secure', role: 'Admin' },
    { email: 'manager@pennyanddebt.in', password: 'DebtManager$2024!Strong', role: 'Manager' },
    { email: 'sales1@pennyanddebt.in', password: 'SalesLead#2024@Power', role: 'Sales' },
    { email: 'support@pennyanddebt.in', password: 'Support&2024!Help', role: 'Support' }
  ];

  const quickLogin = (email, password) => {
    setFormData({ email, password });
    const result = authenticateEmployee(email, password);
    if (result.success) {
      localStorage.setItem('employee', JSON.stringify(result.user));
      navigate('/crm');
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
          Employee Login (Simple)
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2c3e50',
              fontWeight: '600'
            }}>
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="employee@pennyanddebt.in"
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e1e8ed',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#2c3e50',
              fontWeight: '600'
            }}>
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              placeholder="Enter password"
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e1e8ed',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
              required
            />
          </div>

          {error && (
            <div className="text-center" style={{
              background: '#fee',
              color: '#c33',
              padding: '10px',
              borderRadius: '5px',
              marginBottom: '20px',
            }}>
              {error}
            </div>
          )}

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
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            Login
          </button>
        </form>

        <div style={{
          marginTop: '30px',
          borderTop: '1px solid #e1e8ed',
          paddingTop: '20px'
        }}>
          <h4 style={{ color: '#2c3e50', marginBottom: '15px' }}>Quick Login:</h4>
          {testCredentials.map((cred, index) => (
            <button
              key={index}
              onClick={() => quickLogin(cred.email, cred.password)}
              style={{
                display: 'block',
                width: '100%',
                padding: '10px',
                margin: '5px 0',
                background: '#f8f9fa',
                border: '1px solid #e1e8ed',
                borderRadius: '5px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <strong>{cred.role}:</strong> {cred.email}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleEmployeeLogin;