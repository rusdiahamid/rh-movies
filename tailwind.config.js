/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#ECB365',
        secondary: '#064663',
        third: '#04293A',
        dark: '#041C32',
      },
    },
  },
  plugins: [],
};
