<template>
  <div class="outside">
    <div class="nav-wrapper flex-row-reverse" >
      <rt-o-hamburger @open="toggleNav" @close="toggleNav" />
      <rt-o-slide-out :show="showNav" class="bg-mintDark" :class="{closed: !showNav}">
        <rt-c-nav-links />
      </rt-o-slide-out>
    </div>


    <rt-o-dots>
      <div class="main-container">
        <slot name="main-header"></slot>
      </div>

    </rt-o-dots>
    <div class="default-layout main-container ">

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
  overflow: hidden;

  @include breakpoint(tablet, down) {
    max-width: 100vw;
    overflow: hidden;
  }
}
.slideout.closed {
  height: 10px;
}

.default-layout {
  z-index: 100;
  height: 100%;
  margin-top: $space-large;

  .nav-links-wrapper {
    color: $white;
    padding: $space-small;

    >header {
      color: $white;
    }
  }

  main {
    margin: 0 auto $space-massive auto;
    max-width: $inner-container;
    min-height: calc(100vh - (176px * 3));

    @include breakpoint(tablet, down) {
      max-width: 100%;
      padding: $space-small;
    }
  }
}
</style>