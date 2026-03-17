/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deepBlue: '#0b1f3a',
        gold: '#d4af37',
        goldLight: '#e6c65a',
        goldDark: '#b8961f',
        pureWhite: '#ffffff',
        blueSoft: '#18335a',
        blueDark: '#07162b',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 10px 40px rgba(8, 27, 52, 0.38)',
        'glass-strong': '0 16px 60px rgba(8, 27, 52, 0.55)',
        glow: '0 0 20px rgba(212, 175, 55, 0.5)',
        'glow-lg': '0 0 40px rgba(212, 175, 55, 0.35), 0 0 80px rgba(212, 175, 55, 0.15)',
        'gold-border': 'inset 0 0 0 1px rgba(212, 175, 55, 0.3)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(212, 175, 55, 0)' },
          '50%': { boxShadow: '0 0 22px rgba(212, 175, 55, 0.45)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scrollDown: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '75%': { opacity: '0.4', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        revealLine: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'glow-pulse': 'glowPulse 2.4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        'scroll-down': 'scrollDown 1.8s ease-in-out infinite',
        'reveal-line': 'revealLine 0.6s ease-out forwards',
        spin: 'spin 1.2s linear infinite',
      },
    },
  },
  plugins: [],
}

