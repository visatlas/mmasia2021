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
      fontSize: {
        titleSmall: '1.1rem',
        titleMedium: '1.5rem',
        titleBig: '2.4rem',
      },
      lineHeight: {
        titleBig: '2.8rem',
      },
    },
  }
}
