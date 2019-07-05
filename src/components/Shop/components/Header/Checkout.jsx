import React from "react";

import { Button, Popup, Icon } from 'semantic-ui-react';

import CheckoutList from "../../containers/CheckoutList";

const Checkout = ({ booksInCheckout }) => (
	<Popup on="click"
		position="bottom center"
		content={<CheckoutList />}
		trigger={<Button color="purple"><Icon name="shopping cart" />Checkout({booksInCheckout})</Button>}
	/>
)

export default Checkout;