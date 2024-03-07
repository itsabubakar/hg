import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "pont": "var(--font-pontano)",
        "jost": "var(--font-jost)",
      },
      colors: {
      }
    },
  },
  plugins: [],
}
export default config
