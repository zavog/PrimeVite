import '@unocss/reset/tailwind.css'
import 'uno.css'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import PrimeVue from 'primevue/config'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'
import messages from '@intlify/unplugin-vue-i18n/messages'

import './styles/main.css'

const pinia = createPinia()
const i18n = createI18n({
  locale: 'en',
  messages,
})
const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', redirect: '/PrimeVite' }, ...generatedRoutes],
})
app.use(router)
app.use(pinia)
app.use(i18n)
app.use(PrimeVue)
app.mount('#app')
