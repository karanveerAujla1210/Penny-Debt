import theme from '../styles/theme';
import { Link } from 'react-router-dom';

/**
 * Common styled components for consistent design with orange-golden accents
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

export const SectionTitle = ({ children, centered = true, highlight = false, ...props }) => (
  <h2
    style={{
      fontSize: theme.typography.fontSizes['2xl'],
      fontWeight: theme.typography.fontWeights.bold,
      marginBottom: theme.spacing.lg,
      textAlign: centered ? 'center' : 'left',
      color: highlight ? theme.colors.text.golden : theme.colors.text.primary,
      background: highlight ? `linear-gradient(135deg, ${theme.colors.golden[500]}, ${theme.colors.orange[500]})` : 'none',
      WebkitBackgroundClip: highlight ? 'text' : 'unset',
      WebkitTextFillColor: highlight ? 'transparent' : 'unset',
      backgroundClip: highlight ? 'text' : 'unset',
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

export const Card = ({ children, hover = true, accent = false, ...props }) => (
  <div
    style={{
      padding: theme.spacing.xl,
      background: theme.colors.bg.white,
      borderRadius: theme.borderRadius.xl,
      border: accent ? `2px solid ${theme.colors.golden[400]}` : `1px solid ${theme.colors.border}`,
      transition: `all ${theme.transitions.base} ease`,
      cursor: hover ? 'pointer' : 'default',
      position: 'relative',
      overflow: 'hidden',
      ...props.style,
    }}
    onMouseEnter={
      hover
        ? (e) => {
            const accentBorder = accent ? theme.colors.orange[400] : theme.colors.primary;
            const shadowColor = accent ? 'rgba(255, 165, 0, 0.2)' : 'rgba(0, 59, 255, 0.15)';
            e.currentTarget.style.boxShadow = `0 8px 32px ${shadowColor}`;
            e.currentTarget.style.borderColor = accentBorder;
            e.currentTarget.style.transform = 'translateY(-4px)';
          }
        : undefined
    }
    onMouseLeave={
      hover
        ? (e) => {
            const accentBorder = accent ? theme.colors.golden[400] : theme.colors.border;
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = accentBorder;
            e.currentTarget.style.transform = 'translateY(0)';
          }
        : undefined
    }
    {...props}
  >
    {children}
  </div>
);

import theme from '../styles/theme';

/**
 * Common styled components for consistent design with orange-golden accents
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

export const SectionTitle = ({ children, centered = true, highlight = false, ...props }) => (
  <h2
    style={{
      fontSize: theme.typography.fontSizes['2xl'],
      fontWeight: theme.typography.fontWeights.bold,
      marginBottom: theme.spacing.lg,
      textAlign: centered ? 'center' : 'left',
      color: highlight ? theme.colors.text.golden : theme.colors.text.primary,
      background: highlight ? `linear-gradient(135deg, ${theme.colors.golden[500]}, ${theme.colors.orange[500]})` : 'none',
      WebkitBackgroundClip: highlight ? 'text' : 'unset',
      WebkitTextFillColor: highlight ? 'transparent' : 'unset',
      backgroundClip: highlight ? 'text' : 'unset',
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

export const Card = ({ children, hover = true, accent = false, ...props }) => (
  <div
    style={{
      padding: theme.spacing.xl,
      background: theme.colors.bg.white,
      borderRadius: theme.borderRadius.xl,
      border: accent ? `2px solid ${theme.colors.golden[400]}` : `1px solid ${theme.colors.border}`,
      transition: `all ${theme.transitions.base} ease`,
      cursor: hover ? 'pointer' : 'default',
      position: 'relative',
      overflow: 'hidden',
      ...props.style,
    }}
    onMouseEnter={
      hover
        ? (e) => {
            const accentBorder = accent ? theme.colors.orange[400] : theme.colors.primary;
            const shadowColor = accent ? 'rgba(255, 165, 0, 0.2)' : 'rgba(0, 59, 255, 0.15)';
            e.currentTarget.style.boxShadow = `0 8px 32px ${shadowColor}`;
            e.currentTarget.style.borderColor = accentBorder;
            e.currentTarget.style.transform = 'translateY(-4px)';
          }
        : undefined
    }
    onMouseLeave={
      hover
        ? (e) => {
            const accentBorder = accent ? theme.colors.golden[400] : theme.colors.border;
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = accentBorder;
            e.currentTarget.style.transform = 'translateY(0)';
          }
        : undefined
    }
    {...props}
  >
    {children}
  </div>
);

export const Button = ({ children, primary = true, variant = 'primary', to, href, ...props }) => {
  let bgColor = primary ? theme.colors.primary : 'transparent';
  let textColor = primary ? theme.colors.text.inverse : theme.colors.primary;
  let borderColor = primary ? 'none' : `2px solid ${theme.colors.primary}`;

  if (variant === 'golden') {
    bgColor = `linear-gradient(135deg, ${theme.colors.golden[500]}, ${theme.colors.orange[600]})`;
    textColor = theme.colors.text.inverse;
    borderColor = 'none';
  } else if (variant === 'golden-outline') {
    bgColor = 'transparent';
    textColor = theme.colors.golden[600];
    borderColor = `2px solid ${theme.colors.golden[500]}`;
  }

  const sharedStyle = {
    padding: `${theme.spacing.md} ${theme.spacing.xl}`,
    background: bgColor,
    color: textColor,
    border: borderColor,
    borderRadius: theme.borderRadius.lg,
    fontWeight: theme.typography.fontWeights.semibold,
    fontSize: theme.typography.fontSizes.sm,
    cursor: 'pointer',
    transition: `all ${theme.transitions.base} ease`,
    fontFamily: theme.typography.fontFamily.primary,
    boxShadow: variant === 'golden' ? `0 4px 20px rgba(255, 165, 0, 0.2)` : 'none',
    ...props.style,
  };

  const commonHandlers = {
    onMouseEnter: (e) => {
      try { e.currentTarget.style.transform = 'translateY(-2px)'; } catch (err) {}
      if (variant === 'golden') {
        try { e.currentTarget.style.boxShadow = `0 8px 32px rgba(255, 165, 0, 0.35)`; } catch (err) {}
      }
    },
    onMouseLeave: (e) => {
      try { e.currentTarget.style.transform = 'translateY(0)'; } catch (err) {}
      try { e.currentTarget.style.boxShadow = variant === 'golden' ? `0 4px 20px rgba(255, 165, 0, 0.2)` : 'none'; } catch (err) {}
    }
  };

  // Prefer react-router Link when `to` is provided, anchor when `href` is provided.
  if (to) {
    return (
      <Link to={to} style={sharedStyle} {...commonHandlers} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} style={sharedStyle} {...commonHandlers} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button style={sharedStyle} {...commonHandlers} {...props}>
      {children}
    </button>
  );
};

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

export const Badge = ({ children, variant = 'primary', ...props }) => {
  let bgColor = theme.colors.primary;
  let textColor = theme.colors.text.inverse;

  if (variant === 'golden') {
    bgColor = `linear-gradient(135deg, ${theme.colors.golden[500]}, ${theme.colors.orange[500]})`;
  } else if (variant === 'success') {
    bgColor = theme.colors.success;
  } else if (variant === 'light') {
    bgColor = theme.colors.bg.light;
    textColor = theme.colors.text.primary;
  }

  return (
    <span
      style={{
        display: 'inline-block',
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        background: bgColor,
        color: textColor,
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
};

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
          radial-gradient(circle at 20% 50%, rgba(255, 165, 0, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 50%, rgba(255, 153, 0, 0.05) 0%, transparent 50%)
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

// Golden accent divider
export const GoldenDivider = ({ ...props }) => (
  <div
    style={{
      height: '3px',
      background: `linear-gradient(90deg, ${theme.colors.golden[500]}, ${theme.colors.orange[500]})`,
      borderRadius: theme.borderRadius.full,
      margin: `${theme.spacing.lg} auto`,
      width: '60px',
      ...props.style,
    }}
    {...props}
  />
);

// Premium highlight text
export const HighlightText = ({ children, ...props }) => (
  <span
    style={{
      background: `linear-gradient(135deg, ${theme.colors.golden[500]}, ${theme.colors.orange[500]})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontWeight: theme.typography.fontWeights.bold,
      ...props.style,
    }}
    {...props}
  >
    {children}
  </span>
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
  GoldenDivider,
  HighlightText,
};
