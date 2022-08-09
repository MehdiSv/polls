import { ANSWER_POLL, NEW_POLL } from "../actions/polls";
import { RECEIVE_USERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ANSWER_POLL:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.pollId]: action.answerChoice,
          },
        },
      };
    case NEW_POLL:
      return {
        ...state,
        [action.poll.author]: {
          ...state[action.poll.author],
          questions: state[action.poll.author].questions.concat(action.poll.id),
        },
      };

    default:
      return state;
  }
}
