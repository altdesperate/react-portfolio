import React from "react";

import { Rating } from "semantic-ui-react";

const RatingStars = ({ rating }) => (
	<Rating icon='star' defaultRating={rating} maxRating={5} />
)

export default RatingStars;