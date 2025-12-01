import React from 'react';
import SEO from '../components/SEO';

const PremiumServices = () => {
  const services = [
    {
      icon: '📊',
      title: 'Debt Assessment',
      description: 'Comprehensive analysis of your debt situation. We review all your debts, create a prioritized list, and identify the best resolution strategies.',
      features: ['Complete debt audit', 'Creditor analysis', 'Financial health check', 'Customized roadmap'],
    },
    {
      icon: '🎯',
      title: 'Debt Consolidation',
      description: 'Combine multiple debts into a single, manageable payment. Simplify your finances with lower interest rates and extended timelines.',
      features: ['Single payment', 'Lower interest rates', 'Extended timeline', 'Reduced stress'],
    },
    {
      icon: '💬',
      title: 'Creditor Negotiation',
      description: 'We negotiate directly with your creditors on your behalf. Reduce debt amounts, lower interest rates, or modify payment terms.',
      features: ['Direct negotiations', 'Debt reduction', 'Better terms', 'Expert advocacy'],
    },
    {
      icon: '📈',
      title: 'Credit Building',
      description: 'Rebuild your credit score with proven strategies. Monitor progress and receive guidance on improving creditworthiness.',
      features: ['Credit monitoring', 'Score improvement', 'Strategic planning', 'Regular updates'],
    },
    {
      icon: '🛡️',
      title: 'Debt Protection',
      description: 'Legal protection from creditors and collection agencies. We handle all communications and shield you from harassment.',
      features: ['Legal protection', 'Communication handling', 'Collection defense', 'Peace of mind'],
    },
    {
      icon: '🤝',
      title: 'Financial Counseling',
      description: 'One-on-one expert guidance on budgeting, saving, and financial planning. Learn sustainable money management skills.',
      features: ['Budget planning', 'Savings strategies', 'Financial literacy', 'Ongoing support'],
    },
  ];

  return (
    <>
      <SEO title="Our Services | Penny & Debt" description="Comprehensive debt relief and financial wellness services" />

      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #F5F7FF 0%, #FAFBFF 100%)',
          padding: '4rem 2rem',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <div>
            <h1
              style={{
                fontSize: '3rem',
                fontWeight: 800,
                color: '#0D0D0D',
                marginBottom: '1rem',
              }}
            >
              Complete Debt Solutions
            </h1>
            <p
              style={{
                fontSize: '1.125rem',
                color: '#333333',
                maxWidth: '600px',
                margin: '0 auto 2rem',
              }}
            >
              Professional financial services designed to eliminate debt and build lasting financial freedom
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        style={{
          padding: '4rem 2rem',
          backgroundColor: 'white',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem',
            }}
          >
            {services.map((service, i) => (
              <div
                key={i}
                className="card"
                style={{
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#0D0D0D',
                    marginBottom: '1rem',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#333333',
                    marginBottom: '1.5rem',
                    flex: 1,
                  }}
                >
                  {service.description}
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  {service.features.map((feature, j) => (
                    <li
                      key={j}
                      style={{
                        fontSize: '0.875rem',
                        color: '#333333',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#003BFF',
                          flexShrink: 0,
                        }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        style={{
          padding: '4rem 2rem',
          backgroundColor: '#F5F7FF',
        }}
      >
        <div className="container">
          <div
            style={{
              textAlign: 'center',
              marginBottom: '4rem',
            }}
          >
            <h2
              style={{
                fontSize: '2.25rem',
                fontWeight: 800,
                color: '#0D0D0D',
                marginBottom: '1rem',
              }}
            >
              Why Choose Penny & Debt?
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              { value: '10,000+', label: 'Customers Helped', icon: '👥' },
              { value: '₹500Cr+', label: 'Debt Resolved', icon: '💰' },
              { value: '4.9/5', label: 'Customer Rating', icon: '⭐' },
              { value: '99%', label: 'Success Rate', icon: '✅' },
              { value: '15+', label: 'Years Experience', icon: '📅' },
              { value: '24/7', label: 'Customer Support', icon: '📞' },
            ].map((stat, i) => (
              <div
                key={i}
                className="card"
                style={{
                  padding: '2.5rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {stat.icon}
                </div>
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: '#003BFF',
                    marginBottom: '0.5rem',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: '#333333',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '4rem 2rem',
          background: 'linear-gradient(135deg, #003BFF 0%, #0066FF 100%)',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: '2.25rem',
              fontWeight: 800,
              color: 'white',
              marginBottom: '2rem',
            }}
          >
            Ready to Get Started?
          </h2>
          <button
            className="btn btn-primary btn-lg"
            style={{
              background: 'white',
              color: '#003BFF',
            }}
          >
            Schedule Free Consultation
          </button>
        </div>
      </section>
    </>
  );
};

export default PremiumServices;
