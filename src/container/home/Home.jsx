import React from "react";
import NavBar from "components/navBar/NavBar";
import QuestionsTab from "components/questionsTab/QuestionsTab";
import UserProfile from "components/userProfile/UserProfile";

// store
import { useDispatch, useSelector } from "react-redux";
import { authedUser } from "redux/selectors/usersSelector";
import { allQuestions } from "redux/selectors/questionsSelector";

function Home() {
  if (!authedUser) {
    return <div>You are not allowed to see this page please sign in</div>;
  } else
    return (
      <div>
        <UserProfile />
        <NavBar />
        <QuestionsTab />
      </div>
    );
}

export default Home;
