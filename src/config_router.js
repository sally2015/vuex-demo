export function configRouter (router) {
	router.map({
		'/index/:page': {
			name: 'index',
			title: '全部',
			component: (resolve) => require(['./components/main/index.vue'],resolve)
		},
			'/edit': {
		    name: 'edit',
		    title: '发布话题',
		    component: (resolve) => require(['./components/edit/edit.vue'], resolve)
	    }
	})

	router.redirect({
		'/': '/index/1'
	});
}