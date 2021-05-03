import React from "react";
import NavBar from "components/navBar/NavBar";
import UserProfile from "components/userProfile/UserProfile";
import Leaderboard from "components/leaderboard/Leaderboard";

// store
import { authedUser } from "redux/selectors/usersSelector";

function LeaderBoardPage() {
  if (!authedUser) {
    return <div>You are not allowed to see this page please sign in</div>;
  } else
    return (
      <>
        <UserProfile />
        <NavBar selection='3'/>
        <Leaderboard />
      </>
    );
}

export default LeaderBoardPage;
