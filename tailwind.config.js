/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontSize: {
        xxs: "0.6rem",
      },
      colors: {
        primary: "#006769",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
      fontFamily: {
        kodemono: '"Kode Mono"',
        poppins: '"Poppins"',
        jaro: "'Jaro'",
      },
      backgroundImage: {
        header: "url('../img/header.png')",
        signUp: "url('../img/login-sign-up/sign-up.png')",
        signIn: "url('../img/login-sign-up/sign-in.png')",
      },
    },
  },
  plugins: [],
};
