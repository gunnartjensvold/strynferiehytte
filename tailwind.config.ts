import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        success: '#7B9D85',
        brown: '#201919',
        white: '#FAFAFA',
        primary: '#D9C452',
        background: '#F2F2F2',
        secondary: '#938C6C',
        green: '#49504B',
        error: '#9F6060'
      },
      screens: {
        'xs': '360px'
      }
    }
  },
  plugins: []
}
export default config
