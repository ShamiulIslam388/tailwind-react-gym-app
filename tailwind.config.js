module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1100px",
        xl: "1100px",
        "2xl": "1100px",
      },
    },
    height: {
      primary: "100vh",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
