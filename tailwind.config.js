/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      height: {
        header: "150px",
        "header-phone": "250px",
      },
      borderRadius: {
        xxl: "80px",
      },
    },
  },
  plugins: [],
};
