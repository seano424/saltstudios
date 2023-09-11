import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    debugScreens: {
      position: ['bottom', 'right'],
      style: {
        backgroundColor: '#C0FFEE',
        color: 'black',
        fontSize: '1rem',
      },
    },
    extend: {
      colors: {
        'theme-orange': '#F15A31',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
}
export default config
