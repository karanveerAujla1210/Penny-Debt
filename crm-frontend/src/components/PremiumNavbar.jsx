import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PremiumNavbar.css';

const PremiumNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="premium-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">💰</span>
          <span className="logo-text">Penny & Debt</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-menu desktop">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/services" className="navbar-link">
            Services
          </Link>
          <Link to="/about" className="navbar-link">
            About
          </Link>
          <Link to="/blog" className="navbar-link">
            Blog
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link to="/apply" className="btn btn-primary">
          Get Started
        </Link>

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
          <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/services" className="navbar-link" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link to="/about" className="navbar-link" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/blog" className="navbar-link" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link to="/contact" className="navbar-link" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link
            to="/apply"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: 'var(--space-md)' }}
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default PremiumNavbar;
