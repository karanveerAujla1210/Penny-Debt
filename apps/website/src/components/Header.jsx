import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import Icon from './ui/icons';
import { Button } from './ui/button';

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
  { label: "Blog", to: "/blog" },
  { label: "Apply", to: "/applyform" },
  { label: "Apply Loan", to: "/applyloan" },
];

export default function Header() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="navbar"
      style={{
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.3s ease',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'var(--white)'
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="navbar-brand"
            style={{ 
              fontWeight: 800, 
              fontSize: "1.5rem", 
              background: "linear-gradient(135deg, #0070f3 0%, #00c6ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textDecoration: "none", 
              letterSpacing: "0.02em",
              transition: "all 0.3s ease"
            }}
          >
            PENNY & DEBT
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav flex items-center gap-2">
            {navItems.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="navbar-link"
                style={{
                  color: "var(--gray-700)",
                  textDecoration: "none",
                  padding: "0.625rem 1rem",
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  whiteSpace: "nowrap",
                  position: "relative"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = "#0070f3";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,112,243,0.3)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--gray-700)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {label}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Login Dropdown */}
            <div style={{ position: "relative", marginLeft: "0.5rem" }}>
              <button
                onClick={() => setLoginOpen(!loginOpen)}
                className="btn btn-secondary"
                aria-haspopup="true"
                aria-expanded={loginOpen}
                style={{
                  background: "linear-gradient(135deg, #0070f3 0%, #00c6ff 100%)",
                  border: "none",
                  color: "#fff",
                  padding: "0.625rem 1.25rem",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,112,243,0.3)",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,112,243,0.4)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,112,243,0.3)";
                }}
              >
                Login
                <span style={{ display: 'inline-flex', marginLeft: 6, transform: loginOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.28s ease' }}>
                  <Icon name="people" size={14} />
                </span>
              </button>
              
              {loginOpen && (
                <div 
                  style={{
                    position: "absolute",
                    top: "calc(100% + 0.5rem)",
                    right: 0,
                    backgroundColor: "var(--white)",
                    boxShadow: "var(--shadow-lg)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--gray-200)",
                    minWidth: "200px",
                    zIndex: 50,
                    padding: "0.5rem 0"
                  }}
                >
                  <Link 
                    to="/customer-login" 
                    className="navbar-link"
                    style={{
                      display: "block",
                      padding: "0.75rem 1rem",
                      color: "var(--gray-700)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "background-color var(--transition-fast)"
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = "var(--gray-50)"}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
                  >
                    Customer Login
                  </Link>
                  <Link 
                    to="/employee-login" 
                    className="navbar-link"
                    style={{
                      display: "block",
                      padding: "0.75rem 1rem",
                      color: "var(--gray-700)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "background-color var(--transition-fast)"
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = "var(--gray-50)"}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
                  >
                    Employee Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="navbar-link"
                    style={{
                      display: "block",
                      padding: "0.75rem 1rem",
                      color: "var(--gray-700)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "background-color var(--transition-fast)"
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = "var(--gray-50)"}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Theme Toggle */}
          <div className="mobile-nav" style={{ marginRight: "1rem" }}>
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="mobile-nav btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            style={{
              backgroundColor: "transparent",
              border: "1px solid var(--gray-300)",
              padding: "0.5rem",
              borderRadius: "var(--radius-sm)"
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="mobile-nav" style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--gray-200)" }}>
            <div className="flex flex-col gap-2">
              {navItems.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="navbar-link"
                  style={{
                    padding: "0.75rem",
                    textAlign: "center",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--gray-50)",
                    color: "var(--gray-700)",
                    textDecoration: "none",
                    fontSize: "0.875rem"
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="flex flex-col gap-2" style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--gray-200)" }}>
                <Button asChild>
                  <Link to="/customer-login" onClick={() => setMobileMenuOpen(false)}>Customer Login</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link to="/employee-login" onClick={() => setMobileMenuOpen(false)}>Employee Login</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
