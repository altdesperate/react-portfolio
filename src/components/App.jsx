import React from 'react';

import Header from "./Header"

import 'semantic-ui-css/semantic.min.css';
import '../css/style.css';

const App = ({children}) => (
	<>
		<Header />
		{children}
	</>
)

export default App;
