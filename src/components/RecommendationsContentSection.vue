<template>

  <content-section>
    <template #headline>Das könnte Sie auch interessieren:</template>

    <card-overview>
      <card-overview-item
        v-for="item in items"
        :key="item.title"
      >
        <teaser>
          <img
            v-if="item.images.length === 1"
            :src="item.images[0].src"
            :alt="item.images[0].alt"
            class="recommendations-concent-section-image"
            draggable="false"
          />
          <slideshow
            v-else
            :images="item.images"
          ></slideshow>

          <template v-if="item.title" #headline>{{ item.title }}</template>
          <template v-if="item.text" #text>{{ item.text }}</template>
          <template v-if="item.link" #link>
            <router-link :to="item.link.to">{{ item.link.text }}</router-link>
          </template>
        </teaser>
      </card-overview-item>
    </card-overview>
  </content-section>

</template>

<script>
import ContentSection from '@/components/ContentSection.vue';
import CardOverview from '@/components/CardOverview.vue';
import CardOverviewItem from '@/components/CardOverviewItem.vue';
import Teaser from '@/components/Teaser.vue';
import Slideshow from '@/components/Slideshow.vue';

export default {
  name: 'RecommendationsContentSection',

  props: {
    items: Array,
  },

  components: {
    ContentSection,
    CardOverview,
    CardOverviewItem,
    Teaser,
    Slideshow,
  },
};
</script>

<style scoped lang="scss">

.recommendations-concent-section-image {

}

</style>
