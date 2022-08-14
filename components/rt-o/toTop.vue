<template>
  <ClientOnly>
    <div class="to-top-container">
      <toTop class="to-top-icon" @pointerdown="handleClick" />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import toTop from "../../assets/images/toTop.svg"

const handleClick = () => {

  if (window) {
    window.scrollTo(0, 0)
  }
}
const isHovered = ref(false)
function handleHover() {

  isHovered.value = !isHovered.value

}
</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

.to-top-container {
  width: 147px;
  margin: auto 0 auto auto;



  .to-top-icon {
    margin: 0 auto;
    cursor: pointer;


    @include transition();

    &:hover {
      @include shadow-hover-svg();
      transform: translateY(-5px);
    }
  }
}
</style>