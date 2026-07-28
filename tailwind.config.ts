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
        primary: '#121212',
        secondary: '#5e5e5d',
        accent: '#e45400',
        accentHover: '#ff6a1a',
        background: '#fbf9f9',
        backgroundAlt: '#f5f3f3',
        border: '#e4e2e2',
        borderLight: '#c4c7c7',
      },
      fontFamily: {
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        body: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['80px', { lineHeight: '0.9', letterSpacing: '-0.04em', fontWeight: '800' }],
        'display-lg': ['64px', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '800' }],
        'headline-xl': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['40px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'label-lg': ['14px', { lineHeight: '1', letterSpacing: '0.15em', fontWeight: '500' }],
        'label-md': ['12px', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '500' }],
        'label-sm': ['10px', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        'section': 'clamp(4rem, 10vw, 10rem)',
        'container': '1440px',
      },
    },
  },
  plugins: [],
}

export default config
