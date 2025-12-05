import React from 'react';
import theme from '../styles/theme';

/**
 * PageLayout Component
 * Provides consistent styling, spacing, and layout for all pages
 */
const PageLayout = ({
  children,
  title,
  subtitle,
  showHero = false,
  heroContent = null,
  className = '',
  bgLight = false,
}) => {
  return (
    <div
      className={className}
      style={{
        minHeight: 'calc(100vh - 72px)',
        background: bgLight ? theme.colors.bg.light : theme.colors.bg.white,
        fontFamily: theme.typography.fontFamily.primary,
      }}
    >
      {/* Hero Section */}
      {showHero && (
        <section
          className="text-center"
          style={{
            background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`,
            color: theme.colors.text.inverse,
            padding: `${theme.spacing['4xl']} 0`,
            marginBottom: theme.spacing['3xl'],
            position: 'relative',
            overflow: 'hidden',
          }}
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

          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: `0 ${theme.spacing.lg}`,
              position: 'relative',
              zIndex: 1,
            }}
          >
            {title && (
              <h1
                style={{
                  fontSize: theme.typography.fontSizes['3xl'],
                  fontWeight: theme.typography.fontWeights.bold,
                  marginBottom: theme.spacing.md,
                  lineHeight: theme.typography.lineHeights.tight,
                }}
              >
                {title}
              </h1>
            )}

            {subtitle && (
              <p
                style={{
                  fontSize: theme.typography.fontSizes.lg,
                  opacity: 0.95,
                  maxWidth: '800px',
                  margin: '0 auto',
                  lineHeight: theme.typography.lineHeights.relaxed,
                }}
              >
                {subtitle}
              </p>
            )}

            {heroContent && <div style={{ marginTop: theme.spacing.xl }}>{heroContent}</div>}
          </div>
        </section>
      )}

      {/* Content Section */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: `0 ${theme.spacing.lg} ${theme.spacing['4xl']} ${theme.spacing.lg}`,
          width: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
