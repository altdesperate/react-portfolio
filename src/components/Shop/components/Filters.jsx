import React from "react";

import { FILTERS } from "../containers/Filters"

const Filters = ({ activeFilter, changeActiveFilter, changeActiveOrder, isActiveOrderLowToHigh }) => (
	<div className="filter-block">
		<h1>Filter by:</h1>
		<div className="ui secondary vertical pointing menu purple large">
			{FILTERS.map(({ name, id }) => (
				<a onClick={() => changeActiveFilter(id)}
					key={id}
					className={id === activeFilter ? "item active" : "item"}>{name}</a>))}
		</div>
		<div className="ui compact segment full-width d-flex justify-content-between align-items-center">
			<span className={isActiveOrderLowToHigh ? "text-disabled" : "text-purple text-bold"}>From High <br/> to Low</span>
			<div className="ui fitted toggle checkbox">
				<input type="checkbox" onChange={changeActiveOrder} checked={isActiveOrderLowToHigh} />
				<label></label>
			</div>
			<span className={isActiveOrderLowToHigh ? "text-purple text-bold" : "text-disabled"}>From Low <br/> to High</span>
		</div>
	</div>
)

export default Filters;