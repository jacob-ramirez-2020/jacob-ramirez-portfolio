/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.md",
      "./src/**/*.njk",
      "./src/**/*.html"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#01A2D9",
          accent:  "#32FF00",
          dark:    "#121212",
          muted:   "#1E1E1E",
        }
      }
    },
    plugins: []
  };
  