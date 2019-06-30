import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from "../actions/actions";

const initialState = [
	{
		name: "Learn React",
		isCompleted: true,
		id: Math.floor(Date.now() * Math.random())
	},
	{
		name: "Learn Router",
		isCompleted: true,
		id: Math.floor(Date.now() * Math.random())
	},
	{
		name: "Learn Redux",
		isCompleted: false,
		id: Math.floor(Date.now() * Math.random())
	}
]

export const taskReducer = (state = initialState, { type, name, isCompleted, id }) => {
	switch (type) {
		case ADD_TASK:
			return [
				...state,
				{
					name,
					isCompleted,
					id
				}
			]
		case DELETE_TASK:
			return state.filter(item => !(item.id === id))
		case TOGGLE_TASK:
			return state.map(task => task.id === id ? {...task, isCompleted: !task.isCompleted} : task)
		default: return state;
	}
}