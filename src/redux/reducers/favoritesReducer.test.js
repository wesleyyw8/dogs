import favoritesReducer from "./favoritesReducer";
import * as actions from "../actions/favoriteActions";

it("should override dogs when passed LOAD_DOGS_SUCCESS", () => {
  // arrange
  const initialState = ["abc", "ddd"];

  const aDog = "wes1";

  const action = actions.saveAsFavorite(aDog);

  // act
  const newState = favoritesReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
  expect(newState[0]).toEqual("abc");
  expect(newState[1]).toEqual("ddd");
  expect(newState[2]).toEqual("wes1");
});

it("should update course when passed UPDATE_COURSE_SUCCESS", () => {
  // arrange
  const initialState = ["lalala", "ddd", "wesley"];

  const aDog = "ddd";

  const action = actions.removeAsFavorite(aDog);

  // act
  const newState = favoritesReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(2);
  expect(newState[0]).toEqual("lalala");
  expect(newState[1]).toEqual("wesley");
});
