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

export const createMyBook = (newBook) => {
	return async (dispatch) => {
		try {
			const res = await instance.post("/mybook/create", newBook);
			await dispatch({
				type: types.CREATE_MY_BOOK,
				payload: { newBook: res.data },
			});
			toast.success("Book created successfuly!");
		} catch (error) {
			console.log(error);
		}
	};
};

export const fetchMyBook = () => {
	return async (dispatch) => {
		try {
			const res = await instance.get("/mybook");
			dispatch({
				type: types.FETCH_MY_BOOKS,
				payload: res.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const searchBook = (search) => {
	return async (dispatch) => {
		try {
			const res = await instance.get(`/books/booksearch/${search}`);
			await dispatch({
				type: types.FETCH_SEARCH,
				payload: res.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
