import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C01313',
          'red-dark': '#9a0f0f',
          'red-light': '#D92529',
          black: '#111111',
          gray: '#353638',
          'light-gray': '#f5f4f0',
        },
      },
      fontFamily: {
        sans: ['Ruda', 'sans-serif'],
        display: ['Bebas Neue', 'Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
