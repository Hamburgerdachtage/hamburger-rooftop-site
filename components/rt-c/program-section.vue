<template>
  <section v-for="item in items" class="program-section" :key="item._id">
    <div class="program-description">
      <span class="pre-title">{{item.preTitle}}</span>
      <h1>{{item.name}}</h1>
      <SanityContent :blocks="item.description" />
    </div>
    
   

    <div class="event-container">
      <template v-for="eventItem in item.events" :key="eventItem._id">
        <rt-c-event v-bind="eventItem" :data="eventItem"/>
      </template>

    </div>
   
  </section>
</template>

<script setup lang="ts">
const getProgramData = async () => {
  try {
    const query = groq`*[_type=='programteil'] {
  ...,
  events[]-> {
    ...,
    themes[]->
  }
}`

    const sanity = useSanity()
    const { data } = await useAsyncData(`programteil`, () => sanity.fetch(query)) as Record<string, any>
    const items = data._rawValue
  return items
  } catch (error) {
    console.error("getProgramData", error)
  }
}
 const items = await getProgramData()
    // return items
console.log("program-section", {items})
</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";
 .program-section {
  margin-top: $space-large;
 }
</style>