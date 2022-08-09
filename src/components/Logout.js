import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

const Logout = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    props.dispatch(setAuthedUser(null));
    navigate("/login");
  }, []);

  return <div></div>;
};

export default connect()(Logout);
