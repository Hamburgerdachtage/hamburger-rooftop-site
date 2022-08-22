<template>
  <div class="faq-wrapper">
    <template v-for="section in faqData" :key="section._id">
      <section class="faq">
        <h1 class="section-headline">{{ section.headline }}</h1>
        <div class="q-and-a">
          <template v-for="question in section.questions" :key="question._id">
            <div class="q-a">
              <h2 class="question">{{ question.question }}</h2>
              <div class="answer">
                <SanityContent :blocks="question.answer" />
              </div>
            </div>

          </template>
        </div>
      </section>
    </template>
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

      .q-a {
        margin-bottom: $space-large;
      }

      .question {
        @include fontSize(p);
        font-weight: bold;
        margin: 0px;
      }
    }
  }
}
</style>