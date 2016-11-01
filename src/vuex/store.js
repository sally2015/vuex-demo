import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	notes : [],
	actionNote : {},
	show : ''
}

const mutations = {

	//初始化
	INIT_STORE(state, data) {
		state.notes = data.notes;
		state.show = data.show;
		state.actionNote = data.actionNote;
	},

	//新增笔记
	NEW_NOTE(state) {

		var newNote = {
			id : +new Date(),
			title : '',
			content : '',
			favourite : false
		}

		state.notes.push(newNote);
		state.actionNote = newNote;
	},
	//修改笔记
	EDIT_NOTE(state,note) {
		state.actionNotes = note;
		for (var i = state.notes.length - 1; i >= 0; i--) {
			if (state.notes[i].id === note.id) {

				state.notes[i].id = note;
				break;
			}
			
		}
	},
	//删除笔记
	DELETE_NOTE(state) {
		state.notes.$remove(state.actionNote);
		state.actionNote = state.notes[0] || {};
	},
	//切换笔记的收藏与取消收藏
	TOGGLE_FAVORITE(state) {
		state.actionNote.favourite = !state.actionNote.favourite;
	},
	//切换显示数据列表类型：全部or收藏
	SET_SHOW_ALL(state, show) {

		state.show = show;

		if( show === 'favourite' ){

			state.actionNote = state.notes.filter( (note) => {
				return note.favourite;
			})[0] || {};

		}else{

			state.actionNote = state.notes[0] || {};

		}
	},
	SET_ACTIVE_NOTE(STATE, NOTE){
		state.actionNote = note;
	}
}

export default new Vuex.store({

	state,
	mutations

});