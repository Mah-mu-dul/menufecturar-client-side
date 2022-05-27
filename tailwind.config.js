module.exports = {
  content: ["./src/**/*.{html,css,js}"],

  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#f55538",
          accent: "#3A4256",
          ashes: "#4F5B7A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
