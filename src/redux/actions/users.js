import { RECEIVE_USERS, UPDATE_USERS_OPTIMISTICALLY } from "redux/actionTypes";

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
