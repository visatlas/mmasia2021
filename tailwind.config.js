module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        mainPurple: '#51247a',
        menuHover: "rgba(0, 0, 0, 0.3)",
        menuSelected: "rgba(114, 67, 159, 0.9)",
        textDisabled: "rgba(255, 255, 255, 0.4)",
        orgBackground: '#f6f7f8',
        semiBlack: "#222222",
      },
      backgroundImage: _ => ({
        uqStyle: "linear-gradient(90deg, #51247a 0%, #56247a 60%, #61257d 80%, #962a8b 100%)",
      }),
      fontFamily: {
        headingStyle: ["'Roboto'", "'Helvetica Neue'", 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        orgSmall: '0.9rem',
        titleSmall: '1.1rem',
        titleMedium: '1.5rem',
        titleBig: '2.4rem',
      },
      lineHeight: {
        titleBig: '2.8rem',
      },
      letterSpacing: {
        semiWide: '0.01em',
      },
      screens: {
        player: "660px",
        bp3: "882px",
      },
    },
  }
};
