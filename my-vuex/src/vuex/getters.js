//获取noteList，这里将会根据 state.show 的状态做数据过滤
export const filteredNotes = (state) => {

	if (state.show === 'all') {
		return state.notes || {};
	}else if( state.show === 'favourite' ){
		return state.notes.filter( note => note.favourite) || {};
	}
}

//获取列表展示状态 ： all or favourite
export const show = (state) => {
	return state.show;
}

// 获取当前激活note
export const activeNote = (state) => {
	return state.activeNote;
}