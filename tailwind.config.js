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
          "200": "#88B1A7",
          "300": "#3a544e",
          "400": "#334d4a",
          "500": "#3a544e",
          "600": "#3a544e",
          "700": "#334d4a",
          "800": "#363233",
          "900": "#3a544e"
        }
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
    },
    animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
    }
    }
  },
  variants: {},
  plugins: []
};
