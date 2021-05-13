import React from "react";
import NavBar from "components/navBar/NavBar";
import UserProfile from "components/userProfile/UserProfile";
import UnansweredQuestion from "components/unansweredQuestion/UnansweredQuestion";
import AnsweredQuestion from "components/answeredQuestion/AnsweredQuestion";
// store
import { authedUser } from "redux/selectors/usersSelector";
import { useSelector } from "react-redux";
import { allQuestions } from "redux/selectors/questionsSelector";
// routing
import { useParams } from "react-router-dom";

function Question() {
  const _questionId = useParams().id;

  const currentUser = useSelector(authedUser);
  const questions = useSelector(allQuestions);
  let currentQuestion = null;

  let isNewQuestion = false;

  if (authedUser && _questionId) {
    currentQuestion = questions[_questionId];

    if (
      currentQuestion?.optionOne?.votes.includes(currentUser) ||
      currentQuestion?.optionTwo?.votes.includes(currentUser)
    ) {
      isNewQuestion = false;
    } else {
      isNewQuestion = true;
    }
  }

  return (
    <>
      <UserProfile />
      <NavBar selection="1" />
      {isNewQuestion ? (
        <UnansweredQuestion question={currentQuestion} />
      ) : (
        <AnsweredQuestion question={currentQuestion} />
      )}
    </>
  );
}

export default Question;
