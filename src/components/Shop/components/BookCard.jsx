import React from "react";

import RatingStars from "./RatingStars"

const BookCard = (props) => {
	const { title, author, image, price, rating, date, addBookToCheckout, addedCount } = props;
	return (
		<li className="card">
			<div className="image">
				<img src={image} />
			</div>
			<div className="content d-flex flex-column justify-content-between">
				<div className="header">{title}</div>
				<div className="description d-flex justify-content-between align-items-center">
					{author}
					<RatingStars rating={rating} />
				</div>
			</div>
			<div className="ui labeled btn_add button">
				<button className="ui teal button" onClick={() => addBookToCheckout(props)}>ADD TO CART</button>
				<a className="ui basic label">{addedCount}</a>
			</div>
			
			<div className="extra content purple">
				<span className="right floated">
					{date}
				</span>
				<span>
					<b>{price}$</b>
				</span>
			</div>
		</li>
	)
}

export default BookCard;