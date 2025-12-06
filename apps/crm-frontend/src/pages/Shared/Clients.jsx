import React from 'react';
import CRMLayout from '../../components/layout/CRMLayout';

const SharedClients = ({ role = 'Advisor' }) => {
  return (
    <CRMLayout role={role}>
      <div style={{
        minHeight: '60vh',
        padding: '24px',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
      }}>
        <h1 style={{ fontSize: 28, fontWeight: '700', marginBottom: 12 }}>Clients</h1>
        <p style={{ fontSize: 16 }}>This is the shared Clients view. Role: <strong>{role}</strong></p>
      </div>
    </CRMLayout>
  );
};

export default SharedClients;
