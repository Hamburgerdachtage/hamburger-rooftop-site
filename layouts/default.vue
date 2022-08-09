<template>
    <div class="outside">
      <nav class="flex-row-reverse">
        <rt-o-hamburger @open="toggleNav" @close="toggleNav"></rt-o-hamburger>
        <rt-o-slide-out :show="showNav" mint/>
      </nav>
      
    <div class="default-layout main-container">
          <slot name="main-header"></slot>
    <main class="flex-column">
      <slot name="main-slot"/>
    </main>
    <slot name="footer-slot"></slot>
    </div>
    
    </div>


</template>

<script setup lang="ts">
const showNav = ref(false);

const toggleNav = ()=>{
  showNav.value = !showNav.value
}

</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";

.default-layout {
 
  // height: 100vh;
  main {
    margin:0 auto;
    max-width: $inner-container;
  }
}
  
</style>