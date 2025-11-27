import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';

const PremiumServices = () => {
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
      <motion.section
        style={{
          background: 'linear-gradient(135deg, #F5F7FF 0%, #FAFBFF 100%)',
          padding: '80px var(--space-lg) 60px',
          textAlign: 'center',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.h1
              style={{
                fontSize: 'var(--font-size-5xl)',
                fontWeight: 'var(--font-weight-extrabold)',
                color: 'var(--color-text)',
                marginBottom: 'var(--space-md)',
              }}
              variants={itemVariants}
            >
              Complete Debt Solutions
            </motion.h1>
            <motion.p
              style={{
                fontSize: 'var(--font-size-xl)',
                color: 'var(--color-text-secondary)',
                maxWidth: '600px',
                margin: '0 auto var(--space-lg)',
              }}
              variants={itemVariants}
            >
              Professional financial services designed to eliminate debt and build lasting financial freedom
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
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
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: 'var(--space-lg)',
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="card"
                style={{
                  padding: 'var(--space-2xl)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
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
                    fontSize: 'var(--font-size-xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-md)',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--color-text-secondary)',
                    marginBottom: 'var(--space-lg)',
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
                    gap: 'var(--space-sm)',
                  }}
                >
                  {service.features.map((feature, j) => (
                    <li
                      key={j}
                      style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-sm)',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'var(--color-primary)',
                          flexShrink: 0,
                        }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
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
              Why Choose Penny & Debt?
            </motion.h2>
          </motion.div>

          <motion.div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 'var(--space-lg)',
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { value: '10,000+', label: 'Customers Helped', icon: '👥' },
              { value: '₹500Cr+', label: 'Debt Resolved', icon: '💰' },
              { value: '4.9/5', label: 'Customer Rating', icon: '⭐' },
              { value: '99%', label: 'Success Rate', icon: '✅' },
              { value: '15+', label: 'Years Experience', icon: '📅' },
              { value: '24/7', label: 'Customer Support', icon: '📞' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="card"
                style={{
                  padding: 'var(--space-2xl)',
                  textAlign: 'center',
                }}
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div style={{ fontSize: 'var(--font-size-5xl)', marginBottom: 'var(--space-md)' }}>
                  {stat.icon}
                </div>
                <div
                  style={{
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: 'var(--font-weight-extrabold)',
                    color: 'var(--color-primary)',
                    marginBottom: 'var(--space-sm)',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
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
          <motion.h2
            style={{
              fontSize: 'var(--font-size-4xl)',
              fontWeight: 'var(--font-weight-extrabold)',
              color: 'white',
              marginBottom: 'var(--space-lg)',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.button
            className="btn btn-primary btn-lg"
            style={{
              background: 'white',
              color: 'var(--color-primary)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Free Consultation
          </motion.button>
        </div>
      </motion.section>
    </>
  );
};

export default PremiumServices;
