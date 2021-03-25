import * as types from "../actions/types";

const initialState = {
  user: null,
  profile: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.FETCH_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case types.UPDATE_PROFILE:
      const updatedProfile = action.payload;
      return {
        ...state,
        profile: updatedProfile,
      };
    default:
      return state;
  }
};

export default reducer;
