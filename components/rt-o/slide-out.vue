<template>
  <div>
    <nav class="slideout shadow-hover" :class="{ mint, show }">
      <slot />

    </nav>
  </div>

</template>

<script setup lang="ts">
defineProps({
  show: Boolean,
  mint: Boolean,
  navLinks: { type: Array, default: () => ([]) }
})



</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

.slideout {
  position: absolute;
  top: -605px;
  right: 0;
  opacity: 0;
  height: 600px;
  width: 375px;
  transition: 500ms ease-in-out;

  @include breakpoint(mobile, down) {
    height: 100vh;
    width: 100vw;
  }

  &.mint {
    background-color: $mint-light;
  }

  &.show {
    top: 0px;
    opacity: 1;
    right: 0;
  }
}
</style>