<template>
  <div class="nav-link external" v-if="external">
    <a class="no-underline menu-link" :href="url">{{ text }}</a>
  </div>
  <div class="nav-link" v-else>
    <NuxtLink class="no-underline menu-link" :to="`/${url}`">{{ text }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ external: Boolean,
  url: { type: String, default: null },
  text: { type: String, default: null },

})
const external = computed(() => {
  const matches = ["http", 'www', '.com', '.de']
  return matches.some(m=> props.url.includes(m))
})

</script>
<style scoped lang="scss">
@import "../../assets/styles";

.menu-link {
  @include fontSize(h4);
  font-weight: bold;
}
</style>

