<template>

  <button
    :class="['hamburger-button', { '--is-open': value }]"
    @click="handleButtonClick"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 225 175"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect
          class="bar-top"
          fill="#FFFFFF"
          x="25" y="25"
          width="175"
          height="25"></rect>
        <rect
          class="bar-middle"
          fill="#FFFFFF"
          x="25" y="75"
          width="175"
          height="25"></rect>
        <rect
          class="bar-bottom"
          fill="#FFFFFF"
          x="25" y="125"
          width="175"
          height="25"></rect>
      </g>
    </svg>
  </button>

</template>

<script>
export default {
  name: 'HamburgerButton',

  props: {
    value: Boolean,
  },

  methods: {
    handleButtonClick() {
      this.$emit('input', !this.value);
    },
  },
};
</script>

<style scoped lang="scss">

.hamburger-button {
  margin-left: -4px;
  cursor:pointer;
  background:0 0;
  border:0;
  transition:transform .2s ease-in-out;
  width: 30px;

  &:active {
    border: none;
  }

  .bar-top,
  .bar-bottom {
    transition: transform .6s, opacity .6s;
    transform-origin: 50% 50%
  }

  &.--is-open .bar-top {
    transform: rotate(45deg)translateY(30%)
  }

  &.--is-open .bar-middle {
    opacity: 0
  }

  &.--is-open .bar-bottom {
    transform: rotate(-45deg)translateY(-30%)
  }
}

</style>
