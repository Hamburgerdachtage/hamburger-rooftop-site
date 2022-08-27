<template>
  <NuxtLayout :key="slug">
    <template #main-header>
      <rt-c-header :headline="headline" :subline="subHeadline" />
    </template>
    <template #main-slot>
      <section class="article">
        <SanityContent :blocks="text" />
      </section>

    </template>

  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const sanity = useSanity()
const slug = computed(() => route.path.split('/')[1])
const query = computed(() => groq`*[_type == "article" && slug.current == "hamburgerdachtage-allgemein"][0] {
  ...,
  'slug': pageLink-> { 'current': slug.current },
  'title': pageLink-> title
}`)

const headline = ref("")
const subHeadline = ref([])
const text = ref([])

const { data } = await useAsyncData(`${slug.value}`, () => sanity.fetch(query.value)) as Record<string, any>

const items = data._rawValue
console.log(items)

async function setData() {
  const items = data._rawValue
  const { title, summary, content } = items;
  console.log({ title, summary, content })
  headline.value = title
  subHeadline.value = summary
  text.value = content
}

async function getDataAndRefresh() {

  await refreshNuxtData('page')
  await setData()
}
onBeforeMount(() => {
  getDataAndRefresh()
})


watch(slug, async (newVal, oldVal) => {
  console.log({ newVal, oldVal, slig: slug.value })
  getDataAndRefresh()
})


// console.log({ articleData: articleData.value })
</script>
<style scoped lang="scss">
@import "../assets/styles/index.scss";

.article {
  margin-top: $space-large;
}
</style>