import React from "react";
import "./AnsweredQuestion.scss";
import avatar_boy from "assets/images/avatar_boy.png";
import QuestionResult from "components/answeredQuestion/questionResult/QuestionResult";

const AnsweredQuestion = () => {
  //TODO get user name
  const userName = "Khaled";

  return (
    <div className="answered-question-container">
      <img className="answered-question__avatar" src={avatar_boy} />
      <div>{userName} asked the question:</div>
      {/* TODO map thru the 2 options & pass the chosen one */}
    </div>
  );
};

export default AnsweredQuestion;
