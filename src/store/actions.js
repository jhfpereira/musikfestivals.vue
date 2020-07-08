/*
 * store/actions.js
 */

export default {
  playSong({ commit }, song) {
    commit('mutateSelectedSong', song);
  },

  stopSong({ commit }) {
    commit('mutateSelectedSong', null);
    commit('mutateIsPlaying', false);
  },

  setIsPlaying({ commit }, isPlaying) {
    commit('mutateIsPlaying', isPlaying);
  },

  prevSong({ state, commit }) {
    const { selectedSong } = state.audioplayer;

    if (!selectedSong) {
      return;
    }

    const { playlist } = state;

    const idx = playlist.indexOf(selectedSong);

    const newIdx = (idx - 1) < 0 ? playlist.length - 1 : (idx - 1);

    commit('mutateSelectedSong', playlist[newIdx]);
    commit('mutateIsPlaying', false);
  },

  nextSong({ state, commit }) {
    const { selectedSong } = state.audioplayer;

    if (!selectedSong) {
      return;
    }

    const { playlist } = state;

    const idx = playlist.indexOf(selectedSong);

    const newIdx = (idx + 1) % playlist.length;

    commit('mutateSelectedSong', playlist[newIdx]);
    commit('mutateIsPlaying', false);
  },

  async loadPlaylist({ commit }, url) {
    const result = await fetch(url);

    if (!result.ok) {
      throw new Error(`Could not access ${this.url}`);
    }

    const playlist = await result.json();

    commit('mutateSetPlaylist', playlist);
  },
};
