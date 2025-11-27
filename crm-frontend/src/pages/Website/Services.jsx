import React from "react";
import SEO from "../../components/SEO";

const Services = () => {
  const servicesList = [
    {
      icon: "🛡️",
      title: "Debt Relief Programs",
      description: "Affordable settlement and repayment plans tailored to ease your financial burden.",
      details: [
        "Personalized debt assessment",
        "Negotiation with lenders",
        "Flexible repayment options",
        "Legal protection throughout",
        "Ongoing case management"
      ]
    },
    {
      icon: "⚖️",
      title: "Legal Advisory & Anti-Harassment",
      description: "Protect yourself from debt harassment with expert legal assistance.",
      details: [
        "Legal advice for debt cases",
        "Protection from harassment",
        "Court support",
        "Documentation & compliance",
        "Legal representation"
      ]
    },
    {
      icon: "📉",
      title: "Credit Score Improvement",
      description: "Roadmaps and steps tailored for rebuilding your credit score effectively.",
      details: [
        "Credit report analysis",
        "Dispute resolution",
        "Credit rebuilding plans",
        "Financial literacy coaching",
        "Ongoing credit monitoring"
      ]
    },
    {
      icon: "💼",
      title: "Financial Planning & Budgeting",
      description: "Expert advice for budgeting wisely and maintaining debt-free living.",
      details: [
        "Monthly budget setup",
        "Expense tracking",
        "Savings strategies",
        "Debt prevention tips",
        "Goal-based planning"
      ]
    },
    {
      icon: "🔍",
      title: "Loan Eligibility Analysis",
      description: "Assessment to improve your chances for future loan approvals.",
      details: [
        "Eligibility check",
        "Profile improvement",
        "Documentation review",
        "Pre-approval guidance",
        "Lender matching"
      ]
    },
    {
      icon: "🤝",
      title: "Lender Negotiation & Settlement",
      description: "We negotiate with lenders to reduce your debt and cut penalties legally.",
      details: [
        "Direct bank negotiation",
        "Penalty reduction",
        "Settlement agreements",
        "Support until closure",
        "Transparent process"
      ]
    }
  ];

  const loanProducts = [
    {
      icon: "🏠",
      title: "Home Loan",
      description: "Get the best rates for new home purchase, balance transfer, or top-up.",
      features: [
        "Loan up to ₹5 Cr+",
        "Tenure up to 30 years",
        "Balance transfer options",
        "Doorstep support"
      ]
    },
    {
      icon: "👤",
      title: "Personal Loan",
      description: "Quick, collateral-free loans for any purpose with minimal paperwork.",
      features: [
        "Loan up to ₹40 lakh",
        "Tenure up to 6 years",
        "No collateral required",
        "Flexible EMI options"
      ]
    },
    {
      icon: "🏢",
      title: "Loan Against Property",
      description: "Unlock the value of your property for business or personal needs.",
      features: [
        "Loan up to ₹10 Cr+",
        "Residential & commercial",
        "Flexible tenure",
        "Quick processing"
      ]
    },
    {
      icon: "📈",
      title: "Loan on Mutual Funds",
      description: "Get instant liquidity without selling your investments.",
      features: [
        "Up to 80% of fund value",
        "No foreclosure charges",
        "Continue earning returns",
        "Quick online process"
      ]
    },
    {
      icon: "🚗",
      title: "Car Loan",
      description: "Finance your new or used car with attractive rates and fast approval.",
      features: [
        "Up to 100% on-road price",
        "Tenure up to 7 years",
        "Low interest rates",
        "Pre-approved offers"
      ]
    },
    {
      icon: "🔵",
      title: "Low CIBIL Score Loans",
      description: "Specialized solutions for customers with low or no credit score.",
      features: [
        "Loan up to ₹10 lakh",
        "Custom assessment",
        "Credit improvement guidance",
        "No hidden charges"
      ]
    }
  ];

  return (
    <>
      <SEO pageName="services" />
      <main style={{ background: '#FFFFFF', minHeight: '100vh' }}>
        
        {/* Our Services Section */}
        <section style={{ padding: '80px 24px', backgroundColor: '#F5F7FF' }}>
          <div className="container">
            <h1 style={{
              fontSize: '2.25rem',
              fontWeight: 800,
              color: '#0D0D0D',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              Our Services
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: '#333333',
              fontWeight: 600,
              marginBottom: '64px',
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto 64px'
            }}>
              Debt relief, legal protection, credit improvement, and more—your path to financial freedom starts here.
            </p>
            <div className="grid grid-auto" style={{ gap: '32px' }}>
              {servicesList.map(({ icon, title, description, details }, i) => (
                <div key={i} className="card" style={{
                  padding: '32px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px', color: '#003BFF' }}>
                    {icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    color: '#0D0D0D',
                    marginBottom: '12px',
                    fontWeight: 800
                  }}>
                    {title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#333333',
                    lineHeight: 1.6,
                    marginBottom: '16px'
                  }}>
                    {description}
                  </p>
                  <ul style={{
                    textAlign: 'left',
                    margin: '0 auto',
                    maxWidth: '260px',
                    paddingLeft: '20px',
                    color: '#333333',
                    fontSize: '0.875rem',
                    listStyle: 'disc'
                  }}>
                    {details.map((d, idx) => (
                      <li key={idx} style={{ marginBottom: '6px' }}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Loan Solutions Section */}
        <section style={{ padding: '80px 24px', backgroundColor: '#FFFFFF' }}>
          <div className="container">
            <h2 style={{
              fontSize: '2.25rem',
              fontWeight: 800,
              color: '#0D0D0D',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              Additional Loan Solutions
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#333333',
              fontWeight: 600,
              marginBottom: '64px',
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto 64px'
            }}>
              Explore our premium loan products for every need—home, personal, property, car, and more.
            </p>
            <div className="grid grid-auto" style={{ gap: '32px' }}>
              {loanProducts.map(({ icon, title, description, features }, i) => (
                <div key={i} className="card" style={{
                  padding: '32px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px', color: '#003BFF' }}>
                    {icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    color: '#0D0D0D',
                    marginBottom: '12px',
                    fontWeight: 800
                  }}>
                    {title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#333333',
                    lineHeight: 1.6,
                    marginBottom: '16px'
                  }}>
                    {description}
                  </p>
                  <ul style={{
                    textAlign: 'left',
                    margin: '0 auto',
                    maxWidth: '260px',
                    paddingLeft: '20px',
                    color: '#333333',
                    fontSize: '0.875rem',
                    listStyle: 'disc'
                  }}>
                    {features.map((f, idx) => (
                      <li key={idx} style={{ marginBottom: '6px' }}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section style={{ padding: '80px 24px', backgroundColor: '#F5F7FF' }}>
          <div className="container">
            <h2 style={{
              fontSize: '2.25rem',
              fontWeight: 800,
              color: '#0D0D0D',
              marginBottom: '64px',
              textAlign: 'center'
            }}>
              How It Works
            </h2>
            <div className="grid grid-auto" style={{ gap: '32px' }}>
              {[
                { step: '1', title: 'Consultation', desc: 'Schedule a consultation with our experts to discuss your debt situation' },
                { step: '2', title: 'Customized Plan', desc: 'We create a personalized debt relief plan tailored to your financial situation' },
                { step: '3', title: 'Negotiation & Settlement', desc: 'Our experts negotiate with lenders to reduce your debt and secure a settlement' }
              ].map((item, i) => (
                <div key={i} className="card" style={{ padding: '32px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #003BFF 0%, #0066FF 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    marginBottom: '16px'
                  }}>
                    {item.step}
                  </div>
                  <h3 style={{ fontSize: '1.125rem', color: '#0D0D0D', marginBottom: '12px', fontWeight: 'bold' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '1rem', color: '#333333', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section style={{ padding: '80px 24px', backgroundColor: '#FFFFFF' }}>
          <div className="container">
            <h2 style={{
              fontSize: '2.25rem',
              fontWeight: 800,
              color: '#0D0D0D',
              marginBottom: '64px',
              textAlign: 'center'
            }}>
              Benefits of Our Services
            </h2>
            <div className="grid grid-auto" style={{ gap: '32px' }}>
              {[
                { title: 'Reduced Debt', desc: 'We help you reduce your debt burden and achieve financial freedom.' },
                { title: 'Improved Credit Score', desc: 'Our services help you improve your credit score and maintain a healthy financial profile.' },
                { title: 'Stress Relief', desc: 'Let us handle the negotiations and settlements, so you can focus on your financial well-being.' }
              ].map((item, i) => (
                <div key={i} className="card" style={{ padding: '32px' }}>
                  <h3 style={{ fontSize: '1.125rem', color: '#0D0D0D', marginBottom: '12px', fontWeight: 'bold' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '1rem', color: '#333333', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
