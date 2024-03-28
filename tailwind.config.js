/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "winter",
      "sunset",
      {
        winter: {
          //? Con esto podemos modificar colores del tema
          ...require("daisyui/src/theming/themes")["winter"],
          primaryColor50: "#ecfdf5",
          primaryColor100: "#d1fae4",
          primaryColor200: "#a7f3cf",
          primaryColor300: "#6ee7b5",
          primaryColor400: "#52daa6",
          primaryColor500: "#0fba7e",
          primaryColor600: "#059666",
          primaryColor700: "#047855",
          primaryColor800: "#065f44",
          primaryColor900: "#064e3a",
          primaryColor950: "#022c21",
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "sunset", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
