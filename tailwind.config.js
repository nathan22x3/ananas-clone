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
      gray: {
        100: '#f1f1f1',
        200: '#cccccc',
        300: '#808080',
        400: '#666666',
        500: '#4c4c4c',
        600: '#333333',
      },
      black: '#000000',
    },
    extend: {
      spacing: {
        7.5: '1.875rem',
        15: '3.75rem',
      },
    },
  },

  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
};
