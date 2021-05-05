import {
  RECEIVE_USERS,
  UPDATE_USERS_OPTIMISTICALLY,
  ADD_QUESTION_AND_ANSWER_IN_USER,
} from "redux/actionTypes";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addNewQuestionToUser(questionId, currentUser) {
  return {
    type: UPDATE_USERS_OPTIMISTICALLY,
    payload: { questionId, currentUser },
  };
}

export function addQuestionAndAnswerInUser({ authedUser, qid, answer }) {
  return {
    type: ADD_QUESTION_AND_ANSWER_IN_USER,
    payload: { authedUser, qid, answer },
  };
}
