/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14100C',
        basalt: '#1F1813',
        brass: '#A98247',
        gilt: '#DFC48C',
        linen: '#D8CEC2',
        porcelain: '#F3EEE8',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        brand: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
        widest3: '0.42em',
      },
      maxWidth: {
        shell: '84rem',
      },
      opacity: {
        12: '0.12',
        15: '0.15',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        85: '0.85',
        92: '0.92',
      },
    },
  },
  plugins: [],
}
