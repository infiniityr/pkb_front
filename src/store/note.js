import Vue from 'vue'

const state = {
  notes: []
}

const getters = {
  notes: (state) => state.notes,
  note: (state) => (id) => state.notes.find(n => n._id === id)
}

const mutations = {
  setNotes (state, notes) {
    state.notes.push(...notes)
  }
}

const actions = {
  retrieveNotes ({ commit }) {
    return Vue.axios.get('/notes')
      .then((res) => setTimeout(() => commit('setNotes', res.data), 1000))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
