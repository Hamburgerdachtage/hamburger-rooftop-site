<template>
  <section class="sponsors">
    <div class="sponsor-text">Hamburger Dachtage werden gesponsored von</div>
    <div class="sponsors-container flex-row">
      <template v-for="sponsor in sponsorsData" :key="sponsor._id">
        <!-- {{ sponsor }} -->
        <div class="sponsor">
          <a v-if="sponsor.link && sponsor.image" :href="sponsor.link">
            <SanityImage v-if="sponsor.image" :asset-id="sponsor.image.asset._ref" :alt="sponsor.name" />
          </a>
        </div>

        <!-- <SanityImage :asset-id="sponsor.image._ref" :alt="sponsor.name" /> -->
      </template>

    </div>
  </section>
</template>

<script setup lang="ts">
const getSponsorData = async () => {
  try {
    const query = groq`*[_type=='sponsor'] {
  ...,
  image-> 
}`

    const sanity = useSanity()
    const { data } = await useAsyncData(`programteil`, () => sanity.fetch(query)) as Record<string, any>
    const items = data._rawValue
    return items
  } catch (error) {
    console.error("getProgramData", error)
  }
}
const sponsorsData = await useSimpleSanity('sponsor')

</script>

<style scoped lang="scss">
@import "../../assets/styles/index.scss";

.sponsors {
  margin: $space-xxlarge auto 0 auto;

  .sponsor-text {
    font-weight: bold;
  }

  .sponsors-container {
    flex-wrap: wrap;

    .sponsor {
      // min-width: fit-content;

      padding: $space-small;
      display: flex;
      flex-shrink: 2;
      height: 68px;
      width: 168px;

      >a {
        margin: auto;


        >img {
          max-height: 68px;
          max-width: 100%;
        }
      }
    }
  }
}
</style>