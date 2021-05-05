import React from "react";
import "./AnsweredQuestion.scss";
// import QuestionResult from "components/answeredQuestion/questionResult/QuestionResult";

// store
import { useSelector } from "react-redux";
import { authedUser, allUsersSelector } from "redux/selectors/usersSelector";
import QuestionResult from "./questionResult/QuestionResult";

const AnsweredQuestion = ({ question }) => {
  const { author: questionAuthor } = question;

  const users = useSelector(allUsersSelector);

  const authorName = users[questionAuthor].name;
  const authorAvatar = users[questionAuthor].avatarURL;

  return (
    <div className="answered-question__container">
      <img className="answered-question__avatar" src={authorAvatar} />
      <div>{authorName} asked the question:</div>
      <QuestionResult question={question} />
    </div>
  );
};

export default AnsweredQuestion;
