import { connect } from "react-redux";

import Header from "../components/Header";

import { searchBooks } from "../actions/booksActions";

export default connect(
	state => {	
		const { searchBooksQuery } = state.shop.books;
		return {
			searchBooksQuery
		}
	}, { searchBooks })(Header);