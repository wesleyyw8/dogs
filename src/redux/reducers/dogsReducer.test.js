import dogsReducer from "./dogsReducer";
import * as actions from "../actions/dogsActions";

it("should override dogs when passed LOAD_DOGS_SUCCESS", () => {
  // arrange
  const initialState = ["abc", "ddd"];

  const dogs = ["wes1", "wes2", "wes3"];

  const action = actions.loadDogsSuccess(dogs);

  // act
  const newState = dogsReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
  expect(newState[0]).toEqual("wes1");
  expect(newState[1]).toEqual("wes2");
  expect(newState[2]).toEqual("wes3");
});
