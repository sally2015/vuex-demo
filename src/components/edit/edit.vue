<style lang='styl' src='../../assets/styl/edit.styl' scoped></style>

<template>
	<section class="edit">
		<div class="item">
			<div>
				<span>选择分类：</span>
				<select name="tab" v-model='tab' class="select">
					<option value="share" selected>分享</option>
					<option value="ask">问答</option>
					<option value="job">招聘</option>
				</select>
				<i class="icon i-down"></i>
			</div>
			<a @click.prevent="publish" class="pub">发布</a>
		</div>
		<div class="item">
			<input type="text" class="title-i" 
			v-model="title" name="title" placeholder="标题，字数10字以上">
		</div>
		<div class="edit-area">
			<textarea class="text" name="content" 
			v-model="content" placeholder="~~~~"></textarea>
		</div>
	</section>
</template>