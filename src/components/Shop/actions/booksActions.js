export const SET_BOOKS = "SET_BOOKS";
export const SEARCH_BOOKS = "SEARCH_BOOKS";
export const CHANGE_ACTIVE_FILTER = "CHANGE_ACTIVE_FILTER";
export const CHANGE_ACTIVE_ORDER = "CHANGE_ACTIVE_ORDER";

export const setBooks = items => ({
	type: SET_BOOKS,
	items
})

export const searchBooks = searchBooksQuery => ({
	type: SEARCH_BOOKS,
	searchBooksQuery
})

export const changeActiveFilter = activeFilter => ({
	type: CHANGE_ACTIVE_FILTER,
	activeFilter
})

export const changeActiveOrder = () => ({
	type: CHANGE_ACTIVE_ORDER
})

