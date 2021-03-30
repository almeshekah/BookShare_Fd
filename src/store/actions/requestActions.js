import { toast } from "react-toastify";
import instance from "./instance";
import * as types from "./types";

export const fetchRequest = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/requests");
      dispatch({
        type: types.FETCH_REQUEST,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createRequest = (newRequest, userId2) => {
  return async (dispatch) => {
    try {
      const res = await instance.post(
        `/requests/sendRequest/${userId2}`,
        newRequest
      );
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

export const acceptRequest = (userId2) => {
  return async (dispatch) => {
    try {
      const res = await instance.put(`/requests/acceptRequest/${userId2}`);
      await dispatch({
        type: types.UPDATE_REQUEST,
        payload: res.data,
      });
      toast.success("Request accepted successfuly!");
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