import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const PremiumHome = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [stats, setStats] = useState({ clientsServed: '10,000+', debtResolved: '₹50+ Cr', successRate: '95%' });
  const [testimonials, setTestimonials] = useState([]);
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/stats').then(r => r.json()).then(setStats).catch(() => {});
    fetch('/api/testimonials').then(r => r.json()).then(d => setTestimonials(d.slice(0, 3))).catch(() => {});
    fetch('/api/services').then(r => r.json()).then(d => setServices(d.slice(0, 6))).catch(() => {});
    fetch('/api/blog?limit=3').then(r => r.json()).then(setBlogs).catch(() => {});
  }, []);

  const HeroSection = () => (
    <section style={{
      background: 'linear-gradient(135deg, #0A4DFF 0%, #0039CC 100%)',
      padding: '100px 24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 900,
            color: 'white',
            marginBottom: '24px',
            lineHeight: '1.1'
          }}>
            Become Debt-Free with India's #1 AI-Powered Debt Relief Platform
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255,255,255,0.95)',
            marginBottom: '48px',
            lineHeight: '1.6'
          }}>
            We reduce your debts by negotiating with banks, NBFCs, lenders — while keeping you legally protected.
          </p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/applyform" style={{
              padding: '16px 40px',
              borderRadius: '12px',
              background: 'white',
              color: '#0A4DFF',
              fontWeight: 700,
              fontSize: '1.125rem',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
            }}>
              Check Eligibility
            </Link>
            <Link to="/contact" style={{
              padding: '16px 40px',
              borderRadius: '12px',
              background: 'transparent',
              color: 'white',
              fontWeight: 700,
              fontSize: '1.125rem',
              textDecoration: 'none',
              border: '2px solid white'
            }}>
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );

  const TrustBar = () => (
    <section style={{ padding: '40px 24px', background: '#E6EEFF' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '32px', textAlign: 'center' }}>
          {[
            { value: stats.clientsServed || '10,000+', label: 'Debt-Free Clients' },
            { value: stats.debtResolved || '₹50+ Crore', label: 'Debt Resolved' },
            { value: 'RBI-Compliant', label: 'Process' },
            { value: 'ISO Certified', label: 'Platform' }
          ].map((item, i) => (
            <div key={i}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0A4DFF' }}>{item.value}</div>
              <div style={{ fontSize: '0.875rem', color: '#0F172A', marginTop: '4px' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const HowItWorks = () => (
    <section style={{ padding: '80px 24px', background: 'white' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '64px' }}>
          How It Works — 5-Step Flow
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
          {[
            { step: '1', title: 'Submit Your Details', desc: 'Apply with simple form' },
            { step: '2', title: 'Expert Counselling', desc: 'Debt expert evaluates your case' },
            { step: '3', title: 'Plan Creation', desc: 'Custom settlement program created' },
            { step: '4', title: 'Negotiation', desc: 'We negotiate with lenders' },
            { step: '5', title: 'Become Debt-Free', desc: 'Final settlement issued' }
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #0A4DFF 0%, #0066FF 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 900,
                margin: '0 auto 16px',
                boxShadow: '0 8px 24px rgba(10,77,255,0.3)'
              }}>
                {item.step}
              </div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{item.title}</h4>
              <p style={{ fontSize: '0.875rem', color: '#64748B' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ServicesSection = () => (
    <section style={{ padding: '80px 24px', background: '#F8FAFF' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '64px' }}>
          Services Overview
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {(services.length > 0 ? services : [
            { title: 'Debt Settlement', type: 'Settlement', features: ['40-65% debt reduction', 'Legal settlement letter', 'Bank negotiation'] },
            { title: 'EMI Reduction', type: 'Restructuring', features: ['Lower EMI', 'Extended tenure', 'Reduce monthly stress'] },
            { title: 'Debt Consolidation', type: 'Consolidation', features: ['One single EMI', 'Better planning', 'Lower interest'] },
            { title: 'Debt Counselling', type: 'Counselling', features: ['Free counselling', 'Budget planning', 'Financial strategy'] },
            { title: 'Credit Score Improvement', type: 'Credit Repair', features: ['Monitoring', 'Dispute resolution', 'Score rebuilding'] },
            { title: 'Legal Support', type: 'Legal', features: ['Anti-harassment', 'Legal notices', 'Lawyer consultation'] }
          ]).map((service, i) => (
            <div key={i} style={{
              background: 'white',
              padding: '32px',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              border: '1px solid #E6EEFF'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>💼</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{service.title}</h3>
              <div style={{ fontSize: '0.875rem', color: '#0A4DFF', fontWeight: 600, marginBottom: '16px' }}>{service.type}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {(service.features || []).map((f, j) => (
                  <li key={j} style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const WhyChoose = () => (
    <section style={{ padding: '80px 24px', background: 'white' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '64px' }}>
          Why Choose Penny & Debt?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
          {[
            { icon: '⚖️', title: 'Legal Assistance', desc: 'Full legal protection throughout' },
            { icon: '🛡️', title: 'Harassment Protection', desc: 'Stop recovery agent calls' },
            { icon: '🤖', title: 'AI-Powered Negotiation', desc: 'Smart debt settlement strategies' },
            { icon: '💰', title: 'Upto 65% Debt Reduction', desc: 'Proven negotiation results' },
            { icon: '📊', title: 'Transparent Dashboard', desc: 'Track your progress 24/7' },
            { icon: '🔒', title: 'Confidential & Secure', desc: 'Bank-grade data security' }
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{item.icon}</div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{item.title}</h4>
              <p style={{ fontSize: '0.875rem', color: '#64748B' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const BlogSection = () => (
    <section style={{ padding: '80px 24px', background: '#F8FAFF' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '64px' }}>
          Featured Blogs
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {(blogs.length > 0 ? blogs : [
            { title: 'How to Become Debt-Free in 2025', slug: 'debt-free-2025', excerpt: 'Learn proven strategies to eliminate debt' },
            { title: 'Understanding Credit Scores', slug: 'credit-scores', excerpt: 'Everything you need to know about CIBIL' },
            { title: 'Debt Settlement vs Bankruptcy', slug: 'settlement-vs-bankruptcy', excerpt: 'Which option is right for you?' }
          ]).map((blog, i) => (
            <Link key={i} to={`/blog/${blog.slug || ''}`} style={{
              background: 'white',
              padding: '32px',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              textDecoration: 'none',
              display: 'block',
              border: '1px solid #E6EEFF'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>{blog.title}</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '16px' }}>{blog.excerpt || blog.content?.substring(0, 100)}</p>
              <span style={{ fontSize: '0.875rem', color: '#0A4DFF', fontWeight: 600 }}>Read More →</span>
            </Link>
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
    <section style={{ padding: '80px 24px', background: 'white' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '64px' }}>
          Success Stories
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {(testimonials.length > 0 ? testimonials : [
            { name: 'Rajesh K.', role: 'Mumbai', text: 'Reduced ₹5.2L debt to ₹2.1L. Life-changing experience!', rating: 5, savings: '60%' },
            { name: 'Priya S.', role: 'Bangalore', text: 'Professional team, transparent process. Highly recommended!', rating: 5, savings: '55%' },
            { name: 'Arjun M.', role: 'Delhi', text: 'Finally debt-free after 3 years of struggle. Thank you!', rating: 5, savings: '65%' }
          ]).map((t, i) => (
            <div key={i} style={{
              background: '#F8FAFF',
              padding: '32px',
              borderRadius: '16px',
              border: '2px solid #E6EEFF'
            }}>
              <div style={{ display: 'flex', marginBottom: '16px' }}>
                {[...Array(t.rating || 5)].map((_, j) => (
                  <span key={j} style={{ color: '#FFB800', fontSize: '1.2em' }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: '1rem', color: '#0F172A', marginBottom: '16px', fontStyle: 'italic' }}>"{t.text}"</p>
              {t.savings && <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#00D49E', marginBottom: '8px' }}>{t.savings} Saved</div>}
              <div style={{ fontWeight: 700, color: '#0F172A' }}>{t.name}</div>
              <div style={{ fontSize: '0.875rem', color: '#64748B' }}>{t.role}</div>
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
      padding: '100px 24px',
      background: 'linear-gradient(135deg, #0A4DFF 0%, #0039CC 100%)',
      textAlign: 'center'
    }}>
      <div className="container">
        <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '24px' }}>
          Start Your Debt-Free Journey Today
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }}>
          Join thousands of Indians who have achieved financial freedom with our expert guidance.
        </p>
        <Link to="/applyform" style={{
          padding: '18px 48px',
          borderRadius: '12px',
          background: 'white',
          color: '#0A4DFF',
          fontWeight: 700,
          fontSize: '1.25rem',
          textDecoration: 'none',
          display: 'inline-block',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
        }}>
          Apply Now
        </Link>
      </div>
    </section>
  );

  return (
    <>
      <SEO title="India's #1 AI-Powered Debt Relief Platform | Penny & Debt" description="Become debt-free with expert negotiation, legal protection, and AI-powered solutions" />
      <HeroSection />
      <TrustBar />
      <HowItWorks />
      <ServicesSection />
      <WhyChoose />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </>
  );
};

export default PremiumHome;
