import { ADD_BOOK_TO_CHECKOUT, REMOVE_BOOK_FROM_CHECKOUT } from "../actions/checkoutActions"

const initialState = {
	items: []
}

export const checkoutReducer = (state = initialState, { type, id }) => {
	switch (type) {
		case ADD_BOOK_TO_CHECKOUT:
			return {
				...state,
				items: [
					...state.items
				]
			}
		case REMOVE_BOOK_FROM_CHECKOUT:
			return {
				...state,
				items: state.items.filter(item => item !== id)
			}
		default:
			return state
	}
}