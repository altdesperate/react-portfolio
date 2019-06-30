export const ADD_BOOK_TO_CHECKOUT = "ADD_BOOK_TO_CHECKOUT";
export const REMOVE_BOOK_FROM_CHECKOUT = "REMOVE_BOOK_FROM_CHECKOUT";

export const addBookToCheckout = id => ({
	type: ADD_BOOK_TO_CHECKOUT,
	id
})

export const removeBookToCheckout = id => ({
	type: REMOVE_BOOK_FROM_CHECKOUT,
	id
})