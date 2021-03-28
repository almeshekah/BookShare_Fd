import instance from "./instance";
import * as types from "../actions/types";

// REVIEW: A better naming would be `fetchCategories`
export const fetchCategory = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/categories");
      dispatch({
        type: types.FETCH_CATEGORY,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const categoryOfBooks = (categoryId) => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/categories/${categoryId}`);
      console.log(res.data); //REVIEW: Remove console logs
      dispatch({
        type: types.FETCH_CATEGORY_BOOKS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
