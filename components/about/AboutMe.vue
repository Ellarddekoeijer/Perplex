<script setup lang="ts">
import CTA from '~/components/CTA.vue'

</script>

<template>
  <div class="relative flex-col">
    <CTA class="absolute bottom-0 left-0 z-30 md:left-auto md:right-0" to="/about">
      About Myself
    </CTA>

    <div class="right-0 -z-30 hidden h-full w-full md:absolute md:block md:w-8/12">
      <div class="relative h-full w-full bg-cover bg-center bg-no-repeat drop-shadow" style="background-image: url(/woman-pink-wider2.jpg);">
        <div class="absolute right-0 z-50 h-full w-4 bg-cover" style="background-image: url(/background-paint.jpg);" />
      </div>
    </div>

    <div class="flex flex-col items-start space-y-3 md:space-y-5 md:py-32">
      <div>
        <span class="text-lg font-bold italic text-blue-900 md:text-4xl">
          Sakura Haruno
        </span>
        <h1
          style="background-image: url('/background-paint.jpg'); -webkit-text-fill-color: transparent;"
          class="bg-cover bg-clip-text bg-left-bottom bg-no-repeat text-2xl font-bold md:text-6xl lg:text-8xl"
        >
          Designer & <br class="hidden md:block"> Illustrator
        </h1>
        <p class="leading-8 text-blue-900 text-opacity-80 sm:mt-12 sm:w-96">
          Norway based designer who is specialised in Product design and illustration.
        </p>
      </div>
      <img class="block w-full xs:w-80 md:hidden" src="/woman-pink.jpg" alt="Naruto enjoyer">
    </div>
  </div>
</template>
