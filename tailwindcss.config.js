module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "dotted-motion": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-30px)" }, // vertical motion
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "dotted-motion": "dotted-motion 6s ease-in-out infinite",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      poltawski: ['"Poltawski Nowy"', "serif"],
      rubik: ["Rubik", "sans-serif"],
      bebas: ["Bebas Neue", "sans-serif"],
      condensedItalic: ["Bebas Condensed Medium Italic", "sans-serif"],
    },
  },
  plugins: [],
};
