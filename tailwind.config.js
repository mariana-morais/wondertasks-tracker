/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        aliceWonderland: ['AliceInWonderland', 'sans-serif'],
        alice: ['Alice', 'serif'],
      },
    },
  },
  plugins: [],
}