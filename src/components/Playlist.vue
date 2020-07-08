<template>

  <ul class="playlist">
    <li v-for="song in songs" :key="song.url" class="item">
      <div class="miniplayer">
        <i
          v-if="song === selectedSong"
          class="icon icon--l is-visible"
          v-on:click="stopSong"
        >stop</i>
        <i
          v-else
          class="icon icon--l is-visible"
          v-on:click="playSong(song)"
        >play_circle_filled</i>
      </div>
      {{ song.artist }} - {{ song.title }}
    </li>
  </ul>

</template>

<script>
export default {
  name: 'Playlist',

  computed: {
    songs() {
      return this.$store.state.playlist;
    },

    selectedSong() {
      return this.$store.state.audioplayer.selectedSong;
    },
  },

  methods: {
    playSong(song) {
      this.$store.dispatch('playSong', song);
    },

    stopSong() {
      this.$store.dispatch('stopSong');
    },
  },
};
</script>

<style scoped lang="scss">

@import '@/assets/scss/_variables';

.playlist {
  .item {
    font-size: $s;
    line-height: $lh-tight;

    position: relative;
    display: flex;
    padding: $xxs 0;

    transition: background $tr-fast, padding $tr-medium, color $tr-fast;

    & + & {
      border-top: solid $border-width $darken-light;
    }

    &:hover {
      padding-left: $xs;

      color: $lightest;
      background-color: $interaction-color;
      cursor: pointer;
    }
  }

  .miniplayer {
    display: flex;
    align-items: center;
    margin-right: $xs;
  }

  .icon{
    display: none;
  }

  .icon.is-visible{
    display: inline-block;
  }
}

</style>
