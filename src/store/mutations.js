/*
 * store/mutations.js
 */

export default {
  mutateIsPlaying(state, status) {
    state.audioplayer.isPlaying = status;
  },

  mutateSelectedSong(state, song) {
    state.audioplayer.selectedSong = song;
  },

  mutateSetPlaylist(state, playlist) {
    state.playlist = playlist;
  },
};
