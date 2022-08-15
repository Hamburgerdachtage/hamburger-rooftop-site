<template>
  <header class="main-header flex-row">
    <SanityImage v-if="headerImage" :asset-id="headerImage" alt="Logo" />
    <HDTLogo v-else />
    <div class="headline-container">
      <h1 v-if="currentHeadline" class="header-title">{{ currentHeadline }}</h1>
      <div v-if="currentSubline" class="subline">
        <SanityContent :blocks="currentSubline"></SanityContent>
      </div>
    </div>

  </header>
</template>

<script setup lang="ts">
import { logger } from "@nuxt/kit";
import HDTLogo from "../../assets/images/HDT_Logo.svg"

const props = defineProps({
  headline: {
    type: String,
    default: null
  },
  subline: {
    type: Array,
    default: () => ([])
  },
  image: {
    type: Object,
    default: () => ({})
  },

})

const data = await useSimpleSanity('header')

const headerData = data.filter(item => item.page === "main")[0]


const headerImage = computed(() => {
  return headerData && headerData.image && headerData.image.asset._ref
})

const currentHeadline = computed(() => {
  if (props.headline) {
    return props.headline
  }
  if (headerData) {
    return headerData.headline
  }
  return "Hamburger Dach Tage"
})
const currentSubline = computed(() => {
  if (props.subline.length > 0) {
    return props.subline
  }
  if (headerData) {
    return headerData.subline
  }
  return null
})

</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

header.main-header {

  @include breakpoint(mobile, down) {
    flex-direction: column;
    max-width: 100%;
    padding-right: $space-small;
  }

  >img,
  .logo {
    height: 370px;
    width: 370px;

    @include breakpoint(mobile, down) {
      height: 141px;
      width: 141px;
    }
  }



  >.headline-container {
    margin: $space-xxlarge auto 0 $space-xlarge;
    width: $component-container;

    // margin: auto;
    @include breakpoint(mobile, down) {
      margin: 0;
      width: 100%;
      padding: $space-small
    }
  }
}
</style>