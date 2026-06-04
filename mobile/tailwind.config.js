/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./index.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        pure: {
          ink: "#17211f",
          heading: "#202020",
          muted: "#40505a",
          green: "#075f42",
          greenDark: "#064b36",
          greenDeep: "#064533",
          gold: "#e7a43a",
          goldSoft: "#f0b34b",
          cream: "#fffdfb",
          paper: "#fbfbfa",
          softBg: "#f7fbfb",
          line: "#dfcfb5",
          white: "#ffffff",
          danger: "#b42318",
          dangerBg: "#fee4e2",
        },
      },
    },
  },
  plugins: [],
};
