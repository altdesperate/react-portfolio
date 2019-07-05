import { connect } from "react-redux";

import CheckoutList from "../components/Header/CheckoutList";
import { removeBookFromCheckout } from "../actions/checkoutActions";

import uniqBy from "lodash/uniqBy"

const mapStateToProps = state => {
	const { items } = state.shop.checkout;
	return {
		items: uniqBy(items, item => item.id),
		fullItems: items
	}
}

export default connect(mapStateToProps, { removeBookFromCheckout })(CheckoutList)