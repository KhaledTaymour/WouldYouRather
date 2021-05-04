import React, { useRef, useState } from "react";
import "./NewQuestion.scss";

// store
import { useDispatch, useSelector } from "react-redux";
import { authedUser } from "redux/selectors/usersSelector";
import { addNewQuestion } from "redux/actions/questions";
import { addNewQuestionToUser } from "redux/actions/users";

// routing
import { useHistory } from "react-router-dom";

const NewQuestion = () => {
  const currentUser = useSelector(authedUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const optionOneRef = useRef("");
  const optionTwoRef = useRef("");

  const [optOne, setOptOne] = useState(null);
  const [optTwo, setOptTwo] = useState(null);

  const checkAreTextsFilled = async () => {
    const optOneValue = optionOneRef.current.value;
    const optTwoValue = optionTwoRef.current.value;
    if (optOneValue.length > 0 && optTwoValue.length > 0) {
      await setOptOne(optionOneRef.current.value);
      await setOptTwo(optionTwoRef.current.value);
      return true;
    } else return false;
  };

  const submitNewQuestion = async (e) => {
    if (await checkAreTextsFilled()) {
      const question = {
        author: currentUser,
        optionOneText: optionOneRef.current.value,
        optionTwoText: optionTwoRef.current.value,
      };

      await dispatch(addNewQuestion(question, currentUser));
      history.push("/home");
    } else {
      alert("Please Complete Filling the questions");
    }
  };

  return (
    <div>
      <h3 className="new-question-header">Creating a new Question</h3>
      <div>
        <div className="new-question__container">
          Option A
          <textarea
            className="new-question__option-text"
            rows="4"
            cols="50"
            ref={optionOneRef}
          ></textarea>
        </div>
        <div className="new-question__container">
          Option B
          <textarea
            className="new-question__option-text"
            rows="4"
            cols="50"
            ref={optionTwoRef}
          ></textarea>
        </div>
        <button
          className="new-question__btn"
          onClick={(e) => submitNewQuestion(e)}
        >
          Submit the new question
        </button>
      </div>
    </div>
  );
};

export default NewQuestion;
