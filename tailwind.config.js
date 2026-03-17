/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deepBlue: '#0b1f3a',
        gold: '#d4af37',
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
        glow: '0 0 20px rgba(212, 175, 55, 0.5)',
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
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'glow-pulse': 'glowPulse 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

