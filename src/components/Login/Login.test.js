import {render, screen} from "@testing-library/react"
import Login from "../Login"


test("username input should be rendered", () => {
  render(<Login/>);
  const userInputElement = screen.getByPlaceholderText(/username/i);
  expect(userInputElement).toBeInTheDocument()
})

test("password input should be rendered", () => {
  render(<Login/>);
  const passwordInputElement = screen.getByPlaceholderText(/password/i);
  expect(passwordInputElement).toBeInTheDocument()
})

test("button input should be rendered", () => {
  render(<Login/>);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument()
})

test("username input should be empty", () => {
  render(<Login/>);
  const userInputElement = screen.getByPlaceholderText(/username/i);
  expect(userInputElement.value).toBe("")
})

test("password input should be empty", () => {
  render(<Login/>);
  const passwordInputElement = screen.getByPlaceholderText(/password/i);
  expect(passwordInputElement.value).toBe("")
})

test("button input should be disabled", () => {
  render(<Login/>);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeDisabled()
})

test("error messages should not be visible", () => {
  render(<Login/>);
  const errorElement = screen.getByTestId("error");
  expect(errorElement).not.toBeVisible()
})

test("username input should change", () => {
  render(<Login/>);
  const userNameInputElement = screen.getByPlaceholderText(/username/i);
  expect(userNameInputElement.value).toBe("")
})

test("password input should change", () => {
  render(<Login/>);
  const passwordInputElement = screen.getByPlaceholderText(/username/i);
  expect(passwordInputElement.value).toBe("")
})
