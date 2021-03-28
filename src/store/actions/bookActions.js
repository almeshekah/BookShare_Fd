import { toast } from "react-toastify";
import instance from "./instance";
import * as types from "./types";

export const fetchBook = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/book");
      dispatch({
        type: types.FETCH_BOOK,
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
      const res = await instance.post(`/books`, newBook);
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
