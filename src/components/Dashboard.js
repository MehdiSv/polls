import Polls from "./Polls";
import { connect } from "react-redux";

const Dashboard = ({ users, polls, authedUser }) => {
  const unansweredPolls = () => {
    return Object.keys(polls)
      .filter((poll) => !(poll in users[authedUser].answers))
      .map((poll) => polls[poll]);
  };

  const answeredPolls = () => {
    return Object.keys(polls)
      .filter((poll) => poll in users[authedUser].answers)
      .map((poll) => polls[poll]);
  };

  return (
    <div>
      <h2>New Questions</h2>
      <Polls polls={unansweredPolls()} />
      <h2>Done</h2>
      <Polls polls={answeredPolls()} />
    </div>
  );
};

const mapStatetoProps = ({ users, polls, authedUser }) => {
  return {
    users,
    polls,
    authedUser,
  };
};

export default connect(mapStatetoProps)(Dashboard);
