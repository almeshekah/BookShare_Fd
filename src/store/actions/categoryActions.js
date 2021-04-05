import instance from "./instance";
import * as types from "../actions/types";

export const fetchCategory = () => {
	return async (dispatch) => {
		try {
			const res = await instance.get("/categories");
			dispatch({
				type: types.FETCH_CATEGORIES,
				payload: res.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
