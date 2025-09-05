module.exports = {
  darkMode: "class",
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#1E3A8A",
          accent: "#FF6B57",
          navy: "#0B1220",
          light: "#F7F8FA",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.12)",
        glow: "0 0 0 6px rgba(30,58,138,0.12)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        reveal: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        reveal: "reveal .8s ease forwards",
      },
    },
  },
  plugins: [],
};
