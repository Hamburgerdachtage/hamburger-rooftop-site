<template>
  <section v-for="item in items" class="program-section" :key="item._id" :id="item.hashLink.replace('#', '')">
    <div class="program-description">
      <span class="pre-title">{{ item.preTitle }}</span>
      <h2>{{ item.name }}</h2>
      <SanityContent :blocks="item.description" />
    </div>



    <div class="event-container">
      <template v-for="eventItem in item.events" :key="eventItem._id">
        <rt-c-event v-bind="eventItem" :data="eventItem" />
      </template>

    </div>

  </section>
</template>

<script setup lang="ts">
defineProps({
  items: {
    type: Array,
    default: () => ([])
  }
})

</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

.program-section {
  margin-top: $space-xxlarge;

  margin-bottom: $space-large;
  flex-grow: 1;

  .program-description {
    margin: 0 0 0 auto;
    width: $space-event-image;

    @include breakpoint(tablet, down) {
      width: 100%;
    }
  }

}
</style>