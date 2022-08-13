<template>
  <NuxtLayout>
    <template #main-header>
      <rt-c-header :headline="articleData.title" :subline="articleData.summary" />
    </template>
    <template #main-slot>
      <section class="article">
        <SanityContent :blocks="articleData.content" />
      </section>

    </template>

  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const getArticleData = async (title: string) => {
  try {
    const query = groq`*[slug.current == '${title}'][0] {
  ...
}`

    const sanity = useSanity()
    const { data } = await useAsyncData(`programteil`, () => sanity.fetch(query)) as Record<string, any>
    const items = data._rawValue
    console.log("index", { items })
    return items
  } catch (error) {
    console.error("getProgramData", error)
  }
}
const articleData = ref({})
const title = route.path.replace('/', '')
console.log({ title })
articleData.value = await getArticleData(title)

console.log({ articleData: articleData.value })
</script>
<style scoped lang="scss">
@import "../assets/styles/index.scss";

.article {
  margin-top: $space-large;
}
</style>