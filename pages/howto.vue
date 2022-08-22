<template>
  <NuxtLayout>
    <template #main-header>
      <rt-c-header :headline="header" :subline="headerText" />
    </template>
    <template #main-slot>
      <rt-o-hash-filter :hash-links="faqHashes" :active-hash="currentHash" @hash="handleHash" />
      <rt-c-faq :faq-data="filteredFaq" />

    </template>

  </NuxtLayout>
</template>

<script setup lang="ts">
const headerData = await useSimpleSanity('header')

const headerDataMain = headerData.filter(item => item.page === "faq")[0]

const header = ref(null)
const headerText = ref(null)
const logo = ref(null)

header.value = headerDataMain.headline;
headerText.value = headerDataMain.subline
logo.value = headerDataMain.image

const getFaqData = async () => {
  try {
    const query = groq`*[_type=='faq'] {
      ...,
      questions[]->
    }`

    const sanity = useSanity()
    const { data } = await useAsyncData(`faq`, () => sanity.fetch(query)) as Record<string, any>
    const items = data._rawValue
    return items
  } catch (error) {
    console.error("getFaqData", error)
  }
}
const faqData = ref([])
faqData.value = await getFaqData()
const faqHashes = computed(() => faqData.value.map(item => `#${item.headline.toLowerCase()}`))

const currentHash = ref<string>(null)
function handleHash(hash) {
  console.log('handleHash', { hash })
  if (!hash) {
    return
  }
  if (currentHash.value === hash) {
    return currentHash.value = null
  }
  currentHash.value = hash

}

const filteredFaq = computed(() => {
  if (!currentHash.value) {
    return faqData.value
  }
  return faqData.value.filter(item => {
    const headline = item.headline.toLowerCase()
    const hash = currentHash.value.replace('#', '')
    console.log("filteredFaq", { headline, hash })
    return headline === hash
  })
})
</script>
