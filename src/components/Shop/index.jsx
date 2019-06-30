import React from "react";

import BooksList from "./components/BooksList";
import Filters from "./containers/Filters";
import Header from "./containers/Header";

export default class Shop extends React.Component {
	render() {
		const { items, isLoading } = this.props;
		return (
			<div className="wrapper_lg">
				<h1 className="header ui heading_main">Online shop application with checkout (shopping cart)</h1>
				<Header />
				<div className="main d-flex justify-content-between">
					<Filters />
					<BooksList books={items} isLoading={isLoading} />
				</div>
			</div>
		)
	}
	componentDidMount() {
		this.fetchData();
	}
	fetchData = () => {
		const { setBooks } = this.props;
		fetch("/books.json")
			.then(response => response.json())
			.then(data => setBooks(data))
			.catch(error => console.log(error))
	}
}