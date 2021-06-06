module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        playfair: ["playfair"],
        "playfair-italic": ["playfair-italic"],
        montserrat: ["montserrat"],
        dosis: ["dosis"],
      },
      backgroundImage: (theme) => ({
        "head-bg": "url('../public/head-bg.jpg')",
        "quote-bg": "url('../public/quotes.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
