import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Target, Heart, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import CountUp from 'react-countup';
import PageLayout from '../components/PageLayout';
import theme from '../styles/theme';
import { ACHIEVEMENTS } from '../constants/achievements';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const stats = [
    { value: ACHIEVEMENTS.customers.value, suffix: '+', label: ACHIEVEMENTS.customers.label },
    { value: ACHIEVEMENTS.debtResolved.value, suffix: 'Cr+', prefix: '₹', label: ACHIEVEMENTS.debtResolved.label },
    { value: ACHIEVEMENTS.successRate.value, suffix: '%', label: ACHIEVEMENTS.successRate.label },
    { value: ACHIEVEMENTS.rating.value, suffix: '★', label: 'Customer Rating' },
  ];

  const values = [
    { 
      icon: Shield, 
      title: 'Transparency', 
      desc: 'We believe in complete transparency - no hidden fees or surprise charges. Every step of our process is clearly communicated and documented.' 
    },
    { 
      icon: Heart, 
      title: 'Client-Centric', 
      desc: 'Your financial well-being is our top priority. We provide personalized solutions tailored to your unique situation, not one-size-fits-all plans.' 
    },
    { 
      icon: Users, 
      title: 'Expert Team', 
      desc: 'Our team of certified financial experts, legal advisors, and negotiation specialists have helped thousands achieve debt freedom with proven strategies.' 
    },
    { 
      icon: Award, 
      title: 'Proven Results', 
      desc: `With a ${ACHIEVEMENTS.successRate.display} success rate and over ${ACHIEVEMENTS.debtResolved.display} settled, our track record speaks for itself. We measure our success by your financial freedom.` 
    },
  ];

  const timeline = [
    { year: '2020', title: 'Our Humble Beginnings', desc: 'Penny & Debt was founded in Faridabad with a vision to provide ethical debt relief solutions to middle-class Indian families struggling with financial burdens.' },
    { year: '2021', title: 'Rapid Growth', desc: 'Successfully helped thousands of clients settle significant debt, establishing ourselves as a trusted name in debt resolution.' },
    { year: '2022', title: 'AI-Powered Solutions', desc: 'Launched our proprietary AI platform that analyzes financial situations and predicts optimal settlement strategies, improving success rates by 35%.' },
    { year: '2023', title: 'National Recognition', desc: 'Featured in leading financial publications and recognized as one of the fastest-growing financial service providers in North India.' },
    { year: '2024', title: `${ACHIEVEMENTS.customers.display} Success Stories`, desc: `Crossed the milestone of helping ${ACHIEVEMENTS.customers.display} clients settle over ${ACHIEVEMENTS.debtResolved.display} in debt, with a ${ACHIEVEMENTS.successRate.display} customer satisfaction rate.` },
  ];

  return (
    <PageLayout
      showHero
      title="Empowering Indians to Achieve Debt Freedom"
      subtitle={`Founded in 2020, we've helped over ${ACHIEVEMENTS.customers.display} families settle ${ACHIEVEMENTS.debtResolved.display} in debt through transparent, ethical solutions.`}
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
              className="text-center"
              style={{
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
          Our Story: Empowering Financial Freedom Since 2020
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: theme.spacing.lg, lineHeight: theme.typography.lineHeights.relaxed, color: theme.colors.text.secondary, fontSize: theme.typography.fontSizes.md }}>
          <p>
            Penny & Debt was founded in Faridabad with a clear vision: to provide ethical, transparent, and effective debt relief solutions to middle-class Indian families. 
            What began as a small team of financial experts has grown into one of North India's most trusted debt resolution firms, helping over {ACHIEVEMENTS.customers.display} clients settle 
            more than {ACHIEVEMENTS.debtResolved.display} in debt to date.
          </p>
          <p>
            Our journey started when our founders witnessed firsthand the devastating impact of unmanageable debt on hardworking families. 
            They saw how traditional financial institutions often left people feeling trapped and powerless. 
            We set out to change that by creating a company that puts people first - offering not just debt settlement, 
            but a path to lasting financial freedom.
          </p>
          <p>
            Today, our team of certified financial experts, legal professionals, and customer success specialists work tirelessly 
            to negotiate with banks and financial institutions on your behalf. We've developed proprietary technology that helps us 
            analyze your financial situation and create customized debt relief strategies with a 97% success rate.
          </p>
          <p>
            But beyond the numbers, what truly drives us is the human impact of our work. 
            From helping families save their homes to giving individuals a fresh financial start, 
            our mission remains the same: to provide hope and real solutions to those struggling with debt. 
            With a {ACHIEVEMENTS.successRate.display} success rate, we're proud to be making a real difference.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section style={{ marginBottom: theme.spacing['4xl'] }}>
        <h2 className="text-center" style={{ fontSize: theme.typography.fontSizes['2xl'], fontWeight: theme.typography.fontWeights.bold, marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>
          Our Values
        </h2>
        <p className="text-center" style={{ color: theme.colors.text.secondary, marginBottom: theme.spacing.xl, fontSize: theme.typography.fontSizes.lg }}>
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
                className="text-center"
                style={{
                  padding: theme.spacing.xl,
                  background: theme.colors.bg.light,
                  borderRadius: theme.borderRadius.xl,
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
        <h2 className="text-center" style={{ fontSize: theme.typography.fontSizes['2xl'], fontWeight: theme.typography.fontWeights.bold, marginBottom: theme.spacing.md, color: theme.colors.text.primary }}>
          Our Journey
        </h2>
        <p className="text-center" style={{ color: theme.colors.text.secondary, marginBottom: theme.spacing.xl, fontSize: theme.typography.fontSizes.md }}>
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
        className="text-center"
        style={{
          background: 'linear-gradient(135deg, #FF9500 0%, #FFB84D 100%)',
          color: theme.colors.text.inverse,
          padding: theme.spacing['4xl'],
          borderRadius: theme.borderRadius.xl,
        }}
      >
        <h2 style={{ fontSize: theme.typography.fontSizes['2xl'], fontWeight: theme.typography.fontWeights.bold, marginBottom: theme.spacing.lg }}>
          Ready to Start Your Debt-Free Journey?
        </h2>
        <p style={{ fontSize: theme.typography.fontSizes.lg, marginBottom: theme.spacing.xl, opacity: 0.95 }}>
          Join {ACHIEVEMENTS.customers.display} Indians who chose financial freedom with Penny & Debt
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