import React from "react";
import {Switch, BrowserRouter, Route} from "react-router-dom";

import App from "./App";
import Home from "./Home";
import ToDo from "./ToDo";
import Shop from "./Shop/containers/Shop";

const Routes = () => (
	<BrowserRouter>
		<App>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/to-do" component={ToDo} />
				<Route path="/shop" component={Shop} />
			</Switch>
		</App>
	</BrowserRouter>
)

export default Routes;