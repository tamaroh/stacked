import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from './App';

xtest('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("it works!");
  expect(linkElement).toBeInTheDocument();
});
test("renders data", () => {
  const fakeItem = {
    name: "Joni Baez",
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  );
})