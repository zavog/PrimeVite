<script setup lang="ts">
const { t } = useI18n()
const { smallerClass } = useSmallerClass()

const basePath = '/PrimeVitesome'
const smallerMdClass = smallerClass('md', 'small-screen')

const tabMenuItems = computed(() => [
  { label: 'Vue', icon: 'i-logos-vue', to: basePath },
  { label: 'Vite', icon: 'i-logos-vitejs', to: basePath + '/Vite' },
  {
    label: 'PrimeVue',
    icon: 'i-prime-prime color-emerald-6',
    to: basePath + '/PrimeVue',
  },
  {
    label: 'TypeScript',
    icon: 'i-logos-typescript-icon',
    to: basePath + '/TypeScript',
  },
  {
    label: 'VS-Code',
    icon: 'i-logos-visual-studio-code',
    to: basePath + '/VS-Code',
  },
])
</script>

<template>
  <div container mx-auto flex flex-col items-center justify-center h-full gap-2>
    <h1>PrimeVitesome</h1>
    <p>{{ t('intro') }}</p>
    <div w-640px>
      <TabMenu class="w-full" :class="smallerMdClass" :model="tabMenuItems" />
      <div py-3 ml-15>
        <router-view />
      </div>
    </div>
  </div>
</template>
<style scoped>
:deep(.p-tabmenu-nav) {
  @apply justify-center;
}

:deep(.small-screen .p-tabmenu-nav) {
  @apply flex-col;
}

:deep(.small-screen a) {
  @apply p-1! border-0! hover:bg-primary-100! m-0!;
}
</style>
