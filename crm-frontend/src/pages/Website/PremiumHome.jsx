import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const PremiumHome = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const HeroSection = () => (
    <section style={{
      background: 'linear-gradient(135deg, #F5F7FF 0%, #FAFBFF 100%)',
      padding: '80px 24px',
      borderRadius: '0px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 800,
              color: '#0D0D0D',
              marginBottom: '24px',
              lineHeight: '1.1',
              fontFamily: 'var(--font-primary)'
            }}>
              Financial Freedom Starts Here
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: '#333333',
              marginBottom: '48px',
              lineHeight: '1.6',
              maxWidth: '500px'
            }}>
              Take control of your debt with expert guidance, personalized solutions, and real financial wellness.
            </p>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <Link to="/apply" className="btn btn-primary btn-lg">
                Get Started
              </Link>
              <button className="btn btn-secondary btn-lg">
                Learn More
              </button>
            </div>
            <div style={{ display: 'flex', gap: '48px', marginTop: '64px', flexWrap: 'wrap' }}>
              {[
                { value: '10,000+', label: 'Customers Helped' },
                { value: '₹500Cr+', label: 'Debt Resolved' },
                { value: '4.9★', label: 'Rating' }
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#003BFF' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#666666', marginTop: '4px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '400px',
              aspectRatio: '1',
              background: 'linear-gradient(135deg, #003BFF 0%, #0066FF 100%)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '4rem',
              fontWeight: 'bold',
              boxShadow: '0px 20px 60px rgba(0, 59, 255, 0.2)'
            }}>
              💰
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ServicesSection = () => (
    <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '2.25rem',
            fontWeight: 800,
            color: '#0D0D0D',
            marginBottom: '16px'
          }}>
            Our Services
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#333333',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Comprehensive debt solutions tailored to your financial situation
          </p>
        </div>
        <div className="grid grid-auto" style={{ gap: '32px' }}>
          {[
            { icon: '📊', title: 'Debt Assessment', description: 'Professional analysis of your debt situation with zero obligation' },
            { icon: '🎯', title: 'Personalized Plans', description: 'Custom repayment strategies designed for your budget' },
            { icon: '🤝', title: 'Expert Guidance', description: 'Direct support from certified financial advisors' },
            { icon: '💳', title: 'Negotiation', description: 'We negotiate with creditors on your behalf' },
            { icon: '📈', title: 'Credit Building', description: 'Rebuild your credit score with proven strategies' },
            { icon: '🛡️', title: 'Full Protection', description: 'Secure, confidential, and compliant debt resolution' }
          ].map((service, i) => (
            <div key={i} className="card" style={{ padding: '32px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{service.icon}</div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 'bold',
                color: '#0D0D0D',
                marginBottom: '8px'
              }}>
                {service.title}
              </h3>
              <p style={{ fontSize: '1rem', color: '#333333' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const JourneySection = () => (
    <section style={{ padding: '80px 24px', backgroundColor: '#F5F7FF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '2.25rem',
            fontWeight: 800,
            color: '#0D0D0D',
            marginBottom: '16px'
          }}>
            Your Debt Relief Journey
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#333333',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            A clear, straightforward path to financial freedom
          </p>
        </div>
        <div className="grid grid-auto" style={{ gap: '32px' }}>
          {[
            { step: '1', title: 'Free Consultation', desc: 'Call or chat with our advisors' },
            { step: '2', title: 'Analysis', desc: 'We review your complete debt picture' },
            { step: '3', title: 'Plan', desc: 'Get a customized debt relief strategy' },
            { step: '4', title: 'Action', desc: 'We execute and manage the plan' },
            { step: '5', title: 'Resolution', desc: 'Achieve financial freedom' }
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #003BFF 0%, #0066FF 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '16px',
                boxShadow: '0px 8px 20px rgba(0, 59, 255, 0.2)'
              }}>
                {item.step}
              </div>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: 'bold',
                color: '#0D0D0D',
                marginBottom: '8px'
              }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#333333' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const TestimonialsSection = () => (
    <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '2.25rem',
            fontWeight: 800,
            color: '#0D0D0D',
            marginBottom: '16px'
          }}>
            What Our Customers Say
          </h2>
        </div>
        <div className="grid grid-auto" style={{ gap: '32px' }}>
          {[
            {
              name: 'Rajesh Kumar',
              role: 'Small Business Owner',
              text: 'Penny & Debt helped me resolve 3 years of accumulated debt in just 18 months. Their guidance was invaluable.',
              rating: 5
            },
            {
              name: 'Priya Singh',
              role: 'Software Engineer',
              text: 'Professional, transparent, and genuinely concerned about my financial wellbeing. Highly recommended!',
              rating: 5
            },
            {
              name: 'Arjun Patel',
              role: 'Entrepreneur',
              text: 'The personalized approach made all the difference. I went from stressed to confident about my finances.',
              rating: 5
            }
          ].map((testimonial, i) => (
            <div key={i} className="card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', marginBottom: '16px' }}>
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} style={{ color: '#003BFF', fontSize: '1.2em' }}>★</span>
                ))}
              </div>
              <p style={{
                fontSize: '1rem',
                color: '#333333',
                marginBottom: '16px',
                fontStyle: 'italic'
              }}>
                "{testimonial.text}"
              </p>
              <div>
                <div style={{ fontWeight: 'bold', color: '#0D0D0D' }}>{testimonial.name}</div>
                <div style={{ fontSize: '0.875rem', color: '#666666' }}>{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const FAQSection = () => (
    <section style={{ padding: '80px 24px', backgroundColor: '#F5F7FF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '2.25rem',
            fontWeight: 800,
            color: '#0D0D0D',
            marginBottom: '16px'
          }}>
            Frequently Asked Questions
          </h2>
        </div>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {[
            {
              question: 'Is this service completely free?',
              answer: 'We offer free consultation and assessment. Our debt resolution services are commission-based, meaning we only get paid when you succeed.'
            },
            {
              question: 'How long does the process take?',
              answer: 'Most cases are resolved within 12-36 months, depending on your debt amount and financial situation.'
            },
            {
              question: 'Will this affect my credit score?',
              answer: 'Our strategies are designed to minimize impact. In many cases, your score improves once debts are resolved.'
            },
            {
              question: 'Is my information secure?',
              answer: 'Yes. We follow industry-leading security standards and never share your information without consent.'
            }
          ].map((item, i) => (
            <div key={i} className="card" style={{ padding: '24px', cursor: 'pointer' }}
              onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <h4 style={{
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                  color: '#0D0D0D'
                }}>
                  {item.question}
                </h4>
                <span style={{
                  fontSize: '1.5rem',
                  color: '#003BFF',
                  transform: openFaqIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}>
                  ▼
                </span>
              </div>
              {openFaqIndex === i && (
                <p style={{
                  fontSize: '1rem',
                  color: '#333333',
                  marginTop: '16px'
                }}>
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const CTASection = () => (
    <section style={{
      padding: '80px 24px',
      background: 'linear-gradient(135deg, #003BFF 0%, #0066FF 100%)',
      textAlign: 'center',
      borderRadius: '0px'
    }}>
      <div className="container">
        <h2 style={{
          fontSize: '2.25rem',
          fontWeight: 800,
          color: 'white',
          marginBottom: '16px'
        }}>
          Ready to Take Control?
        </h2>
        <p style={{
          fontSize: '1.125rem',
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: '32px',
          maxWidth: '600px',
          margin: '0 auto 32px'
        }}>
          Get your free debt assessment today. No obligations, no hidden fees.
        </p>
        <Link to="/apply" className="btn btn-primary btn-lg" style={{
          background: 'white',
          color: '#003BFF'
        }}>
          Start Your Free Assessment
        </Link>
      </div>
    </section>
  );

  return (
    <>
      <SEO title="Financial Freedom Starts Here | Penny & Debt" description="Expert debt relief solutions" />
      <HeroSection />
      <ServicesSection />
      <JourneySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default PremiumHome;
