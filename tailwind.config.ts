import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
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
        'theme-soft-peach': '#FBF5EA',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
}
export default config
