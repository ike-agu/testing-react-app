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
  const buttonInputElement = screen.getByRole("button");
  expect(buttonInputElement).toBeInTheDocument()
})
