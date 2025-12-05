import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Employee Dashboard</h2>
      <p>Advisor tools: lead queue, negotiations, and notes (employee-only).</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default EmployeeDashboard;
