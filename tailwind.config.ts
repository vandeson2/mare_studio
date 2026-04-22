import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        bone:     '#F5F2EE',
        sand:     '#E8E2D9',
        graphite: '#1C1C1A',
        bronze:   '#8B7355',
        muted:    '#9E9589',
        line:     '#D4CBBF',
        'bone-dark': '#EDE8E2',
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.8rem, 3vw, 2.8rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'label':      ['0.7rem',  { lineHeight: '1', letterSpacing: '0.2em' }],
        'label-lg':   ['0.75rem', { lineHeight: '1', letterSpacing: '0.25em' }],
      },
      spacing: {
        section: '9rem',
        'section-sm': '5rem',
      },
      maxWidth: {
        content: '1280px',
        prose:   '640px',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      transitionDuration: {
        '400':  '400ms',
        '600':  '600ms',
        '800':  '800ms',
        '1200': '1200ms',
        '1400': '1400ms',
        '1600': '1600ms',
      },
    },
  },
  plugins: [],
}

export default config
