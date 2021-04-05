import { toast } from "react-toastify";
import instance from "./instance";
import * as types from "./types";

export const fetchBook = () => {
	return async (dispatch) => {
		try {
			const res = await instance.get("/books");
			dispatch({
				type: types.FETCH_BOOKS,
				payload: res.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const createBook = (newBook) => {
	return async (dispatch) => {
		try {
			const formData = new FormData();
			for (const key in newBook) formData.append(key, newBook[key]);
			const res = await instance.post("/books", formData);
			await dispatch({
				type: types.CREATE_BOOK,
				payload: { newBook: res.data },
			});
			toast.success("Book created successfuly!");
		} catch (error) {
			console.log(error);
		}
	};
};
