const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      "2xsm": "375px",
      xsm: "425px",
      xs: "450px",
      md: '768px',
      "3xl": "2000px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#164B66",
        secondary: "#4E798D",
        terciary: "#151030",
      }
    },
  },
  plugins: [],
};
