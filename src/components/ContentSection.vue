<template>

  <section class="content-section">
    <h2 v-if="$slots.headline" class="headline">
      <slot name="headline"></slot>
    </h2>
    <p v-if="$slots.subtitle" class="subtitle">
      <slot name="subtitle"></slot>
    </p>

    <slot></slot>
  </section>

</template>

<script>
export default {
  name: 'ContentSection',
};
</script>

<style scoped lang="scss">

@import '@/assets/scss/_variables';

.content-section {
  margin-bottom: $xxl;

  & + & {
    padding-top: $xl;
    border-top: solid $border-width $decoration-color;
  }

  .subtitle {
    margin-top: -1em;
  }
}

</style>
