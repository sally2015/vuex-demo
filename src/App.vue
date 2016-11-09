<style lang='styl' src='./assets/styl/main.styl'>
</style>
<style lang='styl'></style>

<template>
	<div id="app">
		<cn-header></cn-header>
		<router-view></router-view>
	</div>
</template>

<script>
	import cnHeader from './components/common/header'
	import store from './vuex/store'
	export default {
		vuex:{

		},
		store,
		components:{
			cnHeader
		}
	}
</script>