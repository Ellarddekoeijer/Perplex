<script setup>
const query = gql`
        query {
            characters(page: 3, filter: { name: "rick" }) {
            results {
              id
              name
              image
              status
            }
          }
        }
    `
const { data } = await useAsyncQuery(query)

const specialisations = data.value?.characters.results || []
</script>

<template>
  <div class="flex flex-col">
    <Heading>
      Specialisation
    </Heading>
    <div class="grid grid-cols-1 gap-y-6 xs:grid-cols-2 xs:gap-6 sm:gap-12 lg:grid-cols-3 lg:gap-24">
      <SpecialisationItem
        v-for="specialisation in specialisations.slice(0,3)"
        :key="specialisation.id"
        :name="specialisation.name"
        :alt="specialisation.status"
        :on-click="() => console.log('hoi')"
        :url="specialisation.image"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
