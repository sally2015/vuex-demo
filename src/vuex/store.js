import Vue from 'vue'
import Vuex from 'vuex'
import docState from './modules/doc_state'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
	modules: {
		docState
	},
	strict: debug,
	middlewares: debug ? [] : []
})
