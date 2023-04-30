/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        snowman: ['PulpenSnowman']
      },
      fontSize: {
        z16: '16px',
        z32: '32px',
        z64: '64px',
        z128: '128px',
      },
      keyframes: {

      },
      // animation: {
      //   aFlyOn: {
      //     '0%': { opacity: 0, transformY: '-100px',  }
      //   }
      // }
    },
  },
  plugins: [],
}
