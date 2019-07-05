import React from "react";

const CheckoutList = ({ items, fullItems, removeBookFromCheckout }) => (
	items.length ? items.map(({ id, image, title, author, price }) => {
		const countOfBooks = fullItems.filter(item => item.id === id).length;
		return (
			<div key={id} className="ui middle aligned divided list">
				<div className="item">
					<img className="ui avatar image" src={image} />
					<div className="content">
						<b>{title}</b> - <em>{author}</em> ({countOfBooks} books) - {price*countOfBooks}$
					</div>
					<div className="right floated content">
						<div className="ui button" onClick={() => removeBookFromCheckout(id)}>Remove</div>
					</div>
				</div>
			</div>
		)
	}) : <h3>No books in checkout</h3>
)

export default CheckoutList;