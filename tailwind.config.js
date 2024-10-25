/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      wordSpacing: {
        tight: '-1px',
        normal: '0',
        wide: '1px',
        wider: '2px',
        widest: '3px',
      },
      colors: {
        customGrey: '#41414F',
        customDark: '#121223',
        'primary-green': 'var(--primary-green)',
        'secondary-orange': 'var(--secondary-orange)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.word-tight': {
          'word-spacing': '-1px',
        },
        '.word-normal': {
          'word-spacing': '0',
        },
        '.word-wide': {
          'word-spacing': '1px',
        },
        '.word-wider': {
          'word-spacing': '2px',
        },
        '.word-widest': {
          'word-spacing': '3px',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
