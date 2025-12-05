import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
        setError('Unexpected role received from server');
      }
    } catch (err) {
      setError('Login failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Customer Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Mobile</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="10-digit mobile" />
        </div>
        {error && <div style={{ color: 'crimson', marginTop: 8 }}>{error}</div>}
        <button type="submit" disabled={loading} style={{ marginTop: 12 }}>{loading ? 'Signing in…' : 'Check Eligibility'}</button>
      </form>
      <p style={{ marginTop: 12, color: '#555' }}>We are not a loan app. We negotiate your existing debt and protect you from harassment.</p>
    </div>
  );
};

export default LoginCustomer;
