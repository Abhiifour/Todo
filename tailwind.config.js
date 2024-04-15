/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: { min: "0px", max: "600px" },
        md: { min: "610px", max: "1000px" },
      },
    },
  },
  plugins: [],
};
