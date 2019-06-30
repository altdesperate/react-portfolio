import { combineReducers } from "redux";

import { booksReducer } from "./booksReducer";
import { checkoutReducer } from "./checkoutReducer"

export default combineReducers({
	books: booksReducer,
	checkout: checkoutReducer
})