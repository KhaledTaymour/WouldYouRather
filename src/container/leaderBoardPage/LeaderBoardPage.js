import React from "react";
import NavBar from "components/navBar/NavBar";
import UserProfile from "components/userProfile/UserProfile";
import Leaderboard from "components/leaderboard/Leaderboard";
import { useSelector } from "react-redux";

// routing
import { useHistory } from "react-router-dom";

// store
import { authedUser } from "redux/selectors/usersSelector";

function LeaderBoardPage() {
  const currentUser = useSelector(authedUser);
  const history = useHistory();

  if (!currentUser) {
    // alert("You are not allwed to see this page please sign in");
    history.push("/signin");
    return null;
  } else
    return (
      <>
        <UserProfile />
        <NavBar selection="3" />
        <Leaderboard />
      </>
    );
}

export default LeaderBoardPage;
