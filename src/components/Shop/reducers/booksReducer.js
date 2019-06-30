import { SET_BOOKS, SEARCH_BOOKS, CHANGE_ACTIVE_FILTER, CHANGE_ACTIVE_ORDER } from "../actions/booksActions";

const initialState = {
	isLoading: true,
	activeFilter: "title",
	isActiveOrderLowToHigh: true,
	searchBooksQuery: "",
	items: null
}

export const booksReducer = (state = initialState, { type, items, activeFilter, searchBooksQuery }) => {
	switch (type) {
		case SET_BOOKS:
			return {
				...state,
				isLoading: false,
				items
			}
		case SEARCH_BOOKS:
			return {
				...state,
				searchBooksQuery
			}
		case CHANGE_ACTIVE_FILTER:
			return {
				...state,
				activeFilter
			}
		case CHANGE_ACTIVE_ORDER:
				return {
					...state,
					isActiveOrderLowToHigh: !state.isActiveOrderLowToHigh
				}
		default:
			return state
	}
}