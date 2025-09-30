/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fefae0',
        brown: '#824602',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        garamond: ['"EB Garamond"', 'serif'],
        schoolbell: ['Schoolbell', 'cursive'],
      },
    },
  },
  plugins: [],
}
