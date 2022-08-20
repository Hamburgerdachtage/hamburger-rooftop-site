<template>
  <header class="main-header flex-row">
    <NuxtLink to="/">
      <!-- <SanityImage v-if="image" :asset-id="image.asset._ref" alt="Logo" class="logo" /> -->
      <HDTLogo class="logo" />
    </NuxtLink>
    <div class="headline-container">
      <h1 v-if="headline" class="header-title">{{ headline }}</h1>
      <div v-if="subline" class="subline">
        <SanityContent :blocks="subline"></SanityContent>
      </div>
    </div>

  </header>
</template>

<script setup lang="ts">
import { logger } from "@nuxt/kit";
import HDTLogo from "../../assets/images/HDT_Logo.svg"
import { useSimpleSanity } from "../../composables/useSimpleSanity"
// const sanity = useSanity()

const route = useRoute()
const isMain = computed(() => route.path === '/')

const { headline, subline, image, } = defineProps({
  headline: {
    type: String,
    default: null
  },
  subline: {
    type: Array,
    default: () => (null)
  },
  image: {
    type: Object,
    default: () => ({})
  },

})


</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

header.main-header {
  z-index: 101;


  @include breakpoint(mobile, down) {
    flex-direction: column;
    max-width: 100%;
    padding-right: $space-small;
  }

  >img,
  .logo {
    height: 370px;
    width: 370px;
    z-index: 101;

    @include breakpoint(mobile, down) {
      height: 141px;
      width: 141px;
    }
  }



  >.headline-container {
    z-index: 101;
    margin: calc($space-xxlarge + $space-xlarge) auto 0 $space-xlarge;
    width: $component-container;

    // margin: auto;
    @include breakpoint(mobile, down) {
      margin: $space-medium 0 0 0;
      width: 100%;
      padding: $space-small
    }
  }
}
</style>