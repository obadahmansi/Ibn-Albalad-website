/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  theme: {
    colors: {
      ...colors,
      'drkblue': '#112D4E',
      'rgblue': '#3F72AF',
      'lightblue': '#DBE2EF',
      'bgblue': '#F9F7F7',

    },
  },
  plugins: [],
}

