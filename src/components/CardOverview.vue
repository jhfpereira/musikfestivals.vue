<template>

  <ul class="card-overview">
    <slot></slot>
  </ul>

</template>

<script>
export default {
  name: 'CardOverview',
};
</script>

<style scoped lang="scss">

@import '@/assets/scss/_variables';

.card-overview {
}

</style>
