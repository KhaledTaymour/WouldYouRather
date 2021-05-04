import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  REVERT_QUESTION,
} from "redux/actionTypes";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case ADD_QUESTION:
      const { id } = action?.payload;

      return {
        ...state,
        [id]: action.payload,
      };

    case REVERT_QUESTION:
      //TODO revise
      const revertedQuestions = state?.questions.filter((q) => {
        return action.payload.qid !== q.id;
      });
      return {
        ...state,
        questions: revertedQuestions,
      };

    default:
      return state;
  }
}
