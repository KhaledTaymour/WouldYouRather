import React from "react";
import NavBar from "components/navBar/NavBar";
import UserProfile from "components/userProfile/UserProfile";
import NewQuestion from "components/newQuestion/NewQuestion";
import { useSelector } from "react-redux";

// routing
import { useHistory } from "react-router-dom";

// store
import { authedUser } from "redux/selectors/usersSelector";

function NewQuestionPage() {
  const currentUser = useSelector(authedUser);
  const history = useHistory();

  if (!currentUser) {
    // alert("NewQuestionPage You are not allwed to see this page please sign in");
    history.push("/signin");
    return null;
  } else
    return (
      <>
        <UserProfile />
        <NavBar selection="2" />
        <NewQuestion />
      </>
    );
}

export default NewQuestionPage;
