<template>
  <div class="program-filter flex-row flex-center-align flex-center-justify">
    <template v-for="(hash, i) in hashLinks" :key="hash">
      <button class="filter-button flex-column" :class="{ active: activeHash === hash }" @click="handleClick(hash)">
        <div v-if="numbers" class="number">0{{ numbers[i] }}</div>
        <div class="hash">{{ hash.replace('#', '') }}</div>
        <arrow class="arrow" />
      </button>
    </template>

  </div>
</template>

<script setup lang="ts">
import arrow from "../../assets/images/filter-icon.svg"
const props = defineProps({
  hashLinks: {
    type: Array,
    default: () => ([])
  },
  activeHash: { type: String, default: null }

})

watch(props.activeHash, (newVal) => {
  console.log("watch activeHash", { newVal })
})
const emit = defineEmits(['hash'])

const numbers = ref([])

numbers.value = props.hashLinks.map((item, i) => i + 1)
const route = useRoute()
function handleClick(hash) {
  emit('hash', hash),
    setTimeout(() => {
      location.href = hash
    }, 500)

}



</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

.program-filter {
  margin: $space-large 0;

  @include breakpoint(mobile, down) {
    flex-direction: column;

  }
}

.filter-button {
  border: none;
  background-color: $mint-light;
  height: 268px;
  width: 268px;
  border-radius: 16px;
  margin: $space-small;
  color: $bismark;
  @include transition();

  &:hover {
    @include shadow-hover();
  }

  &.active {
    color: $white;
    background-color: $mint-dark;
    @include shadow-hover();

    .number,
    .hash,
    .arrow {
      color: $white;
    }

    .arrow {
      color: $white;
      stroke: $white;

      >* {
        stroke: $white;
      }
    }
  }

  @include breakpoint(mobile, down) {
    width: 100%;
    height: 75px;
    margin: $space-tiny auto;
    flex-direction: row;
  }

  .number {
    @include font-size(p);
    font-weight: bold;
    margin: $space-tiny auto 0 $space-tiny;
    justify-self: flex-start;
    align-self: flex-start;
    color: $bismark;

    @include breakpoint(mobile, down) {
      margin: auto $space-tiny auto $space-tiny;
    }
  }

  .hash {
    @include font-size(h3);
    font-weight: bold;
    color: $bismark;
    margin: $space-small auto auto $space-tiny;

    &:first-letter {
      text-transform: capitalize;
    }

    @include breakpoint(mobile, down) {
      margin: auto auto auto $space-tiny;
    }
  }

  .arrow {
    margin: auto auto $space-small $space-small;
    stroke: $bismark;

    >* {
      stroke: $bismark;
    }

    @include breakpoint(mobile, down) {
      margin: auto $space-tiny auto auto;
    }
  }
}
</style>