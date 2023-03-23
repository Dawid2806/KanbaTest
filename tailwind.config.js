/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        my_bg_image: "url('../public/bg.png')",
      },
      fontFamily: {
        Nurito: ["Nunito", "sans-serif"],
      },
      fontWeight: {
        "extra-bold": "900",
      },
    },
  },
  plugins: [],
};
