import {
  RECEIVE_USERS,
  UPDATE_USERS_OPTIMISTICALLY,
  ADD_QUESTION_AND_ANSWER_IN_USER,
} from "redux/actionTypes";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case UPDATE_USERS_OPTIMISTICALLY:
      const { questionId, currentUser } = action.payload;

      const userQuestions = state[currentUser].questions.push(questionId);
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          questions: userQuestions,
        },
      };

    case ADD_QUESTION_AND_ANSWER_IN_USER:
      const { authedUser, qid, answer } = action.payload;
      return {
        ...state,
        authedUser: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            qid: answer,
          },
        },
      };

    default:
      return state;
  }
}
