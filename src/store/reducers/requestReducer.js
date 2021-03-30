import * as types from "../actions/types";

const initialState = {
  requests: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        requests: action.payload,
        loading: false,
      };

    case types.CREATE_REQUEST:
      const { newRequest } = action.payload;
      return {
        ...state,
        requests: [...state.requests, newRequest],
      };

    case types.UPDATE_REQUEST:
      const { updatedRequest } = action.payload;
      return {
        ...state,
        request: state.requests.map((request) =>
          request.id === updatedRequest.id ? updatedRequest : request
        ),
      };

    default:
      return state;
  }
};

export default reducer;
