import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  // REVERT_QUESTION,
  ADD_VOTES_IN_QUESTION,
} from "redux/actionTypes";

import { api_saveQuestion, api_saveQuestionAnswer } from "utils/api";

import {
  addNewQuestionToUser,
  addQuestionAndAnswerInUser,
} from "redux/actions/users";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addNewQuestion(question, currentUser) {
  return (dispatch) => {
    return api_saveQuestion(question)
      .then((question) => {
        // Add question optimistically
        dispatch(addQuestion(question));

        dispatch(addNewQuestionToUser(question.id, currentUser));
      })
      .catch((e) => {
        console.log(e);
        //TODO Revert question
        // revertQuestion(question);
      });
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    payload: question,
  };
}

// function revertQuestion(question) {
//   return {
//     type: REVERT_QUESTION,
//     question,
//   };
// }

export function submitQuestionAnswer({ authedUser, qid, answer }) {
  return (dispatch) => {
    return api_saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      // edit questions in users
      dispatch(addQuestionAndAnswerInUser({ authedUser, qid, answer }));

      // edit users in questions
      dispatch(addVotesToQuestion({ authedUser, qid, answer }));
    });
  };
}

function addVotesToQuestion({ authedUser, qid, answer }) {
  return {
    type: ADD_VOTES_IN_QUESTION,
    payload: { authedUser, qid, answer },
  };
}
