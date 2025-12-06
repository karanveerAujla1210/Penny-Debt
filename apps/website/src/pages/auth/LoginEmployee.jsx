import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../services/auth';

const LoginEmployee = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }
    setLoading(true);
    try {
      const payload = await auth.loginEmployee({ email });
      if (payload && payload.role === 'employee') {
        navigate('/dashboard/employee');
      } else {
        // clear token and show clear message
        auth.logout();
        setError('This account is not an employee account. Please use the customer login page if you are a customer.');
      }
    } catch (err) {
      setError('Login failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="login-page-employee"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0ea5e9 0%, #073b4c 80%)',
        padding: 24,
      }}
    >
      <div style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(240,248,255,0.95))',
        borderRadius: 14,
        width: '100%',
        maxWidth: 480,
        padding: 26,
        boxShadow: '0 10px 36px rgba(2,6,23,0.18)'
      }}>
        <header style={{ textAlign: 'center', marginBottom: 10 }}>
          <img src="/logo.svg" alt="Penny & Debt" style={{ height: 40, marginBottom: 6 }} />
          <h3 style={{ margin: 0 }}>Employee / Counsellor Login</h3>
          <p style={{ marginTop: 6, color: '#556' }}>Restricted access — employees only</p>
        </header>

        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', fontSize: 13, marginBottom: 6 }}>Work Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            aria-label="Employee email"
            style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #e6eef6' }}
          />
          {error && <div style={{ color: 'crimson', marginTop: 8 }}>{error}</div>}
          <button
            type="submit"
            disabled={loading}
            style={{ marginTop: 12, width: '100%', padding: '10px 12px', background: '#0369a1', color: '#fff', borderRadius: 8, border: 'none', fontWeight: 700 }}
          >
            {loading ? 'Signing in…' : 'Login'}
          </button>
        </form>

        <div style={{ marginTop: 12, fontSize: 13, color: '#6b7280', textAlign: 'center' }}>
          <div>If you are a customer, please use the customer login page.</div>
        </div>
      </div>
    </div>
  );
};

export default LoginEmployee;
