<script setup lang="ts">
defineProps<{
    url: string
    alt: string
    title: string
    excerpt: string
    onClick:() => void
  }>()
</script>

<template>
  <div class="flex w-96 flex-col space-y-12">
    <div class="relative h-72 w-full">
      <img class="h-full w-full object-cover object-center drop-shadow" :src="url" :alt="alt">
      <CTA class="absolute bottom-0 right-0 text-base " to="/example">
        Read
      </CTA>
    </div>
    <div>
      <SubHeading>
        {{ title }}
      </SubHeading>
      <p class="mt-6 leading-8 text-blue-900 text-opacity-80">
        {{ excerpt }}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
