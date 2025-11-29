import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      description: 'Perfect for initial consultation',
      features: [
        'Free debt assessment',
        'Financial counseling session',
        'Debt reduction estimate',
        'Eligibility check',
        'Email support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '15-20%',
      priceNote: 'of settled amount',
      description: 'Most popular for debt settlement',
      features: [
        'Everything in Basic',
        'Expert negotiation with creditors',
        'Legal protection & support',
        'Harassment protection',
        'Settlement agreement drafting',
        'Credit score guidance',
        'Dedicated case manager',
        'Priority phone support'
      ],
      cta: 'Choose Plan',
      popular: true
    },
    {
      name: 'Premium',
      price: 'Custom',
      description: 'For complex debt situations',
      features: [
        'Everything in Professional',
        'Multiple debt consolidation',
        'Court representation',
        'Advanced legal support',
        'Credit repair services',
        'Financial planning coaching',
        '24/7 priority support',
        'Dedicated legal advisor'
      ],
      cta: 'Contact Us',
      popular: false
    }
  ];

  return (
    <>
      <SEO title="Transparent Pricing - No Hidden Fees | Penny & Debt" description="Clear, transparent pricing for debt relief services. Pay only when we save you money. No upfront fees, no hidden charges." />
      
      <section style={{ padding: '120px 24px 80px', background: 'linear-gradient(135deg, #0A4DFF 0%, #0039CC 100%)', textAlign: 'center' }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', marginBottom: '24px' }}
          >
            Transparent Pricing, No Hidden Fees
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', maxWidth: '800px', margin: '0 auto' }}
          >
            We only succeed when you succeed. Pay only after we save you money.
          </motion.p>
        </div>
      </section>

      <section style={{ padding: '100px 24px', background: 'white' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: plan.popular ? 'linear-gradient(135deg, #0A4DFF 0%, #0039CC 100%)' : 'white',
                  border: plan.popular ? 'none' : '2px solid #E6EEFF',
                  borderRadius: '24px',
                  padding: '48px 32px',
                  position: 'relative',
                  boxShadow: plan.popular ? '0 20px 60px rgba(10,77,255,0.3)' : '0 4px 20px rgba(0,0,0,0.06)',
                  transform: plan.popular ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#00D49E',
                    color: 'white',
                    padding: '8px 24px',
                    borderRadius: '50px',
                    fontSize: '0.875rem',
                    fontWeight: 700
                  }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: plan.popular ? 'white' : '#0F172A', marginBottom: '8px' }}>
                  {plan.name}
                </h3>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: plan.popular ? 'white' : '#0A4DFF', marginBottom: '8px' }}>
                  {plan.price}
                </div>
                {plan.priceNote && (
                  <div style={{ fontSize: '0.875rem', color: plan.popular ? 'rgba(255,255,255,0.9)' : '#64748B', marginBottom: '16px' }}>
                    {plan.priceNote}
                  </div>
                )}
                <p style={{ fontSize: '1rem', color: plan.popular ? 'rgba(255,255,255,0.9)' : '#64748B', marginBottom: '32px' }}>
                  {plan.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
                  {plan.features.map((feature, j) => (
                    <li key={j} style={{
                      fontSize: '0.9375rem',
                      color: plan.popular ? 'rgba(255,255,255,0.95)' : '#475569',
                      marginBottom: '12px',
                      paddingLeft: '32px',
                      position: 'relative'
                    }}>
                      <span style={{ position: 'absolute', left: 0, color: plan.popular ? '#00D49E' : '#00D49E', fontSize: '1.25rem', fontWeight: 900 }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/applyform"
                  style={{
                    display: 'block',
                    padding: '16px',
                    background: plan.popular ? 'white' : '#0A4DFF',
                    color: plan.popular ? '#0A4DFF' : 'white',
                    textAlign: 'center',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '1.125rem',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 24px', background: '#F8FAFF' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '64px' }}>
            Our Pricing Promise
          </h2>
          <div style={{ display: 'grid', gap: '32px' }}>
            {[
              { icon: '💰', title: 'No Upfront Fees', desc: 'You pay nothing until we successfully negotiate and settle your debt.' },
              { icon: '📊', title: 'Performance-Based', desc: 'Our fee is a percentage of the amount we save you, not your total debt.' },
              { icon: '🔒', title: 'No Hidden Charges', desc: 'Complete transparency. All costs discussed upfront with no surprises.' },
              { icon: '✅', title: 'Money-Back Guarantee', desc: 'If we don\'t reduce your debt, you don\'t pay. 100% satisfaction guaranteed.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}
              >
                <div style={{ fontSize: '3rem', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
