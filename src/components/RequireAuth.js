import { connect } from "react-redux";
import { Navigate } from "react-router";

const RequireAuth = ({ authedUser, children }) => {
  return authedUser === null ? <Navigate to="/login" replace /> : children;
};

const mapStatetoProps = ({ authedUser }, { children }) => {
  return {
    authedUser,
    children,
  };
};

export default connect(mapStatetoProps)(RequireAuth);
