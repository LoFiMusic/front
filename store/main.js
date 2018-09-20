import Api from '~/plugins/api/_resource.js'

export default {
  namespaced: true,
  state: {
    items: {}
  },
  mutations: {
    setMain(state, main) {
      state.items = main
    },

    addMain (state, item) {
      state.items.push(item)
    }
  },
  actions: {
    getMainPage ({commit}) {
      return Api.get('/')
      .then(result => {
        console.log(result)
        commit('setMain', result.body)
      })
      // .then(items => {
      //   commit('setMain', main)
      // })
    },
    postMainPage ({commit}, data) {
      return Api.post('/', data)
        .then(result => result.data)
    }
  }
}
