import { combineReducers } from "redux";
import dogs from "./dogsReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  dogs,
  apiCallsInProgress,
});

export default rootReducer;
