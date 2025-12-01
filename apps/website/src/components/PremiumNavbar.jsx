import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PremiumNavbar.css';

const PremiumNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      padding: '16px 0'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontSize: '24px',
          fontWeight: 900,
          color: '#0A4DFF',
          textDecoration: 'none'
        }}>
          Penny & Debt
        </Link>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <Link to="/" style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
          <Link to="/about" style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 600 }}>About</Link>
          <Link to="/services" style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 600 }}>Services</Link>
          <Link to="/contact" style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 600 }}>Contact</Link>
          <Link to="/blog" style={{ color: '#0F172A', textDecoration: 'none', fontWeight: 600 }}>Blog</Link>
        </div>

        <Link to="/apply" style={{
          padding: '12px 32px',
          background: '#0A4DFF',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 700
        }}>
          Apply Now
        </Link>
      </div>
    </nav>
  );
};

export default PremiumNavbar;
