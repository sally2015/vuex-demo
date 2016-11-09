import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { configRouter } from './config_router'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
	history:true,
	saveScrollPosition:true
})

configRouter(router)

router.start(App, 'app')