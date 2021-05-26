import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("should has the correct initial color", () => {
  render(<App />);

  const ColorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(ColorButton).toHaveStyle({ backgroundColor: "red" });
  fireEvent.click(ColorButton);

  expect(ColorButton).toHaveStyle({ backgroundColor: "blue" });
});

test("initail conditions", () => {
  render(<App />);
  // buttons are enables
  const ColorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(ColorButton).toBeEnabled();

  // checkbox are unchecked
  const checkBox = screen.getByRole("checkbox");
  expect(checkBox).not.toBeChecked();
});

test("Button should be disabled when we click on checkbox", () => {
  render(<App />);

  const CheckBox = screen.getByRole("checkbox");
  const ColorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(CheckBox).toBeChecked();

  expect(ColorButton).toBeDisabled();
});
