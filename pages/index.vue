<template>
  <div class="flex w-full flex-col space-y-32">
    <WithContentWidth>
      <AboutMe />
    </WithContentWidth>

    <div>
      <WithContentWidth>
        <Seperator>
          What I do best
        </Seperator>
      </WithContentWidth>

      <WithContentWidth>
        <Specialisation />
      </WithContentWidth>
    </div>

    <div>
      <WithContentWidth>
        <Seperator>
          My weekly newsletter and blogs
        </Seperator>
      </WithContentWidth>

      <Newsletter />
    </div>
  </div>
</template>
<script setup lang="ts">
import WithContentWidth from '~/components/hoc/WithContentWidth.vue'
import AboutMe from '~/components/about/AboutMe.vue'
</script>

<style>
  * {
    box-sizing: border-box;
  }
</style>
