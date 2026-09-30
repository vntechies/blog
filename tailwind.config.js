const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

// Colors come from the RGB-channel tokens in css/tailwind.css. As functions they
// support opacity modifiers (bg-brand/10) and follow .dark without dark: variants.
const token =
  (name) =>
  ({ opacityValue } = {}) =>
    opacityValue === undefined
      ? `rgb(var(--app-${name}))`
      : `rgb(var(--app-${name}) / ${opacityValue})`

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    // Complete scale with paired line heights (at least 1.15 on large sizes so
    // stacked Vietnamese diacritics do not collide).
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.125rem' }],
      sm: ['0.875rem', { lineHeight: '1.375rem' }],
      base: ['1rem', { lineHeight: '1.625rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.875rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.375rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '4.375rem' }],
      '7xl': ['4.5rem', { lineHeight: '5rem' }],
    },
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: colors.orange,
        // One neutral family site-wide: legacy gray-* classes render as slate.
        gray: colors.slate,
        canvas: token('bg'),
        surface: {
          DEFAULT: token('surface'),
          muted: token('surface-muted'),
        },
        line: {
          DEFAULT: token('border'),
          strong: token('border-strong'),
          control: token('border-control'),
        },
        fg: {
          DEFAULT: token('text'),
          prose: token('text-prose'),
          muted: token('text-muted'),
          subtle: token('text-subtle'),
        },
        brand: {
          DEFAULT: token('accent'),
          hover: token('accent-hover'),
          strong: token('accent-strong'),
          soft: token('accent-soft-fg'),
          on: token('on-accent'),
        },
        info: {
          DEFAULT: token('info'),
          soft: token('info-soft-fg'),
        },
        success: token('success'),
        danger: token('danger'),
      },
      // Three elevation levels defined in css/tailwind.css; they deepen in dark mode.
      boxShadow: {
        sm: 'var(--app-shadow-sm)',
        DEFAULT: 'var(--app-shadow-sm)',
        md: 'var(--app-shadow)',
        lg: 'var(--app-shadow)',
        xl: 'var(--app-shadow-lg)',
        '2xl': 'var(--app-shadow-lg)',
      },
      // One prose definition for both themes: colors resolve through the tokens.
      // Keep selectors flat; the plugin wraps each key in :where().
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(var(--app-text-prose))',
            '--tw-prose-headings': 'rgb(var(--app-text))',
            '--tw-prose-lead': 'rgb(var(--app-text-muted))',
            '--tw-prose-links': 'rgb(var(--app-accent-strong))',
            '--tw-prose-bold': 'rgb(var(--app-text))',
            '--tw-prose-counters': 'rgb(var(--app-text-subtle))',
            '--tw-prose-bullets': 'rgb(var(--app-text-subtle))',
            '--tw-prose-hr': 'rgb(var(--app-border))',
            '--tw-prose-quotes': 'rgb(var(--app-text))',
            '--tw-prose-quote-borders': 'rgb(var(--app-info))',
            '--tw-prose-captions': 'rgb(var(--app-text-subtle))',
            '--tw-prose-code': 'rgb(var(--app-text))',
            // Matches the Gruvbox background prism.css gives highlighted blocks
            '--tw-prose-pre-code': '#ebdbb2',
            '--tw-prose-pre-bg': '#1d2021',
            '--tw-prose-th-borders': 'rgb(var(--app-border-strong))',
            '--tw-prose-td-borders': 'rgb(var(--app-border))',
            fontSize: '1.0625rem',
            lineHeight: '1.8',
            a: {
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
              textDecorationColor: 'rgb(var(--app-accent-strong) / 0.4)',
            },
            'a:hover': {
              color: 'rgb(var(--app-accent-soft-fg))',
              textDecorationColor: 'currentColor',
            },
            'a code': {
              color: 'inherit',
            },
            h1: {
              letterSpacing: '-0.025em',
            },
            h2: {
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            'h5, h6': {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
            },
            code: {
              backgroundColor: 'rgb(var(--app-text) / 0.07)',
              padding: '0.125rem 0.375rem',
              borderRadius: '0.375rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            pre: {
              borderRadius: '0.75rem',
              border: '1px solid rgb(var(--app-border))',
            },
            details: {
              backgroundColor: 'rgb(var(--app-surface-muted))',
              border: '1px solid rgb(var(--app-border))',
              borderRadius: '0.75rem',
              padding: '0.5rem 1rem',
            },
            summary: {
              cursor: 'pointer',
              fontWeight: '600',
              color: 'var(--tw-prose-headings)',
            },
            'ol > li::marker': {
              fontWeight: '600',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
  ],
}
