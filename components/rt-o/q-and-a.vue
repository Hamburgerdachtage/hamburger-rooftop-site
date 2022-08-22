<template>
  <div class="q-a">
    <div class="question-wrapper" :class="{ open }">
      <h2 class="question" @click="handleClick">{{ question }}</h2>
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
  margin-bottom: $space-large;
}

.question-wrapper {
  width: 90%;
  padding: $space-small;

  background-color: $mint-light;

  border-radius: 16px;
  @include transition();

  &:hover {
    @include shadow-hover();

  }

  &.open {
    @include shadow-hover();
    background-color: $mint-dark;

    .question {
      color: $white;
    }
  }
}

.question {
  @include fontSize(p);
  font-weight: bold;
  margin: 0px;
  color: $bismark;
}

.answer {

  width: 80%;
  padding: 0 $space-medium;
  @include transition();

  &.open {}
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