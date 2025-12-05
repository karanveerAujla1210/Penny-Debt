import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import theme from '../styles/theme';
import './PremiumNavbar.css';

const PremiumNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Services', path: '/services' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Blog', path: '/blog' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const applyLinks = [
    { label: 'Quick Apply', path: '/apply' },
    { label: 'Apply for Loan', path: '/apply-loan' },
    { label: 'Apply - Basic Details', path: '/apply-loan-basic' },
  ];

  const getLinkStyle = (path) => ({
    color: isActive(path) ? theme.colors.primary : theme.colors.text.primary,
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: theme.typography.fontSizes.sm,
    fontFamily: theme.typography.fontFamily.primary,
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderRadius: theme.borderRadius.md,
    transition: `all ${theme.transitions.base} ease`,
    borderBottom: isActive(path) ? `3px solid ${theme.colors.primary}` : 'none',
    paddingBottom: isActive(path) ? '5px' : theme.spacing.sm,
  });

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: theme.zIndex.navbar,
        background: theme.colors.bg.white,
        boxShadow: theme.shadows.md,
        padding: `${theme.spacing.md} 0`,
        fontFamily: theme.typography.fontFamily.primary,
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: `0 ${theme.spacing.lg}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontSize: theme.typography.fontSizes['2xl'],
            fontWeight: 900,
            color: theme.colors.primary,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.sm,
            transition: `color ${theme.transitions.base} ease`,
          }}
          onMouseEnter={(e) => (e.target.style.color = theme.colors.primaryDark)}
          onMouseLeave={(e) => (e.target.style.color = theme.colors.primary)}
        >
          P&D
        </Link>

        {/* Desktop Navigation */}
        <div
          style={{
            display: 'none',
            gap: theme.spacing.md,
            alignItems: 'center',
            '@media (min-width: 1024px)': {
              display: 'flex',
            },
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={getLinkStyle(link.path)}
              onMouseEnter={(e) => {
                if (!isActive(link.path)) {
                  e.target.style.color = theme.colors.primary;
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.path)) {
                  e.target.style.color = theme.colors.text.primary;
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Apply Dropdown */}
        <div
          style={{
            display: 'none',
            position: 'relative',
            '@media (min-width: 1024px)': {
              display: 'block',
            },
          }}
          className="apply-dropdown"
          onMouseEnter={() => setServicesDropdown(true)}
          onMouseLeave={() => setServicesDropdown(false)}
        >
          <button
            style={{
              background: 'none',
              border: 'none',
              color: theme.colors.text.primary,
              fontSize: theme.typography.fontSizes.sm,
              fontWeight: 600,
              padding: `${theme.spacing.sm} ${theme.spacing.md}`,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing.xs,
              fontFamily: theme.typography.fontFamily.primary,
              transition: `color ${theme.transitions.base} ease`,
            }}
            onMouseEnter={(e) => (e.target.style.color = theme.colors.primary)}
            onMouseLeave={(e) => (e.target.style.color = theme.colors.text.primary)}
          >
            Apply <ChevronDown size={16} />
          </button>

          {servicesDropdown && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                background: theme.colors.bg.white,
                borderRadius: theme.borderRadius.lg,
                boxShadow: theme.shadows.lg,
                minWidth: '200px',
                zIndex: theme.zIndex.dropdown,
                marginTop: theme.spacing.sm,
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              {applyLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    display: 'block',
                    padding: `${theme.spacing.md} ${theme.spacing.lg}`,
                    color: theme.colors.text.primary,
                    textDecoration: 'none',
                    fontSize: theme.typography.fontSizes.sm,
                    fontFamily: theme.typography.fontFamily.primary,
                    transition: `background ${theme.transitions.base} ease`,
                    background: isActive(link.path) ? theme.colors.bg.light : 'transparent',
                  }}
                  onMouseEnter={(e) => (e.target.style.background = theme.colors.bg.light)}
                  onMouseLeave={(e) =>
                    (e.target.style.background = isActive(link.path) ? theme.colors.bg.light : 'transparent')
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* CTA Button */}
        <Link
          to="/apply"
          style={{
            display: 'none',
            padding: `${theme.spacing.md} ${theme.spacing.xl}`,
            background: theme.colors.primary,
            color: theme.colors.text.inverse,
            borderRadius: theme.borderRadius.lg,
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: theme.typography.fontSizes.sm,
            fontFamily: theme.typography.fontFamily.primary,
            transition: `all ${theme.transitions.base} ease`,
            cursor: 'pointer',
            border: 'none',
            '@media (min-width: 1024px)': {
              display: 'inline-block',
            },
          }}
          className="cta-button"
          onMouseEnter={(e) => {
            e.target.style.background = theme.colors.primaryDark;
            e.target.style.boxShadow = theme.shadows.hover;
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = theme.colors.primary;
            e.target.style.boxShadow = 'none';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Apply Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'flex',
            '@media (min-width: 1024px)': {
              display: 'none',
            },
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: theme.colors.primary,
            padding: 0,
          }}
          className="mobile-menu-btn"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          style={{
            display: 'none',
            flexDirection: 'column',
            background: theme.colors.bg.light,
            borderTop: `1px solid ${theme.colors.border}`,
            '@media (max-width: 1023px)': {
              display: 'flex',
            },
          }}
          className="mobile-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                padding: `${theme.spacing.md} ${theme.spacing.lg}`,
                color: isActive(link.path) ? theme.colors.primary : theme.colors.text.primary,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: theme.typography.fontSizes.sm,
                fontFamily: theme.typography.fontFamily.primary,
                borderBottom: `1px solid ${theme.colors.border}`,
                transition: `background ${theme.transitions.base} ease`,
              }}
              onMouseEnter={(e) => (e.target.style.background = theme.colors.bg.white)}
              onMouseLeave={(e) => (e.target.style.background = 'transparent')}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Apply Section */}
          <div
            style={{
              padding: `${theme.spacing.md} ${theme.spacing.lg}`,
              background: theme.colors.bg.white,
              borderBottom: `1px solid ${theme.colors.border}`,
            }}
          >
            <div
              style={{
                fontWeight: 600,
                fontSize: theme.typography.fontSizes.sm,
                color: theme.colors.text.secondary,
                marginBottom: theme.spacing.md,
                fontFamily: theme.typography.fontFamily.primary,
              }}
            >
              Apply Options
            </div>
            {applyLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: 'block',
                  padding: `${theme.spacing.sm} 0`,
                  color: theme.colors.text.primary,
                  textDecoration: 'none',
                  fontSize: theme.typography.fontSizes.sm,
                  fontFamily: theme.typography.fontFamily.primary,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/apply"
            style={{
              padding: `${theme.spacing.md} ${theme.spacing.lg}`,
              background: theme.colors.primary,
              color: theme.colors.text.inverse,
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: theme.typography.fontSizes.base,
              fontFamily: theme.typography.fontFamily.primary,
              textAlign: 'center',
              margin: theme.spacing.md,
              borderRadius: theme.borderRadius.lg,
            }}
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default PremiumNavbar;
