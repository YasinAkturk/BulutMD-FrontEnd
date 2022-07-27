/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
    },
    extend: {
      colors: {
        'yenigri': '#484848',
        'acikgri': '#999999',
        'footer': '#1A1A1A',
        'kenarlik': '#9D9D9D'
      },
    },
  },
  plugins: [],
}
