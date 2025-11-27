import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const PremiumHome = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ============================================================================
     ANIMATION VARIANTS
     ============================================================================ */

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  /* ============================================================================
     HERO SECTION
     ============================================================================ */

  const HeroSection = () => (
    <motion.section
      className="hero-section"
      style={{
        background: 'linear-gradient(135deg, #F5F7FF 0%, #FAFBFF 100%)',
        padding: '100px var(--space-lg) 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 59, 255, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-2xl)',
            alignItems: 'center',
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left content */}
          <motion.div variants={slideInVariants}>
            <motion.h1
              style={{
                fontSize: 'var(--font-size-5xl)',
                fontWeight: 'var(--font-weight-extrabold)',
                color: 'var(--color-text)',
                marginBottom: 'var(--space-md)',
                lineHeight: '1.1',
              }}
              variants={itemVariants}
            >
              Financial Freedom Starts Here
            </motion.h1>

            <motion.p
              style={{
                fontSize: 'var(--font-size-xl)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--space-2xl)',
                lineHeight: '1.6',
                maxWidth: '500px',
              }}
              variants={itemVariants}
            >
              Take control of your debt with expert guidance, personalized solutions, and real financial wellness.
            </motion.p>

            <motion.div
              style={{
                display: 'flex',
                gap: 'var(--space-md)',
                flexWrap: 'wrap',
              }}
              variants={itemVariants}
            >
              <Link to="/apply" className="btn btn-primary btn-lg">
                Get Started
              </Link>
              <button className="btn btn-secondary btn-lg">
                Learn More
              </button>
            </motion.div>

            <motion.div
              style={{
                display: 'flex',
                gap: 'var(--space-2xl)',
                marginTop: 'var(--space-3xl)',
              }}
              variants={itemVariants}
            >
              {[
                { value: '10,000+', label: 'Customers Helped' },
                { value: '₹500Cr+', label: 'Debt Resolved' },
                { value: '4.9★', label: 'Rating' },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: 'var(--font-weight-extrabold)',
                    color: 'var(--color-primary)',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-tertiary)',
                    marginTop: '4px',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
            variants={scaleVariants}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '400px',
                aspectRatio: '1',
                background: 'linear-gradient(135deg, #003BFF 0%, #0066FF 100%)',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 'var(--font-size-4xl)',
                fontWeight: 'var(--font-weight-bold)',
                boxShadow: '0px 20px 60px rgba(0, 59, 255, 0.2)',
              }}
            >
              💰
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );

  /* ============================================================================
     SERVICES SECTION
     ============================================================================ */

  const ServicesSection = () => (
    <motion.section
      style={{
        padding: 'var(--space-5xl) var(--space-lg)',
        backgroundColor: 'white',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.div
          style={{
            textAlign: 'center',
            marginBottom: 'var(--space-5xl)',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            style={{
              fontSize: 'var(--font-size-4xl)',
              fontWeight: 'var(--font-weight-extrabold)',
              color: 'var(--color-text)',
              marginBottom: 'var(--space-md)',
            }}
            variants={itemVariants}
          >
            Our Services
          </motion.h2>
          <motion.p
            style={{
              fontSize: 'var(--font-size-lg)',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
            variants={itemVariants}
          >
            Comprehensive debt solutions tailored to your financial situation
          </motion.p>
        </motion.div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-lg)',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: '📊',
              title: 'Debt Assessment',
              description: 'Professional analysis of your debt situation with zero obligation',
            },
            {
              icon: '🎯',
              title: 'Personalized Plans',
              description: 'Custom repayment strategies designed for your budget',
            },
            {
              icon: '🤝',
              title: 'Expert Guidance',
              description: 'Direct support from certified financial advisors',
            },
            {
              icon: '💳',
              title: 'Negotiation',
              description: 'We negotiate with creditors on your behalf',
            },
            {
              icon: '📈',
              title: 'Credit Building',
              description: 'Rebuild your credit score with proven strategies',
            },
            {
              icon: '🛡️',
              title: 'Full Protection',
              description: 'Secure, confidential, and compliant debt resolution',
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="card"
              style={{
                padding: 'var(--space-xl)',
                textAlign: 'center',
                cursor: 'pointer',
              }}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <div
                style={{
                  fontSize: 'var(--font-size-5xl)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                {service.icon}
              </div>
              <h3
                style={{
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--color-text)',
                  marginBottom: 'var(--space-sm)',
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );

  /* ============================================================================
     JOURNEY SECTION
     ============================================================================ */

  const JourneySection = () => (
    <motion.section
      style={{
        padding: 'var(--space-5xl) var(--space-lg)',
        backgroundColor: 'var(--color-bg)',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.div
          style={{
            textAlign: 'center',
            marginBottom: 'var(--space-5xl)',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            style={{
              fontSize: 'var(--font-size-4xl)',
              fontWeight: 'var(--font-weight-extrabold)',
              color: 'var(--color-text)',
              marginBottom: 'var(--space-md)',
            }}
            variants={itemVariants}
          >
            Your Debt Relief Journey
          </motion.h2>
          <motion.p
            style={{
              fontSize: 'var(--font-size-lg)',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
            variants={itemVariants}
          >
            A clear, straightforward path to financial freedom
          </motion.p>
        </motion.div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'var(--space-lg)',
            position: 'relative',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { step: '1', title: 'Free Consultation', desc: 'Call or chat with our advisors' },
            { step: '2', title: 'Analysis', desc: 'We review your complete debt picture' },
            { step: '3', title: 'Plan', desc: 'Get a customized debt relief strategy' },
            { step: '4', title: 'Action', desc: 'We execute and manage the plan' },
            { step: '5', title: 'Resolution', desc: 'Achieve financial freedom' },
          ].map((item, i) => (
            <motion.div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              variants={itemVariants}
            >
              <motion.div
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #003BFF 0%, #0066FF 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  marginBottom: 'var(--space-md)',
                  boxShadow: '0px 8px 20px rgba(0, 59, 255, 0.2)',
                }}
                whileHover={{ scale: 1.1 }}
              >
                {item.step}
              </motion.div>
              <h4
                style={{
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--color-text)',
                  marginBottom: 'var(--space-sm)',
                  textAlign: 'center',
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-text-secondary)',
                  textAlign: 'center',
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );

  /* ============================================================================
     TESTIMONIALS SECTION
     ============================================================================ */

  const TestimonialsSection = () => (
    <motion.section
      style={{
        padding: 'var(--space-5xl) var(--space-lg)',
        backgroundColor: 'white',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.div
          style={{
            textAlign: 'center',
            marginBottom: 'var(--space-5xl)',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            style={{
              fontSize: 'var(--font-size-4xl)',
              fontWeight: 'var(--font-weight-extrabold)',
              color: 'var(--color-text)',
              marginBottom: 'var(--space-md)',
            }}
            variants={itemVariants}
          >
            What Our Customers Say
          </motion.h2>
        </motion.div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-lg)',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              name: 'Rajesh Kumar',
              role: 'Small Business Owner',
              text: 'Penny & Debt helped me resolve 3 years of accumulated debt in just 18 months. Their guidance was invaluable.',
              rating: 5,
            },
            {
              name: 'Priya Singh',
              role: 'Software Engineer',
              text: 'Professional, transparent, and genuinely concerned about my financial wellbeing. Highly recommended!',
              rating: 5,
            },
            {
              name: 'Arjun Patel',
              role: 'Entrepreneur',
              text: 'The personalized approach made all the difference. I went from stressed to confident about my finances.',
              rating: 5,
            },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              className="card"
              style={{
                padding: 'var(--space-lg)',
              }}
              variants={itemVariants}
              whileHover={{
                y: -4,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  marginBottom: 'var(--space-md)',
                }}
              >
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} style={{ color: 'var(--color-primary)', fontSize: '1.2em' }}>★</span>
                ))}
              </div>
              <p
                style={{
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--space-md)',
                  fontStyle: 'italic',
                }}
              >
                "{testimonial.text}"
              </p>
              <div>
                <div
                  style={{
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-text)',
                  }}
                >
                  {testimonial.name}
                </div>
                <div
                  style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-tertiary)',
                  }}
                >
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );

  /* ============================================================================
     FAQ SECTION
     ============================================================================ */

  const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
      <motion.section
        style={{
          padding: 'var(--space-5xl) var(--space-lg)',
          backgroundColor: 'var(--color-bg)',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.div
            style={{
              textAlign: 'center',
              marginBottom: 'var(--space-5xl)',
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              style={{
                fontSize: 'var(--font-size-4xl)',
                fontWeight: 'var(--font-weight-extrabold)',
                color: 'var(--color-text)',
                marginBottom: 'var(--space-md)',
              }}
              variants={itemVariants}
            >
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <motion.div
            style={{
              maxWidth: '700px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-md)',
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                question: 'Is this service completely free?',
                answer: 'We offer free consultation and assessment. Our debt resolution services are commission-based, meaning we only get paid when you succeed.',
              },
              {
                question: 'How long does the process take?',
                answer: 'Most cases are resolved within 12-36 months, depending on your debt amount and financial situation.',
              },
              {
                question: 'Will this affect my credit score?',
                answer: 'Our strategies are designed to minimize impact. In many cases, your score improves once debts are resolved.',
              },
              {
                question: 'Is my information secure?',
                answer: 'Yes. We follow industry-leading security standards and never share your information without consent.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="card"
                style={{
                  padding: 'var(--space-lg)',
                  cursor: 'pointer',
                }}
                variants={itemVariants}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <h4
                    style={{
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: 'var(--font-weight-bold)',
                      color: 'var(--color-text)',
                    }}
                  >
                    {item.question}
                  </h4>
                  <span
                    style={{
                      fontSize: 'var(--font-size-2xl)',
                      color: 'var(--color-primary)',
                      transition: 'transform 0.3s ease',
                      transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    ▼
                  </span>
                </div>
                {openIndex === i && (
                  <motion.p
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-text-secondary)',
                      marginTop: 'var(--space-md)',
                    }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    );
  };

  /* ============================================================================
     CTA SECTION
     ============================================================================ */

  const CTASection = () => (
    <motion.section
      style={{
        padding: 'var(--space-5xl) var(--space-lg)',
        background: 'linear-gradient(135deg, #003BFF 0%, #0066FF 100%)',
        textAlign: 'center',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            style={{
              fontSize: 'var(--font-size-4xl)',
              fontWeight: 'var(--font-weight-extrabold)',
              color: 'white',
              marginBottom: 'var(--space-md)',
            }}
            variants={itemVariants}
          >
            Ready to Take Control?
          </motion.h2>
          <motion.p
            style={{
              fontSize: 'var(--font-size-lg)',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: 'var(--space-lg)',
              maxWidth: '600px',
              margin: '0 auto var(--space-lg)',
            }}
            variants={itemVariants}
          >
            Get your free debt assessment today. No obligations, no hidden fees.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link to="/apply" className="btn btn-primary btn-lg">
              Start Your Free Assessment
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
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
