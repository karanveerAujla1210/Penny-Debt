import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './PremiumFooter.css';

const PremiumFooter = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="premium-footer">
      {/* Main Content */}
      <div className="footer-content">
        <div className="container">
          <motion.div
            className="footer-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Company Info */}
            <motion.div className="footer-section" variants={itemVariants}>
              <div className="footer-brand">
                <span className="brand-icon">💰</span>
                <h3 className="brand-name">Penny & Debt</h3>
              </div>
              <p className="brand-tagline">
                Financial freedom through expert debt solutions
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  f
                </a>
                <a href="#" aria-label="Twitter">
                  𝕏
                </a>
                <a href="#" aria-label="LinkedIn">
                  in
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div className="footer-section" variants={itemVariants}>
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
            </motion.div>

            {/* Resources */}
            <motion.div className="footer-section" variants={itemVariants}>
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
            </motion.div>

            {/* Legal */}
            <motion.div className="footer-section" variants={itemVariants}>
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
            </motion.div>

            {/* Contact */}
            <motion.div className="footer-section" variants={itemVariants}>
              <h4 className="footer-title">Contact</h4>
              <div className="contact-info">
                <p>
                  <strong>Email:</strong>
                  <a href="mailto:support@pennydebt.com">support@pennydebt.com</a>
                </p>
                <p>
                  <strong>Phone:</strong>
                  <a href="tel:+919876543210">+91 9876 543 210</a>
                </p>
                <p>
                  <strong>Address:</strong>
                  <span>Financial District, Mumbai, India</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Section */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
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
      </motion.div>
    </footer>
  );
};

export default PremiumFooter;
