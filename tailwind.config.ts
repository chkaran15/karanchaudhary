import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        lightblue:"#5891ed",
        darkgray:"#4a4d52",
        lightgray:"rgba(0,0,0,.5)",
        primary1:"#1f1c3d",
      },
      screens:{
        xs:"375px",
        sm:"400px"
      }
    },
    
  },
  plugins: [],
}
export default config
