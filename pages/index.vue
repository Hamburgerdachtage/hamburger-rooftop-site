<template>
  <NuxtLayout>
    <template #main-header>
      <rt-c-header :headline="header" :subline="headerText" :image="logo" />
    </template>

    <template #main-slot>
      <rt-o-festival-dates from="2022-09-16" to="2022-09-18" />
      <rt-o-hash-filter :hash-links="hashLinks" :active-hash="currentHash" @hash="handleHash" />
      <rt-c-program-section :items="filteredProgram" />
      <rt-o-sponsors />
    </template>

  </NuxtLayout>
</template>

<script setup lang="ts">
const headerData = await useSimpleSanity('header')

const headerDataMain = headerData.filter(item => item.page === "main")[0]

const header = ref(null)
const headerText = ref(null)
const logo = ref(null)

header.value = headerDataMain.headline;
headerText.value = headerDataMain.subline
logo.value = headerDataMain.image

const getProgramData = async () => {
  try {
    const query = groq`*[_type=='programteil'] | order(order asc)  {
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
