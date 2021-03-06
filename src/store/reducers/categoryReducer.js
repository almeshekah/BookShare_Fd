import * as types from "../actions/types";

const initialState = {
	categories: [],
	loading: true,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_CATEGORIES:
			return {
				...state,
				categories: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};

export default reducer;
