import React from "react";
import "./UnansweredQuestion.scss";

// store
import { useSelector } from "react-redux";
import { authedUser, allUsersSelector } from "redux/selectors/usersSelector";

const UnansweredQuestion = ({ question }) => {
  const { author: questionAuthor, optionOne, optionTwo } = question;

  const users = useSelector(allUsersSelector);

  const authorName = users[questionAuthor].name;
  const authorAvatar = users[questionAuthor].avatarURL;

  const submitAnswer = (e) => {
    //TODO
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
          value={optionOne.text}
        />
        <label htmlFor={optionOne.text}>{optionOne.text}</label>
        <br />
        <input
          type="radio"
          id={optionTwo.text}
          name="unanswered-question-options"
          value={optionTwo.text}
        />
        <label htmlFor={optionTwo.text}>{optionTwo.text}</label>
        <br />
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
