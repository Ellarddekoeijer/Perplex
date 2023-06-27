<script setup>
import { useWindowSize } from '@vueuse/core'
import WithContentWidth from '~/components/hoc/WithContentWidth.vue'
const { width } = useWindowSize()
const newsLetterItemWidthInRem = 27
const itemsPerScroll = width.value > 1000 ? 3 : 1

const query = gql`
          query {
              characters {
              results {
                id
                name
                image
              }
            }
          }
      `
const { data } = await useAsyncQuery(query)

const newsletters = data.value?.characters.results || []
const selectedIndex = ref(0)
function next () {
  if (newsletters.length <= selectedIndex.value + itemsPerScroll) { return }
  selectedIndex.value += itemsPerScroll
}

function prev () {
  if (selectedIndex.value - itemsPerScroll < 0) { return }
  selectedIndex.value -= itemsPerScroll
}
</script>
<template>
  <div class="w-screen">
    <WithContentWidth>
      <div class="flex flex-col">
        <Heading>
          Design newsletter
        </Heading>
      </div>
    </WithContentWidth>
    <!-- To make the component align with the WithContentWidth HOC we have to set its margin left manually -->
    <div class="ml-3 flex items-center overflow-hidden px-3 lg:ml-1/12 2xl:ml-2/12">
      <button class="absolute z-20 h-16 w-8 bg-black bg-opacity-60" @click="prev">
        <font-awesome-icon class="text-white" :icon="['fa', 'chevron-left']" />
      </button>
      <button class="absolute right-0 z-50 h-16 w-8 bg-black bg-opacity-60" @click="next">
        <font-awesome-icon class="text-white" :icon="['fa', 'chevron-right']" />
      </button>

      <div class="grid w-full grid-flow-col items-start gap-x-12 transition duration-300 ease-in-out" :style="`transform: translateX(-${selectedIndex * newsLetterItemWidthInRem}rem)`">
        <NewsletterItem
          v-for="newsletter in newsletters"
          :key="newsletter.id"
          :on-click="() => {}"
          :url="newsletter.image"
          alt="temp"
          :title="newsletter.name"
          excerpt="The ultimate guide to proper understanding user perspective and it's impact on day to day life"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
