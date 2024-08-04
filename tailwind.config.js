/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#000A0F',
        'dark-dark': '#001119', 
        'tomato': '#750310',
        'tomato-dark': '#5a0210',
        'secondary': '#0D1D25',
        'ultra-dark': '#00111A',
        'gradient-dark': '#091E26',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}