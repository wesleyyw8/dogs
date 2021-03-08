import React from "react";
import { dogs, favorites } from "./../../tools/mockData";
import { DogsPage } from "./DogsPage";
import { shallow, mount } from "enzyme";
import "./../../tools/testSetup";
import { BrowserRouter as Router } from "react-router-dom";

function render(args) {
  const defaultProps = {
    dogs,
    favorites,
    loadDogs: jest.fn(),
    apiCallsInProgress: 0,
  };

  const props = { ...defaultProps, ...args };
  return shallow(
    <Router>
      <DogsPage {...props} />
    </Router>
  );
}

it("check if 3 dogs were rendered", () => {
  const wrapper = render();

  // wrapper.find("form").simulate("submit");
  // const error = wrapper.find(".alert").first();
  expect(wrapper.getElement(".dog").length).toBe(3);
});
