module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bl: 'hsl(219, 48%, 8%)',
        prl: 'hsl(250, 66%, 75%)',
        nav: 'hsla(219, 32%, 16%, .8)',
        txt: 'hsl(219, 8%, 75%)',
        nb: 'hsl(250, 66%, 75%)',
        nb_2: 'hsla(250, 66%, 75%, .2)',
      },
      fontSize: {
        nama: '40px',
      },
      backgroundImage: {
        pattern: "url('./img/jrg.png')",
      },
      boxShadow: {
        bx: '0 0 16px hsla(250, 66%, 75%, .2)',
      },
    },
  },
  plugins: [],
};
