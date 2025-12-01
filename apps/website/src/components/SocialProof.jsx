import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SocialProof = () => {
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(true);

  const notifications = [
    { name: 'Rajesh K.', location: 'Mumbai', amount: '₹2.3L', time: '5 min ago' },
    { name: 'Priya S.', location: 'Bangalore', amount: '₹1.8L', time: '12 min ago' },
    { name: 'Arjun M.', location: 'Delhi', amount: '₹3.1L', time: '18 min ago' },
    { name: 'Sneha R.', location: 'Pune', amount: '₹1.5L', time: '25 min ago' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % notifications.length);
        setShow(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          style={{
            position: 'fixed',
            bottom: '100px',
            left: '24px',
            zIndex: 999,
            background: 'white',
            padding: '16px 20px',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            maxWidth: '320px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <div style={{ fontSize: '2rem' }}>🎉</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0F172A' }}>
              {notifications[current].name} from {notifications[current].location}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
              Just saved {notifications[current].amount} • {notifications[current].time}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProof;
