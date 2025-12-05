import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import FloatingCTA from '../components/FloatingCTA';
import WhatsAppWidget from '../components/WhatsAppWidget';
import theme from '../styles/theme';
import { Grid, Card, HeroSection, SectionContainer, SectionTitle, SectionSubtitle } from '../components/StyledComponents';

const stats = [
  { label: 'Debt Analysed', value: '150', suffix: '+ Cr', prefix: '₹', icon: TrendingUp },
  { label: 'Clients Helped', value: '10000', suffix: '+', icon: Users },
  { label: 'Success Rate', value: '95', suffix: '%', icon: CheckCircle },
];

const steps = [
  { step: '1', title: 'Understand Your Debt', desc: 'We analyze your income, expenses, loans, and payment history.', icon: Shield },
  { step: '2', title: 'Design Relief Plan', desc: 'Our team creates a tailored strategy with realistic payment roadmap.', icon: Zap },
  { step: '3', title: 'Support Till Freedom', desc: 'Regular check-ins, plan adjustments, and guidance on dealing with lenders.', icon: ArrowRight },
];

export default function Home() {
  return (
    <>
      <SEO title="Turn Your Debt Into A Manageable Plan | Penny & Debt" />

      {/* Hero Section */}
      <HeroSection
        style={{
          background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: theme.spacing['3xl'],
            alignItems: 'center',
            maxWidth: '1280px',
            margin: '0 auto',
            padding: `0 ${theme.spacing.lg}`,
          }}
        >
          {/* Left: Text */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: theme.spacing.sm,
                background: 'rgba(255,255,255,0.1)',
                padding: `${theme.spacing.sm} ${theme.spacing.md}`,
                borderRadius: theme.borderRadius.full,
                marginBottom: theme.spacing.lg,
                backdropFilter: 'blur(10px)',
              }}
            >
              <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.9 }}>
                🇮🇳 Debt Relief • India
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                fontSize: theme.typography.fontSizes['4xl'],
                fontWeight: theme.typography.fontWeights.black,
                lineHeight: 1.2,
                marginBottom: theme.spacing.lg,
              }}
            >
              Turn Your <span style={{ color: '#FFD700' }}>Unmanageable Debt</span> Into a Clear Plan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                fontSize: theme.typography.fontSizes.lg,
                lineHeight: theme.typography.lineHeights.relaxed,
                marginBottom: theme.spacing.xl,
                opacity: 0.95,
              }}
            >
              Penny & Debt analyses your loans and credit cards, designs a realistic relief strategy, and keeps you on track—so you don't have to fight this alone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ display: 'flex', gap: theme.spacing.md, marginBottom: theme.spacing.xl, flexWrap: 'wrap' }}
            >
              <Link
                to="/apply"
                style={{
                  padding: `${theme.spacing.md} ${theme.spacing.xl}`,
                  background: theme.colors.text.inverse,
                  color: theme.colors.primary,
                  borderRadius: theme.borderRadius.lg,
                  textDecoration: 'none',
                  fontWeight: theme.typography.fontWeights.bold,
                  fontSize: theme.typography.fontSizes.md,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: theme.spacing.sm,
                  transition: `all ${theme.transitions.base} ease`,
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
                Check Your Eligibility <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                style={{
                  padding: `${theme.spacing.md} ${theme.spacing.xl}`,
                  background: 'transparent',
                  color: theme.colors.text.inverse,
                  border: `2px solid ${theme.colors.text.inverse}`,
                  borderRadius: theme.borderRadius.lg,
                  textDecoration: 'none',
                  fontWeight: theme.typography.fontWeights.semibold,
                  fontSize: theme.typography.fontSizes.md,
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
                Book Free Consultation
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ display: 'flex', gap: theme.spacing.xl, flexWrap: 'wrap', fontSize: theme.typography.fontSizes.sm, opacity: 0.9 }}
            >
              {[
                '✓ 1:1 Human Counsellors',
                '✓ Data Kept Private & Secure',
                '✓ RBI Compliant',
              ].map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ display: 'grid', gap: theme.spacing.md }}
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  style={{
                    padding: theme.spacing.lg,
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: theme.borderRadius.xl,
                    border: `1px solid rgba(255,255,255,0.2)`,
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer',
                    transition: `all ${theme.transitions.base} ease`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div>
                      <p style={{ fontSize: theme.typography.fontSizes.xs, opacity: 0.8, marginBottom: theme.spacing.sm, textTransform: 'uppercase' }}>
                        {stat.label}
                      </p>
                      <p style={{ fontSize: theme.typography.fontSizes['2xl'], fontWeight: theme.typography.fontWeights.bold }}>
                        {stat.prefix}
                        {stat.value}
                        {stat.suffix}
                      </p>
                    </div>
                    <div style={{ padding: theme.spacing.md, background: 'rgba(255,255,255,0.2)', borderRadius: theme.borderRadius.lg }}>
                      <Icon size={24} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </HeroSection>

      {/* How It Works Section */}
      <SectionContainer bgLight>
        <SectionTitle>How Penny & Debt Helps You</SectionTitle>
        <SectionSubtitle>Simple, transparent, and effective debt relief process</SectionSubtitle>

        <Grid gap={theme.spacing.xl}>
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card>
                  <div style={{ display: 'flex', gap: theme.spacing.lg, alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '64px',
                        minWidth: '64px',
                        height: '64px',
                        background: theme.colors.primary,
                        borderRadius: theme.borderRadius.lg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: theme.colors.text.inverse,
                        fontWeight: theme.typography.fontWeights.bold,
                        fontSize: theme.typography.fontSizes.xl,
                      }}
                    >
                      <Icon size={28} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: theme.typography.fontSizes.lg, fontWeight: theme.typography.fontWeights.bold, marginBottom: theme.spacing.sm, color: theme.colors.text.primary }}>
                        {item.title}
                      </h3>
                      <p style={{ color: theme.colors.text.secondary, fontSize: theme.typography.fontSizes.base, lineHeight: theme.typography.lineHeights.relaxed }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </Grid>
      </SectionContainer>

      {/* Why Choose Us Section */}
      <SectionContainer>
        <SectionTitle>Why Choose Penny & Debt?</SectionTitle>
        <Grid gap={theme.spacing.xl}>
          {[
            { icon: '⚖️', title: '100% Legal & RBI Compliant', desc: 'All our practices are legally sound and RBI-approved.' },
            { icon: '🛡️', title: 'Complete Data Privacy', desc: 'Your financial information is encrypted and secure.' },
            { icon: '📞', title: 'Expert Counsellors', desc: '1:1 personalized support from financial experts.' },
            { icon: '💰', title: 'Up to 70% Debt Reduction', desc: 'Proven track record of significant debt reduction.' },
            { icon: '⏱️', title: 'Fast Process', desc: 'Quick assessment and swift relief plan implementation.' },
            { icon: '🎯', title: 'Transparent Pricing', desc: 'No hidden charges, everything upfront and clear.' },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <Card>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '40px', marginBottom: theme.spacing.md }}>{feature.icon}</div>
                  <h3 style={{ fontSize: theme.typography.fontSizes.lg, fontWeight: theme.typography.fontWeights.bold, marginBottom: theme.spacing.sm, color: theme.colors.text.primary }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: theme.colors.text.secondary, fontSize: theme.typography.fontSizes.sm, lineHeight: theme.typography.lineHeights.relaxed }}>
                    {feature.desc}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </SectionContainer>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`,
          color: theme.colors.text.inverse,
          padding: theme.spacing['4xl'] + ' ' + theme.spacing.lg,
          textAlign: 'center',
          marginBottom: 0,
        }}
      >
        <h2 style={{ fontSize: theme.typography.fontSizes['2xl'], fontWeight: theme.typography.fontWeights.bold, marginBottom: theme.spacing.lg }}>
          Start Your Debt-Free Journey Today
        </h2>
        <p style={{ fontSize: theme.typography.fontSizes.lg, marginBottom: theme.spacing.xl, maxWidth: '600px', margin: '0 auto ' + theme.spacing.xl }}>
          Join 10,000+ Indians who achieved financial freedom with our expert guidance.
        </p>
        <Link
          to="/apply"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: theme.spacing.sm,
            padding: `${theme.spacing.md} ${theme.spacing.xl}`,
            background: theme.colors.text.inverse,
            color: theme.colors.primary,
            borderRadius: theme.borderRadius.lg,
            textDecoration: 'none',
            fontWeight: theme.typography.fontWeights.bold,
            fontSize: theme.typography.fontSizes.md,
            transition: `all ${theme.transitions.base} ease`,
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
          Apply Now - It's Free <ArrowRight size={20} />
        </Link>
      </motion.section>

      <FloatingCTA />
      <WhatsAppWidget />
    </>
  );
}
