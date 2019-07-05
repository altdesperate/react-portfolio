import { connect } from "react-redux";

import BookCard from "../components/BookCard"
import { addBookToCheckout } from "../actions/checkoutActions";

const mapStateToProps = (state, { id } ) => {
	const { items } = state.shop.checkout;
	return {
		addedCount: items.reduce((total, book) => total + (book.id == id ? 1 : 0), 0)
	}
}

export default connect(mapStateToProps, { addBookToCheckout })(BookCard)