/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        112: "30rem", // 448px
        60: "17rem", // 480px
      },
    },
  },
  plugins: [],
};
