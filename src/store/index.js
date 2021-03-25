import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";
import { checkForToken } from "./actions/authActions";
import { fetchCategory } from "./actions/categoryActions";
import { fetchBook } from "./actions/bookActions";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(checkForToken());
store.dispatch(fetchCategory());
store.dispatch(fetchBook());

export default store;
