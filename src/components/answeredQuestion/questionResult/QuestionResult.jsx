import React from "react";
import "./QuestionResult.scss";

const QuestionResult = ({ question }) => {
  const { optionOne, optionTwo } = question;

  return (
    <div className="question-result__container">
      <div className="question-result-option-one">
        <div className="question-result__text">{optionOne.text}</div>
        <div className="question-result__counts">TODO: Calculate ... </div>
      </div>
      <div className="question-result-option-two">
        <div className="question-result__text">{optionTwo.text}</div>
        <div className="question-result__counts">TODO: Calculate ... </div>
      </div>
    </div>
  );
};

export default QuestionResult;
