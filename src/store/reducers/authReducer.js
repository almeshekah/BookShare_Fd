import * as types from '../actions/types';

const initialState = {
	user: null,
	users: [],
	profile: null,
	loading: true,
	otheProfile: null,
	otheProfileloading: true,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_USER:
			return {
				...state,
				user: action.payload,
			};
		case types.FETCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
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

		case types.VIEW_PROFILE:
			return {
				...state,
				otheProfile: action.payload,
				otheProfileloading: false,
			};
		default:
			return state;
	}
};

export default reducer;
