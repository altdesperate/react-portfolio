import React from "react";
import AppNavLink from "./AppNavLink";

const Header = () => (
	<nav className="nav">
		<ul className="ui secondary pointing menu huge purple">
			<AppNavLink to="/" exact="true">Home</AppNavLink>
			<AppNavLink to="/to-do">To do</AppNavLink>
			<AppNavLink to="/shop">Shop</AppNavLink>
		</ul>
	</nav>
)

export default Header;