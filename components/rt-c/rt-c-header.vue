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

const query = groq`*[_type == "header"]`
const sanity = useSanity()
const { data } = await useAsyncData('header', () => sanity.fetch(query))
const route = useRoute()
const getHeaderData = (data) => {
  const headers = data._rawValue
  return headers.filter(item => item.page === "main")[0]
}
const {headline, image, page, subline} = getHeaderData(data)



console.log("index sanity query", {headline, image, page, subline})
</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";
header.main-header {
  >img {
    height: 370px;
    width: 370px;
  }
  >.headline-container {
    margin-top: $space-xxlarge;
  }
}
</style>