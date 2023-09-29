const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    extend: {
      colors: {
        background: {
          50: '#f6f6f9',
          100: '#edecf2',
          200: '#d6d5e2',
          300: '#b2afca',
          400: '#8784ac',
          500: '#696592',
          600: '#545079',
          700: '#464262',
          800: '#3c3953',
          900: '#353347',
          950: '#100f15',
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
