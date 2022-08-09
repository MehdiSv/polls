import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from "./_DATA.js";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(([users, polls]) => ({
    users,
    polls,
  }));
}

export function saveQuestionAnswer(authedUser, pollId, optionChoice) {
  return _saveQuestionAnswer({ authedUser, qid: pollId, answer: optionChoice });
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}
