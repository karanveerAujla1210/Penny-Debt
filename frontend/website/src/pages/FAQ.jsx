import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/faqs').then(r => r.json()).then(setFaqs).catch(() => {});
  }, []);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const defaultFaqs = [
    {
      category: 'About Debt Relief',
      question: 'What is debt relief and how does it work?',
      answer: 'Debt relief is a process where we negotiate with your creditors to reduce your total debt amount, lower interest rates, or restructure payment terms. Our experts work on your behalf to create a manageable repayment plan that fits your budget.'
    },
    {
      category: 'About Debt Relief',
      question: 'Who qualifies for debt relief services?',
      answer: 'Anyone with unsecured debt (credit cards, personal loans, medical bills) of ₹50,000 or more can qualify. We assess your financial situation and create a customized plan regardless of your credit score.'
    },
    {
      category: 'Impact on Credit Score',
      question: 'Will debt relief affect my credit score?',
      answer: 'Initially, there may be a temporary impact if you\'re already in default. However, our resolution efforts aim to stabilize and improve your credit score over time. We also provide credit rebuilding guidance post-resolution.'
    },
    {
      category: 'Impact on Credit Score',
      question: 'How long does it take to rebuild my credit score?',
      answer: 'Typically 12-24 months after debt settlement. We provide personalized credit improvement plans and ongoing monitoring to help you rebuild your score faster.'
    },
    {
      category: 'Program Duration',
      question: 'How long does the debt relief process take?',
      answer: 'Most cases are resolved within 12-36 months, depending on your debt amount, financial situation, and creditor cooperation. We provide regular updates throughout the process.'
    },
    {
      category: 'Program Duration',
      question: 'Can I speed up the process?',
      answer: 'Yes! Making larger monthly deposits or lump sum payments can significantly reduce your program duration. Our team will work with you to create an accelerated plan if desired.'
    },
    {
      category: 'Fees',
      question: 'What are your fees?',
      answer: 'We charge a percentage of the debt we help you resolve, typically 15-25% of the enrolled debt. There are no upfront fees - we only get paid when you succeed. All fees are disclosed transparently before enrollment.'
    },
    {
      category: 'Fees',
      question: 'Are there any hidden charges?',
      answer: 'Absolutely not. We believe in complete transparency. All fees are clearly explained in your service agreement. There are no hidden charges, surprise fees, or additional costs.'
    },
    {
      category: 'Legal Protection',
      question: 'Is debt relief legal in India?',
      answer: 'Yes, debt relief and settlement services are completely legal in India. We operate in full compliance with RBI guidelines and Indian banking regulations. All our processes are legally sound and documented.'
    },
    {
      category: 'Legal Protection',
      question: 'Will I face legal action from creditors?',
      answer: 'Our legal team handles all creditor communications and protects you from harassment. While creditors may threaten legal action, actual lawsuits are rare. If needed, we provide legal representation and support.'
    },
    {
      category: 'Harassment Support',
      question: 'Can you stop harassment calls from recovery agents?',
      answer: 'Yes! Once enrolled, our legal team takes over all creditor communications. We send cease and desist notices to stop harassment calls. Recovery agents are legally required to contact us instead of you.'
    },
    {
      category: 'Harassment Support',
      question: 'What if recovery agents visit my home or office?',
      answer: 'This is illegal under RBI guidelines. We provide legal documentation to prevent such visits and take immediate action if harassment occurs. Our legal team can file complaints with banking ombudsman if needed.'
    }
  ];

  const faqData = faqs.length > 0 ? faqs : defaultFaqs;
  
  const categories = [...new Set(faqData.map(f => f.category))];
  
  const filteredFaqs = searchTerm 
    ? faqData.filter(f => 
        f.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
        f.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : faqData;

  return (
    <>
      <SEO pageName="faq" />
      <main style={{ background: '#FFFFFF' }}>
        
        {/* Hero Section */}
        <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #0A4DFF 0%, #0039CC 100%)', textAlign: 'center' }}>
          <div className="container">
            <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', marginBottom: '24px' }}>
              Frequently Asked Questions
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', maxWidth: '800px', margin: '0 auto 48px' }}>
              Find answers to common questions about our debt relief services
            </p>
            
            {/* Search Bar */}
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px 24px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section style={{ padding: '80px 24px', background: 'white' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            {categories.map((category, catIndex) => {
              const categoryFaqs = filteredFaqs.filter(f => f.category === category);
              if (categoryFaqs.length === 0) return null;
              
              return (
                <div key={catIndex} style={{ marginBottom: '64px' }}>
                  <h2 style={{
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: '#0A4DFF',
                    marginBottom: '32px',
                    paddingBottom: '16px',
                    borderBottom: '3px solid #E6EEFF'
                  }}>
                    {category}
                  </h2>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {categoryFaqs.map((faq, i) => {
                      const globalIndex = faqData.indexOf(faq);
                      return (
                        <div
                          key={i}
                          style={{
                            background: '#F8FAFF',
                            borderRadius: '12px',
                            border: '2px solid #E6EEFF',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <button
                            onClick={() => toggleIndex(globalIndex)}
                            style={{
                              width: '100%',
                              padding: '24px',
                              textAlign: 'left',
                              background: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              gap: '16px'
                            }}
                          >
                            <span style={{
                              fontSize: '1.125rem',
                              fontWeight: 700,
                              color: '#0F172A',
                              flex: 1
                            }}>
                              {faq.question}
                            </span>
                            <span style={{
                              fontSize: '1.5rem',
                              color: '#0A4DFF',
                              fontWeight: 900,
                              transform: activeIndex === globalIndex ? 'rotate(45deg)' : 'rotate(0deg)',
                              transition: 'transform 0.3s ease'
                            }}>
                              +
                            </span>
                          </button>
                          
                          {activeIndex === globalIndex && (
                            <div style={{
                              padding: '0 24px 24px',
                              fontSize: '1rem',
                              color: '#64748B',
                              lineHeight: 1.6,
                              animation: 'fadeIn 0.3s ease'
                            }}>
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div style={{ textAlign: 'center', padding: '64px 24px' }}>
                <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🔍</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                  No results found
                </h3>
                <p style={{ fontSize: '1rem', color: '#64748B' }}>
                  Try searching with different keywords or browse all categories
                </p>
              </div>
            )}

          </div>
        </section>

        {/* Quick Stats */}
        <section style={{ padding: '80px 24px', background: '#F8FAFF' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '32px', textAlign: 'center' }}>
              {[
                { value: '10,000+', label: 'Questions Answered' },
                { value: '95%', label: 'Satisfaction Rate' },
                { value: '24/7', label: 'Support Available' },
                { value: '<2hrs', label: 'Response Time' }
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0A4DFF' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.875rem', color: '#64748B', marginTop: '8px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section style={{ padding: '80px 24px', background: 'white', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '24px' }}>
              Still Have Questions?
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#64748B', marginBottom: '48px', lineHeight: 1.6 }}>
              Our support team is here to help. Reach out and get clarity on your debt solution.
            </p>
            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{
                padding: '16px 40px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #0A4DFF 0%, #0066FF 100%)',
                color: 'white',
                fontWeight: 700,
                fontSize: '1.125rem',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(10,77,255,0.3)'
              }}>
                Contact Support
              </Link>
              <Link to="/applyform" style={{
                padding: '16px 40px',
                borderRadius: '12px',
                background: 'transparent',
                color: '#0A4DFF',
                fontWeight: 700,
                fontSize: '1.125rem',
                textDecoration: 'none',
                border: '2px solid #0A4DFF'
              }}>
                Apply Now
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default FAQ;
