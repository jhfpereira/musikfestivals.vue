<template>

  <li class="card-overview-item">
    <slot></slot>
  </li>

</template>

<script>
export default {
  name: 'CardOverview',
};
</script>

<style scoped lang="scss">

@import '@/assets/scss/_variables';

.card-overview-item {
  & + & {
    margin-top: $xl;
  }
}

</style>
