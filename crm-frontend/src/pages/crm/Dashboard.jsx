import React, { useState, useEffect } from 'react';
import { getCurrentUser, logout, hasPermission } from '../../utils/auth';
import './Dashboard.css';

const Dashboard = ({ onLogout }) => {
  const [user, setUser] = useState(null);
  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({
    totalLeads: 0,
    newLeads: 0,
    inProgress: 0,
    converted: 0
  });

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      loadDashboardData();
    }
  }, []);

  const loadDashboardData = () => {
    // Simulate loading data from Google Sheets
    const mockLeads = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '9876543210', totalDebt: 500000, status: 'new' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '9876543211', totalDebt: 750000, status: 'in-progress' },
      { id: 3, name: 'Mike Johnson', email: 'mike@example.com', phone: '9876543212', totalDebt: 300000, status: 'converted' }
    ];
    
    setLeads(mockLeads);
    setStats({
      totalLeads: mockLeads.length,
      newLeads: mockLeads.filter(l => l.status === 'new').length,
      inProgress: mockLeads.filter(l => l.status === 'in-progress').length,
      converted: mockLeads.filter(l => l.status === 'converted').length
    });
  };

  const handleLogout = () => {
    logout();
    onLogout();
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-left">
          <h1>CRM Dashboard</h1>
          <span className="user-info">Welcome, {user.name} ({user.role})</span>
        </div>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </header>

      <div className="dashboard-content">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Leads</h3>
            <div className="stat-number">{stats.totalLeads}</div>
          </div>
          <div className="stat-card">
            <h3>New Leads</h3>
            <div className="stat-number">{stats.newLeads}</div>
          </div>
          <div className="stat-card">
            <h3>In Progress</h3>
            <div className="stat-number">{stats.inProgress}</div>
          </div>
          <div className="stat-card">
            <h3>Converted</h3>
            <div className="stat-number">{stats.converted}</div>
          </div>
        </div>

        <div className="leads-section">
          <h2>Recent Leads</h2>
          <div className="leads-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Debt Amount</th>
                  <th>Status</th>
                  {hasPermission('edit_leads') && <th>Actions</th>}
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => (
                  <tr key={lead.id}>
                    <td>{lead.name}</td>
                    <td>{lead.email}</td>
                    <td>{lead.phone}</td>
                    <td>₹{lead.totalDebt.toLocaleString()}</td>
                    <td>
                      <span className={`status-badge ${lead.status}`}>
                        {lead.status}
                      </span>
                    </td>
                    {hasPermission('edit_leads') && (
                      <td>
                        <button className="action-btn">Edit</button>
                        <button className="action-btn">Call</button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="permissions-info">
          <h3>Your Permissions:</h3>
          <ul>
            {user.permissions.map(permission => (
              <li key={permission}>{permission.replace('_', ' ').toUpperCase()}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;