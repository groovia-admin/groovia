import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surface tokens
        surface: '#f8f9ff',
        'surface-dim': '#cbdbf5',
        'surface-bright': '#f8f9ff',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#eff4ff',
        'surface-container': '#e5eeff',
        'surface-container-high': '#dce9ff',
        'surface-container-highest': '#d3e4fe',
        'surface-variant': '#d3e4fe',
        'on-surface': '#0b1c30',
        'on-surface-variant': '#3d4947',
        'inverse-surface': '#213145',
        'inverse-on-surface': '#eaf1ff',
        outline: '#6d7a77',
        'outline-variant': '#bcc9c6',
        'surface-tint': '#006a61',

        // Primary
        primary: '#00685f',
        'on-primary': '#ffffff',
        'primary-container': '#008378',
        'on-primary-container': '#f4fffc',
        'inverse-primary': '#6bd8cb',
        'primary-fixed': '#89f5e7',
        'primary-fixed-dim': '#6bd8cb',
        'on-primary-fixed': '#00201d',
        'on-primary-fixed-variant': '#005049',

        // Secondary
        secondary: '#555f6f',
        'on-secondary': '#ffffff',
        'secondary-container': '#d6e0f3',
        'on-secondary-container': '#596373',
        'secondary-fixed': '#d9e3f6',
        'secondary-fixed-dim': '#bdc7d9',
        'on-secondary-fixed': '#121c2a',
        'on-secondary-fixed-variant': '#3d4756',

        // Tertiary (Amber)
        tertiary: '#924628',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#b05e3d',
        'on-tertiary-container': '#fffbff',
        'tertiary-fixed': '#ffdbce',
        'tertiary-fixed-dim': '#ffb59a',
        'on-tertiary-fixed': '#370e00',
        'on-tertiary-fixed-variant': '#773215',

        // Error
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',

        // Background
        background: '#f8f9ff',
        'on-background': '#0b1c30',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['40px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-lg-mobile': ['28px', { lineHeight: '1.2', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'headline-sm': ['20px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '600' }],
        'label-sm': ['12px', { lineHeight: '1.2', fontWeight: '500' }],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
        gutter: '24px',
      },
      maxWidth: {
        'container': '1440px',
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
      },
      boxShadow: {
        'elevation-1': '0px 1px 2px rgba(11, 28, 48, 0.04)',
        'elevation-2': '0px 4px 12px rgba(31, 41, 55, 0.05)',
        'elevation-3': '0px 12px 32px rgba(31, 41, 55, 0.12)',
        'glow-primary': '0px 8px 32px rgba(0, 104, 95, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;