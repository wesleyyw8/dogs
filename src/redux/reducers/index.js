import { combineReducers } from "redux";
import dogs from "./dogsReducer";
import favorites from "./favoritesReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  dogs,
  apiCallsInProgress,
  favorites,
});

export default rootReducer;
