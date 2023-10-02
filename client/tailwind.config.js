/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'navblue':'#0C3C60',
      },
      spacing: {
        '1/6': '16.666667%',
      },
      backgroundImage:{
        'bg1':'url("https://www.analyticsinsight.net/wp-content/uploads/2017/08/Contri.png")',
      }
    },
  },
  plugins: [],
}