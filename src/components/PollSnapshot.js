import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { Link } from "react-router-dom";

const PollSnapshot = ({ poll }) => {
  return (
    <Link to={`/questions/${poll.id}`} className="poll">
      <div>
        <h3>{poll.author}</h3>
        <span>{formatDate(poll.timestamp)}</span>
      </div>
    </Link>
  );
};

export default connect()(PollSnapshot);
