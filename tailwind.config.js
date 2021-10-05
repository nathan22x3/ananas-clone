const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'nunito-sans': ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      geometric: ['Geometric', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      white: '#ffffff',
      orange: '#f15e2c',
      black: '#000000',
    },
  },

  plugins: [require('@tailwindcss/typography')],
};
