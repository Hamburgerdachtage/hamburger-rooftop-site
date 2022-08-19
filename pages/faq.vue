<template>
  <NuxtLayout>
    <template #main-header>
      <rt-c-header :headline="header" :subline="headerText" />
    </template>
    <template #main-slot>
      <rt-c-faq :faq-data="faqData" />

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


</script>
