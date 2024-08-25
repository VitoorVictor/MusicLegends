/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-10': '#131313',
        'brand-color': '#EB4848',
        'gray-10' : '#929292',
      },
    },
  },
  plugins: [],
}