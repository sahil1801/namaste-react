import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../Header";
import { Provider } from "react-redux";
import { appStore } from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logInButton = screen.getByRole("button", { name: "Login" });
  // const logInButton = screen.getByText("button");

  expect(logInButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart items button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart (0)");

  expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a Cart button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartButton = screen.getByText(/Cart/);

  expect(cartButton).toBeInTheDocument();
});

it("Should change Login button to Logout and Logout to Login button on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logInButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(logInButton);

  const logOutButton = screen.getByRole("button", { name: "Logout" });

  expect(logOutButton).toBeInTheDocument();

  fireEvent.click(logOutButton);

  const logOutInButton = screen.getByRole("button", { name: "Login" });

  expect(logOutInButton).toBeInTheDocument();
});
