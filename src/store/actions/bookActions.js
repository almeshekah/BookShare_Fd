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
