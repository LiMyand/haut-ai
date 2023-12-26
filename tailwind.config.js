/** @type {import('tailwindcss').Config} */
import 'tailwindcss/base';
import 'tailwindcss/components';
import 'tailwindcss/utilities';
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

