<template>
  <div class="outside">
    <nav class="flex-row-reverse">
      <rt-o-hamburger @open="toggleNav" @close="toggleNav"></rt-o-hamburger>
      <rt-o-slide-out :show="showNav" mint />
    </nav>

    <div class="default-layout main-container ">
      <slot name="main-header"></slot>
      <main class="flex-column">
        <slot name="main-slot" />
      </main>
      <!-- <slot name="footer-slot"></slot> -->
    </div>

    <rt-o-footer />
  </div>


</template>

<script setup lang="ts">
const showNav = ref(false);

const toggleNav = () => {
  showNav.value = !showNav.value
}

</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";

.outside {
  min-height: 100vh;

  @include breakpoint(mobile, down) {
    max-width: 100vw;
    overflow: hidden;
  }
}

.default-layout {

  height: 100%;

  main {
    margin: 0 auto;
    max-width: $inner-container;
    min-height: calc(100vh - (176px * 3));

    @include breakpoint(mobile, down) {
      max-width: 100%;
      padding: $space-small;
    }
  }
}
</style>