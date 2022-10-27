/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
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
