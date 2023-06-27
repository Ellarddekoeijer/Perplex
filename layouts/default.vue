<template>
  <div class="w-full overflow-hidden py-12">
    <WithContentWidth>
      <Header />
    </WithContentWidth>
    <slot />
  </div>
</template>

<script setup lang="ts">
import WithContentWidth from '~/components/hoc/WithContentWidth.vue'
</script>
