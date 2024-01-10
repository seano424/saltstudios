import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

const config: Config = {
  darkMode: 'class',
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
        'theme-orange-light': '#f07167',
        'theme-soft-peach': '#FBF5EA',
        'theme-pink': '#FF0096',
        'theme-dark': '#0f172acc',
        'theme-dark-10': '#1e293b',
        'theme-dark-blue':
          'rgb(239 246 255 / 0.1)',
        primary: colors.indigo,
        secondary: colors.rose,
        neutral: colors.gray,
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
}
export default config
