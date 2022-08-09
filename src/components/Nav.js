import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Nav = ({ users, authedUser }) => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <img
            src={users[authedUser].avatarURL}
            alt={`Avatar of ${users[authedUser].name}`}
            className="avatar"
          />
          {authedUser}
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link data-testid="leaderbord-link" to="/leaderboard">
            Leaderboard
          </Link>
        </li>
        <li>
          <Link data-testid="add-poll-link" to="/add">
            New
          </Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStatetoProps = ({ users, authedUser }) => {
  return {
    users,
    authedUser,
  };
};

export default connect(mapStatetoProps)(Nav);
