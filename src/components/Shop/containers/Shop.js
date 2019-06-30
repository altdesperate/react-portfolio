import { connect } from "react-redux";
import orderBy from "lodash/orderBy"

import Shop from "../"
import { setBooks } from "../actions/booksActions";

const filterBooks = (books, type, isActiveOrderLowToHigh, searchBooksQuery) => {
	const order = isActiveOrderLowToHigh ? "asc" : "desc";
	let filteredBooks;
	switch (type) {
		case "title":
			filteredBooks = orderBy(books, "title", order);
			break;
		case "author":
			filteredBooks = orderBy(books, "author", order);
			break;
		case "price":
			filteredBooks = orderBy(books, "price", order);
			break;
		case "rating":
			filteredBooks = orderBy(books, "rating", order);
			break;
		case "date":
			filteredBooks = orderBy(books, "date", order);
			break;
		default: 
			filteredBooks = books;
	}
	return filteredBooks.filter(({ title, author }) => {
		return title.toLowerCase().includes(searchBooksQuery.toLowerCase()) || author.toLowerCase().includes(searchBooksQuery.toLowerCase())
	})
}
export default connect(
	state => {
		const { isLoading, items, activeFilter, isActiveOrderLowToHigh, searchBooksQuery } = state.shop.books;
		return {
			isLoading,
			searchBooksQuery,
			items: filterBooks(items, activeFilter, isActiveOrderLowToHigh, searchBooksQuery)
		}
	}, { setBooks })(Shop)