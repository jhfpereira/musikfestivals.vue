<template>

  <div class="content-wrap">
    <main class="main-content">
      <slot></slot>
    </main>

    <aside v-if="!!$slots.aside" class="aside-content">
      <slot name="aside"></slot>
    </aside>
  </div>

</template>

<script>
export default {
  name: 'ContentWrap',
};
</script>

<style scoped lang="scss">

@import '@/assets/scss/_variables';

.content-wrap {
  @media only screen and (min-width: $vp-medium) {
    display: grid;
    grid-template-columns: 1fr 20 * $m;
  }

  @media only screen and (min-width: $vp-large) {
    width: $vp-large;
    margin: 0 auto;
    grid-template-columns: 60 * $m 20 * $m;
    box-shadow: $shadow-l;
  }

  .main-content,
  .aside-content {
    background-color: $lightest;
    padding: $l $l $xl $l;
  }

  .aside-content {
    background-color: $darken;

    &::v-deep .headline {
      font-size: $m;
    }
  }
}

</style>
