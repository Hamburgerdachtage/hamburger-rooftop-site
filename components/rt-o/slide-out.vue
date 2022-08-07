<template>
<div>
   <nav class="slideout" :class="{mint, show}">
    <!-- <ul v-if="navLinks" class="nav">
      <li class="nav-item" v-for="(item, i) in navLinks" :key="i">
        <rt-o-nav-item v-bind="item" />
      </li>
    </ul> -->

  </nav>
</div>
 
</template>

<script setup lang="ts">
defineProps({
  show: Boolean,
  mint: Boolean,
  navLinks: {type: Array, default: ()=>([])}
})



</script>

<style scoped lang="scss">
@import "../../assets/styles/colors.scss";
.slideout {
  position: absolute;
  top:-605px;
  right: 0;
  opacity: 0;
  height: 600px;
  width: 375px;
  transition:500ms ease-in-out;
  &.mint {
    background-color: $mint-light;
  }
  &.show {
    top:0px;
    opacity: 1;
    right: 0;
  }
}
</style>