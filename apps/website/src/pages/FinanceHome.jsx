import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FloatingCTA from '../components/FloatingCTA';
import WhatsAppWidget from '../components/WhatsAppWidget';
import NotificationBanner from '../components/NotificationBanner';
import TrustBadges from '../components/TrustBadges';
import SocialProof from '../components/SocialProof';
import AnimatedCounter from '../components/AnimatedCounter';
import DebtCalculator from '../components/DebtCalculator';
import LiveChat from '../components/LiveChat';
import { Button } from '../components/ui/button';
import { Card, CardIcon } from '../components/ui/card';
import Icon from '../components/ui/icons';
import HeroBanner from '../assets/logos/Images/Hero Banner.png';
import { ACHIEVEMENTS } from '../constants/achievements';
import '../styles/fintech-system.css';
import '../styles/spacing-fix.css';

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <SEO title="Turn Your Debt Into A Manageable Plan | Penny & Debt" />
      <NotificationBanner />
      <FloatingCTA />
      <WhatsAppWidget />
      <LiveChat />

      {/* ENHANCED HERO SECTION */}
      <section className="hero-section-enhanced" style={{
        backgroundImage: `url(${HeroBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '700px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(10, 77, 255, 0.85) 0%, rgba(255, 149, 0, 0.75) 100%)',
          zIndex: 1
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-grid">
            <div className={`hero-content ${isVisible ? 'animate-in' : ''}`}>
              <div className="hero-badge">
                <span className="badge-text">✨ Trusted by {ACHIEVEMENTS.customers.display} Indians</span>
              </div>
              <h1 
                className="hero-title-enhanced"
                style={{
                  color: '#ffffff',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
                  fontWeight: '900',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  lineHeight: '1.2',
                  marginBottom: '24px'
                }}
              >
                Transform Your Debt Into Financial Freedom
              </h1>
              <p 
                className="hero-subtitle-enhanced"
                style={{
                  color: '#ffffff',
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  lineHeight: '1.8',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
                  fontWeight: '500',
                  maxWidth: '600px',
                  marginBottom: '32px',
                  background: 'rgba(0, 0, 0, 0.3)',
                  padding: '16px 24px',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                Expert debt relief solutions with personalized strategies, transparent pricing,
                and guaranteed results. Join {ACHIEVEMENTS.customers.display} customers who've resolved {ACHIEVEMENTS.debtResolved.display} in debt.
              </p>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                <div className="hero-actions">
                  <Button asChild variant="default" size="lg" className="mr-2">
                    <Link to="/apply">
                      <span>Check Eligibility</span>
                      <svg style={{ marginLeft: 8 }} width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </Button>

                  <Button asChild variant="secondary" size="lg">
                    <Link to="/how-it-works">How It Works</Link>
                  </Button>
                </div>

                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <Button asChild variant="ghost" size="md">
                    <a href="https://wa.me/919773921023?text=Hi%20Penny%20Debt" target="_blank" rel="noopener noreferrer">
                      Talk to Counsellor on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
              {/* Role chips + language toggles */}
              <div style={{ marginTop: 18, display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', gap: 8 }}>
                  <Link to="/customer-login" className="role-chip-hero">I am Salaried</Link>
                  <Link to="/customer-login" className="role-chip-hero">I am Self-employed</Link>
                  <Link to="/customer-login" className="role-chip-hero">Multiple loans</Link>
                  <Link to="/harassment-help" className="role-chip-hero">Harassed by calls</Link>
                </div>
                <div style={{ marginLeft: 12 }}>
                  <a href="?lang=en" aria-label="English" style={{ color: 'white', marginRight: 8 }}>EN</a>
                  <a href="?lang=hi" aria-label="हिंदी" style={{ color: 'white' }}>हिंदी</a>
                </div>
              </div>
              <div style={{ marginTop: 12, color: '#fff', opacity: 0.95 }}>
                <strong>We are not a loan app.</strong> We negotiate your existing debt down and protect you from harassment.
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <AnimatedCounter end={ACHIEVEMENTS.customers.value} suffix="+" />
                  <div className="stat-label">{ACHIEVEMENTS.customers.shortLabel}</div>
                </div>
                <div className="stat-item">
                  <AnimatedCounter end={ACHIEVEMENTS.debtResolved.value} suffix="Cr+" prefix="₹" />
                  <div className="stat-label">{ACHIEVEMENTS.debtResolved.shortLabel}</div>
                </div>
                <div className="stat-item">
                  <AnimatedCounter end={ACHIEVEMENTS.rating.value} decimals={1} suffix="★" />
                  <div className="stat-label">{ACHIEVEMENTS.rating.shortLabel}</div>
                </div>
              </div>
              <TrustBadges />
            </div>


          </div>
        </div>
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
                icon: 'shield',
                title: 'Debt Assessment',
                desc: 'Comprehensive analysis of your financial situation with detailed debt mapping and risk evaluation.',
                features: ['Credit report analysis', 'Debt portfolio review', 'Risk assessment', 'Personalized roadmap']
              },
              {
                icon: 'wallet',
                title: 'Debt Consolidation',
                desc: 'Streamline multiple debts into manageable payments with better terms and lower interest rates.',
                features: ['Multiple loan consolidation', 'Interest rate optimization', 'EMI restructuring', 'Payment scheduling']
              },
              {
                icon: 'phone',
                title: 'Negotiation Support',
                desc: 'Expert lender negotiation on your behalf to reduce interest rates and waive penalties.',
                features: ['Professional negotiation', 'Settlement agreements', 'Penalty waivers', 'Rate reductions']
              },
              {
                icon: 'scale',
                title: 'Credit Building',
                desc: 'Strategies to improve your credit score while managing existing debt obligations.',
                features: ['Credit score monitoring', 'Improvement strategies', 'Report corrections', 'Score optimization']
              },
              {
                icon: 'shield',
                title: 'Legal Protection',
                desc: 'Guidance on debt protection rights and legal safeguards against unfair practices.',
                features: ['RBI guideline compliance', 'Legal rights education', 'Dispute resolution', 'Consumer protection']
              },
              {
                icon: 'people',
                title: 'Financial Counseling',
                desc: '1:1 expert counseling sessions to build financial literacy and long-term wealth.',
                features: ['Personal finance education', 'Budget planning', 'Investment guidance', 'Wealth building']
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="service-card-enhanced"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  borderRadius: '24px',
                  padding: '32px',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(10, 77, 255, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(10, 77, 255, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(10, 77, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(10, 77, 255, 0.1)';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '150px',
                  height: '150px',
                  background: 'linear-gradient(135deg, rgba(10, 77, 255, 0.05) 0%, rgba(255, 149, 0, 0.05) 100%)',
                  borderRadius: '0 24px 0 100%',
                  zIndex: 0
                }}></div>
                
                <div className="service-icon-wrapper" style={{ position: 'relative', zIndex: 1 }}>
                  <CardIcon className="" size={80} style={{ marginBottom: 24, borderRadius: 20, boxShadow: '0 8px 24px rgba(10, 77, 255, 0.18)' }}>
                    <Icon name={service.icon} size={36} />
                  </CardIcon>
                </div>

                <div className="service-content" style={{ position: 'relative', zIndex: 1 }}>
                  <h3 
                    className="service-title" 
                    style={{
                      fontSize: '22px',
                      fontWeight: '700',
                      color: '#0F172A',
                      marginBottom: '12px',
                      lineHeight: '1.3'
                    }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="service-description" 
                    style={{
                      fontSize: '15px',
                      color: '#64748B',
                      lineHeight: '1.6',
                      marginBottom: '20px'
                    }}
                  >
                    {service.desc}
                  </p>
                  <ul className="service-features" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="service-feature"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '14px',
                          color: '#475569',
                          marginBottom: '10px',
                          padding: '8px 12px',
                          background: 'rgba(10, 77, 255, 0.05)',
                          borderRadius: '8px',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(10, 77, 255, 0.1)';
                          e.currentTarget.style.paddingLeft = '16px';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(10, 77, 255, 0.05)';
                          e.currentTarget.style.paddingLeft = '12px';
                        }}
                      >
                        <span 
                          className="feature-dot" 
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #0A4DFF, #FF9500)',
                            flexShrink: 0
                          }}
                        ></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button to="/services" variant="default" size="sm" className="service-learn-more" style={{ marginTop: 24 }}>
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <SocialProof />

      {/* DEBT CALCULATOR */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2>Calculate Your Debt Relief</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '500px', margin: '16px auto 0' }}>
              See how much you could save with our debt relief program
            </p>
          </div>
          <DebtCalculator />
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
        background: 'linear-gradient(135deg, #FF9500 0%, #FFB84D 100%)',
        color: 'white',
        padding: '80px 24px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: '36px', fontWeight: '800', textAlign: 'center', margin: '0 auto 16px' }}>
            Ready to Take Control?
          </h2>
          <p style={{ fontSize: '18px', maxWidth: '500px', margin: '0 auto 32px', opacity: 0.95, textAlign: 'center' }}>
            Start your journey to financial freedom today. It's completely free!
          </p>
          <Button asChild variant="default" size="lg" className="bg-white text-[#FF9500]" >
            <Link to="/apply">Get Your Free Plan</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
