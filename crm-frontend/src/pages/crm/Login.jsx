import React, { useState } from 'react';
import { authenticateEmployee } from '../../utils/auth';
import './Login.css';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = authenticateEmployee(credentials.email, credentials.password);
    
    if (result.success) {
      onLogin(result.user);
    } else {
      setError(result.message);
    }
    
    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2>CRM Dashboard Login</h2>
          <p>Employee Access Only</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({...credentials, email: e.target.value})}
              placeholder="employee@pennyanddebt.in"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              placeholder="Enter your password"
              required
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" disabled={loading} className="login-btn">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="demo-accounts">
          <h4>Demo Accounts:</h4>
          <div className="account-list">
            <div><strong>Admin:</strong> admin@pennyanddebt.in</div>
            <div><strong>Manager:</strong> manager@pennyanddebt.in</div>
            <div><strong>Sales:</strong> sales1@pennyanddebt.in</div>
            <div><strong>Support:</strong> support@pennyanddebt.in</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;