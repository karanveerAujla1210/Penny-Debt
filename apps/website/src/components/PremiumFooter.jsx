import React from 'react';
import { Link } from 'react-router-dom';
import './PremiumFooter.css';

const PremiumFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="premium-footer">
      {/* Main Content */}
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-brand">
                <img src="/logo.svg" alt="Penny & Debt" style={{ height: '50px', width: 'auto', marginBottom: '12px' }} />
              </div>
              <p className="brand-tagline">
                Financial freedom through expert debt solutions
              </p>
              <div className="social-links">
                <a href="https://www.instagram.com/pennydebt_?igsh=MWs3Mm1ic3k5djF0YQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  📷
                </a>
                <a href="https://www.linkedin.com/company/pennydebt/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  in
                </a>
                <a href="https://x.com/pennydebt" target="_blank" rel="noopener noreferrer" aria-label="X">
                  𝕏
                </a>
                <a href="https://facebook.com/pennydebt" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  f
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">Product</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/apply">Apply Now</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-section">
              <h4 className="footer-title">Resources</h4>
              <ul className="footer-links">
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#guides">Debt Guides</a>
                </li>
                <li>
                  <a href="#calculator">Calculators</a>
                </li>
                <li>
                  <a href="#resources">Learning Center</a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="footer-section">
              <h4 className="footer-title">Legal</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms of Service</Link>
                </li>
                <li>
                  <a href="#disclaimer">Disclaimer</a>
                </li>
                <li>
                  <a href="#compliance">Compliance</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4 className="footer-title">Contact</h4>
              <div className="contact-info">
                <p>
                  <strong>Email:</strong>
                  <a href="mailto:care@pennyanddebt.in">care@pennyanddebt.in</a>
                </p>
                <p>
                  <strong>Phone:</strong>
                  <a href="tel:+919773921023">+91 9773921023</a>
                </p>
                <p>
                  <strong>Address:</strong>
                  <span>Financial District, Mumbai, India</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Penny & Debt. All rights reserved. | Registered NBFC | ISO 27001 Certified
            </p>
            <p className="disclaimer">
              We are a Debt Management Company. Results vary based on individual circumstances. Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
