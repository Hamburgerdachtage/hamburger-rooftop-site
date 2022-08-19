<template>
  <nav class="nav-links flex-column">
    <header>
      <NuxtLink class="no-underline" to="/">
        <h1 class="menu-link">Home</h1>
      </NuxtLink>
    </header>
    <div class="page-links">
      <ul v-if="hasPageLinks" class="nav-list">
        <template v-for="link in pageLinks" :key="link.id">
          <li class="nav-list-item">

            <rt-o-nav-item class="nav-link no-underline" :text="link.text" :url="link.path" />
          </li>
        </template>
        <li class="nav-list-item">
          <rt-o-nav-item class="nav-link no-underline" text="FAQ" url="/faq" />
          <!-- <NuxtLink to="/faq">FAQ</NuxtLink> -->
        </li>
      </ul>

    </div>
    <footer>
      <ul v-if="hasExternalLinks" class="nav-list">
        <template v-for="link in externalLinks" :key="link.id">
          <li class="nav-list-item">
            <rt-o-nav-item :text="link.text" :url="link.link" />
          </li>
        </template>

      </ul>
    </footer>
  </nav>
</template>

<script setup lang="ts">
const sanity = useSanity()

const pageLinks = ref([])
const externalLinks = ref([])

const hasPageLinks = computed(() => pageLinks.value.length > 0)
const hasExternalLinks = computed(() => externalLinks.value.length > 0)

const getPageLinkData = async () => {
  try {
    const query = groq`*[_type == "article" && isInNav == true]{
    'id':_id,
      'text':title,
     'path': slug.current,

}`

    const { data } = await useAsyncData(`pages`, () => sanity.fetch(query)) as Record<string, any>

    const items = data._rawValue
    return items
  } catch (error) {
    console.error("getProgramData", error)
  }
}

pageLinks.value = await getPageLinkData()

const getExternalLinkData = async () => {
  try {
    const query = groq`*[_type == "navLinks"][0]{
  navLinks[]-> {
    link,
    text,
    'id': _id
  }
 
}`


    const { data } = await useAsyncData(`navLinks`, () => sanity.fetch(query)) as Record<string, any>

    const items = data._rawValue
    console.log("nav", { query, items })
    return items
  } catch (error) {
    console.error("getProgramData", error)
  }
}
const { navLinks } = await getExternalLinkData()
externalLinks.value = navLinks

</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

.nav-links {
  color: $bismark;



  margin-top: $space-large;
  padding: 0 $space-small $space-small $space-small;
  height: calc(100% - $space-xxlarge);

  .page-links {
    flex-grow: 3;

  }

  .nav-list {
    list-style-type: none;
    padding-left: 0;
  }

  // .nav-list-item {
  //   padding: 0 $space-small;
  // }
}
</style>