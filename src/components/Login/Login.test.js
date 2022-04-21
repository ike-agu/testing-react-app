import {fireEvent, render, screen, waitFor} from "@testing-library/react"
import Login from "../Login"


// this is simulating only for login that is why I have it here and not in mocks folder
// This isi to test fake api calls
jest.mock('axios', ()=> ({

  __esModule:true,
  default: {
    get: ()=> ({
      data: {id:1, name:"Gozie"},// we can put many data here
    }),
  },

}));


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
  const testValue = "test";
  fireEvent.change(userNameInputElement, {target: { value: testValue }});
  expect(userNameInputElement.value).toBe(testValue)
})

test("password input should change", () => {
  render(<Login/>);
  const passwordInputElement = screen.getByPlaceholderText(/password/i);
  const testValue = "test";
  fireEvent.change(passwordInputElement, {target: { value: testValue }});
  expect(passwordInputElement.value).toBe(testValue)
})

test("button input should not be disabled when input exist", () => {
  render(<Login/>);
  const buttonElement = screen.getByRole("button");

  const userNameInputElement = screen.getByPlaceholderText(/username/i);
  const passwordInputElement = screen.getByPlaceholderText(/password/i);

  const testValue = "test";
  fireEvent.change(userNameInputElement, {target: { value: testValue }});
  fireEvent.change(passwordInputElement, {target: { value: testValue }});
  expect(buttonElement).not.toBeDisabled()
})


test("loading should not be rendered", () => {
  render(<Login/>);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).not.toHaveTextContent(/please wait/i)
})

// when clicked login button if there id delay, loading message appears
test("loading should be rendered when clicked", () => {
  render(<Login/>);
  const buttonElement = screen.getByRole("button");

  const userNameInputElement = screen.getByPlaceholderText(/username/i);
  const passwordInputElement = screen.getByPlaceholderText(/password/i);

  const testValue = "test";
  fireEvent.change(userNameInputElement, {target: { value: testValue }});
  fireEvent.change(passwordInputElement, {target: { value: testValue }});
  fireEvent.click(buttonElement)

  expect(buttonElement).toHaveTextContent(/please wait/i)
})


// loading message should not be on screen after data has been fetched
test("loading should not be rendered or visible after fetching",  async() => {
  render(<Login/>);
  const buttonElement = screen.getByRole("button");

  const userNameInputElement = screen.getByPlaceholderText(/username/i);
  const passwordInputElement = screen.getByPlaceholderText(/password/i);

  const testValue = "test";
  fireEvent.change(userNameInputElement, {target: { value: testValue }});
  fireEvent.change(passwordInputElement, {target: { value: testValue }});
  fireEvent.click(buttonElement)

  await waitFor(() =>
  expect(buttonElement).not.toHaveTextContent(/please wait/i))
})

// loading message should not be on screen after data has been fetched
test("loading should not be rendered or visible after fetching",  async() => {
  render(<Login/>);
  const buttonElement = screen.getByRole("button");

  const userNameInputElement = screen.getByPlaceholderText(/username/i);
  const passwordInputElement = screen.getByPlaceholderText(/password/i);

  const testValue = "test";
  fireEvent.change(userNameInputElement, {target: { value: testValue }});
  fireEvent.change(passwordInputElement, {target: { value: testValue }});
  fireEvent.click(buttonElement)

  await waitFor(() =>
  expect(buttonElement).not.toHaveTextContent(/please wait/i))
})

// User should be displayed after data has been fetched
test("user should be rendered  after fetching",  async() => {
  render(<Login/>);
  const buttonElement = screen.getByRole("button");

  const userNameInputElement = screen.getByPlaceholderText(/username/i);
  const passwordInputElement = screen.getByPlaceholderText(/password/i);

  const testValue = "test";
  fireEvent.change(userNameInputElement, {target: { value: testValue }});
  fireEvent.change(passwordInputElement, {target: { value: testValue }});
  fireEvent.click(buttonElement)

  const userItem = await screen.findByText('Gozie')
  expect(userItem).toBeInTheDocument()
})
