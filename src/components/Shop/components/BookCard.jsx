import React from "react";

import RatingStars from "./RatingStars"

const BookCard = ({ title, author, image, price, rating, date }) => (
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
		<div class="ui labeled btn_add button" tabindex="0">
			<button class="ui teal button">ADD TO CART</button>
			<a class="ui basic label">0</a>
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

export default BookCard;