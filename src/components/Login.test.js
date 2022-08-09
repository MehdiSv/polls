import Login from "./Login";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

const store = createStore(reducer, middleware);

describe("Login", () => {
  it("should have select present", () => {
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    expect(component.getByTestId("test-select")).toBeInTheDocument();
  });

  it("should handle invalid login", () => {
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.change(component.getByTestId("test-select"), {
      target: { value: "fail" },
    });

    expect(component.getByTestId("invalid-user")).toBeInTheDocument();
  });
});
