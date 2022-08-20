<template>
  <div class="route-selector">
    <template v-for="hash in hashLinks" :key="hash._id">
      <div class="hash-box">{{hash}}</div>
    </template>

  </div>
</template>

<script setup lang="ts">
defineProps({
  hashLinks: {type: Array, default: ()=>([])}
})

</script>

<style scoped>

</style>