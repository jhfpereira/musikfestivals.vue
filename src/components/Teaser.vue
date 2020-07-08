<template>

  <figure class="teaser">
    <div v-if="!!this.$slots.default" class="content">
      <slot></slot>
    </div>

    <figcaption v-if="atLeastOneSubInfo">
      <h2 v-if="$slots.headline" class="headline">
        <slot name="headline"></slot>
      </h2>
      <p v-if="$slots.text" class="text">
        <slot name="text"></slot>
      </p>

      <div v-if="$slots.link" class="cta">
        <slot class="cta" name="link"></slot>
      </div>
    </figcaption>
  </figure>

</template>

<script>
export default {
  name: 'Teaser',

  computed: {
    atLeastOneSubInfo() {
      return !!this.$slots.headline
        || !!this.$slots.text
        || !!this.$slots.link;
    },
  },
};
</script>

<style scoped lang="scss">

@import '@/assets/scss/_variables';
@import '@/assets/scss/_mixins';

.teaser {
  .image {
    display: block;
    width: 100%;
    margin-bottom: $xs;
  }

  .content {
    margin-bottom: $xs;
  }

  .headline {
    font-size: $s !important;
    margin-bottom: $xs;
  }

  .text {
    font-size: $s;
    line-height: $lh-default;
  }

  .cta {
    font-size: $s;
    font-weight: $fw-normal;
    display: inline-block;
    transition: background $tr-medium;
    text-decoration: none;
    color: #fff;
    border: solid $border-width $border-color;
    background-color: $interaction-color;

    &:hover {
      background-color: $interaction-color-hover;
    }

    &::v-deep a {
      display: block;
      color: inherit;
      text-decoration: inherit;
      font-weight: inherit;

      @include button;
    }
  }
}

</style>
