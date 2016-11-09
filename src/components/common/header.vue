<style lang='styl' src='../../assets/styl/common/header.styl' scoped></style>

<template>
	<header class="header" v-if="headerState">
		<div class="header-wrap">
			<a v-on:click='goBack' class="icon i-back"></a>
			<h3>{{ $route.title }}</h3>
		</div>
	</header>
	<header class="header" v-else>
		<div class="header-wrap">
			<a v-on:click='openMenu' class="icon i-menu"></a>
			<h3>{{ $route.title }}</h3>
			<a @click='edit' class="icon i-pub"></a>
		</div>
		<page></page>
	</header>
</template>
<script>
	import { setMenu } from '../../vuex/actions/doc_actions'
	import page from './page'

	export default {
		vuex: {

			actions: {
				setMenu
			}
		},
		data () {
			return {
				headerState: false
			}
		},
		methods: {
			goBack () {
				window.history.go(-1)
			},
			openMenu () {
				this.setMenu(true)
			},
			edit () {
				this.$route.router.go({
					name: 'edit'
				})
			}
		},
		components: {
		  	page
		},
	}
</script>