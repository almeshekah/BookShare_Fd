import * as types from "../actions/types";

const initialState = {
	books: [],
	mybook: [],
	booksearsh: [],
	loading: true,
	loadingMyBook: true,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_BOOKS:
			return {
				...state,
				books: action.payload,
				loading: false,
			};
		case types.FETCH_SEARCH:
			return {
				...state,
				booksearsh: action.payload,
				loading: false,
			};
		case types.CREATE_MY_BOOK:
			const { newBook } = action.payload;
			return {
				...state,
				mybook: [...state.mybook, newBook],
			};
		case types.FETCH_MY_BOOKS:
			return {
				...state,
				mybook: action.payload,
				loadingMyBook: false,
			};

		default:
			return state;
	}
};

export default reducer;
