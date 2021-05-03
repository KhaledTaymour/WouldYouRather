import React from "react";
import NavBar from "components/navBar/NavBar";
import QuestionsTab from "components/questionsTab/QuestionsTab";
import UserProfile from "components/userProfile/UserProfile";
import NewQuestion from "components/newQuestion/NewQuestion";

// store
import { authedUser } from "redux/selectors/usersSelector";

function NewQuestionPage() {
  if (!authedUser) {
    return <div>You are not allowed to see this page please sign in</div>;
  } else
    return (
      <>
        <UserProfile />
        <NavBar selection='2'/>
        <NewQuestion />
      </>
    );
}

export default NewQuestionPage;
