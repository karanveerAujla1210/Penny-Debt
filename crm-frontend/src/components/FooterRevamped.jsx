import React from "react";
import { Link } from "react-router-dom";

const FooterRevamped = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", to: "/about" },
      { label: "Our Services", to: "/services" },
      { label: "Careers", to: "/careers" },
      { label: "Blog", to: "/blog" },
      { label: "Contact", to: "/contact" }
    ],
    services: [
      { label: "Debt Relief", to: "/services#debt-relief" },
      { label: "Credit Repair", to: "/services#credit-repair" },
      { label: "Financial Planning", to: "/services#financial-planning" },
      { label: "Legal Protection", to: "/services#legal-protection" },
      { label: "Loan Assistance", to: "/applyloan" }
    ],
    support: [
      { label: "FAQ", to: "/faq" },
      { label: "Customer Support", to: "/contact" },
      { label: "Privacy Policy", to: "/privacypolicy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Apply Now", to: "/applyform" }
    ]
  };

  return (
    <footer style={{ 
      background: "var(--gray-900)", 
      color: "var(--white)", 
      padding: "var(--space-16) 0 var(--space-8) 0" 
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link 
              to="/" 
              style={{ 
                fontSize: "1.5rem", 
                fontWeight: 800, 
                color: "var(--white)", 
                textDecoration: "none",
                marginBottom: "var(--space-4)",
                display: "block"
              }}
            >
              PENNY & DEBT
            </Link>
            <p style={{ 
              color: "var(--gray-400)", 
              marginBottom: "var(--space-6)",
              lineHeight: 1.6
            }}>
              India's most trusted debt relief service provider. We help individuals 
              and businesses achieve financial freedom through professional debt 
              management and legal protection.
            </p>
            
            {/* Contact Info */}
            <div style={{ marginBottom: "var(--space-4)" }}>
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "var(--space-2)", 
                marginBottom: "var(--space-2)" 
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>\n                </svg>\n                <span style={{ color: "var(--gray-300)", fontSize: "0.875rem" }}>+91 9876543210</span>\n              </div>\n              <div style={{ \n                display: "flex", \n                alignItems: "center", \n                gap: "var(--space-2)" \n              }}>\n                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">\n                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>\n                  <polyline points="22,6 12,13 2,6"></polyline>\n                </svg>\n                <span style={{ color: "var(--gray-300)", fontSize: "0.875rem" }}>care@pennyanddebt.in</span>\n              </div>\n            </div>\n          </div>\n\n          {/* Company Links */}\n          <div>\n            <h3 style={{ \n              fontSize: "1.125rem", \n              fontWeight: 600, \n              marginBottom: "var(--space-4)",\n              color: "var(--white)"\n            }}>\n              Company\n            </h3>\n            <ul style={{ listStyle: "none", padding: 0 }}>\n              {footerLinks.company.map((link, index) => (\n                <li key={index} style={{ marginBottom: "var(--space-2)" }}>\n                  <Link \n                    to={link.to}\n                    style={{\n                      color: "var(--gray-400)",\n                      textDecoration: "none",\n                      fontSize: "0.875rem",\n                      transition: "color var(--transition-fast)"\n                    }}\n                    onMouseEnter={e => e.currentTarget.style.color = "var(--white)"}\n                    onMouseLeave={e => e.currentTarget.style.color = "var(--gray-400)"}\n                  >\n                    {link.label}\n                  </Link>\n                </li>\n              ))}\n            </ul>\n          </div>\n\n          {/* Services Links */}\n          <div>\n            <h3 style={{ \n              fontSize: "1.125rem", \n              fontWeight: 600, \n              marginBottom: "var(--space-4)",\n              color: "var(--white)"\n            }}>\n              Services\n            </h3>\n            <ul style={{ listStyle: "none", padding: 0 }}>\n              {footerLinks.services.map((link, index) => (\n                <li key={index} style={{ marginBottom: "var(--space-2)" }}>\n                  <Link \n                    to={link.to}\n                    style={{\n                      color: "var(--gray-400)",\n                      textDecoration: "none",\n                      fontSize: "0.875rem",\n                      transition: "color var(--transition-fast)"\n                    }}\n                    onMouseEnter={e => e.currentTarget.style.color = "var(--white)"}\n                    onMouseLeave={e => e.currentTarget.style.color = "var(--gray-400)"}\n                  >\n                    {link.label}\n                  </Link>\n                </li>\n              ))}\n            </ul>\n          </div>\n\n          {/* Support Links */}\n          <div>\n            <h3 style={{ \n              fontSize: "1.125rem", \n              fontWeight: 600, \n              marginBottom: "var(--space-4)",\n              color: "var(--white)"\n            }}>\n              Support\n            </h3>\n            <ul style={{ listStyle: "none", padding: 0 }}>\n              {footerLinks.support.map((link, index) => (\n                <li key={index} style={{ marginBottom: "var(--space-2)" }}>\n                  <Link \n                    to={link.to}\n                    style={{\n                      color: "var(--gray-400)",\n                      textDecoration: "none",\n                      fontSize: "0.875rem",\n                      transition: "color var(--transition-fast)"\n                    }}\n                    onMouseEnter={e => e.currentTarget.style.color = "var(--white)"}\n                    onMouseLeave={e => e.currentTarget.style.color = "var(--gray-400)"}\n                  >\n                    {link.label}\n                  </Link>\n                </li>\n              ))}\n            </ul>\n          </div>\n        </div>\n\n        {/* Newsletter Signup */}\n        <div style={{\n          background: "var(--gray-800)",\n          padding: "var(--space-8)",\n          borderRadius: "var(--radius-lg)",\n          marginBottom: "var(--space-8)",\n          textAlign: "center"\n        }}>\n          <h3 style={{ \n            fontSize: "1.25rem", \n            fontWeight: 600, \n            marginBottom: "var(--space-2)",\n            color: "var(--white)"\n          }}>\n            Stay Updated\n          </h3>\n          <p style={{ \n            color: "var(--gray-400)", \n            marginBottom: "var(--space-6)",\n            maxWidth: "500px",\n            margin: "0 auto var(--space-6) auto"\n          }}>\n            Get the latest updates on debt relief strategies, financial tips, and exclusive offers.\n          </p>\n          <div style={{ \n            display: "flex", \n            gap: "var(--space-3)", \n            maxWidth: "400px", \n            margin: "0 auto",\n            flexWrap: "wrap",\n            justifyContent: "center"\n          }}>\n            <input \n              type=\"email\" \n              placeholder=\"Enter your email\"\n              style={{\n                flex: 1,\n                minWidth: "250px",\n                padding: "var(--space-3)",\n                borderRadius: "var(--radius-md)",\n                border: "1px solid var(--gray-600)",\n                background: "var(--gray-700)",\n                color: "var(--white)",\n                fontSize: "0.875rem"\n              }}\n            />\n            <button \n              className=\"btn btn-primary\"\n              style={{\n                background: "var(--primary-blue)",\n                border: "none",\n                padding: "var(--space-3) var(--space-6)",\n                whiteSpace: "nowrap"\n              }}\n            >\n              Subscribe\n            </button>\n          </div>\n        </div>\n\n        {/* Bottom Footer */}\n        <div style={{\n          borderTop: "1px solid var(--gray-700)",\n          paddingTop: "var(--space-6)",\n          display: "flex",\n          justifyContent: "space-between",\n          alignItems: "center",\n          flexWrap: "wrap",\n          gap: "var(--space-4)"\n        }}>\n          <div style={{ color: "var(--gray-400)", fontSize: "0.875rem" }}>\n            © {currentYear} Penny & Debt. All rights reserved.\n          </div>\n          \n          {/* Social Links */}\n          <div style={{ display: "flex", gap: "var(--space-4)" }}>\n            <a \n              href=\"#\" \n              style={{ \n                color: "var(--gray-400)", \n                transition: "color var(--transition-fast)" \n              }}\n              onMouseEnter={e => e.currentTarget.style.color = "var(--white)"}\n              onMouseLeave={e => e.currentTarget.style.color = "var(--gray-400)"}\n              aria-label=\"Facebook\"\n            >\n              <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                <path d=\"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z\"/>\n              </svg>\n            </a>\n            <a \n              href=\"#\" \n              style={{ \n                color: "var(--gray-400)", \n                transition: "color var(--transition-fast)" \n              }}\n              onMouseEnter={e => e.currentTarget.style.color = "var(--white)"}\n              onMouseLeave={e => e.currentTarget.style.color = "var(--gray-400)"}\n              aria-label=\"Twitter\"\n            >\n              <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                <path d=\"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z\"/>\n              </svg>\n            </a>\n            <a \n              href=\"#\" \n              style={{ \n                color: "var(--gray-400)", \n                transition: "color var(--transition-fast)" \n              }}\n              onMouseEnter={e => e.currentTarget.style.color = "var(--white)"}\n              onMouseLeave={e => e.currentTarget.style.color = "var(--gray-400)"}\n              aria-label=\"LinkedIn\"\n            >\n              <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                <path d=\"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z\"/>\n              </svg>\n            </a>\n          </div>\n        </div>\n      </div>\n    </footer>\n  );\n};\n\nexport default FooterRevamped;