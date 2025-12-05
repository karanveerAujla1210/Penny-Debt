import { motion } from 'framer-motion';
import Icon from './ui/icons';

const WhatsAppWidget = () => {
  const phoneNumber = '917814447895';
  const message = 'Hi, I need help with debt relief. Can you assist me?';

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      style={{
        position: 'fixed',
        bottom: '100px',
        right: '24px',
        width: '64px',
        height: '64px',
        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 28px rgba(18, 140, 126, 0.24)',
        zIndex: 1000,
        cursor: 'pointer'
      }}
    >
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="phone" size={28} />
      </span>
    </motion.a>
  );
};

export default WhatsAppWidget;
