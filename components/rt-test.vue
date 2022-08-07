<template>
  <div class="container mx-auto bg-gray-300 p-8">
    <h1 class="font-bold text-red-600 text-lg">
      {{ message }}
    </h1>
  </div>
</template>

<script setup lang="ts">
defineProps({
  message: { type: String, default: 'From the Module' }
})

</script>

<style scoped>

</style>
