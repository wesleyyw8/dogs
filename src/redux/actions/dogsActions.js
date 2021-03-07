import * as types from "./actionTypes";
import * as dogsApi from "../../api/dogsApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadDogsSuccess(payload) {
  return { type: types.LOAD_DOGS_SUCCESS, payload };
}

export function loadDogs() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return dogsApi
      .getDogs()
      .then((dogs) => {
        dispatch(loadDogsSuccess(dogs));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
