import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../services/auth';

const LoginAdmin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!username) {
      setError('Please enter username');
      return;
    }
    setLoading(true);
    try {
      const payload = await auth.loginAdmin({ username });
      if (payload && payload.role === 'admin') {
        navigate('/dashboard/admin');
      } else {
        auth.logout();
        setError('This account is not an admin account.');
      }
    } catch (err) {
      setError('Login failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #ffd166 0%, #ffb703 60%)',
      padding: 24,
    }}>
      <div style={{ background: '#fffaf0', borderRadius: 12, padding: 22, width: '100%', maxWidth: 440, boxShadow: '0 12px 48px rgba(0,0,0,0.12)' }}>
        <header style={{ textAlign: 'center', marginBottom: 8 }}>
          <img src="/logo.svg" alt="Penny & Debt" style={{ height: 40 }} />
          <h3 style={{ margin: '8px 0 0' }}>Admin Sign In</h3>
        </header>

        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: 6 }}>Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="admin" style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #f1dca7' }} />
          {error && <div style={{ color: 'crimson', marginTop: 8 }}>{error}</div>}
          <button type="submit" disabled={loading} style={{ marginTop: 12, width: '100%', padding: '10px 12px', background: 'linear-gradient(90deg,#b07b00,#ffd166)', color: '#fff', borderRadius: 8, border: 'none', fontWeight: 700 }}>{loading ? 'Signing in…' : 'Login'}</button>
        </form>

        <div style={{ marginTop: 12, fontSize: 13, color: '#6b7280', textAlign: 'center' }}>
          <div>Admin access only. If you need access, contact the system administrator.</div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
