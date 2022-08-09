import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleAnswerPoll } from "../actions/polls";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const PollPage = ({ poll, users, authedUser, dispatch }) => {
  const pollAnswered = () => {
    return poll.id in users[authedUser].answers;
  };

  const submitChoice = (e, pollId, optionChoice) => {
    e.preventDefault();

    dispatch(handleAnswerPoll(authedUser, pollId, optionChoice));
  };

  const answerChoiceTextAndPercent = (optionChoice) => {
    const answersLength =
      optionChoice === "optionOne"
        ? poll.optionOne.votes.length
        : poll.optionTwo.votes.length;
    return (
      <div>
        {answersLength} answers{" "}
        {(
          (100 * answersLength) /
          (poll.optionOne.votes.length + poll.optionTwo.votes.length)
        ).toFixed(2)}
        %
        {users[authedUser].answers[poll.id] === optionChoice && (
          <span> including {authedUser} answer</span>
        )}
      </div>
    );
  };

  return (
    <div className="center">
      <div>
        <img
          src={users[poll.author].avatarURL}
          alt={`Avatar of ${poll.author}`}
          className="avatar"
        />
      </div>
      Poll by {poll.author}
      <h2>Would you rather</h2>
      <div className="poll-choice">
        <span>{poll.optionOne.text}</span>
      </div>
      {pollAnswered() ? (
        answerChoiceTextAndPercent("optionOne")
      ) : (
        <button
          className="btn"
          onClick={(e) => submitChoice(e, poll.id, "optionOne")}
        >
          Submit
        </button>
      )}
      <div className="poll-choice">
        <span>{poll.optionTwo.text}</span>
      </div>
      {pollAnswered() ? (
        answerChoiceTextAndPercent("optionTwo")
      ) : (
        <button
          className="btn"
          onClick={(e) => submitChoice(e, poll.id, "optionTwo")}
        >
          Submit
        </button>
      )}
    </div>
  );
};

const mapStatetoProps = ({ users, polls, authedUser }, props) => {
  const { id } = props.router.params;

  return {
    poll: polls[id],
    users,
    authedUser,
  };
};

export default withRouter(connect(mapStatetoProps)(PollPage));
