import React from "react";
import NavBar from "components/navBar/NavBar";
import QuestionsTab from "components/questionsTab/QuestionsTab";
import UserProfile from "components/userProfile/UserProfile";
import { useSelector } from "react-redux";

// routing
import { useHistory } from "react-router-dom";

// store
import { authedUser } from "redux/selectors/usersSelector";

function Home() {
  const currentUser = useSelector(authedUser);
  const history = useHistory();

  if (!currentUser) {
    // alert("HOME You are not allowed to see this page please sign in");
    history.push("/signin");
    return null;
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
