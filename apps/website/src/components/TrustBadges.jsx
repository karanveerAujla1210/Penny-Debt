import { motion } from 'framer-motion';
import Icon from './ui/icons';

const TrustBadges = () => {
  const badges = [
    { icon: 'shield', label: 'SSL Secured', color: '#16A34A' },
    { icon: 'scale', label: 'RBI Compliant', color: '#0A4DFF' },
    { icon: 'wallet', label: 'ISO Certified', color: '#F59E0B' },
    { icon: 'shield', label: 'Data Protected', color: '#DC2626' }
  ];

  return (
    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
      {badges.map((badge, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.08 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 16px',
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(6px)',
            borderRadius: '50px',
            border: '1px solid rgba(255,255,255,0.06)',
            fontSize: '0.9rem',
            fontWeight: 700,
            color: 'white'
          }}
        >
          <span style={{ width: 28, height: 28, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name={badge.icon} size={20} />
          </span>
          <span>{badge.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default TrustBadges;
