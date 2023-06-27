<script setup lang="ts">
import SubHeading from '~/components/SubHeading.vue'

defineProps<{
    url: string
    alt: string
    name: string
    onClick:() => void
  }>()
</script>

<template>
  <div class="group flex flex-col space-y-4 transition hover:cursor-pointer  lg:space-y-12" @click="onClick">
    <div class="h-60 w-full overflow-hidden">
      <img class="h-full w-full gap-6 object-cover transition group-hover:scale-110" :src="url" :alt="alt">
    </div>
    <span>
      <SubHeading>
        {{ name }}
      </SubHeading>
    </span>
  </div>
</template>

<style scoped>

</style>
