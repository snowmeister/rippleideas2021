module.exports = {
  future: {},
  purge: [
    "./public/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif']
      },
      colors: {
        "snowmeister": {
          "50": "#ffffff",
          "100": "#f6f8f9",
          "200": "#c4ced4",
          "300": "#8ea2ae",
          "400": "#607785",
          "500": "#3c4a53",
          "600": "#313d44",
          "700": "#293238",
          "800": "#1e252a",
          "900": "#151a1e"
        }
      }
    }
  },
  variants: {},
  plugins: []
};
