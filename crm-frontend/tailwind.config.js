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
        // Fintech color palette
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Primary - Deep Blue (Trust, Stability)
        primary: {
          DEFAULT: "hsl(221, 83%, 53%)",
          foreground: "hsl(210, 40%, 98%)",
          light: "hsl(214, 95%, 93%)",
          dark: "hsl(224, 76%, 48%)",
        },
        
        // Secondary - Teal (Growth, Innovation)
        secondary: {
          DEFAULT: "hsl(173, 80%, 36%)",
          foreground: "hsl(166, 76%, 97%)",
          light: "hsl(166, 76%, 97%)",
          dark: "hsl(175, 84%, 32%)",
        },
        
        // Accent - Violet (Creativity, Luxury)
        accent: {
          DEFAULT: "hsl(262, 83%, 58%)",
          foreground: "hsl(250, 100%, 98%)",
        },
        
        // Success - Green (Positive, Success)
        success: {
          DEFAULT: "hsl(160, 84%, 39%)",
          foreground: "hsl(156, 72%, 97%)",
        },
        
        // Warning - Amber (Caution, Warning)
        warning: {
          DEFAULT: "hsl(38, 92%, 50%)",
          foreground: "hsl(38, 96%, 10%)",
        },
        
        // Destructive - Red (Error, Danger)
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 86%, 97%)",
        },
        
        // Neutrals
        muted: {
          DEFAULT: "hsl(210, 20%, 98%)",
          foreground: "hsl(215.4, 16.3%, 46.9%)",
        },
        
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(222.2, 84%, 4.9%)",
        },
        
        // Additional fintech colors
        neutral: {
          50: "hsl(210, 20%, 99%)",
          100: "hsl(210, 20%, 98%)",
          200: "hsl(214.3, 31.8%, 91.4%)",
          300: "hsl(213, 27%, 84%)",
          400: "hsl(215, 20.2%, 65.1%)",
          500: "hsl(215, 16%, 47%)",
          600: "hsl(215, 19%, 35%)",
          700: "hsl(215, 25%, 27%)",
          800: "hsl(217.2, 32.6%, 17.5%)",
          900: "hsl(218, 33%, 9%)",
        },
      },
      
      // Border radius
      borderRadius: {
        none: '0',
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.625rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        full: '9999px',
      },
      
      // Box shadow
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
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
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
