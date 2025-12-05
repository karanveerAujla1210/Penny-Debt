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
      <h2>Employee / Counsellor Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@company.com" />
        </div>
        {error && <div style={{ color: 'crimson', marginTop: 8 }}>{error}</div>}
        <button type="submit" disabled={loading} style={{ marginTop: 12 }}>{loading ? 'Signing in…' : 'Login'}</button>
      </form>
    </div>
  );
};

export default LoginEmployee;
