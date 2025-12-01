import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const employee = localStorage.getItem('employee');
    if (employee) {
      setUser(JSON.parse(employee));
    } else {
      window.location.href = 'https://penny-debt-crm.vercel.app/employee-login';
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('employee');
    window.location.href = 'https://penny-debt-crm.vercel.app';
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      padding: '2rem'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '10px',
        padding: '2rem',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <h1 style={{ color: '#2c3e50', margin: 0 }}>CRM Dashboard</h1>
          <button
            onClick={handleLogout}
            style={{
              padding: '10px 20px',
              background: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>

        <div style={{
          background: '#f8f9fa',
          padding: '1.5rem',
          borderRadius: '8px',
          marginBottom: '2rem'
        }}>
          <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Welcome, {user.name}!</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem'
        }}>
          <div style={{
            background: '#3498db',
            color: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h4>Total Leads</h4>
            <p style={{ fontSize: '2rem', margin: '0.5rem 0' }}>156</p>
          </div>

          <div style={{
            background: '#2ecc71',
            color: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h4>Active Cases</h4>
            <p style={{ fontSize: '2rem', margin: '0.5rem 0' }}>89</p>
          </div>

          <div style={{
            background: '#f39c12',
            color: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h4>Pending Reviews</h4>
            <p style={{ fontSize: '2rem', margin: '0.5rem 0' }}>23</p>
          </div>

          <div style={{
            background: '#9b59b6',
            color: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h4>Completed</h4>
            <p style={{ fontSize: '2rem', margin: '0.5rem 0' }}>67</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;