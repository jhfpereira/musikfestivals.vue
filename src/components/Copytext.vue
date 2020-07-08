<template>

  <p class="copytext"><slot></slot></p>

</template>

<script>

export default {
  name: 'Copytext',
};
</script>

<style scoped lang="scss">

@import '@/assets/scss/_variables';

.copytext {
  @media only screen and (min-width: $vp-large) {
    max-width: 80%;
  }
}

</style>
