/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#3b163f",
        primaryD : "#300c32",
        body : "#f7fafc",
        secondary : "#b7791f",
        purpleL:"#805683",
        lred:"#bc2453"
      },
      fontFamily:{
        main : ['Nunito']
      }
    },
  },
  plugins: [],
}
