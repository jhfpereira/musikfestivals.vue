<template>

  <ul class="menu-list">
    <li class="item">
      <router-link class="link" to="/">Home</router-link>
    </li>
    <li class="item">
      <router-link class="link" to="/open-air-festivals">Open Air Festivals</router-link>
    </li>
    <li class="item">
      <router-link class="link" to="/maiwoche">Maiwoche</router-link>
    </li>
  </ul>

</template>

<script>
export default {
  name: 'MenuList',
};
</script>

<style scoped lang="scss">

@import '@/assets/scss/_variables';

.menu-list {
  color: $light;
  font-size: $m;
  overflow: hidden;
  padding-top: $xxs;
  padding-bottom: $xxs;

  .item {
    .link {
      color: $menu-link-color;
      cursor: pointer;
      text-decoration: none;

      &:hover {
        color: $menu-link-color-hover;
      }
    }
  }
}

</style>
