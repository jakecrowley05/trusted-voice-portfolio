
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'cds-caption-01': ['0.75rem', { lineHeight: '1rem' }],
        'cds-caption-02': ['0.875rem', { lineHeight: '1.125rem' }],
        'cds-label-01': ['0.75rem', { lineHeight: '1rem' }],
        'cds-label-02': ['0.875rem', { lineHeight: '1.125rem' }],
        'cds-helper-text-01': ['0.75rem', { lineHeight: '1rem' }],
        'cds-helper-text-02': ['0.875rem', { lineHeight: '1.125rem' }],
        'cds-legal-01': ['0.75rem', { lineHeight: '1rem' }],
        'cds-legal-02': ['0.875rem', { lineHeight: '1.125rem' }],
        'cds-body-compact-01': ['0.875rem', { lineHeight: '1.125rem' }],
        'cds-body-compact-02': ['1rem', { lineHeight: '1.25rem' }],
        'cds-body-01': ['0.875rem', { lineHeight: '1.25rem' }],
        'cds-body-02': ['1rem', { lineHeight: '1.375rem' }],
        'cds-heading-compact-01': ['0.875rem', { lineHeight: '1.125rem' }],
        'cds-heading-compact-02': ['1rem', { lineHeight: '1.25rem' }],
        'cds-heading-01': ['0.875rem', { lineHeight: '1.25rem' }],
        'cds-heading-02': ['1rem', { lineHeight: '1.375rem' }],
        'cds-heading-03': ['1.25rem', { lineHeight: '1.625rem' }],
        'cds-heading-04': ['1.75rem', { lineHeight: '2.25rem' }],
        'cds-heading-05': ['2rem', { lineHeight: '2.5rem' }],
        'cds-heading-06': ['2.625rem', { lineHeight: '3.125rem' }],
        'cds-heading-07': ['3.375rem', { lineHeight: '4rem' }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          foreground: "hsl(var(--sidebar-foreground))",
          border: "hsl(var(--sidebar-border))",
        },
        // IBM Carbon color tokens
        gray: {
          10: 'var(--c-gray-10)',
          20: 'var(--c-gray-20)',
          30: 'var(--c-gray-30)',
          40: 'var(--c-gray-40)',
          50: 'var(--c-gray-50)',
          60: 'var(--c-gray-60)',
          70: 'var(--c-gray-70)',
          80: 'var(--c-gray-80)',
          90: 'var(--c-gray-90)',
          100: 'var(--c-gray-100)',
        },
        blue: {
          10: 'var(--c-blue-10)',
          20: 'var(--c-blue-20)',
          30: 'var(--c-blue-30)',
          40: 'var(--c-blue-40)',
          50: 'var(--c-blue-50)',
          60: 'var(--c-blue-60)',
          70: 'var(--c-blue-70)',
          80: 'var(--c-blue-80)',
          90: 'var(--c-blue-90)',
          100: 'var(--c-blue-100)',
        },
        red: {
          10: '#fff1f1',
          20: '#ffd7d9',
          30: '#ffb3b8',
          40: '#ff8389',
          50: '#fa4d56',
          60: '#da1e28',
          70: '#a2191f',
          80: '#750e13',
          90: '#520408',
          100: '#2d0709',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        DEFAULT: "2px", // Carbon default border radius
      },
      spacing: {
        // 8px spacing scale to match Carbon
        '0': '0',
        '1': '0.125rem',  // 2px
        '2': '0.25rem',   // 4px
        '3': '0.5rem',    // 8px
        '4': '0.75rem',   // 12px
        '5': '1rem',      // 16px
        '6': '1.5rem',    // 24px
        '7': '2rem',      // 32px
        '8': '2.5rem',    // 40px
        '9': '3rem',      // 48px
        '10': '4rem',     // 64px
        '11': '5rem',     // 80px
        '12': '6rem',     // 96px
        '13': '10rem',    // 160px
        '14': '12rem',    // 192px
        '16': '16rem',    // 256px
        '20': '20rem',    // 320px
        '24': '24rem',    // 384px
        '32': '32rem',    // 512px
        '40': '40rem',    // 640px
        '48': '48rem',    // 768px
        '56': '56rem',    // 896px
        '64': '64rem',    // 1024px
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        carbonFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        carbonSlideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "carbon-fade-in": "carbonFadeIn 0.24s cubic-bezier(0.2, 0, 0.38, 0.9) forwards",
        "carbon-slide-up": "carbonSlideUp 0.24s cubic-bezier(0.2, 0, 0.38, 0.9) forwards",
      },
      transitionTimingFunction: {
        'carbon-productive': 'cubic-bezier(0.2, 0, 0.38, 0.9)',
        'carbon-expressive': 'cubic-bezier(0.4, 0.14, 0.3, 1)',
      },
      transitionDuration: {
        'carbon-fast-01': '70ms',
        'carbon-fast-02': '110ms',
        'carbon-moderate-01': '150ms',
        'carbon-moderate-02': '240ms',
        'carbon-slow-01': '400ms',
        'carbon-slow-02': '700ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
