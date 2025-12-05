import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Customer Dashboard</h2>
      <p>Welcome back. This is a customer-only area with your plan, payments, and support.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default CustomerDashboard;
