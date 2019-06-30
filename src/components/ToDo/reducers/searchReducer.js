import { SEARCH_TASK } from "../actions/actions";

const initialState = ""

export const searchReducer = (state = initialState, { type, name }) => {
	switch (type) {
		case SEARCH_TASK:
			return name
		default: return state;
	}
}