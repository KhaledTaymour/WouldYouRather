import React from "react";
import "./UnansweredQuestion.scss";

// store
import { useSelector } from "react-redux";
import { authedUser, allUsersSelector } from "redux/selectors/usersSelector";

const UnansweredQuestion = ({ question }) => {
  const { author: questionAuthor } = question;

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
        {/* TODO edit the TOD */}
        <input
          type="radio"
          id="male"
          name="unanswered-question-options"
          value="male"
        />
        <label htmlFor="male">Male</label>
        <br />
        <input
          type="radio"
          id="female"
          name="unanswered-question-options"
          value="female"
        />
        <label htmlFor="female">Female</label>
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
