<template>

  <div class="slideshow">
    <div ref="reel" class="reel">
      <img
        v-for="(image, idx) in images"
        :key="image.src"
        :class="['slide', { '--visible': idx === visibleImageIdx }]"
        :src="image.src"
        :alt="image.alt"
        draggable="false"
      >
    </div>

    <span @click="previousImage" class="nav-previous"></span>
    <span @click="nextImage" class="nav-next"></span>

    <div class="dot-navigation">
      <span
        v-for="(image, idx) in images"
        :key="image.src"
        @click="jumpToImageWithIdx(idx)"
        :class="['dot', { '--active': idx === visibleImageIdx }]"
      ></span>
    </div>
  </div>

</template>

<script>
import Swipe from '@/libs/Swipe';

export default {
  name: 'Slideshow',

  props: {
    images: Array,
  },

  data() {
    return {
      visibleImageIdx: 0,
      swipe: null,
    };
  },

  mounted() {
    this.swipe = new Swipe(this.$refs.reel);
    this.swipe.init();

    this.swipe.onLeft(() => {
      this.previousImage();
    });

    this.swipe.onRight(() => {
      this.nextImage();
    });
  },

  beforeDestory() {
    if (this.swipe) {
      this.swipe.unbind();
    }
  },

  methods: {
    previousImage() {
      const prevImageIdx = this.visibleImageIdx - 1;
      this.visibleImageIdx = (prevImageIdx < 0) ? this.images.length - 1 : prevImageIdx;
    },

    nextImage() {
      this.visibleImageIdx = (this.visibleImageIdx + 1) % this.images.length;
    },

    jumpToImageWithIdx(idx) {
      this.visibleImageIdx = idx;
    },
  },
};
</script>

<style scoped lang="scss">

@import '@/assets/scss/_variables';

.slideshow {
  position: relative;

  .reel {
    .slide {
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      transition: opacity 1s;
      z-index: 1;

      &.--visible {
        opacity: 1;
        z-index: 2;
      }
    }

    .slide:first-child {
      position: relative;
    }
  }

  .nav-next,
  .nav-previous {
    background-color: $darken-light;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color $tr-medium;
    z-index: 3;

    &:hover {
      background-color: $darken-strong;
    }

    &::before {
      color: $white;
      display: inline-block;
      font-family: $font-icons;
      font-size: $l;
      line-height: $lh-default;

      @media only screen and (min-width: $vp-small) {
        font-size: $xxl;
      }
      @media only screen and (min-width: $vp-medium) {
        font-size: $l;
      }
    }
  }

  .nav-next {
    right: 0;

    &:before {
      content: 'navigate_next';
    }
  }

  .nav-previous {
    left: 0;

    &:before {
      content: 'navigate_before';
    }
  }
}

.dot-navigation {
  margin: 0 0 0 0;
  padding: 0 0 $s 0;
  line-height: 1;
  list-style: none;
  text-align: center;
  width: 100%;

  & .dot {
    border: $border-width $darker solid;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    height: $xxs;
    margin: 0 $xxs;
    width: $xxs;

    &.--active {
      background-color: $darker;
    }
  }
}

</style>
