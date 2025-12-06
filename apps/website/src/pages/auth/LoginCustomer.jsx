import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import auth from '../../services/auth';

const LoginCustomer = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!/^\d{10}$/.test(phone)) {
      setError('Please enter a valid 10-digit Indian mobile number');
      return;
    }
    setLoading(true);
    try {
      const payload = await auth.loginCustomer({ phone });
      if (payload && payload.role === 'customer') {
        navigate('/dashboard/customer');
      } else {
        // Defensive: clear any token and show clear message if role mismatches
        auth.logout();
        setError('This account is not a customer account. Please use the appropriate login.');
      }
    } catch (err) {
      setError('Login failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="login-page"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #ff7f00 0%, #00c6ff 60%)',
        padding: 24,
      }}
    >
      <div
        className="login-card"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,250,240,0.95))',
          borderRadius: 16,
          width: '100%',
          maxWidth: 520,
          boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
          padding: '28px',
          border: '1px solid rgba(255,200,120,0.2)'
        }}
      >
        <header style={{ textAlign: 'center', marginBottom: 12 }}>
          <img src="/logo.svg" alt="Penny & Debt" style={{ height: 44, marginBottom: 8 }} />
          <h2 style={{ margin: 0 }}>Customer sign in</h2>
          <p style={{ margin: '8px 0 0', color: '#6b7280' }}>Check eligibility and get a free consultation</p>
        </header>

        <form onSubmit={handleSubmit} style={{ marginTop: 18 }}>
          <label style={{ display: 'block', fontSize: 13, marginBottom: 6 }}>Mobile</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
            placeholder="10-digit mobile"
            aria-label="Mobile number"
            maxLength={10}
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: 10,
              border: '1px solid #e6e6e6',
              fontSize: 16,
            }}
          />
          {error && <div style={{ color: 'crimson', marginTop: 8 }}>{error}</div>}
          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: 14,
              width: '100%',
              background: 'linear-gradient(90deg,#ff7f00,#ffd166)',
              color: '#fff',
              padding: '12px 16px',
              fontWeight: 700,
              borderRadius: 10,
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {loading ? 'Signing in…' : 'Check Eligibility'}
          </button>
        </form>

        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13 }}>
          <div style={{ color: '#666' }}>We are not a loan app. We negotiate your debt.</div>
          <div>
            <Link to="/signup" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 600 }}>Create account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCustomer;
