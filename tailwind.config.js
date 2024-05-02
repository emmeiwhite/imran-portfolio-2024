/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["lato", "sans-serif"],
        dosis: ["Dosis", "sans-serif"],
        italianno: ["Italianno", "cursive"],
        pacifico: ["Pacifico", "cursive"],
      },
      backgroundImage: {
        hero: "linear-gradient(rgba(53,82,66,0.5),rgba(47,80,63,0.6)), url('./../assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
