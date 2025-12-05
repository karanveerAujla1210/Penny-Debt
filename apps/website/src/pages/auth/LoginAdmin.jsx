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
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="admin" />
        </div>
        {error && <div style={{ color: 'crimson', marginTop: 8 }}>{error}</div>}
        <button type="submit" disabled={loading} style={{ marginTop: 12 }}>{loading ? 'Signing in…' : 'Login'}</button>
      </form>
    </div>
  );
};

export default LoginAdmin;
