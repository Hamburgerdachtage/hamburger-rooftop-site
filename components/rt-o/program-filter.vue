<template>
  <div class="program-filter flex-row flex-center-align flex-center-justify">
    <template v-for="(hash, i) in hashLinks" :key="hash">
      <button class="filter-button flex-column" @click="handleClick(hash)">
        <div v-if="numbers" class="number">0{{ numbers[i] }}</div>
        <div class="hash">{{ hash }}</div>
      </button>
    </template>

  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  hashLinks: {
    type: Array,
    default: () => ([])
  }

})
const emit = defineEmits(['hash'])

const numbers = ref([])

numbers.value = props.hashLinks.map((item, i) => i + 1)

function handleClick(hash) {
  emit('hash', hash)
}

</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

.filter-button {
  border: none;
  background-color: $mint-light;
  height: 268px;
  width: 268px;
  border-radius: 16px;
  margin: $space-small;
  color: $bismark;

  .number {
    @include font-size(p);
    margin: $space-tiny auto 0 $space-tiny;
    justify-self: flex-start;
    align-self: flex-start;
    color: $bismark;
  }

  .hash {
    @include font-size(h3);
    font-weight: bold;
    color: $bismark;
    margin: auto;
  }
}
</style>