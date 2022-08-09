import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";
import reducer from "../reducers";
import middleware from "../middleware";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer, middleware);

describe("Dashboard", () => {
  it("will match snapshot", () => {
    var component = render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
