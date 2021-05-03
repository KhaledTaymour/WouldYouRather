import { RECEIVE_QUESTIONS } from "redux/actionTypes";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
