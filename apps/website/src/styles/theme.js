/**
 * Unified Theme Configuration for Penny & Debt Website
 * Single source of truth for all colors, typography, spacing, and animations
 */

export const theme = {
  // PRIMARY COLORS - Fintech Blue Theme with Orange-Golden Accents
  colors: {
    primary: '#003BFF', // Royal Blue
    primaryDark: '#0025B3',
    primaryLight: '#4D6FFF',
    accent: '#0066FF',
    
    // Orange & Golden accent colors - NEW
    golden: {
      50: '#FFF9E6',
      100: '#FFEDD4',
      200: '#FFD9A8',
      300: '#FFC97D',
      400: '#FFB951',
      500: '#FFA500', // Main Golden Orange
      600: '#FF9500',
      700: '#E68500',
      800: '#CC7500',
      900: '#B36500',
    },
    
    orange: {
      50: '#FFF5E6',
      100: '#FFEBCC',
      200: '#FFD699',
      300: '#FFC266',
      400: '#FFAD33',
      500: '#FF9900', // Vibrant Orange
      600: '#FF8800',
      700: '#E67E00',
      800: '#CC7000',
      900: '#B36000',
    },
    
    amber: {
      500: '#FFB84D', // Light amber
      600: '#FF9E1B', // Medium amber
    },
    
    // Background colors
    bg: {
      white: '#FFFFFF',
      light: '#F5F7FF',
      lighter: '#F9FAFF',
      dark: '#0A0E27',
      darkCard: '#1a1f3a',
      goldenLight: '#FFFCF0',
    },
    
    // Text colors
    text: {
      primary: '#0D0D0D',
      secondary: '#333333',
      tertiary: '#666666',
      light: '#999999',
      inverse: '#FFFFFF',
      golden: '#FF9900',
      goldenDark: '#E68500',
    },
    
    // Semantic colors
    success: '#00B74A',
    warning: '#FFA500',
    error: '#FF3B3B',
    info: '#0066FF',
    
    // Borders
    border: '#E0E0E0',
    borderLight: '#F0F0F0',
    borderDark: '#2a2f45',
    borderGolden: '#FFD9A8',
  },

  // TYPOGRAPHY - Single Font: Segoe UI / Inter fallback
  typography: {
    fontFamily: {
      primary: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
      code: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
    },
    
    fontSizes: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      md: '1.125rem',     // 18px
      lg: '1.5rem',       // 24px
      xl: '1.875rem',     // 30px
      '2xl': '2.25rem',   // 36px
      '3xl': '3rem',      // 48px
      '4xl': '3.75rem',   // 60px
    },
    
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    
    lineHeights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
  },

  // SPACING - 8px scale
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '80px',
    '5xl': '96px',
    '6xl': '128px',
  },

  // BORDER RADIUS
  borderRadius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    '3xl': '32px',
    full: '9999px',
  },

  // SHADOWS
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 20px rgba(0, 0, 0, 0.04)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.06)',
    xl: '0 20px 60px rgba(0, 0, 0, 0.12)',
    '2xl': '0 28px 80px rgba(15, 23, 42, 0.95)',
    hover: '0 8px 32px rgba(0, 59, 255, 0.15)',
  },

  // Z-INDEX SCALE
  zIndex: {
    hide: -1,
    base: 0,
    dropdown: 100,
    sticky: 200,
    fixed: 300,
    backdrop: 400,
    offcanvas: 500,
    modal: 600,
    tooltip: 700,
    notification: 800,
    navbar: 1000,
  },

  // TRANSITIONS & ANIMATIONS
  transitions: {
    fast: '150ms',
    base: '250ms',
    slow: '400ms',
    slower: '600ms',
  },

  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // COMPONENT SIZES
  components: {
    navbar: {
      height: '72px',
      mobileHeight: '64px',
    },
    button: {
      sm: {
        padding: '8px 16px',
        fontSize: '0.875rem',
        height: '36px',
      },
      md: {
        padding: '12px 24px',
        fontSize: '1rem',
        height: '44px',
      },
      lg: {
        padding: '16px 32px',
        fontSize: '1.125rem',
        height: '52px',
      },
    },
    input: {
      height: '44px',
      padding: '12px 16px',
      fontSize: '1rem',
    },
  },
};

export default theme;
