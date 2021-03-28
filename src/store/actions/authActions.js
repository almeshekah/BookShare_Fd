import instance from './instance';
import decode from 'jwt-decode';
import * as types from './types';
import { toast } from 'react-toastify';

const setUser = (token) => {
	localStorage.setItem('myToken', token);
	instance.defaults.headers.common.Authorization = `Bearer ${token}`;
	return {
		type: types.SET_USER,
		payload: decode(token),
	};
};
// if changing backend for redundency, change newUser prop
export const signup = (newUser, history) => {
	return async (dispatch) => {
		try {
			const formData = new FormData();
			for (const key in newUser) formData.append(key, newUser[key]);
			const res = await instance.post('/user/signup', formData);
			localStorage.setItem('myToken', res.data.token);
			await dispatch(setUser(res.data.token));
			history.replace('/');
			toast.success('Signed up successfuly!');
		} catch (error) {
			console.log(error);
		}
	};
};

export const signin = (userData, history) => {
	return async (dispatch) => {
		try {
			const res = await instance.post('/user/signin', userData);
			localStorage.setItem('myToken', res.data.token);
			await dispatch(setUser(res.data.token));
			toast.success('Signed in successfuly!');
			history.replace('/');
		} catch (error) {
			console.log(error);
		}
	};
};

export const signout = (history) => {
	return async (dispatch) => {
		localStorage.removeItem('myToken');
		delete instance.defaults.headers.common.Authorization;
		await dispatch({
			type: types.SET_USER,
			payload: null,
		});
		await dispatch({
			type: types.FETCH_PROFILE,
			payload: null,
		});
		history.replace('/');
		toast.info('Signed out');
	};
};

export const profile = (userId) => async (dispatch) => {
	try {
		const res = await instance.get(`/user/myprofile`);
		console.log(res.data);
		await dispatch({
			type: types.FETCH_PROFILE,
			payload: res.data,
		});
	} catch (error) {
		console.log('ERROR: ', error);
	}
};

export const updateProfile = (user) => async (dispatch) => {
	try {
		await instance.put(`/user/updateprofile`, user);
		await dispatch({
			type: types.UPDATE_PROFILE,
			payload: user,
		});
		toast.success('Profile updated!');
	} catch (error) {
		console.log('ERROR: ', error);
	}
};

export const checkForToken = () => (dispatch) => {
	const token = localStorage.getItem('myToken');
	if (token) {
		const user = decode(token);
		const currentTime = Date.now();
		if (currentTime < user.exp) {
			dispatch(setUser(token));
		} else {
			localStorage.removeItem('myToken');
			dispatch(signout());
		}
	}
};
