import { NEW_POLL, RECEIVE_POLLS } from "../actions/polls";
import { ANSWER_POLL } from "../actions/polls";

export default function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls,
      };
    case ANSWER_POLL:
      return {
        ...state,
        [action.pollId]: {
          ...state[action.pollId],
          [action.answerChoice]: {
            ...state[action.pollId][action.answerChoice],
            votes: state[action.pollId][action.answerChoice].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };
    case NEW_POLL:
      return {
        ...state,
        [action.poll.id]: action.poll,
      };

    default:
      return state;
  }
}
