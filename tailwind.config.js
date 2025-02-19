/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkPurpleColor: {
          pink: '#ff77bd',
          purple: '#8740e3',
          pinkPurple: '#c200c5',
        },
      },

      boxShadow: {
        lightShadow: '5px 5px 10px rgb(27, 147, 0)',
      },

      backgroundImage: {
        'home-bg': "url('/src/Assets/Images/home-banner.png')",
      },
    },
  },
  variants: {},
  plugins: [],
};
