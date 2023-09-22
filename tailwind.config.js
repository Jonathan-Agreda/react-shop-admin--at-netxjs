/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  content: ['./src/**/*{html,js}'],
  theme: {
    colors: {
      ...colors,
      /* green: colors.emerald,
      yellow: colors.amber,
      purple: colors.violet, */
    },
  },
};
