import React from "react";
import NavBar from "components/navBar/NavBar";
import QuestionsTab from "components/questionsTab/QuestionsTab";
import UserProfile from "components/userProfile/UserProfile";

// store
import { authedUser } from "redux/selectors/usersSelector";

function Home() {
  if (!authedUser) {
    return <div>You are not allowed to see this page please sign in</div>;
  } else
    return (
      <div>
        <UserProfile />
        <NavBar selection="1" />
        <QuestionsTab />
      </div>
    );
}

export default Home;
