<template>
  <div class="faq-wrapper">
    <TransitionGroup>
      <template v-for="section in faqData" :key="section._id">
        <section class="faq" :id="section.headline.toLowerCase()">
          <h1 class="section-headline">{{ section.headline }}</h1>
          <div class="q-and-a">
            <template v-for="question in section.questions" :key="question._id">
              <rt-o-q-and-a :question="question.question" :answer="question.answer" />

            </template>
          </div>
        </section>
      </template>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  faqData: {
    type: Array,
    default: []
  }
})

</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

.faq-wrapper {
  .faq {


    .section-headline {
      @include fontSize(h3);
    }

    .q-and-a {
      margin: auto auto auto $space-medium;


    }
  }
}

.v-enter-active,
.v-leave-active {
  @include transition-group();
  opacity: 1;

}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  // transform: translateX(20px);
}
</style>