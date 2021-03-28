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
    case types.CREATE_BOOK:
      const { newBook } = action.payload;
      return {
        ...state,
        flights: [...state.flights, newBook],
      };

    default:
      return state;
  }
};

export default reducer;
