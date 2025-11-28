import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: 'Submit Your Details',
      duration: '5 minutes',
      description: 'Fill our simple online form with your debt details. All information is 100% confidential and secure.',
      details: [
        'Provide basic personal information',
        'List all your debts (credit cards, loans, etc.)',
        'Share your monthly income and expenses',
        'Upload supporting documents (optional)'
      ],
      icon: '📝'
    },
    {
      step: 2,
      title: 'Expert Counselling',
      duration: '24 hours',
      description: 'Our certified debt counselor evaluates your case and creates a preliminary assessment.',
      details: [
        'Receive call from certified counselor',
        'Detailed financial situation analysis',
        'Debt-to-income ratio calculation',
        'Eligibility assessment for programs'
      ],
      icon: '👨‍💼'
    },
    {
      step: 3,
      title: 'Custom Plan Creation',
      duration: '2-3 days',
      description: 'We design a personalized debt settlement program based on your unique situation.',
      details: [
        'AI-powered negotiation strategy',
        'Customized payment schedule',
        'Expected savings calculation',
        'Timeline and milestones defined'
      ],
      icon: '📊'
    },
    {
      step: 4,
      title: 'Bank Negotiation',
      duration: '3-6 months',
      description: 'Our expert negotiators work directly with your creditors to reduce debt by 40-65%.',
      details: [
        'Direct communication with creditors',
        'Legal protection from harassment',
        'Multiple negotiation rounds',
        'Settlement agreement drafting'
      ],
      icon: '🤝'
    },
    {
      step: 5,
      title: 'Become Debt-Free',
      duration: 'Final step',
      description: 'Make the agreed payment and receive official settlement letters. You are now debt-free!',
      details: [
        'One-time settlement payment',
        'Official settlement letter received',
        'Credit report update guidance',
        'Financial freedom achieved'
      ],
      icon: '🎉'
    }
  ];

  return (
    <>
      <SEO title="How It Works - 5-Step Debt Relief Process | Penny & Debt" description="Learn our proven 5-step debt relief process. From consultation to settlement, we handle everything while you focus on rebuilding your financial future." />
      
      <section style={{ padding: '120px 24px 80px', background: 'linear-gradient(135deg, #0A4DFF 0%, #0039CC 100%)', textAlign: 'center' }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', marginBottom: '24px' }}
          >
            How Our Debt Relief Process Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', maxWidth: '800px', margin: '0 auto' }}
          >
            Our proven 5-step process has helped over 10,000 Indians become debt-free. Simple, transparent, and effective.
          </motion.p>
        </div>
      </section>

      <section style={{ padding: '100px 24px', background: 'white' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: '64px',
                alignItems: 'center',
                marginBottom: '80px',
                flexDirection: i % 2 === 0 ? 'row' : 'row-reverse'
              }}
            >
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <div style={{ fontSize: '6rem', marginBottom: '24px' }}>{item.icon}</div>
                <div style={{ display: 'inline-block', padding: '8px 16px', background: '#E6EEFF', borderRadius: '50px', fontSize: '0.875rem', fontWeight: 700, color: '#0A4DFF', marginBottom: '16px' }}>
                  Step {item.step} • {item.duration}
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '16px' }}>{item.title}</h2>
                <p style={{ fontSize: '1.125rem', color: '#64748B', lineHeight: '1.7', marginBottom: '24px' }}>{item.description}</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {item.details.map((detail, j) => (
                    <li key={j} style={{ fontSize: '1rem', color: '#475569', marginBottom: '12px', paddingLeft: '32px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#00D49E', fontSize: '1.5rem', fontWeight: 900 }}>✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  background: 'linear-gradient(135deg, #0A4DFF 0%, #0066FF 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '4rem',
                  fontWeight: 900,
                  margin: '0 auto',
                  boxShadow: '0 20px 60px rgba(10,77,255,0.3)'
                }}>
                  {item.step}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={{ padding: '100px 24px', background: '#F8FAFF', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.75rem', fontWeight: 900, color: '#0F172A', marginBottom: '24px' }}>Ready to Start Your Journey?</h2>
          <p style={{ fontSize: '1.25rem', color: '#64748B', marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }}>
            Join 10,000+ Indians who have achieved financial freedom with our expert guidance.
          </p>
          <Link
            to="/applyform"
            style={{
              display: 'inline-block',
              padding: '20px 56px',
              background: 'linear-gradient(135deg, #0A4DFF 0%, #0039CC 100%)',
              color: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1.25rem',
              boxShadow: '0 8px 32px rgba(10,77,255,0.3)'
            }}
          >
            Apply Now - It's Free
          </Link>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
