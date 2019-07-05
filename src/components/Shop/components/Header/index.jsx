import React from "react";

import CostCounter from "./CostCounter";
import Checkout from "./Checkout";
import SearchBookInput from "./SearchBookInput"

const Header = ({ searchBookQuery, searchBooks, totalPrice, items }) => (
	<header className="header d-flex justify-content-between">
		<div className="ui block header shop__header full-width d-flex justify-content-around align-items-center">
			<CostCounter totalPrice={totalPrice} />
			<Checkout booksInCheckout={items.length} />
		</div>
		<SearchBookInput searchBookQuery={searchBookQuery} searchBooks={searchBooks} />
	</header>
)

export default Header;