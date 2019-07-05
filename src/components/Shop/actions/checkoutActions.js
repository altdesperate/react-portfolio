export const ADD_BOOK_TO_CHECKOUT = "ADD_BOOK_TO_CHECKOUT";
export const REMOVE_BOOK_FROM_CHECKOUT = "REMOVE_BOOK_FROM_CHECKOUT";

export const addBookToCheckout = book => ({
	type: ADD_BOOK_TO_CHECKOUT,
	book
})

export const removeBookFromCheckout = id => ({
	type: REMOVE_BOOK_FROM_CHECKOUT,
	id
})