import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../utils/auth';
import { roleHasAccess } from '../core/rbac/roleAccess';

// Usage examples:
// <ProtectedRoute allowedRoles={["Admin","Manager"]}><App /></ProtectedRoute>
// <ProtectedRoute module="leads"><LeadsPage /></ProtectedRoute>

export default function ProtectedRoute({ children, allowedRoles = [], module = null }) {
  const user = auth.getCurrentUser && auth.getCurrentUser();
  const location = useLocation();

  if (!user) {
    // Not logged in
    return <Navigate to="/login/employee" state={{ from: location }} replace />;
  }

  // If explicit roles provided, check them
  if (allowedRoles && allowedRoles.length > 0) {
    const has = allowedRoles.map(r => r.toLowerCase()).includes((user.role || '').toLowerCase());
    if (!has) return <NotAuthorized />;
  }

  // If module is provided, use RBAC
  if (module) {
    if (!roleHasAccess(user.role, module)) return <NotAuthorized />;
  }

  // allowed
  return children;
}

function NotAuthorized() {
  return (
    <div style={{ padding: 24 }}>
      <h2>Not authorized</h2>
      <p>You don't have permission to view this page.</p>
    </div>
  );
}
