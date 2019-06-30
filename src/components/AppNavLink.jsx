import React from "react";

import { Link, withRouter } from 'react-router-dom';

const AppNavLink = ({ location, to, exact, children }) => (
	<li className={location.pathname === to ? "item active" : "item"}>
		<Link to={to} exact>
			{children}
		</Link>
	</li>
)

export default withRouter(AppNavLink);