/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans : ['Poppins','sans-serif']
      },
      gridTemplateColumns:{
        '70/30' : '70% 30%'
      }
    },
  },
  plugins: [],
};
