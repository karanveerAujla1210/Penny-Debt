import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/fintech-system.css';

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <>
      <SEO title="Turn Your Debt Into A Manageable Plan | Penny & Debt" />

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            <div>
              <h1 className="hero-title">
                Financial Freedom Starts Here
              </h1>
              <p className="hero-subtitle">
                Take control of your debt with expert guidance, personalized solutions, and real financial wellness. Join 10,000+ Indians who achieved freedom.
              </p>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
                <Link to="/apply" className="btn btn-primary btn-lg">
                  Get Started Free
                </Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  Book Consultation
                </Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginTop: '48px' }}>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)' }}>10K+</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '4px' }}>Customers Helped</div>
                </div>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)' }}>₹500Cr+</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '4px' }}>Debt Resolved</div>
                </div>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)' }}>4.9★</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '4px' }}>Customer Rating</div>
                </div>
              </div>
            </div>

            {/* VISUAL */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{
                width: '100%',
                maxWidth: '400px',
                aspectRatio: '1',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '80px',
                fontWeight: 'bold',
                boxShadow: 'var(--shadow-lg)'
              }}>
                💰
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2>Our Services</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '500px', margin: '16px auto 0' }}>
              Comprehensive debt relief solutions tailored to your financial situation
            </p>
          </div>

          <div className="services-grid">
            {[
              { icon: '📊', title: 'Debt Assessment', desc: 'Comprehensive analysis of your financial situation' },
              { icon: '🎯', title: 'Debt Consolidation', desc: 'Streamline multiple debts into manageable payments' },
              { icon: '💬', title: 'Negotiation Support', desc: 'Expert lender negotiation on your behalf' },
              { icon: '📈', title: 'Credit Building', desc: 'Strategies to improve your credit score' },
              { icon: '🛡️', title: 'Legal Protection', desc: 'Guidance on debt protection rights' },
              { icon: '👨‍🏫', title: 'Financial Counseling', desc: '1:1 expert counseling sessions' },
            ].map((service, i) => (
              <div key={i} className="card">
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{service.icon}</div>
                <h4>{service.title}</h4>
                <p style={{ fontSize: '14px', marginTop: '8px' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2>How It Works</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '500px', margin: '16px auto 0' }}>
              A simple 5-step process to financial freedom
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            {[
              { num: '1', title: 'Consultation', desc: 'Initial assessment of your debt situation' },
              { num: '2', title: 'Analysis', desc: 'Detailed financial analysis and planning' },
              { num: '3', title: 'Strategy', desc: 'Customized debt relief roadmap' },
              { num: '4', title: 'Execution', desc: 'Implementation with lender negotiation' },
              { num: '5', title: 'Support', desc: 'Ongoing guidance until financial freedom' },
            ].map((step, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: '800',
                  margin: '0 auto 16px'
                }}>
                  {step.num}
                </div>
                <h4>{step.title}</h4>
                <p style={{ fontSize: '14px', marginTop: '8px' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2>What Our Customers Say</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '500px', margin: '16px auto 0' }}>
              Real stories from people who achieved financial freedom
            </p>
          </div>

          <div className="testimonial-grid">
            {[
              { name: 'Rajesh Kumar', rating: 5, quote: 'Penny & Debt helped me get out of ₹15 lakhs debt in 3 years. Highly recommended!' },
              { name: 'Priya Singh', rating: 5, quote: 'The counselors were so helpful. They made the entire process stress-free.' },
              { name: 'Amit Patel', rating: 5, quote: 'Best decision ever. My credit score improved significantly.' },
            ].map((testimonial, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-rating">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p style={{ fontSize: '15px', fontStyle: 'italic', marginBottom: '16px' }}>
                  "{testimonial.quote}"
                </p>
                <p style={{ fontWeight: '600', fontSize: '14px' }}>- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2>Frequently Asked Questions</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '500px', margin: '16px auto 0' }}>
              Everything you need to know about our services
            </p>
          </div>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {[
              { q: 'How much does the service cost?', a: 'Our consultation is completely free. Charges apply only if you decide to avail our debt relief services.' },
              { q: 'How long does debt relief take?', a: 'On average, 2-5 years depending on your debt amount and negotiation with lenders.' },
              { q: 'Will this affect my credit score?', a: 'Initially minimal impact. Your score improves significantly as you pay off debts.' },
              { q: 'Is my data secure?', a: 'Yes, we follow strict data privacy policies and RBI compliance standards.' },
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className={`faq-header ${openFaqIndex === i ? 'active' : ''}`}
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                >
                  {faq.q}
                  <span>{openFaqIndex === i ? '−' : '+'}</span>
                </button>
                {openFaqIndex === i && (
                  <div className="faq-content">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
        color: 'white',
        padding: '80px 24px',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: '36px', fontWeight: '800' }}>
            Ready to Take Control?
          </h2>
          <p style={{ fontSize: '18px', marginTop: '16px', maxWidth: '500px', margin: '16px auto 0', opacity: 0.95 }}>
            Start your journey to financial freedom today. It's completely free!
          </p>
          <Link to="/apply" className="btn btn-primary btn-lg" style={{ marginTop: '32px', background: 'white', color: 'var(--primary)' }}>
            Get Started Now
          </Link>
        </div>
      </section>
    </>
  );
}
