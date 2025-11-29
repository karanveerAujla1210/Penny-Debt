import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/api/services').then(r => r.json()).then(setServices).catch(() => {});
  }, []);

  const defaultServices = [
    {
      icon: '💰',
      title: 'Debt Settlement',
      type: 'Settlement',
      description: 'We negotiate with banks to get 40-65% reduction with legal settlement letter',
      features: ['Direct bank negotiation', 'Get 40-65% reduction', 'Legal settlement letter', 'Support until closure', 'Transparent process']
    },
    {
      icon: '📉',
      title: 'EMI Reduction / Restructuring',
      type: 'Restructuring',
      description: 'Lower EMI, extended tenure, reduce monthly stress',
      features: ['Lower monthly EMI', 'Extended tenure options', 'Reduce financial stress', 'Better cash flow', 'Flexible terms']
    },
    {
      icon: '🔄',
      title: 'Debt Consolidation',
      type: 'Consolidation',
      description: 'One single EMI, better planning, lower interest',
      features: ['Single monthly payment', 'Better financial planning', 'Lower interest rates', 'Simplified tracking', 'Improved credit score']
    },
    {
      icon: '💼',
      title: 'Debt Counselling',
      type: 'Counselling',
      description: 'Free counselling, budget planning, financial strategy',
      features: ['Free expert counselling', 'Personalized budget planning', 'Financial strategy', 'Debt prevention tips', 'Ongoing support']
    },
    {
      icon: '📊',
      title: 'Credit Score Improvement',
      type: 'Credit Repair',
      description: 'Monitoring, dispute resolution, score rebuilding',
      features: ['Credit report monitoring', 'Dispute resolution', 'Score rebuilding plans', 'Financial literacy', 'Ongoing tracking']
    },
    {
      icon: '⚖️',
      title: 'Legal Help',
      type: 'Legal Support',
      description: 'Anti-harassment support, legal notices, lawyer consultation',
      features: ['Anti-harassment protection', 'Legal notice drafting', 'Lawyer consultation', 'Court representation', 'Compliance guidance']
    }
  ];

  return (
    <>
      <SEO pageName="services" />
      <main style={{ background: '#FFFFFF' }}>
        
        {/* Hero Section */}
        <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #0A4DFF 0%, #0039CC 100%)', textAlign: 'center' }}>
          <div className="container">
            <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', marginBottom: '24px' }}>
              Comprehensive Debt Relief Services
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', maxWidth: '800px', margin: '0 auto' }}>
              From settlement to legal protection — we offer complete solutions for your debt problems
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section style={{ padding: '80px 24px', background: 'white' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '64px', textAlign: 'center' }}>
              Our Debt Relief Services
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
              {(services.length > 0 ? services : defaultServices).map((service, i) => (
                <div key={i} style={{
                  background: '#F8FAFF',
                  padding: '40px',
                  borderRadius: '16px',
                  border: '2px solid #E6EEFF',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}>
                  <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>{service.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{service.title}</h3>
                  <div style={{ fontSize: '0.875rem', color: '#0A4DFF', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase' }}>
                    {service.type}
                  </div>
                  <p style={{ fontSize: '1rem', color: '#64748B', marginBottom: '24px', lineHeight: 1.6 }}>
                    {service.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {(service.features || []).map((feature, j) => (
                      <li key={j} style={{
                        fontSize: '0.875rem',
                        color: '#334155',
                        marginBottom: '12px',
                        paddingLeft: '24px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#00D49E',
                          fontWeight: 900,
                          fontSize: '1.125rem'
                        }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section style={{ padding: '80px 24px', background: '#F8FAFF' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '64px', textAlign: 'center' }}>
              How Our Process Works
            </h2>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              {[
                { step: '01', title: 'Free Consultation', desc: 'Schedule a consultation with our debt experts to discuss your situation. No obligations, completely confidential.' },
                { step: '02', title: 'Debt Analysis', desc: 'We analyze your complete debt portfolio, income, expenses, and create a comprehensive financial picture.' },
                { step: '03', title: 'Customized Plan', desc: 'Our AI-powered system creates a personalized debt relief plan tailored to your financial situation and goals.' },
                { step: '04', title: 'Negotiation', desc: 'Our expert negotiators work directly with your creditors to reduce debt, lower interest rates, and stop harassment.' },
                { step: '05', title: 'Settlement & Freedom', desc: 'Once agreements are reached, we help you execute the plan and achieve complete debt freedom.' }
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '32px',
                  marginBottom: '48px',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    minWidth: '100px',
                    height: '100px',
                    background: 'linear-gradient(135deg, #0A4DFF 0%, #0066FF 100%)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    boxShadow: '0 8px 24px rgba(10,77,255,0.3)'
                  }}>
                    {item.step}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>{item.title}</h3>
                    <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Benefits */}
        <section style={{ padding: '80px 24px', background: 'white' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '64px', textAlign: 'center' }}>
              Why Choose Our Services?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
              {[
                { icon: '🎯', title: 'Proven Results', desc: 'Average 55% debt reduction for our clients' },
                { icon: '⚡', title: 'Fast Processing', desc: 'Most cases resolved within 12-36 months' },
                { icon: '🔒', title: '100% Confidential', desc: 'Your information is completely secure' },
                { icon: '💯', title: 'No Hidden Fees', desc: 'Transparent pricing, no surprises' },
                { icon: '👨‍⚖️', title: 'Legal Protection', desc: 'Full legal compliance and protection' },
                { icon: '📞', title: '24/7 Support', desc: 'Always available when you need us' }
              ].map((benefit, i) => (
                <div key={i} style={{
                  background: '#F8FAFF',
                  padding: '32px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  border: '1px solid #E6EEFF'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{benefit.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{benefit.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748B' }}>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Comparison */}
        <section style={{ padding: '80px 24px', background: '#F8FAFF' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '64px', textAlign: 'center' }}>
              Service Comparison
            </h2>
            <div style={{ maxWidth: '900px', margin: '0 auto', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '16px', overflow: 'hidden' }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #0A4DFF 0%, #0066FF 100%)' }}>
                    <th style={{ padding: '20px', textAlign: 'left', color: 'white', fontWeight: 700 }}>Service</th>
                    <th style={{ padding: '20px', textAlign: 'center', color: 'white', fontWeight: 700 }}>Debt Reduction</th>
                    <th style={{ padding: '20px', textAlign: 'center', color: 'white', fontWeight: 700 }}>Timeline</th>
                    <th style={{ padding: '20px', textAlign: 'center', color: 'white', fontWeight: 700 }}>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: 'Debt Settlement', reduction: '40-65%', timeline: '12-24 months', bestFor: 'High unsecured debt' },
                    { service: 'EMI Reduction', reduction: '20-40%', timeline: '6-12 months', bestFor: 'Cash flow issues' },
                    { service: 'Consolidation', reduction: '15-30%', timeline: '3-6 months', bestFor: 'Multiple debts' },
                    { service: 'Counselling', reduction: 'Varies', timeline: 'Ongoing', bestFor: 'Financial planning' }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #E6EEFF' }}>
                      <td style={{ padding: '20px', fontWeight: 600, color: '#0F172A' }}>{row.service}</td>
                      <td style={{ padding: '20px', textAlign: 'center', color: '#00D49E', fontWeight: 700 }}>{row.reduction}</td>
                      <td style={{ padding: '20px', textAlign: 'center', color: '#64748B' }}>{row.timeline}</td>
                      <td style={{ padding: '20px', textAlign: 'center', color: '#64748B' }}>{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #0A4DFF 0%, #0039CC 100%)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: '3rem', fontWeight: 900, color: 'white', marginBottom: '24px' }}>
              Ready to Get Started?
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }}>
              Choose the service that's right for you and take the first step towards financial freedom.
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

      </main>
    </>
  );
};

export default Services;
