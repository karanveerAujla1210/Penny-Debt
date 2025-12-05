import theme from '../styles/theme';

/**
 * Common styled components for consistent design
 */

export const SectionContainer = ({ children, bgLight = false, ...props }) => (
  <section
    style={{
      padding: `${theme.spacing['3xl']} 0`,
      background: bgLight ? theme.colors.bg.light : theme.colors.bg.white,
      ...props.style,
    }}
    {...props}
  >
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: `0 ${theme.spacing.lg}` }}>
      {children}
    </div>
  </section>
);

export const SectionTitle = ({ children, centered = true, ...props }) => (
  <h2
    style={{
      fontSize: theme.typography.fontSizes['2xl'],
      fontWeight: theme.typography.fontWeights.bold,
      marginBottom: theme.spacing.lg,
      textAlign: centered ? 'center' : 'left',
      color: theme.colors.text.primary,
      ...props.style,
    }}
    {...props}
  >
    {children}
  </h2>
);

export const SectionSubtitle = ({ children, centered = true, ...props }) => (
  <p
    style={{
      fontSize: theme.typography.fontSizes.lg,
      color: theme.colors.text.secondary,
      textAlign: centered ? 'center' : 'left',
      marginBottom: theme.spacing.xl,
      lineHeight: theme.typography.lineHeights.relaxed,
      ...props.style,
    }}
    {...props}
  >
    {children}
  </p>
);

export const Card = ({ children, hover = true, ...props }) => (
  <div
    style={{
      padding: theme.spacing.xl,
      background: theme.colors.bg.white,
      borderRadius: theme.borderRadius.xl,
      border: `1px solid ${theme.colors.border}`,
      transition: `all ${theme.transitions.base} ease`,
      cursor: hover ? 'pointer' : 'default',
      ...props.style,
    }}
    onMouseEnter={
      hover
        ? (e) => {
            e.currentTarget.style.boxShadow = theme.shadows.lg;
            e.currentTarget.style.borderColor = theme.colors.primary;
            e.currentTarget.style.transform = 'translateY(-4px)';
          }
        : undefined
    }
    onMouseLeave={
      hover
        ? (e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = theme.colors.border;
            e.currentTarget.style.transform = 'translateY(0)';
          }
        : undefined
    }
    {...props}
  >
    {children}
  </div>
);

export const Button = ({ children, primary = true, ...props }) => (
  <button
    style={{
      padding: `${theme.spacing.md} ${theme.spacing.xl}`,
      background: primary ? theme.colors.primary : 'transparent',
      color: primary ? theme.colors.text.inverse : theme.colors.primary,
      border: primary ? 'none' : `2px solid ${theme.colors.primary}`,
      borderRadius: theme.borderRadius.lg,
      fontWeight: theme.typography.fontWeights.semibold,
      fontSize: theme.typography.fontSizes.sm,
      cursor: 'pointer',
      transition: `all ${theme.transitions.base} ease`,
      fontFamily: theme.typography.fontFamily.primary,
      ...props.style,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = theme.shadows.hover;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
    {...props}
  >
    {children}
  </button>
);

export const Grid = ({ columns = 3, gap = theme.spacing.lg, children, ...props }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`,
      gap,
      ...props.style,
    }}
    {...props}
  >
    {children}
  </div>
);

export const Badge = ({ children, variant = 'primary', ...props }) => (
  <span
    style={{
      display: 'inline-block',
      padding: `${theme.spacing.xs} ${theme.spacing.md}`,
      background:
        variant === 'primary'
          ? theme.colors.primary
          : variant === 'success'
            ? theme.colors.success
            : theme.colors.bg.light,
      color:
        variant === 'primary' || variant === 'success' ? theme.colors.text.inverse : theme.colors.text.primary,
      borderRadius: theme.borderRadius.full,
      fontSize: theme.typography.fontSizes.xs,
      fontWeight: theme.typography.fontWeights.semibold,
      ...props.style,
    }}
    {...props}
  >
    {children}
  </span>
);

export const HeroSection = ({ title, subtitle, children, ...props }) => (
  <section
    style={{
      background: theme.colors.primary,
      color: theme.colors.text.inverse,
      padding: `${theme.spacing['4xl']} 0`,
      textAlign: 'center',
      marginBottom: theme.spacing['3xl'],
      position: 'relative',
      overflow: 'hidden',
      ...props.style,
    }}
    {...props}
  >
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
        `,
        pointerEvents: 'none',
      }}
    />
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: `0 ${theme.spacing.lg}`, position: 'relative', zIndex: 1 }}>
      {title && (
        <h1
          style={{
            fontSize: theme.typography.fontSizes['3xl'],
            fontWeight: theme.typography.fontWeights.extrabold,
            marginBottom: theme.spacing.lg,
            lineHeight: theme.typography.lineHeights.tight,
          }}
        >
          {title}
        </h1>
      )}
      {subtitle && (
        <p style={{ fontSize: theme.typography.fontSizes.lg, opacity: 0.95, marginBottom: theme.spacing.xl }}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  </section>
);

export default {
  SectionContainer,
  SectionTitle,
  SectionSubtitle,
  Card,
  Button,
  Grid,
  Badge,
  HeroSection,
};
