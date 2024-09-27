import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "../NavBar";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render the login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <NavBar />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  //assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should render the logout button on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <NavBar />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton); //firing a click event on button

  const logoutButton = screen.getByRole("button", { name: "Logout" });
  //assertion
  expect(logoutButton).toBeInTheDocument();
});
