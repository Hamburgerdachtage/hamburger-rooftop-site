<template>
  <header class="main-header flex-row">
    <SanityImage :asset-id="image.asset._ref" alt="Logo" />
    <div class="headline-container">
        <h1 class="header-title">{{headline}}</h1>
        <div class="subline">
          <SanityContent :blocks="subline"></SanityContent>
        </div>
    </div>
  </header>
</template>

<script setup lang="ts">

const data = await useSimpleSanity('header')

const {headline, image, page, subline} =  data.filter(item => item.page === "main")[0]

</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";
header.main-header {
  @include breakpoint(mobile, down) {
    flex-direction: column;
  }
  >img {
    height: 370px;
    width: 370px;
    @include breakpoint(mobile, down) {
      height: 141px;
      width: 141px;
    }
  }
  >.headline-container {
    margin-top: $space-xxlarge;
     @include breakpoint(mobile, down) {
       margin-top: 0;
     }
  }
}
</style>