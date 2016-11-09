import * as types from '../mutation_types'

export const setMenu = ({dispatch}, tag) => {
	dispatch(types.SET_DOC_MENU, tag)
}