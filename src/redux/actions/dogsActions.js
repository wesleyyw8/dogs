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
        dispatch(
          loadDogsSuccess(dogs.length > 6 ? randomArrayImagens(dogs, 6) : dogs)
        );
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

const randomArrayImagens = (dogs, n) => {
  let result = [];
  for (let i = 0; i < n; i = i + 1) {
    result.push(dogs[generateRandomIndex(dogs.length)]);
  }
  return result;
};

const generateRandomIndex = (n) => {
  return Math.floor(Math.random() * (n - 1));
};
