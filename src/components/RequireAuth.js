import { connect } from "react-redux";
import { Navigate } from "react-router";
import { useLocation } from "react-router-dom";

const RequireAuth = ({ authedUser, children }) => {
  const location = useLocation();

  return authedUser === null ? (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  ) : (
    children
  );
};

const mapStatetoProps = ({ authedUser }, { children }) => {
  return {
    authedUser,
    children,
  };
};

export default connect(mapStatetoProps)(RequireAuth);
