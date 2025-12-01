/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Royal Blue Primary System
        primary: {
          DEFAULT: "#0A4DFF",
          foreground: "#FFFFFF",
          light: "#E6EEFF",
          dark: "#0039CC",
          50: "#F0F5FF",
          100: "#E6EEFF",
          500: "#0A4DFF",
          600: "#0039CC",
        },
        
        secondary: {
          DEFAULT: "#F8FAFC",
          foreground: "#1E293B",
        },
        
        accent: {
          DEFAULT: "#0A4DFF",
          foreground: "#FFFFFF",
        },
        
        success: {
          DEFAULT: "#10B981",
          foreground: "#FFFFFF",
        },
        
        warning: {
          DEFAULT: "#F59E0B",
          foreground: "#FFFFFF",
        },
        
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        
        muted: {
          DEFAULT: "#F8FAFC",
          foreground: "#64748B",
        },
        
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#0F172A",
        },
        
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      
      // Square corners with minimal rounding
      borderRadius: {
        none: '0',
        sm: '0.25rem',
        DEFAULT: '0.375rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },
      
      // Neumorphic shadows
      boxShadow: {
        sm: '0 1px 2px 0 rgba(10, 77, 255, 0.05)',
        DEFAULT: '0 2px 8px -2px rgba(10, 77, 255, 0.08)',
        md: '0 4px 12px -2px rgba(10, 77, 255, 0.1)',
        lg: '0 8px 24px -4px rgba(10, 77, 255, 0.12)',
        xl: '0 16px 40px -8px rgba(10, 77, 255, 0.15)',
        '2xl': '0 24px 60px -12px rgba(10, 77, 255, 0.2)',
        neumorphic: '8px 8px 16px rgba(10, 77, 255, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)',
        inner: 'inset 0 2px 4px 0 rgba(10, 77, 255, 0.06)',
        none: 'none',
      },
      
      // Animation
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "slide-up": {
          from: { transform: 'translateY(10px)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 },
        },
      },
      
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
      },
      
      // Custom spacing
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
}
