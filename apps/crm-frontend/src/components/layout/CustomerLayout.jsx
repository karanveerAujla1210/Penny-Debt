import React from 'react';
import CustomerSidebar from '../../pages/Customer/CustomerDashboard/Sidebar';

export default function CustomerLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ flex: '0 0 260px' }}>
        <CustomerSidebar />
      </div>
      <main style={{ flex: 1, padding: 20, background: '#fff' }}>
        {children}
      </main>
    </div>
  );
}
