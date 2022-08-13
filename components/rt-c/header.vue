<template>
  <header class="main-header flex-row">
    <SanityImage :asset-id="headerData.image.asset._ref" alt="Logo" />

    <div class="headline-container">
      <h1 v-if="currentHeadline" class="header-title">{{ currentHeadline }}</h1>
      <div class="subline">
        <SanityContent v-if="currentSubline" :blocks="currentSubline"></SanityContent>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import HDTLogo from "../../assets/images/HDT_Logo.svg"

const { headline, subline, image, useProps } = defineProps({
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
  useProps: Boolean
})

const data = await useSimpleSanity('header')

const headerData = data.filter(item => item.page === "main")[0]


const currentHeadline = computed(() => {
  if (headline) {
    return headline
  }
  return headerData.headline
})
const currentSubline = computed(() => {
  if (subline) {
    return subline
  }
  return headerData.subline
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