const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
    './src/components/**/*.vue',
    './src/pages/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    colors: {
      gray: colors.blueGray,
      indigo: colors.indigo,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
