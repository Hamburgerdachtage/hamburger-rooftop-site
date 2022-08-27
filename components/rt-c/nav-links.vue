<template>
  <nav class="nav-links flex-column">
    <header>
      <NuxtLink class="no-underline" to="/">
        <h1 class="menu-link">Home</h1>
      </NuxtLink>
    </header>
    <div class="page-links">
      <ul v-if="hasPageLinks" class="nav-list">
        <template v-for="link in pageSlugs" :key="link.id">
          <li v-if="link.isInNav" class="nav-list-item">
            <rt-o-nav-item class="nav-link no-underline" :text="link.text" :url="link.path" />
          </li>
        </template>
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
import { logger } from '@nuxt/kit';

const sanity = useSanity()

const pageSlugs = ref([])
const externalLinks = ref([])

const hasPageLinks = computed(() => pageSlugs.value && pageSlugs.value.length > 0)
const hasExternalLinks = computed(() => externalLinks.value.length > 0)

const getLinkData = async () => {
  try {
    const query = groq`*[_type == "navLinks" && title == "Menu Navigation"][0]{
  ...,
  pageLinks[]-> {
    ...,
    'id':_id,
    'text':title,
    'path': slug.current,
  },
  navLinks[]-> {
    link,
    text,
    'id': _id
  }
}`


    const { data } = await useAsyncData(`navLinks`, () => sanity.fetch(query)) as Record<string, any>

    const items = data._rawValue
    return items
  } catch (error) {
    console.error("getProgramData", error)
  }
}
const { navLinks, pageLinks } = await getLinkData()
pageSlugs.value = pageLinks
externalLinks.value = navLinks

</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

.nav-links {
  color: $white;



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

}
</style>