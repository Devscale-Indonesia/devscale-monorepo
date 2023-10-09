const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    fontFamily: {
      display: ['TTFirsNeue', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        background: {
          50: '#f5f5fa',
          100: '#e9e9f5',
          200: '#cfd0e8',
          300: '#a5a9d4',
          400: '#747bbc',
          500: '#535aa4',
          600: '#404489',
          700: '#343770',
          800: '#2e305e',
          900: '#2b2c4f',
          950: '#07070d',
        },
        primary: {
          50: '#fff4ed',
          100: '#ffe7d5',
          200: '#fdcbab',
          300: '#fca675',
          400: '#f9763e',
          500: '#f75118',
          600: '#e8380e',
          700: '#c0270e',
          800: '#992113',
          900: '#7b1e13',
          950: '#420b08',
        },
      },
      borderWidth: {
        1.5: '1.5px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
