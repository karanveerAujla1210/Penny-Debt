import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PremiumNavbar.css';

const PremiumNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);

  return (
    <nav className="premium-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
          <img src="/logo.svg" alt="Penny & Debt" style={{ height: '50px', width: 'auto' }} />
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-menu desktop">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/services" className="navbar-link">Services</Link>
          <Link to="/faq" className="navbar-link">FAQ</Link>
          <Link to="/careers" className="navbar-link">Careers</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
          <Link to="/blog" className="navbar-link">Blog</Link>
          <Link to="/applyform" className="navbar-link">Apply Now</Link>
          <Link to="/applyloan" className="navbar-link">Apply Loan</Link>
          <Link to="/privacypolicy" className="navbar-link">Privacy</Link>
          <Link to="/terms" className="navbar-link">Terms</Link>
        </div>

        {/* Login Dropdown */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setLoginDropdown(!loginDropdown)}
            className="btn btn-primary"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            Login ▼
          </button>
          {loginDropdown && (
            <div style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: '8px',
              background: '#FFFFFF',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid #E0E0E0',
              minWidth: '180px',
              zIndex: 1000
            }}>
              <Link
                to="/customer-login"
                onClick={() => setLoginDropdown(false)}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  color: '#0D0D0D',
                  textDecoration: 'none',
                  borderBottom: '1px solid #E0E0E0'
                }}
              >
                Customer Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setLoginDropdown(false)}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  color: '#0D0D0D',
                  textDecoration: 'none',
                  borderBottom: '1px solid #E0E0E0'
                }}
              >
                Sign Up
              </Link>
              <a
                href={import.meta.env.VITE_CRM_URL || 'https://crmpennyanddebt.in'}
                onClick={() => setLoginDropdown(false)}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  color: '#0D0D0D',
                  textDecoration: 'none'
                }}
              >
                Employee Login
              </a>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-menu mobile">
          <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="navbar-link" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" className="navbar-link" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/faq" className="navbar-link" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link to="/careers" className="navbar-link" onClick={() => setIsOpen(false)}>Careers</Link>
          <Link to="/contact" className="navbar-link" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/blog" className="navbar-link" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/applyform" className="navbar-link" onClick={() => setIsOpen(false)}>Apply Now</Link>
          <Link to="/applyloan" className="navbar-link" onClick={() => setIsOpen(false)}>Apply Loan</Link>
          <Link to="/privacypolicy" className="navbar-link" onClick={() => setIsOpen(false)}>Privacy</Link>
          <Link to="/terms" className="navbar-link" onClick={() => setIsOpen(false)}>Terms</Link>
          <Link to="/customer-login" className="navbar-link" onClick={() => setIsOpen(false)}>Customer Login</Link>
          <Link to="/signup" className="navbar-link" onClick={() => setIsOpen(false)}>Sign Up</Link>
          <a href={import.meta.env.VITE_CRM_URL || 'https://crmpennyanddebt.in'} className="navbar-link" onClick={() => setIsOpen(false)}>Employee Login</a>
        </div>
      )}
    </nav>
  );
};

export default PremiumNavbar;
