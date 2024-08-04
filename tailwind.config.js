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
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}