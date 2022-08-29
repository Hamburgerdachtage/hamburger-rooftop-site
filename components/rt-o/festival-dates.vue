<template>
  <div class="festival-dates no-select">
    <div class="year no-select">
      <div class="days flex-row no-select">
        <template v-for="(day, i) in days" :key="day.getDate()">



          <div class="day flex-column no-select">
            <div class="date no-select" :class="{ active: active(day) }">
              {{ day.getDate() }}
            </div>
            <div class="month no-select">
              {{ monthNames[i] }}
            </div>
            <div class="is-today" :class="{ active: active(day) }"></div>
          </div>

        </template>
      </div>
      <div class="year-numbers no-select">
        `{{ 22 }}
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const { from, to } = defineProps({
  from: {
    type: String,
    default: null
  },
  to: {
    type: String,
    default: null
  }
})

const monthNames = computed(() => {
  return days.value.map(day => new Intl.DateTimeFormat('en-US', { month: "long" }).format(new Date(day)))
})
const startDate = ref(new Date(from))
const endDate = ref(new Date(to))
const today = ref(new Date())

const active = (date: Date) => {
  return today.value.toLocaleDateString() === date.toLocaleDateString()
}

const days = ref<Date[]>([])
days.value = getDaysBetween(startDate.value, endDate.value)
function getDaysBetween(startDate: Date, endDate: Date) {
  const date = new Date(startDate.getTime());

  const dates = [];
  while (date <= endDate) {
    dates.push(new Date(date))
    date.setDate(date.getDate() + 1)

  }
  return dates
}

</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

.festival-dates {
  margin: $space-xxlarge 0;

  @include breakpoint(tablet, down) {
    margin-top: auto;
    margin-left: -$space-small;
    margin-right: -$space-small;
    margin-bottom: $space-medium;
    width: 100vw;

  }

  .year {
    background-color: $grey01;
    height: 184px;
    width: 872px;
    border-radius: 16px;
    margin: auto 0 auto auto;
    display: flex;

    @include breakpoint(tablet, down) {
      width: 100vw;
      height: 127px;
      border-radius: 0px;
      position: relative;
    }


    .days {
      margin: -20px auto auto 40px;
      z-index: 101;

      @include breakpoint(tablet, down) {
        margin: -32px auto auto auto;
      }

    }

    .day {
      width: 144px;
      height: 144px;
      background-color: $white;
      border-radius: 4px;
      margin-right: 24px;
      color: $bismark;
      justify-content: center;
      align-content: center;
      position: relative;
      overflow: hidden;
      @include shadow-hover();



      @include breakpoint(tablet, down) {
        width: 100px;
        height: 100px;
        margin-right: 6px;
        margin-left: 6px;

      }

      .date {
        color: $bismark;
        font-size: 72px;
        font-weight: bold;
        margin: auto auto 0 auto;

        @include breakpoint(tablet, down) {
          font-size: 50px;
        }

        &.active {
          color: $magenta;
        }
      }

      .month {
        margin: 8px auto auto auto;
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 1.8rem;
      }

      .is-today {
        height: 28px;
        width: 28px;
        border-radius: 50%;
        position: absolute;
        right: -4px;
        bottom: -4px;
        background-color: $bismark;

        &.active {
          background-color: $magenta;
        }
      }
    }

    .year-numbers {
      height: 172px;
      color: $white;
      font-size: 220px;
      line-height: 200px;
      font-weight: bolder;
      margin: auto -20px auto auto;

      @include breakpoint(tablet, down) {
        position: absolute;
        font-size: 90px;
        z-index: 1;
        right: 16px;
        bottom: -36px;
      }
    }
  }
}
</style>