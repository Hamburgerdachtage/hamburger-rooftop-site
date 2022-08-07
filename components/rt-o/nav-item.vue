<template>
  <div class="nav-link external" v-if="external">
    <a :href="url">{{text}}</a>
  </div>
  <div class="nav-link" v-else>
    <NuxtLink :to="url">{{text}}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps({
  external: Boolean,
  url:{type:String, default: null},
  text:{type:String, default: null},

})
 
</script>

