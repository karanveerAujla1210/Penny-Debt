import { Link, useLocation } from 'react-router-dom';
import './CRMSidebar.css';

function CRMSidebar({ role }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  const roleBasedLinks = {
    admin: [
      { path: '/dashboard/admin', label: 'Dashboard', icon: '📊' },
      { path: '/leads', label: 'Leads', icon: '👥' },
      { path: '/cases', label: 'Cases', icon: '📁' },
      { path: '/employees', label: 'Employees', icon: '👨‍💼' },
      { path: '/reports', label: 'Reports', icon: '📈' },
      { path: '/settings', label: 'Settings', icon: '⚙️' }
    ],
    advisor: [
      { path: '/dashboard/advisor', label: 'Dashboard', icon: '📊' },
      { path: '/leads', label: 'My Leads', icon: '👥' },
      { path: '/cases', label: 'My Cases', icon: '📁' },
      { path: '/tasks', label: 'Tasks', icon: '✓' }
    ],
    counsellor: [
      { path: '/dashboard/counsellor', label: 'Dashboard', icon: '📊' },
      { path: '/leads', label: 'Leads', icon: '👥' },
      { path: '/cases', label: 'Cases', icon: '📁' },
      { path: '/tasks', label: 'Tasks', icon: '✓' }
    ],
    customer: [
      { path: '/dashboard/customer', label: 'Dashboard', icon: '📊' },
      { path: '/profile', label: 'Profile', icon: '👤' },
      { path: '/payments', label: 'Payments', icon: '💳' },
      { path: '/documents', label: 'Documents', icon: '📄' },
      { path: '/support', label: 'Support', icon: '💬' }
    ]
  };

  const links = roleBasedLinks[role] || roleBasedLinks.customer;

  return (
    <aside className="crm-sidebar">
      <div className="sidebar-header">
        <h2>Penny Debt CRM</h2>
        <p className="user-role">{role?.toUpperCase()}</p>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {links.map((link) => (
            <li key={link.path} className="sidebar-item">
              <Link 
                to={link.path} 
                className={`sidebar-link ${isActive(link.path)}`}
              >
                <span className="sidebar-icon">{link.icon}</span>
                <span className="sidebar-label">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <Link to="/logout" className="sidebar-link logout">
          <span className="sidebar-icon">🚪</span>
          <span className="sidebar-label">Logout</span>
        </Link>
      </div>
    </aside>
  );
}

export default CRMSidebar;
