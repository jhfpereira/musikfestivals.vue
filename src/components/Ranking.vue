<template>

  <ol class="ranking">
    <list-item
      v-for="item in items"
      :key="item.title"

      :title="item.title"
      :value="item.value"
      :modification="item.modification"

      class="ranking__item"
    ></list-item>
  </ol>

</template>

<script>
import ListItem from '@/components/ListItem.vue';

export default {
  name: 'Ranking',

  props: {
    items: Array,
  },

  components: {
    ListItem,
  },
};
</script>

<style scoped lang="scss">

@import '@/assets/scss/_variables';

.ranking {
  margin-left: $m;
  list-style-type: decimal;
}

</style>
