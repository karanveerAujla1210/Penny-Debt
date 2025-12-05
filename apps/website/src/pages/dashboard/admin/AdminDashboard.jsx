import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Admin Dashboard</h2>
      <p>Admin controls: user management, reports, and platform settings.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
