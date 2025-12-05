import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import '../styles/fintech-system.css';

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <SEO title="Turn Your Debt Into A Manageable Plan | Penny & Debt" />

      {/* ENHANCED HERO SECTION */}
      <section className="hero-section-enhanced">
        <div className="container">
          <div className="hero-grid">
            <div className={`hero-content ${isVisible ? 'animate-in' : ''}`}>
              <div className="hero-badge">
                <span className="badge-text">✨ Trusted by 10,000+ Indians</span>
              </div>
              <h1 className="hero-title-enhanced">
                Transform Your Debt Into
                <span className="hero-highlight"> Financial Freedom</span>
              </h1>
              <p className="hero-subtitle-enhanced">
                Expert debt relief solutions with personalized strategies, transparent pricing,
                and guaranteed results. Join thousands who've eliminated ₹500Cr+ in debt.
              </p>
              <div className="hero-actions">
                <Link to="/apply" className="btn btn-primary-enhanced btn-lg">
                  <span>Start Free Consultation</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link to="/how-it-works" className="btn btn-secondary-enhanced btn-lg">
                  <span>How It Works</span>
                </Link>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">10K+</div>
                  <div className="stat-label">Happy Customers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">₹500Cr+</div>
                  <div className="stat-label">Debt Resolved</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">4.9★</div>
                  <div className="stat-label">Customer Rating</div>
                </div>
              </div>
            </div>

            {/* ENHANCED VISUAL */}
            <div className="hero-visual">
              <div className="hero-card-main">
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="card-icon">💰</div>
                  <div className="card-text">
                    <div className="card-title">Debt-Free Journey</div>
                    <div className="card-subtitle">Your path to financial freedom</div>
                  </div>
                </div>
                <div className="card-decoration-1"></div>
                <div className="card-decoration-2"></div>
              </div>
              <div className="hero-card-secondary">
                <div className="mini-stat">
                  <div className="mini-icon">📈</div>
                  <div className="mini-text">72% Avg. Savings</div>
                </div>
              </div>
              <div className="hero-card-tertiary">
                <div className="mini-stat">
                  <div className="mini-icon">🛡️</div>
                  <div className="mini-text">100% Secure</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BACKGROUND ELEMENTS */}
        <div className="hero-bg-shape-1"></div>
        <div className="hero-bg-shape-2"></div>
        <div className="hero-bg-dots"></div>
      </section>

      {/* ENHANCED SERVICES SECTION */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Our Expertise</div>
            <h2 className="section-title">Comprehensive Debt Relief Solutions</h2>
            <p className="section-subtitle">
              From assessment to freedom, we provide end-to-end debt management services
              tailored to your unique financial situation and goals.
            </p>
          </div>

          <div className="services-grid-enhanced">
            {[
              {
                icon: '📊',
                title: 'Debt Assessment',
                desc: 'Comprehensive analysis of your financial situation with detailed debt mapping and risk evaluation.',
                features: ['Credit report analysis', 'Debt portfolio review', 'Risk assessment', 'Personalized roadmap']
              },
              {
                icon: '🎯',
                title: 'Debt Consolidation',
                desc: 'Streamline multiple debts into manageable payments with better terms and lower interest rates.',
                features: ['Multiple loan consolidation', 'Interest rate optimization', 'EMI restructuring', 'Payment scheduling']
              },
              {
                icon: '💬',
                title: 'Negotiation Support',
                desc: 'Expert lender negotiation on your behalf to reduce interest rates and waive penalties.',
                features: ['Professional negotiation', 'Settlement agreements', 'Penalty waivers', 'Rate reductions']
              },
              {
                icon: '📈',
                title: 'Credit Building',
                desc: 'Strategies to improve your credit score while managing existing debt obligations.',
                features: ['Credit score monitoring', 'Improvement strategies', 'Report corrections', 'Score optimization']
              },
              {
                icon: '🛡️',
                title: 'Legal Protection',
                desc: 'Guidance on debt protection rights and legal safeguards against unfair practices.',
                features: ['RBI guideline compliance', 'Legal rights education', 'Dispute resolution', 'Consumer protection']
              },
              {
                icon: '👨‍🏫',
                title: 'Financial Counseling',
                desc: '1:1 expert counseling sessions to build financial literacy and long-term wealth.',
                features: ['Personal finance education', 'Budget planning', 'Investment guidance', 'Wealth building']
              },
            ].map((service, i) => (
              <div key={i} className="service-card-enhanced">
                <div className="service-icon-wrapper">
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-icon-bg"></div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.desc}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="service-feature">
                        <span className="feature-dot"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-hover-overlay">
                  <Link to="/services" className="service-learn-more">
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
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
