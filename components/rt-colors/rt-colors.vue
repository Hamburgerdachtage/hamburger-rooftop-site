<template>
  <div class="color-container" >
    <div v-for="square in colors" :key="square" :class="`color-${square}`"  >
      <p>{{square}}</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const colors = ref([
   'magenta',
  'pink',
  'darkness',
  'text',
  'mintDark',
  'mintLight',
  'white',
])


</script>

<style scoped lang="scss">
@import "../../assets/styles/colors.scss";
.color-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.square {
  width: 50px;
  height: 50px
}
@each $name, $value in $colors-list {
  .color-#{"" + $name} {
    background-color: $value;
  }
}

</style>