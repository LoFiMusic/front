import Vue from 'vue'
import Vuex from 'vuex'

import playlist from './playlist.js'
import main from './main.js'
import random from './random.js'

Vue.use(Vuex)

const store = () => new Vuex.Store({
	modules: {
		'playlist': playlist,
		'main': main,
		'random': random
	},
	state: {
		counter: 0
	},
	mutations: {
		increment(state) {
			state.counter++
		}
	},
	actions: {
		nuxtServerInit({commit}, {req, store}) {
		}
	}
})

export default store
