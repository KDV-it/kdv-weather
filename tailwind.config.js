/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'morning': "url('/public/morning.jpg')",
        'afternoon': "url('/public/afternoon.jpg')",
        'evening': "url('/public/evening.jpg')",
        'night': "url('/public/night.jpg')",

      }
    },
  },
  plugins: [],
}

