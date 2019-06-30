import { combineReducers } from "redux";

import toDoReducer from "../components/ToDo/reducers/toDoReducer";
import shopReducer from "../components/Shop/reducers/shopReducer"

export const rootReducer = combineReducers({
	todo: toDoReducer,
	shop: shopReducer
})