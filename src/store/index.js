import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";
import { checkForToken } from "./actions/authActions";
import { fetchCategories } from "./actions/categoryActions";
import { fetchBook } from "./actions/bookActions";

import { fetchRequest } from "./actions/requestActions";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(checkForToken());
store.dispatch(fetchCategories());
store.dispatch(fetchBook());
store.dispatch(fetchRequest());

export default store;
