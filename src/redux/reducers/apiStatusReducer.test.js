import apiStatusReducer from "./apiStatusReducer";
import * as actions from "../actions/apiStatusActions";

it("should increate the number of api calls when begin api call is fired", () => {
  // arrange
  const initialState = 3;

  const action = actions.beginApiCall();

  // act
  const newState = apiStatusReducer(initialState, action);

  // assert
  expect(newState).toEqual(4);
});

it("should decrease the number of api calls when API_CALL_ERROR is fired", () => {
  // arrange
  const initialState = 3;

  const action = actions.apiCallError();

  // act
  const newState = apiStatusReducer(initialState, action);

  // assert
  expect(newState).toEqual(2);
});
