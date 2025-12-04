import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp, ArrowRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const ModernNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [applyDropdown, setApplyDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setApplyDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const toggleApplyDropdown = (e) => {
    e.stopPropagation();
    setApplyDropdown(!applyDropdown);
  };

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
  ];

  const applyLinks = [
    { 
      name: 'General Application', 
      path: '/apply',
      description: 'Start your debt relief journey',
      icon: '📝'
    },
    { 
      name: 'Apply for Loan', 
      path: '/apply-loan',
      description: 'Get pre-approved in minutes',
      icon: '💰'
    },
    { 
      name: 'Loan Basic Details', 
      path: '/apply-loan-basic',
      description: 'Quick application with basic info',
      icon: '⚡'
    },
  ];

  const NavLink = ({ to, children, className = '' }) => {
    const isActive = location.pathname === to;
    return (
      <Link 
        to={to} 
        className={clsx(
          'relative group transition-colors duration-200',
          isActive 
            ? 'text-blue-700 font-semibold' 
            : 'text-gray-700 hover:text-blue-700',
          className
        )}
      >
        {children}
        {isActive && (
          <motion.div 
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"
            layoutId="nav-underline"
            initial={false}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }}
          />
        )}
      </Link>
    );
  };

  return (
    <nav 
      ref={dropdownRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={() => {
              setIsOpen(false);
              setApplyDropdown(false);
            }}
          >
            <motion.div 
              className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-200/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold text-xl">P&D</span>
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              Penny & Debt
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </NavLink>
            ))}
            {/* Apply Dropdown */}
            <div className="relative">
              <button
                onClick={toggleApplyDropdown}
                className={clsx(
                  'flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
                  (isActive('/apply') || isActive('/apply-loan') || isActive('/apply-loan-basic'))
                    ? 'text-blue-700 font-semibold'
                    : 'text-gray-700 hover:text-blue-700',
                  applyDropdown && 'text-blue-700'
                )}
              >
                <span>Apply</span>
                {applyDropdown ? (
                  <ChevronUp size={16} className="mt-0.5" />
                ) : (
                  <ChevronDown size={16} className="mt-0.5" />
                )}
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {applyDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-72 rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden z-50"
                  >
                    <div className="p-2">
                      {applyLinks.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setApplyDropdown(false)}
                          className="flex items-start p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                        >
                          <span className="text-xl mr-3 mt-0.5">{item.icon}</span>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-blue-700">
                              {item.name}
                            </div>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-700 hover:text-blue-700 hover:bg-gray-100 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>

            {/* Sign Up Button */}
            <NavLink
              to="/signup"
              className="ml-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center"
            >
              Get Started
              <ArrowRight size={16} className="ml-2" />
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Link
              to="/signup"
              className="mr-4 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center"
            >
              Sign Up
            </Link>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                if (isOpen) setApplyDropdown(false);
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white shadow-lg"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-50 ${
                      isActive(link.path)
                        ? 'text-blue-700 bg-blue-50'
                        : 'text-gray-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Mobile Apply Dropdown */}
                <div className="border-t border-gray-100 pt-2 mt-2">
                  <button
                    onClick={() => setApplyDropdown(!applyDropdown)}
                    className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    <span>Apply</span>
                    {applyDropdown ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {applyDropdown && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 space-y-1 overflow-hidden"
                      >
                        {applyLinks.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => {
                              setIsOpen(false);
                              setApplyDropdown(false);
                            }}
                            className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-700 transition-colors duration-200 flex items-start"
                          >
                            <span className="mr-2 mt-0.5">{item.icon}</span>
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-xs text-gray-500">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Sign Up Button */}
                <div className="pt-2 mt-2">
                  <Link
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                  >
                    Get Started Free
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default ModernNavbar;
