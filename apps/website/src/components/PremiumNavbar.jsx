import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import './PremiumNavbar.css';

const PremiumNavbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/blog', label: 'Blog' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  const applyLinks = [
    { path: '/apply', label: 'Quick Apply' },
    { path: '/apply-loan', label: 'Apply for Loan' },
    { path: '/apply-loan-basic', label: 'Apply - Basic Details' },
  ];

  return (
    <nav className="premium-navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => { setIsOpen(false); setServicesDropdown(false); }}>
          <span className="logo-icon">P&amp;D</span>
        </Link>

        <div className="navbar-menu desktop">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}>
              {link.label}
            </Link>
          ))}

          <div className="apply-dropdown" onMouseEnter={() => setServicesDropdown(true)} onMouseLeave={() => setServicesDropdown(false)}>
            <button className={`navbar-link apply-button`}>
              Apply <ChevronDown size={16} />
            </button>

            {servicesDropdown && (
              <div className="apply-dropdown-menu">
                {applyLinks.map((link) => (
                  <Link key={link.path} to={link.path} className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}>{link.label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/apply" className="cta-button">Apply Now</Link>
        </div>

        <div className="mobile-actions">
          <Link to="/apply" className="mobile-cta">Sign Up</Link>
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
            <div className="apply-options-title">Apply Options</div>
            {applyLinks.map((link) => (
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
