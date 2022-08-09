import { showLoading, hideLoading } from "react-redux-loading-bar";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";

export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const ANSWER_POLL = "ANSWER_POLL";
export const NEW_POLL = "NEW_POLL";

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  };
}

export function answerPoll(authedUser, pollId, answerChoice) {
  return {
    type: ANSWER_POLL,
    authedUser,
    pollId,
    answerChoice,
  };
}

export function newPoll(poll) {
  return {
    type: NEW_POLL,
    poll,
  };
}

export function handleAnswerPoll(authedUser, pollId, answerChoice) {
  return (dispatch) => {
    dispatch(showLoading());

    return saveQuestionAnswer(authedUser, pollId, answerChoice)
      .then((boolean) => {
        dispatch(hideLoading());
        dispatch(answerPoll(authedUser, pollId, answerChoice));
      })
      .catch((e) => {
        dispatch(hideLoading());
        console.warn("Error in saveQuestionAnswer: ", e);
        alert("There was an error saving your answer. Try again.");
      });
  };
}

export function handleNewPoll(poll) {
  return (dispatch) => {
    dispatch(showLoading());

    return saveQuestion(poll)
      .then((savedPoll) => {
        console.log("**", savedPoll);
        dispatch(hideLoading());
        dispatch(newPoll(savedPoll));
      })
      .catch((e) => {
        dispatch(hideLoading());
        console.warn("Error in creating new Poll: ", e);
        alert("There was an error creating a new Poll. Try again.");
      });
  };
}
