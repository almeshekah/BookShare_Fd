import instance from "./instance";
import * as types from "../actions/types";

export const fetchSubCategory = () => {
	return async (dispatch) => {
		try {
			const res = await instance.get("/subcategories");
			dispatch({
				type: types.FETCH_SUBCATEGORIES,
				payload: res.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
