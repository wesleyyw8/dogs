import { render, screen } from "@testing-library/react";
import { DogsPage } from "./DogsPage";
import { dogs, favorites } from "./../../tools/mockData";

test("renders learn react link", () => {
  const defaultProps = {
    dogs: [
      "387c0fe7-b311-4a1b-b8c7-6667941e0e61.jpg",
      "f54036e6-b0f5-4910-9280-cf4e5892d2d7.mp4",
      "317bc200-2906-452d-bf9f-6504cfc7c01f.jpg",
      "df169d9c-5506-46e0-ba2c-c7875ceb8452.gif",
    ],
    favorites,
    loadDogs: jest.fn(),
    apiCallsInProgress: 0,
  };

  const props = { ...defaultProps };
  render(<DogsPage {...props} />);
  const dogs = screen.queryAllBy(".dog");
  expect(dogs.length).toBe(4);
});
