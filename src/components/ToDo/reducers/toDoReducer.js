import { combineReducers } from "redux";

import { taskReducer } from "./taskReducer";
import { filterReducer } from "./filterReducer";
import { searchReducer } from "./searchReducer";

export default combineReducers({
	activeFilter: filterReducer,
	tasks: taskReducer,
	searchInputValue: searchReducer
})