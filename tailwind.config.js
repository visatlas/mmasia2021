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
        bp3: "864px",
      },
    },
  }
};
