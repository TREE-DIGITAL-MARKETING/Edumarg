/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Change Poppins to Georgia, serif
        body: ['Georgia', 'serif'],
      },
      colors: {
        primary: "#635AD9",
        secondary: "#219BE4",
        light: "#f7f7f7",
        dark: "#333333",
        dark2: "#999999"
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem"
        }
      }
    },
  },
  plugins: [],
}
