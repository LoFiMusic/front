import Api from '~/plugins/api/_resource.js'

export default {
  namespaced: true,
  state: {
    items: []
  },
  mutations: {
    setRandom(state, items) {
      state.items = items
    },

    addRandom (state, item) {
      state.items.push(item)
    }
  },
  actions: {
    getRandom ({commit}) {
      return Api.get('/api/v1/random/')
      .then(result => result.data)
      .then(items => {
        commit('setRandom', items)
      })
    },
    getPost ({commit}, url) {
      return Api.get('/api/v1/random/'+url+'/')
    },
    postLike ({commit}, data) {
      return Api.post('/api/v1/like/', data)
        .then(result => result.data)
        .then(item => {
          commit('Random', item)
          return item
        })

    }
  }
}
