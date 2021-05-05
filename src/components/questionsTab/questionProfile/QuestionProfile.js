import React from "react";
import "./QuestionProfile.scss";

// store
import { useSelector } from "react-redux";
import { allUsersSelector } from "redux/selectors/usersSelector";

// routing
import { useHistory } from "react-router-dom";

const QuestionProfile = ({ question, isQuestionNew }) => {
  const history = useHistory();

  const users = useSelector(allUsersSelector);

  const questionAuthorName = users[question.author].name;
  const questionAuthorAvatar = users[question.author].avatarURL;

  const viewPoll = (e) => {
    e.preventDefault();
    history.push(`questions/${question.id}`);
  };

  return (
    <div className="question-profile__container">
      <img
        className="question-profile__avatar"
        src={questionAuthorAvatar}
        alt={`${users[question.author].name} avatar`}
      />
      <div>
        {questionAuthorName}{" "}
        {isQuestionNew ? "asked a new question:" : "asked a question:"}{" "}
      </div>
      <button className="question-profile__btn" onClick={(e) => viewPoll(e)}>
        {isQuestionNew ? "View Question" : "View Poll"}
      </button>
    </div>
  );
};

export default QuestionProfile;
