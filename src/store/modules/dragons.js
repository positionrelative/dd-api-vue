import axios from 'axios'

// initial state
const state = () => ({
  all: [],
  current: {},
  count: 0,
  favorites: [],
})

// getters
const getters = {
  getAll(state) {
    return state.all;
  },
  getFavorites(state) {
    return state.favorites
  },
  getCurrent(state) {
    return state.current
  }
}

// actions
const actions = {
  getAllDragons({commit}) {
    return new Promise((resolve, reject) => {
      axios.get('https://www.dnd5eapi.co/api/monsters').then(result => {
        commit('setDragons', result);
        resolve(result);
      }).catch(err => reject(err));
    });
  },
  getDetails({commit}, index) {
    return new Promise((resolve, reject) => {
      axios.get(`https://www.dnd5eapi.co/api/monsters/${index}`).then(result => {
        commit('setCurrentDragon', result);
        resolve(result);
      }).catch(err => reject(err));
    });
  },
  loadFavorites({commit}) {
    commit('loadFavorites');
  },
  addToFavorites({commit}, index) {
    commit('setFavorite', index);
  },
  removeFavorite({commit}, index) {
    commit('deleteFavorite', index);
  }
}

// mutations
const mutations = {
  setDragons(state, dragons) {
    state.all = dragons.data.results;
    state.count = dragons.data.count;
  },
  setCurrentDragon(state, details) {
    state.current = details.data;
  },
  loadFavorites(state) {
    let favorites = window.localStorage.getItem('favorites');

    if (!favorites) {
      favorites = [];
    }

    state.favorites = favorites;
  },
  setFavorite(state, index) {
    if (state.favorites.indexOf(index) < 0) {
      if(typeof state.favorites === 'string') {
        state.favorites = [state.favorites];
      }
      state.favorites.push(index);

      window.localStorage.setItem('favorites', state.favorites);
    }
  },
  deleteFavorite(state, index) {
    let foundIndex = state.favorites.indexOf(index);

    if (foundIndex >= 0) {
      state.favorites.splice(foundIndex, 1);
      window.localStorage.setItem('favorites', state.favorites);
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
