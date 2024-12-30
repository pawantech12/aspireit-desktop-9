/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#0b002b",
        highlight: "#f6c26b",
      },
      backgroundImage: {
        "gradient-gold":
          "linear-gradient(268.52deg, #FFBB69 18.39%, rgba(228, 168, 94, 0.739394) 53.61%, rgba(195, 143, 80, 0.413425) 83.45%, rgba(153, 112, 63, 0) 99.11%)",
      },
    },
  },
  plugins: [],
};
