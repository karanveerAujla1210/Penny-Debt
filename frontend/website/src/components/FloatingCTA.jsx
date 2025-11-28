import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 1000
          }}
        >
          <Link
            to="/applyform"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #0A4DFF 0%, #0039CC 100%)',
              color: 'white',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              boxShadow: '0 8px 32px rgba(10, 77, 255, 0.4)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <span>💰</span>
            <span>Check Eligibility</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
