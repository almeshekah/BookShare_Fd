import * as types from "../actions/types";

const initialState = {
  books: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_BOOK:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
