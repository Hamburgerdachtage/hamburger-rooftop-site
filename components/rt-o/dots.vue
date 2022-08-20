<template>
  <div class="header-dots">
    <div class="dot d1 bg-mintLight"></div>
    <div class="dot d2 bg-magenta"></div>
    <div class="dot d3 bg-skylark"></div>
    <div class="dot d4 bg-magenta"></div>
    <slot />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

.header-dots {
  width: 100vw;

  position: relative;


  .dot {
    position: absolute;
    border-radius: 50%;
    z-index: 0;
    overflow: hidden;
    @include transition();

    &:hover {
      transform: scale(1.2)
    }

    &.d1 {
      width: 254px;
      height: 254px;
      top: -100px;
      right: -80px;
    }

    &.d2 {
      width: 64px;
      height: 64px;
      top: 400px;
      right: 10%;
    }

    &.d3 {
      width: 60px;
      height: 60px;
      top: 40px;
      left: 39%;

    }

    &.d4 {
      width: 48px;
      height: 48px;
      top: 400px;
      left: 10%;
    }

    @include breakpoint(mobile, down) {
      &.d1 {

        width: 195px;
        height: 195px;
        top: -80px;
        right: -80px;
      }

      &.d2 {
        display: none;
        width: 64px;
        height: 64px;
        top: 400px;
        right: 10%;
      }

      &.d3 {
        width: 47px;
        height: 47px;
        top: -15px;
        left: 40%;

      }

      &.d4 {
        width: 24px;
        height: 24px;
        top: 150px;
        left: 5%;
      }
    }
  }
}
</style>