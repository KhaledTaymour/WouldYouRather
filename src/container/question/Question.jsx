import React from "react";
import NavBar from "components/navBar/NavBar";
import UserProfile from "components/userProfile/UserProfile";
import UnansweredQuestion from "components/unansweredQuestion/UnansweredQuestion";
import AnsweredQuestion from "components/answeredQuestion/AnsweredQuestion";
// routing
import { useHistory } from "react-router-dom";
// store
import { authedUser } from "redux/selectors/usersSelector";
import { useSelector } from "react-redux";
import { allQuestions } from "redux/selectors/questionsSelector";

function Question(props) {
  const _questionId = props?.match?.params?.id;

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

  const history = useHistory();

  if (!currentUser) {
    // alert("Question You are not allwed to see this page please sign in");
    history.push("/signin");
    return null;
  } else
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
