import { render } from "@testing-library/react";
import Nav from "./Nav";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

const users = {
  sarahedo: {
    id: "sarahedo",
    password: "password123",
    name: "Sarah Edo",
    avatarURL:
      "https://gravatar.com/avatar/14299fa7ecd7f50203ee5c4c1d60f446?s=400&d=robohash&r=x",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
};

const authedUser = "sarahedo";

const mockStore = configureStore([]);

const store = mockStore({ users, authedUser });

describe("Nav", () => {
  it("will match snapshot", () => {
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it("contains the leaderboard and new links", () => {
    var component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );

    expect(component.getByTestId("leaderbord-link")).toBeInTheDocument();
    expect(component.getByTestId("add-poll-link")).toBeInTheDocument();
  });
});
