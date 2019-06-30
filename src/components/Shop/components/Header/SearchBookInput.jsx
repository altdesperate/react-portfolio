import React from "react";

const SearchBookInput = ({ searchBookQuery, searchBooks }) => (
	<div className="ui icon input small-medium">
		<i className="search icon"></i>
		<input type="text" value={searchBookQuery} onChange={(e) => searchBooks(e.target.value)} placeholder="Search books..." />
	</div>
)

export default SearchBookInput;