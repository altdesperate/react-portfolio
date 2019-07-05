import React from "react";

import BookCard from "../containers/BookCard";
import Preloader from "./../../Preloader"

const BooksList = ({ books, isLoading }) => (
	<ul className="ui cards full-width">
		{isLoading ? <Preloader /> :
		books.length ? books.map(book => (
		<BookCard key={book.id} {...book} />)) : <h1 className="positioned-center">Books are not found :c</h1>}
	</ul>
)

export default BooksList;