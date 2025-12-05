import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WorkingLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Use environment variable or fallback to Render backend
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://penny-debt-crm.onrender.com';

  // Employee credentials
  const EMPLOYEE_ACCOUNTS = {
    'admin@pennyanddebt.in': { password: 'PennyAdmin@2024#Secure', role: 'admin', name: 'Admin User' },
    'manager@pennyanddebt.in': { password: 'DebtManager$2024!Strong', role: 'manager', name: 'Manager User' },
    'sales1@pennyanddebt.in': { password: 'SalesLead#2024@Power', role: 'sales', name: 'Sales Lead' },
    'support@pennyanddebt.in': { password: 'Support&2024!Help', role: 'support', name: 'Support Agent' }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    console.log('Login attempt:', formData.email);
    console.log('API URL:', `${API_BASE_URL}/api/auth/employee-login`);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/employee-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (data.success) {
        localStorage.setItem('employee', JSON.stringify(data.user));
        alert('Login successful!');
        window.location.href = '/dashboard/admin';
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(`Network error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2 className="text-center" style={{ color: '#2c3e50', marginBottom: '1.5rem' }}>
          Employee Login
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px'
              }}
            />
          </div>

          {error && (
            <div className="text-center" style={{ color: 'red', marginBottom: '1rem' }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px',
              background: loading ? '#ccc' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WorkingLogin;