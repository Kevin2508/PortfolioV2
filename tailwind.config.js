/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF8F2',
        'paper-dark': '#F0EDE3',
        pencil: '#2B2B2B',
        graphite: '#5C5C5C',
        charcoal: '#1E1E1E',
        'sketch-blue': '#6B8CAE',
        'sketch-red': '#C97B7B',
        'sketch-tan': '#C4A882',
      },
      fontFamily: {
        sketch: ['Caveat', 'cursive'],
        hand: ['Just Another Hand', 'cursive'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture': "url('/textures/paper.svg')",
      },
      keyframes: {
        drawLine: {
          from: { strokeDashoffset: '1000' },
          to: { strokeDashoffset: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        scribble: {
          '0%': { opacity: '0', transform: 'scaleX(0)' },
          '100%': { opacity: '1', transform: 'scaleX(1)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pencilWrite: {
          from: { clipPath: 'inset(0 100% 0 0)' },
          to: { clipPath: 'inset(0 0% 0 0)' },
        },
      },
      animation: {
        'draw-line': 'drawLine 2s ease forwards',
        float: 'float 4s ease-in-out infinite',
        scribble: 'scribble 0.6s ease forwards',
        'fade-up': 'fadeInUp 0.8s ease forwards',
        'pencil-write': 'pencilWrite 1.2s ease forwards',
      },
    },
  },
  plugins: [],
}
