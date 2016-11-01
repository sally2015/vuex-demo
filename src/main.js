import Vue from 'vue'
import App from './App'

import VueRouter form 'vue-router'
import VueResource form 'vue-resource'

Vue.use(VueResource);
Vue.use(VueRouter);

const router new VueRouter();

router.map({
	'/index': {
		component: App
	}
});

router.redirect({
	'*': '/index'
});

router.start(App, '#app');