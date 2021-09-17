module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        red: "#E53F2B",
        blue: "#0063A3",
        brown: "#3A001E",
        cobalt: "#395079",
        pink: "#E528DD",
        green: "#0F9200",
        yellow: "#F6AC29"
      },
    },
      textColor: {
        title: '#E53F2B',
        subtitle: '#FFFFFF',
        body: "#000000",
        blue: '#0063A3',
        green: '#0F9200',
        red: '#E53F2B',
        pink: '#E528DD',
        yellow: '#F6AC29'
      },
      fontFamily: {
        'title': ['Barlow Condensed', 'serif'],
        'subtitle': ['Barlow', 'serif'],
        'body': ['Raleway', 'sans-serif'],
        'util': ['Roboto Mono', 'monospace']
      },
      backgroundColor: theme =>({
        ...theme('colors')
      }),
      fontSize: {
        'smd': '1.15rem',
        'md': '1.35rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
        '5xl': '4rem',
        '6xl': '5rem',
        '7xl': '6rem',
        '8xl': '7rem',
        '9xl': '8rem',
        '10xl': '9rem',
        '11xl': '10rem',
        '12xl': '11rem',
        '13xl': '12rem',
        '60xl': '50rem'
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      gridRow: {
        'span-7' :'span 7 / span 7',
        'span-8' :'span 8 / span 8',
        'span-9' :'span 9 / span 9',
        'span-10' :'span 10 / span 10',
        'span-11' :'span 11 / span 11',
      },
      lineHeight: {
        'extra-none': '0.3'
       }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
