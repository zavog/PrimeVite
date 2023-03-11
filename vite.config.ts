/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        '@vueuse/core',
        'pinia',
        'vue-i18n',
        {
          'linq-to-typescript': ['from'],
        },
      ],
      dts: true,
      dirs: ['./src/composables', './src/stores'],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
      dirs: ['./src/components'],
      resolvers: [
        PrimeVueResolver({
          importIcons: true,
          importStyle: true,
          importTheme: 'saga-blue',
        }),
      ],
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),

    // https://github.com/intlify/vite-plugin-vue-i18n
    vueI18n({
      include: [path.resolve(__dirname, './locales/**')],
    }),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
