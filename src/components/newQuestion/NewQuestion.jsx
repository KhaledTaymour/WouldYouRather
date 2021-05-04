import React, { useRef, useState } from "react";
import "./NewQuestion.scss";

// store
import { useDispatch, useSelector } from "react-redux";
import { authedUser } from "redux/selectors/usersSelector";
import { addNewQuestion } from "redux/actions/shared";

const NewQuestion = () => {
  const currentUser = useSelector(authedUser);
  const dispatch = useDispatch();

  const optionOneRef = useRef("");
  const optionTwoRef = useRef("");

  const [optOne, setOptOne] = useState(null);
  const [optTwo, setOptTwo] = useState(null);

  const checkAreTextsFilled = () => {
    const optOneValue = optionOneRef.current.value;
    const optTwoValue = optionTwoRef.current.value;
    if (optOneValue.length > 0 && optTwoValue.length > 0) {
      setOptOne(optOneValue);
      setOptTwo(optTwoValue);
      return true;
    } else return false;
  };

  const prepareQuestion = () => {
    return {
      author: currentUser,
      optionOneText: optOne,
      optionTwoText: optTwo,
    };
  };

  const submitNewQuestion = (e) => {
    if (checkAreTextsFilled()) {
      const question = prepareQuestion();

      // Create the thunk function with the text the user wrote
      const newQThunk = addNewQuestion(question);
      // Then dispatch the thunk function itself
      dispatch(newQThunk);

      // dispatch(addNewQuestion(question));
      //////////////////////////////////////////////////////////

      // return () => {
      //   // const { authedUser } = getState();
      //   debugger;
      //   return dispatch(
      //     addNewQuestion(question).then((question) => {
      //       debugger;
      //       console.log(question);
      //     })
      //   );
      //   // .then(() => console.))
      // };

      ///////////////////////////////////////////////////////////
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
