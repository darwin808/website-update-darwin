/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
   content: ["src/pages/**/*.{js,ts,jsx,tsx}", "src/components/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
            Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
         },
         colors: {
            primary: "#0A192F",
            secondary: "#64FFDA",
         },
      },
   },
   plugins: [],
}
