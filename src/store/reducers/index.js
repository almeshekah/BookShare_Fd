import { combineReducers } from "redux";

import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import bookReducer from "./bookReducer";
import requestReducer from "./requestReducer";

const rootReducer = combineReducers({
  authReducer,
  categoryReducer,
  bookReducer,
  requestReducer,
});

export default rootReducer;
