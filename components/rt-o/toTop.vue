<template>
  <div class="to-top-container">
    <toTop class="to-top-icon" @click="handleClick" />
  </div>
</template>

<script setup lang="ts">
import toTop from "../../assets/images/toTop.svg"

const handleClick = () => {
  console.log("toTop")
}
</script>

<style scoped lang="scss">
.to-top-container {
  width: 147px;
  margin: auto 0 auto auto;



  .to-top-icon {
    margin: 0 auto;
    cursor: pointer;

    &:hover {}
  }
}
</style>