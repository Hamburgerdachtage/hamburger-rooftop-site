<template>
  <div class="hamburger-container" :class="isOpen" @click="handleClick">

    <svg width="26px" height="19px" viewBox="0 0 26 19" version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="HDT-Programm-L" transform="translate(-1375.000000, -33.000000)" fill="#0E141B">
          <g id="Menu" transform="translate(1375.000000, 33.000000)">
            <rect class="line top" :class="{ 'is-open': isOpen }" x="0" y="0" width="26" height="2.375" rx="1"></rect>
            <rect class="line mid" :class="{ 'is-open': isOpen }" x="0" y="8.3125" width="26" height="2.375" rx="1">
            </rect>
            <rect class="line bottom" :class="{ 'is-open': isOpen }" x="0" y="16.625" width="26" height="2.375" rx="1">
            </rect>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">import { ref } from 'vue';

const emit = defineEmits([
  'close',
  'open'
])

const isOpen = ref(false);

const handleClick = () => {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    return emit('open')
  }
  return emit('close')
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/spaces.scss";

.hamburger-container {
  cursor: pointer;
  z-index: 500;
  padding: $space-small;

  .line {
    transform-origin: left;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .2s ease-in-out;
    -moz-transition: .2s ease-in-out;
    -o-transition: .2s ease-in-out;
    transition: .2s ease-in-out;

  }

  .mid {
    &.is-open {
      opacity: 0;
    }
  }

  .top.is-open {
    //    -webkit-transform: rotate(45deg);
    // -moz-transform: rotate(45deg);
    // -o-transform: rotate(45deg);
    transform: translateY(-3px) rotate(45deg);

  }

  .bottom.is-open {
    //    -webkit-transform: rotate(-45deg);
    // -moz-transform: rotate(-45deg);
    // -o-transform: rotate(-45deg);
    transform: translateY(3px) rotate(-45deg);

  }


}
</style>