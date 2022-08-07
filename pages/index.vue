<template>
    <NuxtLayout>
      <template #main-header>
       <rt-c-header
        title="Rooftop Header"
       />
      </template>
      <rt-test message="rooftop" />

    </NuxtLayout>
</template>

<script setup lang="ts">
const query = groq`*[_type == "header"]`
const sanity = useSanity()
const { data } = await useAsyncData('header', () => sanity.fetch(query))
const route = useRoute()

console.log("index sanity query", { route: route.path,data})
</script>
