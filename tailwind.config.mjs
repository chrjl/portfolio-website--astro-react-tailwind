import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter Variable',
          '"Font Awesome 6 Regular"',
          '"Font Awesome 6 Free"',
          '"Font Awesome 6 Brands"',
          ...defaultTheme.fontFamily.sans,
        ],
        content: [
          'Arimo',
          '"Font Awesome 6 Regular"',
          '"Font Awesome 6 Free"',
          '"Font Awesome 6 Brands"',
          ...defaultTheme.fontFamily.sans,
        ],
        mono: ['Cousine', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
  safelist: [{ pattern: /order-[1-9]/ }],
};
