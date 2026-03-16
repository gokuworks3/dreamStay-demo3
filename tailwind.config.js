/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#061634',
        navy: '#0c2a59',
        royal: '#113b7a',
        gold: '#d4af37',
        ivory: '#fcfaf6',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 18px 60px -30px rgba(6, 22, 52, 0.55)',
      },
      backgroundImage: {
        'gold-sheen':
          'linear-gradient(130deg, rgba(212, 175, 55, 0.25) 0%, rgba(255, 255, 255, 0.12) 48%, rgba(12, 42, 89, 0.35) 100%)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 700ms ease-out both',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

