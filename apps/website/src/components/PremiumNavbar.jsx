import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './PremiumNavbar.css';

const PremiumNavbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/apply-loan', label: 'Apply Loan' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/careers', label: 'Careers' },
    { path: '/blog', label: 'Blog' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  const loginLinks = [
    { path: '/customer-login', label: 'Customer Login' },
    { path: '/employee-login', label: 'Employee Login' },
    { path: '/admin-login', label: 'Admin Login' },
    { path: '/signup', label: 'Signup' },
  ];

  return (
    <nav className="premium-navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => { setIsOpen(false); setLoginDropdown(false); }}>
          <span className="logo-icon">P&amp;D</span>
        </Link>

        <div className="navbar-menu desktop">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}>
              {link.label}
            </Link>
          ))}

          <ThemeToggle />
          
          <div className="apply-dropdown" onMouseEnter={() => setLoginDropdown(true)} onMouseLeave={() => setLoginDropdown(false)}>
            <button className={`cta-button`}>
              Login <ChevronDown size={16} />
            </button>

            {loginDropdown && (
              <div className="apply-dropdown-menu">
                {loginLinks.map((link) => (
                  <Link key={link.path} to={link.path} className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}>{link.label}</Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mobile-actions">
          <button className={`mobile-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="navbar-menu mobile">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={`navbar-link mobile-link ${isActive(link.path) ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}

          <div className="mobile-apply-section">
            <div className="apply-options-title">Login Options</div>
            {loginLinks.map((link) => (
              <Link key={link.path} to={link.path} className="navbar-link mobile-link" onClick={() => setIsOpen(false)}>{link.label}</Link>
            ))}
          </div>

          <Link to="/apply" className="mobile-apply-cta" onClick={() => setIsOpen(false)}>Apply Now</Link>
        </div>
      )}
    </nav>
  );
};

export default PremiumNavbar;
