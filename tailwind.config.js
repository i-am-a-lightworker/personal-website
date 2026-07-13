/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#F8FAFC',
        primary: '#0F172A',
        accent: '#1E3A8A',
        mutedBlue: '#CBD5E1',
        lightGray: '#E2E8F0',
        goldAccent: '#C9A227',
        text: '#111827',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 40px rgba(15,23,42,0.08)',
      },
    },
  },
  plugins: [],
};
