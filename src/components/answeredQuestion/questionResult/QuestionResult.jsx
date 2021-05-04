import React from "react";
import "./QuestionResult.scss";

// store
import { useSelector } from "react-redux";
import { authedUser } from "redux/selectors/usersSelector";

const QuestionResult = ({ question }) => {
  const { optionOne, optionTwo } = question;

  const currentUser = useSelector(authedUser);

  let optionOneVoted = "";
  let optionTwoVoted = "";
  if (optionOne.votes.find((user) => user === currentUser)) {
    optionOneVoted = "voted-option";
  } else if (optionTwo.votes.find((user) => user === currentUser)) {
    optionTwoVoted = "voted-option";
  }

  return (
    <div className="question-result__container">
      <div className={`question-result-option-one ${optionOneVoted}`}>
        <div className="question-result__text">{optionOne.text}</div>
        <div className="question-result__counts">TODO: Calculate ... </div>
      </div>
      <div className={`question-result-option-two ${optionTwoVoted}`}>
        <div className="question-result__text">{optionTwo.text}</div>
        <div className="question-result__counts">TODO: Calculate ... </div>
      </div>
    </div>
  );
};

export default QuestionResult;
