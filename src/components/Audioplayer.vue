<template>

  <div v-if="selectedSong" class="audioplayer">
    <div class="toolbar">
      <button v-on:click="prevSong" class="button-previous-song">
        <span class="icon icon--xl">skip_previous</span>
      </button>

      <button v-on:click="togglePlaySong" class="button-play-pause">
        <span v-if="!isPlaying" class="icon icon--xl">play_circle_filled</span>
        <span v-else class="icon icon--xl">pause_circle_filled</span>
      </button>

      <button v-on:click="stopSong" class="button-stop">
        <span class="icon icon--xl">stop</span>
      </button>
      <button v-on:click="nextSong" class="button-next-song">
        <span class="icon icon--xl">skip_next</span>
      </button>

    </div>
    <div class="infobox">
      <div class="textinfos">
      <h2 class="title">{{ selectedSong.title }}</h2>
      <h3 class="artist">{{ selectedSong.artist }}</h3>
      </div>
      <div class="duration">
      <p class="time-played">{{ currentTimestamp }}</p>
      <div v-on:click="handleDurationIndicatorClick" class="duration-indicator-wrap">
        <div :style="'width: ' + (normalizedDuration * 100) + '%'" class="duration-indicator"></div>
      </div>
      <p class="duration-number">{{ durationTimestamp }}</p>
      </div>
    </div>
  </div>

</template>

<script>
import { Howl } from 'howler';

export default {
  name: 'Audioplayer',

  data() {
    return {
      sound: null,
      seekPos: 0,
      duration: 0,
      interval: null,
    };
  },

  computed: {
    isPlaying() {
      return this.$store.state.audioplayer.isPlaying;
    },

    selectedSong() {
      return this.$store.state.audioplayer.selectedSong;
    },

    normalizedDuration() {
      if (this.duration > 0) {
        return this.seekPos / this.duration;
      }
      return 0;
    },

    currentTimestamp() {
      return this.getTimestampForSeconds(this.seekPos);
    },

    durationTimestamp() {
      return this.getTimestampForSeconds(this.duration);
    },
  },

  methods: {
    prevSong() {
      this.$store.dispatch('prevSong');
    },

    nextSong() {
      this.$store.dispatch('nextSong');
    },

    playSound(song) {
      this.sound = new Howl({
        src: song.src,
        // html5: true,
      });

      this.sound.on('end', () => {
        this.nextSong();
      });

      this.sound.on('load', () => {
        this.interval = setInterval(() => {
          this.seekPos = Math.floor(this.sound.seek());
        }, 500);

        this.duration = this.sound.duration();

        this.$store.dispatch('setIsPlaying', true);

        this.sound.play();
      });
    },

    togglePlaySong() {
      if (!this.sound) {
        throw new Error('Can\'t toggle if no sound exists');
      }

      if (this.isPlaying) {
        this.sound.pause();
      } else {
        this.sound.play();
      }

      this.$store.dispatch('setIsPlaying', !this.isPlaying);
    },

    stopSound() {
      if (this.sound) {
        this.sound.stop();
        this.sound.unload();
      }

      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }

      this.sound = null;
      this.seekPos = 0;
      this.duration = 0;
    },

    stopSong() {
      this.$store.dispatch('stopSong');
    },

    getTimestampForSeconds(timeInSeconds) {
      const minutes = Math.floor(timeInSeconds / 60).toString();
      const seconds = Math.floor(timeInSeconds % 60).toString();

      return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
    },

    handleDurationIndicatorClick($event) {
      if (this.sound) {
        const { offsetX, target } = $event;
        const targetWidth = target.offsetWidth;

        const pos = offsetX / (targetWidth || 1);
        this.sound.seek(pos * this.sound.duration());
      }
    },
  },

  watch: {
    selectedSong(newSong) {
      this.stopSound();

      if (newSong) {
        this.playSound(newSong);
      }
    },
  },
};
</script>

<style scoped lang="scss">

@import '@/assets/scss/_variables';

.audioplayer {
  display: flex;
  overflow: hidden;
  padding: $s;

  color: $lighter;

  .title,
  .artist,
  .time-played,
  .duration-number,
  .icon {
    font-weight: normal;
    line-height: 100%;
    margin: 0;
    color: $lighter;
  }

  .textinfos {
    display: flex;
    align-items: center;
    margin-bottom: $xxs/2;
    text-overflow: '…';
  }

  .title,
  .artist {
    font-size: $s;

    color: $light;
  }

  .title {
    color: $lightest;

    &::after {
      display: inline-block;
      margin-right: $xxs/2;
      margin-left: $xxs/2;

      content: '-';
    }
  }

  .toolbar {
    margin-right: $xxs;
  }

  .button-play-pause,
  .button-stop,
  .button-next-song,
  .button-previous-song{
    border: 0 !important;

    &:hover{
      cursor: pointer;
    }
  }

  .time-played,
  .duration-number {
    font-size: $xs;
  }

  .duration {
    display: flex;
    align-items: center;
  }

  .duration-indicator-wrap {
    position: relative;
    width: $vp-small/2;
    height: $border-width * 2;
    margin-right: $xxs;
    margin-left: $xxs;
    cursor: pointer;
    background-color: $lighten;
  }

  .duration-indicator {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-color: $lighten-strong;
  }
}

</style>
