<template>
  <div class="event-times flex-row">

    <template v-for="date in finalDateTimes" :key="date.date">
      <div class="date-group text-mintLight">
        <div class="date-string text-mintDark bold">
          {{ date.date }}
        </div>
        <div class="times">
          <template v-for="(time, i) in date.times.reverse()" :key="`time-${time}-${i}`">

            <span class="time-spot text-mintDark bold">{{ time.slice(0, -3) }}</span><span
              v-if="date.times.length - 1 !== i" class="divider text-mintDark bold"> / </span>
          </template>
        </div>
      </div>


      <!-- {{ date.times }} -->
    </template>

  </div>
</template>

<script setup lang="ts">

export interface Time {
  _key: string;
  _type: "eventTime";
  eventTime: string;
}

const props = defineProps({
  times: { type: Array, default: () => ([]) }
})



const mapTimes = (times: Time[]) => {
  const sorted = times.sort((a, b) => {
    const dateA = new Date(a.eventTime)
    const dateB = new Date(b.eventTime)
    return dateA.getTime() - dateB.getTime()
  })

  return sorted



}

// create and array of Objects with the date String "Sun Sep 18 2022" as the key and an array of times ["07:00", "10:00"]
interface DateTime {
  date: string;
  times: string[]
}
const mapDateAndTimes = (times: Time[]) => {
  function loop(times: Time[], acc: DateTime[]) {
    if (times.length === 0) {

      return acc.sort((a,b)=>{
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      })
    }

    const date = new Date(times.pop().eventTime)
    const format = 'de-DE'
    const dateString = date.toDateString();
    const timeString = date.toLocaleTimeString(format)


    const dateExists = acc.some((date) => {

      return date.date === dateString
    })

    if (dateExists) {
      const addTimeTo = acc.filter(date => {

        return date.date === dateString
      })[0]
      addTimeTo.times.push(timeString)

      return loop(times, acc)
    } if (acc.length > 0 || !dateExists) {

      acc.push(addNewDateObj(dateString, timeString))

      return loop(times, acc)
    }

  }

  function addNewDateObj(dateString: string, timeString: string) {
    const timeStrings = []
    timeStrings.push(timeString)
    const dateObj: DateTime = {
      date: dateString,
      times: timeStrings
    }
    return dateObj
  }

  return loop(times, [])

}

const processedDates = mapTimes(props.times as Time[])
const finalDateTimes = computed(() => mapDateAndTimes(processedDates))
</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

.event-times {


  .date-group {
    margin: auto $space-medium auto 0px;

  }
}
</style>