const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      fontFamily: {
        'serif': ['Georgia', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
