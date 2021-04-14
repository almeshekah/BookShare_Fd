import { toast } from "react-toastify";
import instance from "./instance";
import * as types from "./types";
import { fetchMyBook } from "./bookActions";
export const fetchRequest = () => {
	return async (dispatch) => {
		try {
			const res = await instance.get("/requests/viewRequest");
			dispatch({
				type: types.FETCH_REQUEST,
				payload: res.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
export const createRequest = (newRequest) => {
	return async (dispatch) => {
		try {
			const res = await instance.post(`/requests/sendRequest`, newRequest);
			await dispatch({
				type: types.CREATE_REQUEST,
				payload: { newRequest: res.data },
			});
			toast.success("Request created successfuly!");
		} catch (error) {
			console.log(error);
		}
	};
};

export const acceptRequest = (userId2, history) => {
	return async (dispatch) => {
		try {
			const res = await instance.put(`/requests/acceptRequest/${userId2}`);
			await dispatch({
				type: types.UPDATE_REQUEST,
				payload: res.data,
			});
			dispatch(fetchMyBook());
			toast.success("Request accepted successfuly!");
			history.replace("/");
		} catch (error) {
			console.log(error);
		}
	};
};

export const rejectRequest = (userId1) => {
	return async (dispatch) => {
		try {
			const res = await instance.put(`/requests/rejectRequest/${userId1}`);
			await dispatch({
				type: types.UPDATE_REQUEST,
				payload: res.data,
			});
			toast.success("Request rejected successfuly!");
		} catch (error) {
			console.log(error);
		}
	};
};
