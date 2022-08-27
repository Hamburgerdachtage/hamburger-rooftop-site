<template>
  <div class="nav-link external" v-if="external">
    <a class="no-underline menu-link" :href="url">{{ text }}</a>
  </div>
  <div class="nav-link" v-else>
    <NuxtLink class="no-underline menu-link" :to="`/${url}`">{{ text }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps({
  external: Boolean,
  url: { type: String, default: null },
  text: { type: String, default: null },

})

</script>
<style scoped lang="scss">
@import "../../assets/styles";

.menu-link {
  @include fontSize(h4);
  font-weight: bold;
}
</style>

