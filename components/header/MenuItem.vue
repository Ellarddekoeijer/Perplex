<script setup lang="ts">
defineProps<{
    to: string;
  }>()
</script>

<template>
  <NuxtLink class="ml-8 font-sans font-bold tracking-wide text-blue-900" :to="to">
    <slot />
  </NuxtLink>
</template>

<style scoped>

</style>
