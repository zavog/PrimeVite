<script setup lang="ts">
let isDialogShown = $ref(false)

function showDialog() {
  isDialogShown = true
}
</script>
<template>
  <Dialog
    v-model:visible="isDialogShown"
    header="Here's why"
    :modal="true"
    class="container"
  >
    PrimeVue has its own set of classes that usually have precedence over UnoCSS
    that are simply attached to the component. Therefore we have to achieve a
    higher precedence either using !important or scoped styles. If you want to
    change PrimeVue styles in a global style, then you should either create your
    own classes, or prefix the PrimeVue class name with the HTML tag (usually
    div e.g. div.p-datatable)
  </Dialog>
  Override styles using @apply or important
  <Button p="x-10! 0!" label="Tell my why!" @click="showDialog" />
</template>
<style scoped>
.p-button {
  /* sometimes you don't need deep */
  @apply bg-red;
}
</style>
