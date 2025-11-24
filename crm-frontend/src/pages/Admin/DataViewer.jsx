import React, { useState, useEffect } from 'react';

const DataViewer = () => {
  const [debtData, setDebtData] = useState([]);
  const [careerData, setCareerData] = useState([]);
  const [activeTab, setActiveTab] = useState('debt');

  useEffect(() => {
    const debt = JSON.parse(localStorage.getItem('debtApplications') || '[]');
    const career = JSON.parse(localStorage.getItem('careerApplications') || '[]');
    setDebtData(debt);
    setCareerData(career);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Segoe UI' }}>
      <h1>Data Viewer - Penny Debt CRM</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setActiveTab('debt')}
          style={{ 
            padding: '10px 20px', 
            marginRight: '10px',
            background: activeTab === 'debt' ? '#0070f3' : '#f0f0f0',
            color: activeTab === 'debt' ? 'white' : 'black',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Debt Applications ({debtData.length})
        </button>
        <button 
          onClick={() => setActiveTab('career')}
          style={{ 
            padding: '10px 20px',
            background: activeTab === 'career' ? '#0070f3' : '#f0f0f0',
            color: activeTab === 'career' ? 'white' : 'black',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Career Applications ({careerData.length})
        </button>
      </div>

      {activeTab === 'debt' && (
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Email</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Phone</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Debt</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {debtData.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.name}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.email}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.phone}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>₹{item.totalDebt}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{new Date(item.submittedAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {activeTab === 'career' && (
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
          <thead>
            <tr style={{ background: '#f5f5f5' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Email</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Resume</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {careerData.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.fullName}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.email}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.resumeName}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{new Date(item.submittedAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataViewer;