<template>
  <div class="q-a">
    <div class="question-wrapper flex-row" :class="{ open }" @click="handleClick">
      <h2 class="question" >{{ question }}</h2>
      <span v-if="!open" class="plus">+</span>
      <span v-else class="minus">-</span>
    </div>
    <Transition>
      <div class="answer" v-show="open" :class="{ open }">
        <SanityContent :blocks="answer" />
      </div>
    </Transition>

  </div>
</template>

<script setup lang="ts">
defineProps({
  question: {
    type: String,
    default: null
  },
  answer: {
    type: Array,
    default: () => ([])
  }
})

const open = ref(false);
function handleClick() {
  open.value = !open.value
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

.q-a {
  // margin-bottom: $space-large;
}

.question-wrapper {
  width: 90%;
  padding: $space-tiny 0px;
  border-top: 2px solid $black;
  align-items:center;
  justify-items: space-between;

  @include transition();
  .plus, .minus {
    font-size: 36px;
    font-weight: bold;
    margin: auto 0 auto auto;
  }

  &.open {
   .question, .minus {
    color: $magenta;
   }
  }

}

.question {
  @include fontSize(p);
  font-weight: bold;
  margin: 0px;
  color: $black;
}

.answer {

  width: 80%;

  @include transition();

  &.open {
    margin-top: -$space-small;
    margin-bottom: $space-large;
  }
}

.v-enter-active,
.v-leave-active {
  @include transition();
  height: max-content;
  opacity: 1;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;

}
</style>