import { useState } from 'react';

const NotificationBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="text-center" style={{
      background: 'linear-gradient(135deg, #FF9500 0%, #FFB84D 100%)',
      color: 'white',
      padding: '12px 24px',
      fontSize: '14px',
      fontWeight: 600,
      position: 'relative',
      zIndex: 1000
    }}>
      🎉 Limited Time Offer: Get FREE Debt Consultation Worth ₹5,000 - Apply Now!
      <button
        onClick={() => setVisible(false)}
        style={{
          position: 'absolute',
          right: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: '20px',
          cursor: 'pointer',
          padding: '0 8px'
        }}
      >
        ×
      </button>
    </div>
  );
};

export default NotificationBanner;
