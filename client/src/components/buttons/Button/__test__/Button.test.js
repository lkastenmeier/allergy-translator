import React from "react";
import ReactDOM from "react-dom";
import Button from "./../Button";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button>Button</Button>);
  expect(getByTestId("button")).toHaveTextContent("Button");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Button>Button</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
