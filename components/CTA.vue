<script setup lang="ts">
defineProps<{
    to: string;
  }>()
</script>

<template>
  <a :href="to" class="group flex items-center bg-white px-7 py-6 text-lg font-semibold text-blue-900 transition-all hover:cursor-pointer hover:pr-6">
    <slot />
    <span class="ml-4 transition-all group-hover:ml-5">
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </span>
  </a>
</template>

<style scoped>

</style>
