import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Penny Debt
        </Link>
        
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className={`navbar-link ${isActive('/')}`}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className={`navbar-link ${isActive('/about')}`}>
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className={`navbar-link ${isActive('/services')}`}>
              Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/how-it-works" className={`navbar-link ${isActive('/how-it-works')}`}>
              How It Works
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/pricing" className={`navbar-link ${isActive('/pricing')}`}>
              Pricing
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/blog" className={`navbar-link ${isActive('/blog')}`}>
              Blog
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/faq" className={`navbar-link ${isActive('/faq')}`}>
              FAQ
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/careers" className={`navbar-link ${isActive('/careers')}`}>
              Careers
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className={`navbar-link ${isActive('/contact')}`}>
              Contact
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/apply" className="navbar-link navbar-cta">
              Apply Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
