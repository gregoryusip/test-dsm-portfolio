/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary-one': '#CDA274',
        'primary-two': '#292F36',
        'primary-three': '#F4F0EC',
        'dark-text': '#1F1F1F',
        'light-gray': '#F6F6F6',
        'dark-gray': '#4D5053',
      },

      fontSize: {
        20: ['20px'],
        22: ['22px', '40px'],
        25: ['25px', '45px'],
        32: ['32px'],
        35: ['35px', '50px'],
        40: ['40px'],
        50: ['50px', '60px'],
        56: ['56px'],
        80: ['80px', '100px'],
        85: ['85px', '106.25px'],
      },
    },
  },
  plugins: [],
};
