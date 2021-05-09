import { combineReducers } from "redux";

import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import bookReducer from "./bookReducer";
import requestReducer from "./requestReducer";
import subCategoryReducer from "./subCategoryReducer";

const rootReducer = combineReducers({
	authReducer,
	categoryReducer,
	bookReducer,
	requestReducer,
	subCategoryReducer,
});

export default rootReducer;
