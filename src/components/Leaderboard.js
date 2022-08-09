import { connect } from "react-redux";

const Leaderboard = ({ users }) => {
  const usersRanked = () => {
    return Object.keys(users).sort(
      (a, b) =>
        Object.keys(users[b].answers).length +
        users[b].questions.length -
        (Object.keys(users[a].answers).length + users[a].questions.length)
    );
  };

  return (
    <div>
      <table>
        <tbody>
          <tr key={0}>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
          {usersRanked().map((user) => (
            <tr key={users[user].id}>
              <th>{users[user].name}</th>
              <th>{Object.keys(users[user].answers).length}</th>
              <th>{users[user].questions.length}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStatetoProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStatetoProps)(Leaderboard);
