import Api from '~/plugins/api/_resource.js'

export default {
  namespaced: true,
  state: {
    items: []
  },
  mutations: {
    setPl(state, items) {
      state.items = items
    },

    addPl (state, item) {
      state.items.push(item)
    }
  },
  actions: {
    getPl ({commit}) {
      return Api.get('/api/v1/playlist/')
      .then(result => result.data)
      .then(items => {
        for (const i in items) {
          items[i]['src'] = `https://st.lofichan.ru/${items[i]['src']}`
          items[i]['pic'] = `https://st.lofichan.ru/${items[i]['pic']}`
        }
        commit('setPl', items)
      })
    },
    getPost ({commit}, url) {
      return Api.get('/api/v1/playlist/'+url+'/')
    },
    postPl ({commit}, data) {
      return Api.post('/api/v1/playlist/', data)
        .then(result => result.data)
        .then(item => {
          commit('Pl', item)
          return item
        })

    }
  }
}
