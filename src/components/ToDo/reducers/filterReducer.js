import {CHANGE_ACTIVE_FILTER} from "../actions/actions";

const initialState = "all";

export const filterReducer = (state = initialState, { type, activeFilter }) => {
	switch (type) {
		case CHANGE_ACTIVE_FILTER:
			return activeFilter
		default: return state;
	}
}