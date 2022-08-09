import { connect } from "react-redux";
import PollSnapshot from "./PollSnapshot";

const Polls = ({ polls }) => {
  const sortedPolls = () => polls.sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div>
      <ul>
        {sortedPolls().map((poll) => (
          <li key={poll.id}>
            <PollSnapshot poll={poll} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect()(Polls);
