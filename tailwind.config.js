/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "principal-bold": ["font-principal-bold"],
        "principal-medium": ["font-principal-medium"],
        "principal-black": ["font-principal-black"],
        "principal-heavy": ["font-principal-heavy"],
        "principal-light": ["font-principal-light"],
        "principal-semibold": ["font-principal-semibold"],
        "principal-thin": ["font-principal-thin"],
        "principal-ultralight": ["font-principal-ultralight"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "winter",
      "sunset",
      {
        winter: {
          ...require("daisyui/src/theming/themes")["winter"],
          ".primary-text-color": {
            color: "#333232",
          },
          ".secondary-text-color": {
            color: "#494949",
          },
          ".tertiary-text-color": {
            color: "#646464",
          },
          ".quaternary-text-color": {
            color: "#8E8E8E",
          },

          ".primary-color-50": {
            background: "#ecfdf5",
          },
          ".primary-color-100": {
            background: "#d1fae4",
          },
          ".primary-color-200": {
            background: "#a7f3cf",
          },
          ".primary-color-300": {
            background: "#6ee7b5",
          },
          ".primary-color-400": {
            background: "#52daa6",
          },
          ".primary-color-500": {
            background: "#0fba7e",
          },
          ".primary-color-600": {
            background: "#059666",
          },
          ".primary-color-700": {
            background: "#047855",
          },
          ".primary-color-800": {
            background: "#065f44",
          },
          ".primary-color-900": {
            background: "#064e3a",
          },
          ".primary-color-950": {
            background: "#022c21",
          },
        },
      },
      {
        sunset: {
          ...require("daisyui/src/theming/themes")["sunset"],
          ".primary-text-color": {
            color: "#FEFEFE",
          },
          ".secondary-text-color": {
            color: "#EAEAEA",
          },
          ".tertiary-text-color": {
            color: "#CCCCCC",
          },
          ".quaternary-text-color": {
            color: "#BBBBBB",
          },

          ".primary-color-50": {
            background: "#022c21",
          },
          ".primary-color-100": {
            background: "#064e3a",
          },
          ".primary-color-200": {
            background: "#065f44",
          },
          ".primary-color-300": {
            background: "#047855",
          },
          ".primary-color-400": {
            background: "#059666",
          },
          ".primary-color-500": {
            background: "#0fba7e",
          },
          ".primary-color-600": {
            background: "#52daa6",
          },
          ".primary-color-700": {
            background: "#6ee7b5",
          },
          ".primary-color-800": {
            background: "#a7f3cf",
          },
          ".primary-color-900": {
            background: "#d1fae4",
          },
          ".primary-color-950": {
            background: "#ecfdf5",
          },
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
