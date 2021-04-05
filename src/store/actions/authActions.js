import instance from "./instance";
import decode from "jwt-decode";
import * as types from "./types";
import { toast } from "react-toastify";
//Actions
import { fetchRequest } from "./requestActions";

const setUser = (token) => {
	return async (dispatch) => {
		localStorage.setItem("myToken", token);
		instance.defaults.headers.common.Authorization = `Bearer ${token}`;
		await dispatch(profile());
		await dispatch({
			type: types.SET_USER,
			payload: decode(token),
		});
	};
};
export const signup = (newUser, history) => {
	return async (dispatch) => {
		try {
			const formData = new FormData();
			for (const key in newUser) formData.append(key, newUser[key]);
			const res = await instance.post("/signup", formData);
			localStorage.setItem("myToken", res.data.token);
			await dispatch(setUser(res.data.token));
			history.replace("/");
			toast.success("Signed up successfuly!");
		} catch (error) {
			console.log(error);
		}
	};
};

export const signin = (userData, history) => {
	return async (dispatch) => {
		try {
			const res = await instance.post("/signin", userData);
			localStorage.setItem("myToken", res.data.token);
			await dispatch(setUser(res.data.token));
			await dispatch(fetchRequest());
			toast.success("Signed in successfuly!");
			history.replace("/");
		} catch (error) {
			console.log(error);
		}
	};
};

export const signout = (history) => {
	return async (dispatch) => {
		localStorage.removeItem("myToken");
		delete instance.defaults.headers.common.Authorization;
		await dispatch({
			type: types.SET_USER,
			payload: null,
		});
		await dispatch({
			type: types.FETCH_PROFILE,
			payload: null,
		});
		history.replace("/");
		toast.info("Signed out");
	};
};

export const profile = () => async (dispatch) => {
	try {
		const res = await instance.get(`/myprofile`);
		await dispatch({
			type: types.FETCH_PROFILE,
			payload: res.data,
		});
		toast.success("You can see your profile");
	} catch (error) {
		console.log("ERROR: ", error);
	}
};

export const updateProfile = (user) => async (dispatch) => {
	try {
		await instance.put(`/myprofile`, user);
		await dispatch({
			type: types.UPDATE_PROFILE,
			payload: user,
		});
		toast.success("Profile updated!");
	} catch (error) {
		console.log("ERROR: ", error);
	}
};

export const viewProfile = (userId) => async (dispatch) => {
	try {
		const res = await instance.get(`/viewProfile/${userId}`);
		await dispatch({
			type: types.VIEW_PROFILE,
			payload: res.data,
		});
		toast.success("You can see other user profile");
	} catch (error) {
		console.log("ERROR: ", error);
	}
};

export const checkForToken = () => (dispatch) => {
	const token = localStorage.getItem("myToken");
	if (token) {
		const user = decode(token);
		const currentTime = Date.now();
		if (currentTime < user.exp) {
			dispatch(setUser(token));
		} else {
			localStorage.removeItem("myToken");
			dispatch(signout());
		}
	}
};

export const fetchUsers = () => {
	return async (dispatch) => {
		try {
			const res = await instance.get("/users");
			dispatch({
				type: types.FETCH_USERS,
				payload: res.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};
