import * as types from "../actions/types";

const initialState = {
	subcategories: [],
	loading: true,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_SUBCATEGORIES:
			return {
				...state,
				subcategories: action.payload,
				loading: false,
			};

		default:
			return state;
	}
};

export default reducer;
