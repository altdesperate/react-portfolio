import { connect } from "react-redux";

import Header from "../components/Header";

import { searchBooks } from "../actions/booksActions";

const mapStateToProps = state => {
	const { searchBooksQuery } = state.shop.books;
	const { items } = state.shop.checkout;
	return {
		searchBooksQuery,
		items,
		totalPrice: items.reduce((total, book) => total + book.price, 0)
	}

}

export default connect(mapStateToProps, { searchBooks })(Header);