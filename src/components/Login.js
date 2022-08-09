import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import { useState } from "react";

const Login = ({ users, dispatch }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const logInAs = (e) => {
    const user = e.target.value;
    if (user in users) {
      setError("");
      dispatch(setAuthedUser(user));
      navigate("/");
      return;
    }

    setError("Invalid User");
  };

  return (
    <div className="center">
      {error && <h1 data-testid="invalid-user">Invalid User</h1>}
      <h2>Log in as:</h2>
      <select
        data-testid="test-select"
        defaultValue="default"
        onChange={logInAs}
      >
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
