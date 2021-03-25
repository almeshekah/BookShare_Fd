import { combineReducers } from "redux";

import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
const rootReducer = combineReducers({
  authReducer,
  categoryReducer,
});

export default rootReducer;
