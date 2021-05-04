import { RECEIVE_USERS, UPDATE_USERS_OPTIMISTICALLY } from "redux/actionTypes";

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
    default:
      return state;
  }
}
