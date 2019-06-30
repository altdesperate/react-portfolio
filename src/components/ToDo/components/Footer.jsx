import React from "react";

const FILTERS = [
	{
		name: "All",
		id: "all"
	},
	{
		name: "Done",
		id: "done"
	},
	{
		name: "In progress",
		id: "in-progress"
	}
]

const Footer = ({ activeFilter, changeActiveFilter }) => (
	<div className="ui three item stackable tabs menu">
		{FILTERS.map(({name, id}) => (
			<a onClick={() => changeActiveFilter(id)}
				 key={id}
				 className={activeFilter === id ? "item active" : "item"}>{name}</a>))}
	</div>
)

export default Footer;