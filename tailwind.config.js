/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#319795",
        body : "#f7fafc",
        secondary : "#b7791f",
      },
      fontFamily:{
        main : ['Nunito']
      }
    },
  },
  plugins: [],
}
