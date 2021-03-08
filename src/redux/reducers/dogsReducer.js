import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function dogsReducer(state = initialState.dogs, action) {
  switch (action.type) {
    case types.LOAD_DOGS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
