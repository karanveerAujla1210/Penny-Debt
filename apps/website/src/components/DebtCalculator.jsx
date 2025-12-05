import { useState } from 'react';
import { motion } from 'framer-motion';

const DebtCalculator = () => {
  const [debt, setDebt] = useState(300000);
  const savings = Math.floor(debt * 0.58);
  const settlement = debt - savings;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        background: 'white',
        padding: '48px',
        borderRadius: '24px',
        boxShadow: '0 20px 60px rgba(10, 77, 255, 0.15)',
        maxWidth: '600px',
        margin: '0 auto'
      }}
    >
      <h3 className="text-center" style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '32px' }}>
        Calculate Your Savings
      </h3>
      
      <div style={{ marginBottom: '40px' }}>
        <label style={{ display: 'block', fontSize: '1rem', fontWeight: 600, color: '#475569', marginBottom: '16px' }}>
          Total Debt Amount: ₹{debt.toLocaleString('en-IN')}
        </label>
        <input
          type="range"
          min="50000"
          max="5000000"
          step="10000"
          value={debt}
          onChange={(e) => setDebt(Number(e.target.value))}
          style={{
            width: '100%',
            height: '8px',
            borderRadius: '4px',
            background: '#E6EEFF',
            outline: 'none',
            cursor: 'pointer'
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#64748B', marginTop: '8px' }}>
          <span>₹50K</span>
          <span>₹50L</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
        <div className="text-center" style={{ background: '#FEF2F2', padding: '24px', borderRadius: '16px' }}>
          <div style={{ fontSize: '0.875rem', color: '#DC2626', fontWeight: 600, marginBottom: '8px' }}>Current Debt</div>
          <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#DC2626' }}>₹{debt.toLocaleString('en-IN')}</div>
        </div>
        <div className="text-center" style={{ background: '#D1FAE5', padding: '24px', borderRadius: '16px' }}>
          <div style={{ fontSize: '0.875rem', color: '#16A34A', fontWeight: 600, marginBottom: '8px' }}>After Settlement</div>
          <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#16A34A' }}>₹{settlement.toLocaleString('en-IN')}</div>
        </div>
      </div>

      <div className="text-center" style={{ background: 'linear-gradient(135deg, #0A4DFF 0%, #0039CC 100%)', padding: '24px', borderRadius: '16px', marginBottom: '24px' }}>
        <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.9)', marginBottom: '8px' }}>You Could Save</div>
        <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white' }}>₹{savings.toLocaleString('en-IN')}</div>
        <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>Average 58% Reduction</div>
      </div>

      <a
        className="text-center"
        href="/applyform"
        style={{
          display: 'block',
          padding: '16px',
          background: '#00D49E',
          color: 'white',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: 700,
          fontSize: '1.125rem',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        Get Your Free Plan →
      </a>
    </motion.div>
  );
};

export default DebtCalculator;
