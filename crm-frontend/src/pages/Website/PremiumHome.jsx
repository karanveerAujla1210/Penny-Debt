import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const PremiumHome = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [stats, setStats] = useState({ clientsServed: '10,000+', debtResolved: '₹500+ Cr', successRate: '95%' });
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
      padding: '120px 24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3.75rem',
            fontWeight: 900,
            color: 'white',
            marginBottom: '32px',
            lineHeight: '1.1',
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
          }}>
            Become Debt-Free with India's #1 AI-Powered Debt Relief Platform
          </h1>
          <p style={{
            fontSize: '1.375rem',
            color: 'rgba(255,255,255,0.95)',
            marginBottom: '56px',
            lineHeight: '1.7',
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
          }}>
            We reduce your debts by up to 65% through expert negotiation with banks, NBFCs, and lenders — while keeping you legally protected. Join 10,000+ Indians who have achieved financial freedom with our proven debt settlement strategies. Our RBI-compliant process ensures complete transparency, legal protection from harassment, and personalized debt relief plans tailored to your financial situation. Get free consultation today and take the first step towards a debt-free life.
          </p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
            <Link to="/applyform" style={{
              padding: '18px 48px',
              borderRadius: '12px',
              background: 'white',
              color: '#0A4DFF',
              fontWeight: 700,
              fontSize: '1.25rem',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
            }}>
              Check Eligibility
            </Link>
            <a href="tel:+917814447895" style={{
              padding: '18px 48px',
              borderRadius: '12px',
              background: 'transparent',
              color: 'white',
              fontWeight: 700,
              fontSize: '1.25rem',
              textDecoration: 'none',
              border: '2px solid white',
              fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
            }}>
              Call: +91 7814447895
            </a>
          </div>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.9)',
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
          }}>
            📧 Email: care@pennyanddebt.in | 📞 Phone: +91 7814447895
          </p>
        </div>
      </div>
    </section>
  );

  const TrustBar = () => (
    <section style={{ padding: '60px 24px', background: '#E6EEFF' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '48px', textAlign: 'center' }}>
          {[
            { value: stats.clientsServed || '10,000+', label: 'Debt-Free Clients', desc: 'Successfully helped across India' },
            { value: stats.debtResolved || '₹500+ Crore', label: 'Debt Resolved', desc: 'Total savings achieved for clients' },
            { value: 'RBI-Compliant', label: 'Legal Process', desc: '100% legal & secure operations' },
            { value: 'ISO Certified', label: 'Platform', desc: 'Bank-grade security standards' }
          ].map((item, i) => (
            <div key={i}>
              <div style={{ fontSize: '2.75rem', fontWeight: 900, color: '#0A4DFF', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>{item.value}</div>
              <div style={{ fontSize: '1.125rem', color: '#0F172A', marginTop: '8px', fontWeight: 700, fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>{item.label}</div>
              <div style={{ fontSize: '0.875rem', color: '#64748B', marginTop: '4px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const HowItWorks = () => (
    <section style={{ padding: '100px 24px', background: 'white' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.75rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '24px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          How It Works — 5-Step Debt Relief Process
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#64748B', textAlign: 'center', marginBottom: '72px', maxWidth: '800px', margin: '0 auto 72px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          Our proven 5-step process has helped over 10,000 Indians become debt-free. From initial consultation to final settlement, we handle everything while you focus on rebuilding your financial future.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px' }}>
          {[
            { step: '1', title: 'Submit Your Details', desc: 'Fill our simple online form with your debt details. Takes only 5 minutes. All information is 100% confidential and secure.' },
            { step: '2', title: 'Expert Counselling', desc: 'Our certified debt counselor evaluates your case, analyzes your financial situation, and creates a preliminary assessment within 24 hours.' },
            { step: '3', title: 'Custom Plan Creation', desc: 'We design a personalized debt settlement program based on your income, expenses, and debt amount. You approve the plan before we proceed.' },
            { step: '4', title: 'Bank Negotiation', desc: 'Our expert negotiators work directly with your creditors to reduce debt by 40-65%. We handle all communications and legal paperwork.' },
            { step: '5', title: 'Become Debt-Free', desc: 'Once settlement is reached, you make the agreed payment and receive official settlement letters. You are now debt-free!' }
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                width: '90px',
                height: '90px',
                background: 'linear-gradient(135deg, #0A4DFF 0%, #0066FF 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '2.25rem',
                fontWeight: 900,
                margin: '0 auto 20px',
                boxShadow: '0 8px 24px rgba(10,77,255,0.3)',
                fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
              }}>
                {item.step}
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>{item.title}</h4>
              <p style={{ fontSize: '0.9375rem', color: '#64748B', lineHeight: '1.6', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ServicesSection = () => (
    <section style={{ padding: '100px 24px', background: '#F8FAFF' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.75rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '24px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          Comprehensive Debt Relief Services
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#64748B', textAlign: 'center', marginBottom: '72px', maxWidth: '800px', margin: '0 auto 72px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          From debt settlement to legal protection, we offer complete solutions for every type of debt problem. All services are backed by our expert team and AI-powered negotiation platform.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {(services.length > 0 ? services : [
            { title: 'Debt Settlement', type: 'Settlement', features: ['40-65% debt reduction guaranteed', 'Legal settlement letter provided', 'Direct bank negotiation', 'No upfront fees', 'Complete legal protection'] },
            { title: 'EMI Reduction', type: 'Restructuring', features: ['Lower monthly EMI payments', 'Extended tenure options', 'Reduce financial stress immediately', 'Better cash flow management', 'Flexible repayment terms'] },
            { title: 'Debt Consolidation', type: 'Consolidation', features: ['Combine multiple debts into one', 'Single monthly payment', 'Lower overall interest rates', 'Simplified debt tracking', 'Improved credit score potential'] },
            { title: 'Debt Counselling', type: 'Counselling', features: ['Free expert counselling sessions', 'Personalized budget planning', 'Long-term financial strategy', 'Debt prevention education', 'Ongoing support and guidance'] },
            { title: 'Credit Score Improvement', type: 'Credit Repair', features: ['CIBIL score monitoring', 'Error dispute resolution', 'Score rebuilding strategies', 'Financial literacy coaching', 'Regular progress tracking'] },
            { title: 'Legal Support', type: 'Legal', features: ['Anti-harassment protection', 'Legal notice drafting', 'Lawyer consultation included', 'Court representation if needed', 'RBI compliance guidance'] }
          ]).map((service, i) => (
            <div key={i} style={{
              background: 'white',
              padding: '36px',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              border: '1px solid #E6EEFF'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>💼</div>
              <h3 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>{service.title}</h3>
              <div style={{ fontSize: '0.875rem', color: '#0A4DFF', fontWeight: 600, marginBottom: '20px', textTransform: 'uppercase', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>{service.type}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {(service.features || []).map((f, j) => (
                  <li key={j} style={{ fontSize: '0.9375rem', color: '#64748B', marginBottom: '10px', paddingLeft: '24px', position: 'relative', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#00D49E', fontWeight: 900 }}>✓</span> {f}
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
    <section style={{ padding: '100px 24px', background: 'white' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.75rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '24px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          Why 10,000+ Indians Choose Penny & Debt
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#64748B', textAlign: 'center', marginBottom: '72px', maxWidth: '800px', margin: '0 auto 72px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          We're not just another debt relief company. We combine cutting-edge AI technology with human expertise to deliver results that matter. Here's what makes us different.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
          {[
            { icon: '⚖️', title: 'Complete Legal Assistance', desc: 'Full legal protection throughout your debt relief journey. Our legal team handles all creditor communications and protects you from harassment.' },
            { icon: '🛡️', title: 'Harassment Protection', desc: 'Stop recovery agent calls immediately. We send legal notices to creditors and take over all communications on your behalf.' },
            { icon: '🤖', title: 'AI-Powered Negotiation', desc: 'Our proprietary AI analyzes thousands of successful settlements to create the best negotiation strategy for your specific situation.' },
            { icon: '💰', title: 'Up to 65% Debt Reduction', desc: 'Average clients save 55% on their total debt. Our expert negotiators have settled over ₹500 crore in debts with proven results.' },
            { icon: '📊', title: 'Transparent Dashboard', desc: 'Track your progress 24/7 with our customer portal. See real-time updates on negotiations, payments, and settlement status.' },
            { icon: '🔒', title: 'Bank-Grade Security', desc: 'Your data is protected with 256-bit SSL encryption, secure servers, and multi-factor authentication. ISO certified platform.' }
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>{item.icon}</div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>{item.title}</h4>
              <p style={{ fontSize: '0.9375rem', color: '#64748B', lineHeight: '1.6', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const TestimonialsSection = () => (
    <section style={{ padding: '100px 24px', background: '#F8FAFF' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.75rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '24px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          Real Success Stories from Real People
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#64748B', textAlign: 'center', marginBottom: '72px', maxWidth: '800px', margin: '0 auto 72px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          Don't just take our word for it. Here's what our clients say about their debt-free journey with Penny & Debt.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {(testimonials.length > 0 ? testimonials : [
            { name: 'Rajesh K.', role: 'Small Business Owner, Mumbai', text: 'I was drowning in ₹5.2 lakh debt from multiple credit cards. Penny & Debt negotiated with all my creditors and reduced it to just ₹2.1 lakh. The harassment calls stopped within a week. Life-changing experience!', rating: 5, savings: '60% Saved', before: '₹5.2L', after: '₹2.1L' },
            { name: 'Priya S.', role: 'IT Professional, Bangalore', text: 'Professional team, transparent process, and amazing results. They reduced my personal loan from ₹3.8 lakh to ₹1.7 lakh. The legal protection gave me peace of mind. Highly recommended!', rating: 5, savings: '55% Saved', before: '₹3.8L', after: '₹1.7L' },
            { name: 'Arjun M.', role: 'Sales Manager, Delhi', text: 'After 3 years of struggling with debt, I finally found Penny & Debt. They settled my ₹4.5 lakh debt for ₹1.6 lakh. The AI-powered approach and expert negotiators made all the difference. Thank you!', rating: 5, savings: '65% Saved', before: '₹4.5L', after: '₹1.6L' }
          ]).map((t, i) => (
            <div key={i} style={{
              background: 'white',
              padding: '36px',
              borderRadius: '16px',
              border: '2px solid #E6EEFF',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
            }}>
              <div style={{ display: 'flex', marginBottom: '16px' }}>
                {[...Array(t.rating || 5)].map((_, j) => (
                  <span key={j} style={{ color: '#FFB800', fontSize: '1.5em' }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: '1.0625rem', color: '#0F172A', marginBottom: '20px', fontStyle: 'italic', lineHeight: '1.6', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>"{t.text}"</p>
              {t.savings && (
                <div style={{ marginBottom: '16px', padding: '12px', background: '#D1FAE5', borderRadius: '8px' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#00D49E', marginBottom: '4px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>{t.savings}</div>
                  {t.before && t.after && (
                    <div style={{ fontSize: '0.875rem', color: '#065F46', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
                      Before: {t.before} → After: {t.after}
                    </div>
                  )}
                </div>
              )}
              <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1.125rem', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>{t.name}</div>
              <div style={{ fontSize: '0.9375rem', color: '#64748B', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const BlogSection = () => (
    <section style={{ padding: '100px 24px', background: 'white' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.75rem', fontWeight: 900, color: '#0F172A', textAlign: 'center', marginBottom: '24px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          Financial Insights & Debt Relief Tips
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#64748B', textAlign: 'center', marginBottom: '72px', maxWidth: '800px', margin: '0 auto 72px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          Expert advice, success stories, and practical tips to help you achieve financial freedom. Stay informed with our latest articles.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {(blogs.length > 0 ? blogs : [
            { title: 'How to Become Debt-Free in 2025: Complete Guide', slug: 'debt-free-2025', excerpt: 'Learn proven strategies to eliminate debt and achieve financial freedom. Step-by-step guide with real examples from successful debt relief cases.' },
            { title: 'Understanding Credit Scores: CIBIL Explained', slug: 'credit-scores', excerpt: 'Everything you need to know about CIBIL scores, how they work, and proven strategies to improve your credit rating in India.' },
            { title: 'Debt Settlement vs Bankruptcy: Which is Right?', slug: 'settlement-vs-bankruptcy', excerpt: 'Compare debt settlement and bankruptcy options. Understand the pros, cons, and long-term impact of each approach on your financial future.' }
          ]).map((blog, i) => (
            <Link key={i} to={`/blog/${blog.slug || ''}`} style={{
              background: '#F8FAFF',
              padding: '32px',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              textDecoration: 'none',
              display: 'block',
              border: '1px solid #E6EEFF',
              transition: 'transform 0.3s ease'
            }}>
              <h3 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#0F172A', marginBottom: '16px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>{blog.title}</h3>
              <p style={{ fontSize: '0.9375rem', color: '#64748B', marginBottom: '20px', lineHeight: '1.6', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>{blog.excerpt || blog.content?.substring(0, 150)}</p>
              <span style={{ fontSize: '0.9375rem', color: '#0A4DFF', fontWeight: 600, fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>Read Full Article →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );

  const CTASection = () => (
    <section style={{
      padding: '120px 24px',
      background: 'linear-gradient(135deg, #0A4DFF 0%, #0039CC 100%)',
      textAlign: 'center'
    }}>
      <div className="container">
        <h2 style={{ fontSize: '3.25rem', fontWeight: 900, color: 'white', marginBottom: '24px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          Start Your Debt-Free Journey Today
        </h2>
        <p style={{ fontSize: '1.375rem', color: 'rgba(255,255,255,0.95)', marginBottom: '48px', maxWidth: '800px', margin: '0 auto 48px', lineHeight: '1.7', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          Join 10,000+ Indians who have achieved financial freedom with our expert guidance. Free consultation, no obligations, complete confidentiality. Take the first step now.
        </p>
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
          <Link to="/applyform" style={{
            padding: '20px 56px',
            borderRadius: '12px',
            background: 'white',
            color: '#0A4DFF',
            fontWeight: 700,
            fontSize: '1.375rem',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
          }}>
            Apply Now - It's Free
          </Link>
        </div>
        <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
          📞 Call Us: +91 7814447895 | 📧 Email: care@pennyanddebt.in
        </p>
      </div>
    </section>
  );

  return (
    <>
      <SEO title="India's #1 AI-Powered Debt Relief Platform | Penny & Debt" description="Become debt-free with expert negotiation, legal protection, and AI-powered solutions. 10,000+ clients helped. Up to 65% debt reduction. Call +91 7814447895" />
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
