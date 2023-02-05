# PrimeVite

An opinionated Vue project template with Vite and Primevue based on [Alvarosabu's Vitesome](https://github.com/alvarosabu/vitesome) and [antfu's Vitesse](https://github.com/antfu/vitesse).

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 4](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/)
- 🗂 [File based routing](https://github.com/hannoeru/vite-plugin-pages)
- 📦 Auto importing for [components](https://github.com/antfu/vite-plugin-components) and [composables and stores](https://github.com/antfu/unplugin-auto-import)
- 🎨 [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.
- 😃 Use icons from any icon sets in [Pure CSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)
- 🔥 Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227)
- ✅ Use [Vitest](http://vitest.dev/) for unit and components testing
- 🦾 TypeScript, of course
- ☁️ Components library: [PrimeVue](https://github.com/primefaces/primevue)
- 🤙🏻 [Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html) enabled
- ⚙️ Eslint and prettier - Just type and let the IDE do the formatting

## Try it now

### Install prerequisites

1. Install [Node](https://nodejs.org/en/)
2. Install [VS-Code](https://code.visualstudio.com/)
3. Install degit (used to clone the repo without history): `npm i -g degit`
4. Install pnpm (used instead of npm in the project): `npm i -g pnpm`

### Clone to local

```bash
# replace my-vue-app with a name of your choosing
npx degit https://github.com/zavog/PrimeVite my-vue-app
```

### Getting started

1. On Windows: Double click the startvscode.cmd script to open VS-Code. On Unix based systems: Run startvscode.sh).
2. VS-Code will prompt you to install recommended extensions.
3. Run `pnpm i`
4. After pnpm and the installation of extensions finished, restart VS-Code (close it and run the startvscode script again).
