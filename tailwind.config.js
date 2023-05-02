/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        snowman: ['PulpenSnowman'],
        futara: ['ComicFutara'],
      },
      backgroundImage: {
        intro: 'linear-gradient(180deg, rgba(255, 243, 240, 1) 0%, rgba(224, 251, 252, 1) 100%)',
        about: 'linear-gradient(180deg, rgba(224,251,252,1) 0%, rgba(199,248,249,1) 100%)',
        experience: '',
        companies: 'linear-gradient(180deg, rgba(199,248,249,1) 0%, rgba(224,251,252,1) 100%)',
        meAndTheDawg: 'url(/public/assets/imgs/me_and_the_dawg-removebg.png)',
      },
      fontSize: {
        z16: '16px',
        z20: '20px',
        z24: '24px',
        z32: '32px',
        z48: '48px',
        z64: '64px',
        z128: '128px',
      },
      keyframes: {

      },
      animation: {
        morph: 'morph 8s ease-in-out infinite',
      //   aFlyOn: {
      //     '0%': { opacity: 0, transformY: '-100px',  }
      //   }
      }
    },
  },
  plugins: [],
}
