import * as dogsActions from "./dogsActions";
import * as types from "./actionTypes";
import { dogs } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Dogs Thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_DOGS_SUCCESS when loading dogs", () => {
      fetchMock.mock("*", {
        body: dogs,
        headers: { "content-type": "application/json" },
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_DOGS_SUCCESS, payload: dogs },
      ];

      const store = mockStore({ courses: [] });
      return store.dispatch(dogsActions.loadDogs()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
