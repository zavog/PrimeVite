<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <p class="text-primary">Hello world this is my template</p>
  <Button :label="t('do-stuff')"></Button>
</template>
