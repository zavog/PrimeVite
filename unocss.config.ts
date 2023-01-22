import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: { link: 'text-blue hover:underline' },
  safelist: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        sans: 'Open Sans',
        serif: 'Montserrat',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      // register primevue theme colors
      text: 'var(--text-color)',
      textSecondary: 'var(--text-color-secondary)',
      primaryText: 'var(--primary-color-text)',
      surface: {
        0: 'var(--surface-0)',
        50: 'var(--surface-50)',
        100: 'var(--surface-100)',
        200: 'var(--surface-200)',
        300: 'var(--surface-300)',
        400: 'var(--surface-400)',
        500: 'var(--surface-500)',
        600: 'var(--surface-600)',
        700: 'var(--surface-700)',
        800: 'var(--surface-800)',
        900: 'var(--surface-900)',
      },
      surfaceGround: 'var(--surface-ground)',
      surfaceSection: 'var(--surface-section)',
      surfaceCard: 'var(--surface-card)',
      surfaceOverlay: 'var(--surface-overlay)',
      surfaceBorder: 'var(--surface-border)',
      primary: {
        DEFAULT: 'var(--primary-color)',
        50: 'var(--primary-50)',
        100: 'var(--primary-100)',
        200: 'var(--primary-200)',
        300: 'var(--primary-300)',
        400: 'var(--primary-400)',
        500: 'var(--primary-500)',
        600: 'var(--primary-600)',
        700: 'var(--primary-700)',
        800: 'var(--primary-800)',
        900: 'var(--primary-900)',
      },
    },
  },
})
