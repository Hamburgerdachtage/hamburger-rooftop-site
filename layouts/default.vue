<template>
  <div class="outside">
    <div class="flex-row-reverse">
      <rt-o-hamburger @open="toggleNav" @close="toggleNav"></rt-o-hamburger>
      <rt-o-slide-out :show="showNav" mint>
        <rt-c-nav-links />
      </rt-o-slide-out>
    </div>

    <div class="default-layout main-container ">
      <slot name="main-header"></slot>
      <main class="flex-column">
        <slot name="main-slot" />
      </main>
      <!-- <slot name="footer-slot"></slot> -->
    </div>

    <rt-o-footer />
  </div>


</template>

<script setup lang="ts">
const showNav = ref(false);

const toggleNav = () => {
  showNav.value = !showNav.value
}
const getNavData = async () => {
  try {
    const query = groq`*[_type=='navLinks'] {
  ...
  }
}`

    const sanity = useSanity()
    const { data } = await useAsyncData(`navLink`, () => sanity.fetch(query)) as Record<string, any>
    const items = data._rawValue

    return items
  } catch (error) {
    console.error("getProgramData", error)
  }
}
const navData = ref([])
navData.value = await getNavData()

</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";

.outside {
  min-height: 100vh;

  @include breakpoint(mobile, down) {
    max-width: 100vw;
    overflow: hidden;
  }
}

.default-layout {

  height: 100%;

  .nav-links-wrapper {
    color: $white;
    padding: $space-small;

    >header {
      color: $white;
    }
  }

  main {
    margin: 0 auto;
    max-width: $inner-container;
    min-height: calc(100vh - (176px * 3));

    @include breakpoint(mobile, down) {
      max-width: 100%;
      padding: $space-small;
    }
  }
}
</style>