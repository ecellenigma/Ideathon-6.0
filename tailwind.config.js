module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'bg-color': 'var(--bg-color)', // Dark Blue
        'header-cyna': 'var(--header-cyna)', // Bright Cyan
        'nav-hover': 'var(--nav-hover)', // Soft Cyan
        'bt-hover': 'var(--bt-hover)', // Slightly Darker Blue
      },
      fontFamily: {
        'para-all': ['var(--para-all)'], // Montserrat
        'track-header': ['var(--track-header)'], // Outfit
        'font-footer': ['var(--font-footer)'], // Poppins
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};