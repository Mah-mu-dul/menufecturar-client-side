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
          secondary: "#19D3AE",
          accent: "#3A4256",
          ashes: "#4F5B7A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
