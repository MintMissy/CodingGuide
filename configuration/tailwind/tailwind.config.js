/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#393A5F',
          100: '#343657',
          200: '#303150',
          300: '#2B2D49',
          400: '#272842',
          500: '#22233A',
          600: '#1E1F33',
          700: '#191A2C',
          800: '#151624',
          900: '#10111D' 
        },
        primary: require('tailwindcss/colors').amber,
        accent: require('tailwindcss/colors').indigo
      }
    },
  },
  plugins: [],
}
