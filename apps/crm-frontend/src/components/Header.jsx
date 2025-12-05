import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
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

  return (
    <header className="navbar">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="navbar-brand"
            style={{ 
              fontWeight: 800, 
              fontSize: "1.25rem", 
              color: "var(--primary-blue)", 
              textDecoration: "none", 
              letterSpacing: "0.05em" 
            }}
          >
            PENNY & DEBT
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav flex items-center gap-6">
            {navItems.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="navbar-link"
                style={{
                  color: "var(--gray-700)",
                  textDecoration: "none",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "var(--radius-sm)",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  transition: "all var(--transition-fast)",
                  whiteSpace: "nowrap"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = "var(--primary-blue)";
                  e.currentTarget.style.color = "var(--white)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--gray-700)";
                }}
              >
                {label}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Login Dropdown */}
            <div style={{ position: "relative" }}>
              <Button
                onClick={() => setLoginOpen(!loginOpen)}
                aria-haspopup="true"
                aria-expanded={loginOpen}
                variant="default"
                size="sm"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                Login
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  style={{ 
                    transform: loginOpen ? "rotate(180deg)" : "rotate(0deg)", 
                    transition: "transform var(--transition-fast)" 
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </Button>
              
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
                <Button asChild variant="default" size="sm" onClick={() => setMobileMenuOpen(false)}>
                  <Link to="/customer-login">Customer Login</Link>
                </Button>
                <Button asChild variant="secondary" size="sm" onClick={() => setMobileMenuOpen(false)}>
                  <Link to="/employee-login">Employee Login</Link>
                </Button>
                <Button asChild variant="secondary" size="sm" onClick={() => setMobileMenuOpen(false)}>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
