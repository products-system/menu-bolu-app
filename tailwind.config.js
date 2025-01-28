const toRgbaColors =
  (cssVariable) =>
  ({ opacityValue }) =>
    `rgba(var(${cssVariable}), ${opacityValue})`;

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cores primárias e secundárias
        primary: toRgbaColors('--primary'),
        orange: {
          dark: toRgbaColors('--orange-dark'),
          light: toRgbaColors('--orange-light'),
          lightest: toRgbaColors('--orange-lightest'),
        },
        grey: {
          darkest: toRgbaColors('--grey-darkest'),
          dark: toRgbaColors('--grey-dark'),
          light: toRgbaColors('--grey-light'),
          lightest: toRgbaColors('--grey-lightest'),
        },
        success: toRgbaColors('--success-color'),
      },
      backgroundColor: {
        // Cores de fundo específicas
        bottomContainer: toRgbaColors('--grey-bottom-container'),
      },
    },
  },
};
