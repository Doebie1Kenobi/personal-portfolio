/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'mona': ['Mona Sans'],
      },
      height: {
        '1/3': '33vh',
        '1/2': '50vh',
        '2/3': '66vh',
        '3/4': '75vh',
        'half': '50%',
        '4/5': '80vh'
      }
    },
  },
  plugins: [],
}
