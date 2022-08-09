import { render } from "@testing-library/react";
import Leaderboard from "./Leaderboard";
import reducer from "../reducers";
import middleware from "../middleware";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer, middleware);

describe("Leaderboard", () => {
  it("will match snapshot", () => {
    var component = render(
      <Provider store={store}>
        <Leaderboard />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
