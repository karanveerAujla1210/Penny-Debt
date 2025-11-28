import { motion } from 'framer-motion';

const TrustBadges = () => {
  const badges = [
    { icon: '🔒', label: 'SSL Secured', color: '#16A34A' },
    { icon: '✓', label: 'RBI Compliant', color: '#0A4DFF' },
    { icon: '🏆', label: 'ISO Certified', color: '#F59E0B' },
    { icon: '🛡️', label: 'Data Protected', color: '#DC2626' }
  ];

  return (
    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
      {badges.map((badge, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50px',
            border: '1px solid rgba(255,255,255,0.3)',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'white'
          }}
        >
          <span style={{ fontSize: '1.25rem' }}>{badge.icon}</span>
          <span>{badge.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default TrustBadges;
