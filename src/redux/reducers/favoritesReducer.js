import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function dogsReducer(state = initialState.favorites, action) {
  switch (action.type) {
    case types.SAVE_AS_FAVORITE:
      return [...state, action.payload];
    case types.REMOVE_AS_FAVORITE:
      return state.filter((dog) => dog !== action.payload);
    default:
      return state;
  }
}
