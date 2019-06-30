export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";

export const SEARCH_TASK = "SEARCH_TASK";

export const CHANGE_ACTIVE_FILTER = "CHANGE_FILTER";

export const addTask = name => ({
	type: ADD_TASK,
	name,
	isCompleted: false,
	id: Math.floor(Date.now() * Math.random())
})
export const deleteTask = id => ({
	type: DELETE_TASK,
	id
})
export const toggleTask = id => ({
	type: TOGGLE_TASK,
	id
})
export const searchTask = name => ({
	type: SEARCH_TASK,
	name
})
export const changeActiveFilter = activeFilter => ({
	type: CHANGE_ACTIVE_FILTER,
	activeFilter
})
