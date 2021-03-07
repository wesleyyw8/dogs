import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function dogsReducer(state = initialState.favorites, action) {
  let favorites = "";
  switch (action.type) {
    case types.SAVE_AS_FAVORITE:
      favorites = [...state, action.payload];
      localStorage.setItem("wes-dogs-favorites", favorites);
      return favorites;
    case types.REMOVE_AS_FAVORITE:
      favorites = state.filter((dog) => dog !== action.payload);
      localStorage.setItem("wes-dogs-favorites", favorites);
      return favorites;
    default:
      return state;
  }
}
