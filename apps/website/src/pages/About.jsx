import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Target, Heart, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import CountUp from 'react-countup';
import PageLayout from '../components/PageLayout';
import theme from '../styles/theme';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const stats = [
    { value: 50000, suffix: '+', label: 'Happy Customers' },
    { value: 450, suffix: 'Cr+', prefix: '₹', label: 'Debt Settled' },
    { value: 95, suffix: '%', label: 'Success Rate' },
    { value: 4.8, suffix: '★', label: 'Average Rating' },
  ];

  const values = [
    { icon: Shield, title: 'Transparency', desc: 'No hidden fees, clear communication at every step' },
    { icon: Heart, title: 'Integrity', desc: 'Ethical practices, RBI-compliant processes' },
    { icon: Users, title: 'Empathy', desc: 'Understanding your unique financial situation' },
    { icon: Award, title: 'Excellence', desc: 'Proven track record of successful settlements' },
  ];

  const timeline = [
    { year: '2020', title: 'Founded', desc: 'Penny & Debt established with mission to help Indians become debt-free' },
    { year: '2021', title: '5,000 Clients', desc: 'Helped first 5,000 families achieve financial freedom' },
    { year: '2022', title: 'AI Platform', desc: 'Launched AI-powered debt negotiation system' },
    { year: '2023', title: '25,000 Clients', desc: 'Expanded nationwide with regional offices' },
    { year: '2024', title: '50,000+ Clients', desc: 'Crossed major milestone with ₹450Cr+ debt settled' },
  ];

  return (
    <PageLayout
      showHero
      title="Empowering Indians to Achieve Debt Freedom"
      subtitle="Founded in 2020, we've helped over 50,000 families settle ₹450+ crores in debt through transparent, ethical solutions."
      heroContent={
        <div style={{ display: 'flex', justifyContent: 'center', gap: theme.spacing.lg, flexWrap: 'wrap' }}>
          {[
            { icon: '✓', label: 'RBI Compliant' },
            { icon: '✓', label: '100% Legal' },
            { icon: '✓', label: 'Proven Results' },
          ].map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing.sm,
                padding: `${theme.spacing.sm} ${theme.spacing.md}`,
                background: 'rgba(255,255,255,0.15)',
                borderRadius: theme.borderRadius.full,
                backdropFilter: 'blur(10px)',
                color: theme.colors.text.inverse,
                fontSize: theme.typography.fontSizes.sm,
              }}
            >
              <span style={{ fontSize: '18px' }}>{badge.icon}</span>
              {badge.label}
            </motion.div>
          ))}
        </div>
      }
    >
      {/* Stats Section */}
      <section style={{ marginBottom: theme.spacing['4xl'] }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: theme.spacing.lg }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                textAlign: 'center',
                padding: theme.spacing.xl,
                background: theme.colors.bg.light,
                borderRadius: theme.borderRadius.xl,
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              <div style={{ fontSize: theme.typography.fontSizes['3xl'], fontWeight: theme.typography.fontWeights.bold, color: theme.colors.primary, marginBottom: theme.spacing.md }}>
                {stat.prefix}
                <CountUp end={stat.value} duration={2.5} separator="," />
                {stat.suffix}
              </div>
              <div style={{ color: theme.colors.text.secondary, fontSize: theme.typography.fontSizes.md }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section style={{ marginBottom: theme.spacing['4xl'], padding: `${theme.spacing.xl} ${theme.spacing.xl}`, background: theme.colors.bg.light, borderRadius: theme.borderRadius.xl }}>
        <h2 style={{ fontSize: theme.typography.fontSizes['2xl'], fontWeight: theme.typography.fontWeights.bold, marginBottom: theme.spacing.lg, color: theme.colors.text.primary }}>
          Our Story
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: theme.spacing.lg, lineHeight: theme.typography.lineHeights.relaxed, color: theme.colors.text.secondary, fontSize: theme.typography.fontSizes.md }}>
          <p>
            Founded in 2020, Penny & Debt was born from a simple mission: help everyday Indians break free from the crushing burden of debt. 
            We've helped over 50,000 families settle ₹450+ crores in debt, transforming financial stress into freedom.
          </p>
          <p>
            India faces a silent debt crisis. Millions struggle with credit card defaults, personal loans, and harassment from recovery agents. 
            Traditional solutions are expensive, complicated, and often ineffective. We created Penny & Debt to change that.
          </p>
          <p>
            Our platform combines cutting-edge technology with human expertise to negotiate with banks and NBFCs on your behalf. 
            We've helped thousands of Indians reduce their debt by up to 70% while protecting them legally from harassment.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section style={{ marginBottom: theme.spacing['4xl'] }}>
        <h2 style={{ fontSize: theme.typography.fontSizes['2xl'], fontWeight: theme.typography.fontWeights.bold, marginBottom: theme.spacing.md, textAlign: 'center', color: theme.colors.text.primary }}>
          Our Values
        </h2>
        <p style={{ textAlign: 'center', color: theme.colors.text.secondary, marginBottom: theme.spacing.xl, fontSize: theme.typography.fontSizes.lg }}>
          The principles that guide everything we do
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: theme.spacing.lg }}>
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  padding: theme.spacing.xl,
                  background: theme.colors.bg.light,
                  borderRadius: theme.borderRadius.xl,
                  textAlign: 'center',
                  border: `1px solid ${theme.colors.border}`,
                  cursor: 'pointer',
                  transition: `all ${theme.transitions.base} ease`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = theme.shadows.lg;
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = theme.colors.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = theme.colors.border;
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    background: theme.colors.primary,
                    borderRadius: theme.borderRadius.lg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto ' + theme.spacing.md,
                  }}
                >
                  <Icon size={28} color={theme.colors.text.inverse} />
                </div>
                <h3 style={{ fontSize: theme.typography.fontSizes.lg, fontWeight: theme.typography.fontWeights.bold, marginBottom: theme.spacing.sm, color: theme.colors.text.primary }}>
                  {value.title}
                </h3>
                <p style={{ fontSize: theme.typography.fontSizes.sm, color: theme.colors.text.secondary, lineHeight: theme.typography.lineHeights.relaxed }}>
                  {value.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ marginBottom: theme.spacing['4xl'], padding: `${theme.spacing.xl} ${theme.spacing.xl}`, background: theme.colors.bg.light, borderRadius: theme.borderRadius.xl }}>
        <h2 style={{ fontSize: theme.typography.fontSizes['2xl'], fontWeight: theme.typography.fontWeights.bold, marginBottom: theme.spacing.md, textAlign: 'center', color: theme.colors.text.primary }}>
          Our Journey
        </h2>
        <p style={{ textAlign: 'center', color: theme.colors.text.secondary, marginBottom: theme.spacing.xl, fontSize: theme.typography.fontSizes.md }}>
          Milestones in our mission to help Indians achieve debt freedom
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: theme.spacing.xl }}>
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ display: 'flex', gap: theme.spacing.lg, alignItems: 'flex-start' }}
            >
              <div
                style={{
                  width: '80px',
                  minWidth: '80px',
                  height: '80px',
                  background: theme.colors.primary,
                  borderRadius: theme.borderRadius.xl,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.colors.text.inverse,
                  fontWeight: theme.typography.fontWeights.bold,
                  fontSize: theme.typography.fontSizes.lg,
                  boxShadow: theme.shadows.md,
                }}
              >
                {item.year}
              </div>
              <div>
                <h3 style={{ fontSize: theme.typography.fontSizes.lg, fontWeight: theme.typography.fontWeights.bold, marginBottom: theme.spacing.sm, color: theme.colors.text.primary }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: theme.typography.fontSizes.md, color: theme.colors.text.secondary }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={{ marginBottom: theme.spacing['4xl'] }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: theme.spacing.xl }}>
          {[
            { icon: Target, label: 'Our Mission', text: 'To provide transparent, ethical, and effective debt relief solutions that restore financial dignity and peace of mind to Indian families.' },
            { icon: Award, label: 'Our Vision', text: 'To become India\'s most trusted debt relief platform, helping millions achieve financial freedom through innovative, technology-driven solutions.' },
          ].map((section, idx) => {
            const SectionIcon = section.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                style={{
                  padding: theme.spacing.xl,
                  background: theme.colors.bg.light,
                  borderRadius: theme.borderRadius.xl,
                  border: `1px solid ${theme.colors.border}`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md, marginBottom: theme.spacing.lg }}>
                  <SectionIcon size={32} color={theme.colors.primary} />
                  <h3 style={{ fontSize: theme.typography.fontSizes.xl, fontWeight: theme.typography.fontWeights.bold, color: theme.colors.text.primary }}>
                    {section.label}
                  </h3>
                </div>
                <p style={{ fontSize: theme.typography.fontSizes.md, color: theme.colors.text.secondary, lineHeight: theme.typography.lineHeights.relaxed }}>
                  {section.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          background: theme.colors.primary,
          color: theme.colors.text.inverse,
          padding: theme.spacing['4xl'],
          borderRadius: theme.borderRadius.xl,
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: theme.typography.fontSizes['2xl'], fontWeight: theme.typography.fontWeights.bold, marginBottom: theme.spacing.lg }}>
          Ready to Start Your Debt-Free Journey?
        </h2>
        <p style={{ fontSize: theme.typography.fontSizes.lg, marginBottom: theme.spacing.xl, opacity: 0.95 }}>
          Join 50,000+ Indians who chose financial freedom with Penny & Debt
        </p>
        <div style={{ display: 'flex', gap: theme.spacing.lg, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/apply"
            style={{
              padding: `${theme.spacing.md} ${theme.spacing.xl}`,
              background: theme.colors.text.inverse,
              color: theme.colors.primary,
              borderRadius: theme.borderRadius.lg,
              fontWeight: theme.typography.fontWeights.bold,
              textDecoration: 'none',
              transition: `all ${theme.transitions.base} ease`,
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = theme.shadows.lg;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Get Free Consultation
          </Link>
          <Link
            to="/how-it-works"
            style={{
              padding: `${theme.spacing.md} ${theme.spacing.xl}`,
              background: 'transparent',
              color: theme.colors.text.inverse,
              border: `2px solid ${theme.colors.text.inverse}`,
              borderRadius: theme.borderRadius.lg,
              fontWeight: theme.typography.fontWeights.bold,
              textDecoration: 'none',
              transition: `all ${theme.transitions.base} ease`,
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
            }}
          >
            Learn How It Works
          </Link>
        </div>
      </motion.section>
    </PageLayout>
  );
};

export default About;