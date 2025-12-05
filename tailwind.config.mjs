/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.*', './public/**/*.*'],
  theme: {
    extend: {
      colors: {
        pine: {
          50: '#f5f8f5',
          100: '#e8f0e8',
          200: '#c7e0c7',
          300: '#a3cfa3',
          400: '#78b378',
          500: '#4d964d',
          600: '#3a783a',
          700: '#2d5f2d',
          800: '#234f23',
          900: '#1a3d1a',
          950: '#0f280f',
        },
        gold: '#b89f6b',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};