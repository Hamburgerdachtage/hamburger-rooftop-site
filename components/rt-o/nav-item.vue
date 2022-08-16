<template>
  <div class="nav-item flex-row">
    <!-- <div class="nav-image" v-if="image">
      <SanityImage v-if="image" :asset-id="image && image.asset._ref" />
    </div> -->
    <div class="nav-link external" v-if="external">

      <a :href="url">{{ text }}</a>
    </div>
    <div class="nav-link" v-else>

      <NuxtLink :to="url">{{ text }}</NuxtLink>
    </div>
  </div>

</template>

<script setup lang="ts">
defineProps({
  external: Boolean,
  url: { type: String, default: null },
  text: { type: String, default: null },
  image: { type: Object, default: () => ({}) }
})

</script>
<style scoped lang="scss">
// .nav-item {
</style>
