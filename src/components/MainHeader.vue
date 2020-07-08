<template>

  <header class="main-header">
    <div class="menu-bar" >
      <hamburger-button
        v-model="visibleMenuBar"
      ></hamburger-button>
      <nav :class="['menu-bar-nav', { 'menu-bar-nav--is-open': visibleMenuBar }]">
        <menu-list></menu-list>
      </nav>
    </div>
    <div class="group">
      <h1 class="title">{{ title }}</h1>
      <h2 class="subtitle">{{ subtitle }}</h2>
    </div>
  </header>

</template>

<script>
import hamburgerButton from '@/components/HamburgerButton.vue';
import MenuList from '@/components/MenuList.vue';

export default {
  name: 'MainHeader',

  props: {
    title: String,
    subtitle: String,
  },

  components: {
    hamburgerButton,
    MenuList,
  },

  data() {
    return {
      visibleMenuBar: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import '@/assets/scss/_variables';

.main-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 50vh;
  padding: $l;
  transition: min-height $tr-medium;
  background-image: url(/images/hero-l.png);
  background-position: center center;
  background-size: cover;

  .menu-bar {
    background-color: $darken-medium;
    left: 0;
    padding: $xs $l;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }

  .menu-bar-nav {
    height: 0;
    opacity: 0;
    overflow: hidden;
    transition: opacity $tr-medium;
  }

  .menu-bar-nav--is-open {
    height: auto;
    opacity: 1;
  }

  .group {
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: $vp-large) {
      width: $vp-large;
      margin: 0 auto;
      padding: $m;
    }
  }

  .title,
  .subtitle {
    display: inline-block;
    align-self: flex-start;
    margin: 0;
    padding: $xxs $xs;
    box-shadow: $shadow-l;
  }

  .title {
    background-color: $lightest;
  }

  .subtitle {
    color: $lightest;
    background-color: $decoration-color;
  }

  @media only screen and (min-width: $vp-large) {
    min-height: 80vh;
  }
}

</style>
