// Unit test of the Picture Component

//imports
import React from "react";
import ReactDOM from "react-dom";
import Picture from "./../Picture";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Picture />, div);
});

it("renders picture correctly", () => {
  const { getByTestId } = render(<Picture alt="alt" src="/icons/MainLogo" />);
  expect(getByTestId("picture").alt).toEqual("alt");
  expect(getByTestId("picture").src.slice(-15)).toEqual("/icons/MainLogo");
});

it("matches snapshot", () => {
  const tree = renderer
    .create(<Picture src="/icons/MainLogo" alt="alt" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
