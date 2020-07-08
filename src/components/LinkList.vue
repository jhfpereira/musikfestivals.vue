<template>

  <ul class="linklist">
    <li class="item" v-for="item in items" :key="item.src">
      <a :href="item.src">{{ item.title }}</a>
    </li>
  </ul>

</template>

<script>
export default {
  name: 'LinkList',

  props: {
    items: Array,
  },
};
</script>

<style scoped lang="scss">

@import '@/assets/scss/_variables';

.linklist {
  .item {
    font-family: 'Material Icons';
    line-height: $lh-default;
    margin-left: $m;

    &:before {
      font-size: $xs;
      display: inline-block;
      margin-left: -$m;
      padding-right: $xxs;
      content: 'link';
    }

    & > a {
      font-family: $font-family-sans;
    }
  }
}

</style>
