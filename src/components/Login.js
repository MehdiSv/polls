import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const Login = ({ users, dispatch }) => {
  const navigate = useNavigate();

  const logInAs = (e) => {
    dispatch(setAuthedUser(e.target.value));
    navigate("/");
  };

  return (
    <div className="center">
      <h2>Log in as:</h2>
      <select defaultValue="default" onChange={logInAs}>
        <option value="default" disabled={true}>
          Please select a user
        </option>
        {Object.keys(users).map((userId) => (
          <option key={userId} value={userId}>
            {userId}
          </option>
        ))}
      </select>
    </div>
  );
};

const mapStatetoProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStatetoProps)(Login);
