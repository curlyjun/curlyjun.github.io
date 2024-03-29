/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '.prose :where(code):not(:where([class~="not-prose"] *))': {
              "&::after, &::before": {
                content: "none",
              },
            },
            '.prose :where(blockquote p:first-of-type):not(:where([class~="not-prose"] *))':
              {
                "&::after, &::before": {
                  content: "none",
                },
              },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
