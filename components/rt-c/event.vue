<template>
  <div v-if="name" class="event flex-row">
    <SanityImage class="event-image" v-if="image" :asset-id="image.asset._ref" />
    
    <div class="event-body">
      <hr />
      <h3>{{name}}</h3>
      <div class="flex-row w-100 space-between">
         <SanityContent v-if="description" :blocks="description" />
         <button class="btn event">Jetzt Buchen</button>
      </div>
     
      <div v-if="location" class="location"><b>Standort:</b> {{location}}</div>
      <div v-if="times" class="times flex-row">
        <div class="time-container" v-for="time in times" :key="time._key">
          <div class="date green-bold">{{new Date(time.eventTime).toDateString()}}</div>
          <div class="date green-bold">{{new Date(time.eventTime).toLocaleTimeString()}}</div>
        </div>
      </div>
      <div v-if="length" class="length"><b>Dauer:</b> {{ length }}</div>
      <div v-if="themes" class="themes"><b>Themes: </b>
        <span class="theme" v-for="theme in themes" :key="theme._key">{{theme.theme}}</span>
      </div>
     
      <div v-if="tips" class="tips"><b>Wissenswertes:</b> {{tips}}</div>
      <div v-if="costs" class="costs"><b>Kosten:</b> {{costs}}</div>
  
    </div>
   
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {type: String, default: null},
  description: {Array, default: ()=>([])},
  image: {type: Object},
  data: {type: Object, default: ()=>({})},
  times: {type: Array, default: ()=>([])},
  length: {type: String, default: null},
  themes: {type: Array, default: ()=>([])},
  location: {type: String, default: null},
  tips: {type: String, default: null},
  costs: {type: String, default: null}
})
// const eventItem = await useSimpleSanity('event')
console.log("event", { data: props.data })
</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";
 .event {
  margin-top: $space-xlarge;

  .event-image {
    width: 268px;
    height: 268px;
    margin: $space-large $space-medium auto 0;
  }
  .event-body {
    width: calc(100% - 268px - $space-medium);
    margin-left:auto;
    * {
      margin: 0 0 $space-smaller 0;
      
    }
    .times {
      margin-bottom: 0px;
      .date {
        margin: 0 $space-small 0 0;
      }
    }
    .theme {
      margin-right: $space-small;
    }
  }
 }
</style>