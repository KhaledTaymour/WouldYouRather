import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  REVERT_QUESTION,
} from "redux/actionTypes";

import { saveQuestion, saveQuestionAnswer } from "utils/api";

import { addNewQuestionToUser } from "redux/actions/users";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addNewQuestion(question, currentUser) {
  return (dispatch) => {
    return saveQuestion(question)
      .then((question) => {
        // Add question optimistically
        dispatch(addQuestion(question));

        dispatch(addNewQuestionToUser(question.id, currentUser));
      })
      .catch((e) => {
        console.log(e);
        //TODO Revert question
      });
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    payload: question,
  };
}

export function revertQuestion(question) {
  return {
    type: REVERT_QUESTION,
    question,
  };
}

export function submitQuestionAnswer(answer) {
  return (dispatch) => {
    return saveQuestionAnswer(answer).then(() => {
      return {};
    });
  };
}
