import React from 'react';
import CRMSidebar from '../CRMSidebar';

export default function CRMLayout({ children, role = 'advisor' }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ flex: '0 0 260px' }}>
        <CRMSidebar role={role.toLowerCase()} />
      </div>
      <main style={{ flex: 1, padding: 20, background: '#f6f8fa' }}>
        {children}
      </main>
    </div>
  );
}
