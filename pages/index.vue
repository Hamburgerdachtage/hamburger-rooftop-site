<template>
  <NuxtLayout>
    <template #main-header>
      <rt-c-header />
    </template>
    <template #main-slot>
      <rt-o-program-filter :hash-links="hashLinks" :active-hash="currentHash" @hash="handleHash" />
      <rt-c-program-section :items="filteredProgram" />
    </template>

  </NuxtLayout>
</template>

<script setup lang="ts">
const getProgramData = async () => {
  try {
    const query = groq`*[_type=='programteil'] {
  ...,
  events[]-> {
    ...,
    reservationLink->,
    themes[]->
  }
}`

    const sanity = useSanity()
    const { data } = await useAsyncData(`programteil`, () => sanity.fetch(query)) as Record<string, any>
    const items = data._rawValue
    return items
  } catch (error) {
    console.error("getProgramData", error)
  }
}
const programData = ref([])
programData.value = await getProgramData()

const hashLinks = ref([])
hashLinks.value = programData.value.map(item => item.hashLink)

const currentHash = ref<string>(null)
function handleHash(hash) {
  if (!hash) {
    return
  }
  if (currentHash.value === hash) {
    return currentHash.value = null
  }
  currentHash.value = hash

}

const filteredProgram = computed(() => {
  if (!currentHash.value) {
    return programData.value
  }
  return programData.value.filter(item => {
    return item.hashLink === currentHash.value
  })
})
</script>
