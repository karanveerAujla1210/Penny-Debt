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
                Reduce your unsecured debt by up to 60% with legal, RBI-compliant settlement plans.
              </p>
              <div className="role-chips" aria-hidden={false}>
                <a className="role-chip" href="#salaried">Salaried</a>
                <a className="role-chip" href="#self-employed">Self-employed</a>
                <a className="role-chip" href="#multiple-loans">Multiple loans</a>
                <a className="role-chip" href="#harassed">Harassed by calls</a>
              </div>
              <div className="language-switch" style={{ marginTop: '8px' }}>
                <a href="?lang=en" aria-label="English">EN</a> | <a href="?lang=hi" aria-label="हिंदी">हिंदी</a>
              </div>
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

            {/* Help & Plans */}
            <div className="footer-section">
              <h4 className="footer-title">Help & Plans</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/harassment-help">Being harassed by recovery agents?</Link>
                </li>
                <li>
                  <Link to="/eligibility">Check Eligibility</Link>
                </li>
              </ul>
              <div className="tier-examples" style={{ marginTop: '8px' }}>
                <strong>Typical plans</strong>
                <ul>
                  <li>₹50k–2L: Quick negotiation / 6–18 months</li>
                  <li>₹2L–10L: Structured settlement / 12–36 months</li>
                  <li>₹10L+: Tailored legal & negotiation pathways</li>
                </ul>
              </div>
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
                  <a href="tel:+919773921023">+91 9773921023</a> &nbsp;|&nbsp; <a href="https://wa.me/919773921023?text=Hi%20Penny%20Debt" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </p>
                <p>
                  <strong>Address:</strong>
                  <span>Financial District, Mumbai, India</span>
                </p>
                <p>
                  <strong>Emergency:</strong>
                  <Link to="/harassment-help">I am being harassed — Get urgent help</Link>
                </p>
                <p>
                  <strong>Grievance Officer:</strong>
                  <a href="mailto:grievance@pennyanddebt.in">grievance@pennyanddebt.in</a>
                </p>
                <div className="trust-row" style={{ marginTop: '8px' }}>
                  <span>Rated</span>
                  <a className="rating" href="#" target="_blank" rel="noopener noreferrer">★ ★ ★ ★ ☆ on Google</a>
                </div>
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
              © {currentYear} Penny & Debt. All rights reserved. | Company registration: [CIN/LLPIN]
            </p>
            <p className="disclaimer">
              We are a debt advisory and negotiation platform. We do not lend money. Settlement outcomes vary and are not guaranteed.
            </p>
            <div className="honest-expectations" style={{ marginTop: '10px', fontSize: '0.95rem' }}>
              <strong>Honest expectations:</strong>
              <ul>
                <li>Settlement can affect your credit score; impacts vary.</li>
                <li>Typical timelines: 6–36+ months depending on creditor cooperation.</li>
                <li>Final settlement depends on creditor approval and account history.</li>
              </ul>
            </div>
            <div style={{ marginTop: '8px' }}>
              <Link to="/privacy">Privacy</Link> | <Link to="/terms">Terms</Link> | <Link to="/faq">FAQ</Link> | <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
