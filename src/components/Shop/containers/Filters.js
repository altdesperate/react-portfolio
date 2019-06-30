import { connect } from "react-redux";

import Filters from "../components/Filters"
import { changeActiveFilter, changeActiveOrder } from "../actions/booksActions";

export const FILTERS = [
	{
		name: "Title",
		id: "title"
	},
	{
		name: "Author",
		id: "author"
	},
	{
		name: "Price",
		id: "price"
	},
	{
		name: "Rating",
		id: "rating"
	},
	{
		name: "Date",
		id: "date"
	}
]

export default connect(
	state => {
		const { activeFilter, isActiveOrderLowToHigh } = state.shop.books;
		return {
			activeFilter,
			isActiveOrderLowToHigh
		}
	}, { changeActiveFilter, changeActiveOrder })(Filters)