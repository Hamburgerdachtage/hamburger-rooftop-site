<template>
  <div v-if="name" class="event flex-row">
    <ClientOnly>

      <hr v-if="isMobile" />
    </ClientOnly>

    <SanityImage class="event-image" v-if="image" :asset-id="image.asset._ref" />

    <div class="event-body">
      <ClientOnly>
        <hr v-if="!isMobile" />
      </ClientOnly>

      <h3>{{ name }}</h3>
      <div class="flex-row w-100 space-between">
        <div class="flex-column event-text">
          <SanityContent v-if="description" :blocks="description" />
        </div>
        <ClientOnly>
          <a v-if="reservationLink && !isMobile" class="btn event" :href="reservationLink.link"><span
              class="link-text">{{
                  reservationLink.text
              }}</span></a>
        </ClientOnly>

      </div>

      <div v-if="location" class="location"><b>Ort:</b> {{ location }}</div>
      <div v-if="startPoint" class="startPoint"><b>Startpunkt:</b> {{ startPoint }}</div>

      <rt-o-event-times :times="[...times]" />
      <div v-if="length" class="length"><b>Dauer:</b> {{ length }}</div>
      <div v-if="themes.length > 0" class="themes"><b>Themen: </b>
        <template v-for="theme in themes" :key="theme._key">
          <span class="theme">{{ theme.theme }}</span>
        </template>

      </div>

      <div v-if="tips" class="tips"><b>Wissenswertes:</b> {{ tips }}</div>
      <div v-if="costs" class="costs"><b>Kosten:</b> {{ costs }}</div>
      <ClientOnly>
        <a v-if="reservationLink && isMobile" class="btn event" :href="reservationLink.link"><span class="link-text">{{
            reservationLink.text
        }}</span></a>
      </ClientOnly>

    </div>

  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  name: { type: String, default: null },
  description: { Array, default: () => ([]) },
  image: { type: Object },
  data: { type: Object, default: () => ({}) },
  times: { type: Array, default: () => ([]) },
  length: { type: String, default: null },
  themes: { type: Array, default: () => ([]) },
  location: { type: String, default: null },
  startPoint: { type: String, default: null },
  tips: { type: String, default: null },
  costs: { type: String, default: null },
  reservationLink: { type: Object, default: null }
})

const isMobile = computed(() => {
  if (window) {
    return window.screen.width < 768
  }
  return false
})
</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";
a.btn.event {
  margin-top: calc($space-smaller + 1em);
}
.event {
  margin-top: $space-xlarge;

  @include breakpoint(mobile, down) {
    &.flex-row {
      flex-direction: column;
    }

  }

  .event-image {
    width: 268px;
    height: 268px;
    margin: $space-large $space-medium auto 0;
    border-bottom: 4px solid $mint-dark;
    @include breakpoint(mobile, down) {
      width: 121px;
      height: 121px;
      margin: auto $space-tiny auto $space-tiny;
    }
  }

  hr {
    margin-bottom: calc($space-large - 5px);


    @include breakpoint(mobile, down) {
      &.mobile-hr {

        margin: $space-tiny auto;

      }
    }
  }

  .event-body {
    >h3 {
      margin-top: $space-medium;
    }

    // .desktop-hr {
    //   display: block;
    // }

    // .mobile-hr {
    //   display: none;
    // }

    @include breakpoint(mobile, down) {
      // .mobile-hr {
      //   display: block;
      // }

      .desktop-hr {
        display: none;
      }
    }

    width: $space-event-image;
    margin-left: auto;

    * {
      margin: 0 0 $space-smaller 0;
    }

    @include breakpoint(mobile, down) {
      width: 100%;
      // margin: auto $space-tiny auto $space-tiny;
    }

    .times {
      margin-bottom: 0px;

      .date {
        margin: 0 $space-small 0 0;
      }
    }

    .theme {
      margin-right: $space-small;
      color: $magenta;
      font-weight: bold;
    }
  }
}
</style>