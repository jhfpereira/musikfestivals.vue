<template>

  <li class="list-item">{{ title }} <span :class="valueClasses">{{ value }}</span></li>

</template>

<script>

export default {
  name: 'ListItem',

  props: {
    title: String,
    value: String,
    modification: String,
  },

  computed: {
    valueClasses() {
      const classList = [];

      switch (this.modification) {
        case 'is-number':
          classList.push('number');
          break;

        default:
      }

      return classList;
    },
  },
};
</script>

<style scoped lang="scss">

@import '@/assets/scss/_variables';

.list-item {
  &+& {
    margin-top: $xxs;
  }

  .number {
    color: $decoration-color;

    &:before {
      content: '#';
      color: $dark;
    }
  }
}

</style>
