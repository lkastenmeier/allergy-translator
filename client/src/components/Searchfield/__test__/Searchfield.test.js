import React from "react";
import ReactDOM from "react-dom";
import Searchfield from "./../Searchfield";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Searchfield />, div);
});

it("renders searchfield correctly", () => {
  const { getByTestId } = render(<Searchfield placeholder="test" />);
  expect(getByTestId("searchfield").placeholder).toEqual("test");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Searchfield />).toJSON();
  expect(tree).toMatchSnapshot();
});
