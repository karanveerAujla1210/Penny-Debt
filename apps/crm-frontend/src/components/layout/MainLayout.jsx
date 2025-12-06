import React from 'react';
import { Outlet } from 'react-router-dom';
import CRMSidebar from '../../components/CRMSidebar';

export default function MainLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: 260 }}>
        <CRMSidebar />
      </aside>
      <main style={{ flex: 1, padding: 20 }}>
        {children || <Outlet />}
      </main>
    </div>
  );
}
