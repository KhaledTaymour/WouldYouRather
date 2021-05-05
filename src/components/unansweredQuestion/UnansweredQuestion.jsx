import React, { useState } from "react";
import "./UnansweredQuestion.scss";

// store
import { useDispatch, useSelector } from "react-redux";
import { authedUser, allUsersSelector } from "redux/selectors/usersSelector";
import { submitQuestionAnswer } from "redux/actions/questions";

const UnansweredQuestion = ({ question }) => {
  const currentUser = useSelector(authedUser);
  const { author: questionAuthor, optionOne, optionTwo } = question;

  const dispatch = useDispatch();
  const users = useSelector(allUsersSelector);

  const authorName = users[questionAuthor].name;
  const authorAvatar = users[questionAuthor].avatarURL;

  const [chosenAnswer, setChosenAnswer] = useState(null);

  const handleChoosingAnAnswer = (e) => {
    setChosenAnswer(e?.target?.value);
  };

  const submitAnswer = async (e) => {
    if (chosenAnswer === null) {
      alert("Please Choose an answer");
    } else {
      const questionAnswer = {
        authedUser: currentUser,
        qid: question.id,
        answer: chosenAnswer,
      };
      await dispatch(submitQuestionAnswer(questionAnswer));
    }
  };

  return (
    <div className="unanswered-question-container">
      <img className="unanswered-question__avatar" src={authorAvatar} />
      <div>{authorName} asked a new question:</div>
      <div className="unanswered-question__options">
        <input
          type="radio"
          id={optionOne.text}
          name="unanswered-question-options"
          value="optionOne"
          onClick={(e) => handleChoosingAnAnswer(e)}
        />
        <label htmlFor={optionOne.text} value={optionOne.text}>
          {optionOne.text}
        </label>

        <br />

        <input
          type="radio"
          id={optionTwo.text}
          name="unanswered-question-options"
          value="optionTwo"
          onClick={(e) => handleChoosingAnAnswer(e)}
        />
        <label htmlFor={optionTwo.text} value={optionTwo.text}>
          {optionTwo.text}
        </label>
      </div>
      <button
        className="unanswered-question-profile__btn"
        onClick={(e) => submitAnswer(e)}
      >
        Submit Answer
      </button>
    </div>
  );
};

export default UnansweredQuestion;
