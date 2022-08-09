import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PollPage from "./PollPage";
import Nav from "./Nav";
import Logout from "./Logout";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <LoadingBar style={{ backgroundColor: "blue", height: "5px" }} />
      <div className="container">
        {props.authedUser === null ? null : <Nav />}
        {props.loading === true ? null : (
          <Routes>
            <Route
              path="/"
              exact
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route path="/login" exact element={<Login />} />
            <Route
              path="/logout"
              exact
              element={
                <RequireAuth>
                  <Logout />
                </RequireAuth>
              }
            />
            <Route
              path="/leaderboard"
              exact
              element={
                <RequireAuth>
                  <Leaderboard />
                </RequireAuth>
              }
            />
            <Route
              path="/add"
              element={
                <RequireAuth>
                  <NewPoll />
                </RequireAuth>
              }
            />
            <Route
              path="/questions/:id"
              element={
                <RequireAuth>
                  <PollPage />
                </RequireAuth>
              }
            />
          </Routes>
        )}
      </div>
    </div>
  );
};

const mapStatetoProps = ({ users, authedUser }) => ({
  loading: Object.keys(users).length === 0,
  authedUser,
});

export default connect(mapStatetoProps)(App);
