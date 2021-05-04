import { getInitialData, saveQuestion, saveQuestionAnswer } from "utils/api";
import { receiveUsers } from "redux/actions/users";
import { receiveQuestions } from "redux/actions/questions";
import { setAuthedUser } from "redux/actions/authedUser";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}

export function logIn(userId) {
  return (dispatch) => {
    dispatch(setAuthedUser(userId));
  };
}

export function logOut() {
  return (dispatch) => {
    dispatch(setAuthedUser(null));
  };
}

export function addNewQuestion(question) {
  return (dispatch) => {
    dispatch(saveQuestion(question));
  };
}
