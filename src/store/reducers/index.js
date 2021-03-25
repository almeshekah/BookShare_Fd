import { combineReducers } from "redux";

import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import bookReducer from "./bookReducer";

const rootReducer = combineReducers({
  authReducer,
  categoryReducer,
  bookReducer,
});

export default rootReducer;
