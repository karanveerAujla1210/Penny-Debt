/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A4DFF',
        primaryDark: '#0039CC',
        primaryLight: '#E6EEFF',

        secondary: '#5CAEFF',
        secondaryLight: '#E3EAF6',

        accent: '#00D49E',
        accent2: '#04A0A0',

        dark: '#0F172A',
        grayText: '#475569',
        lightGray: '#F1F5F9',

        success: '#16A34A',
        warning: '#F59E0B',
        danger: '#DC2626'
      },
    },
  },
  plugins: [],
}
