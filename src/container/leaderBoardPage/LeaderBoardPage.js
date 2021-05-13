import React from "react";
import NavBar from "components/navBar/NavBar";
import UserProfile from "components/userProfile/UserProfile";
import Leaderboard from "components/leaderboard/Leaderboard";
function LeaderBoardPage() {
  return (
    <>
      <UserProfile />
      <NavBar selection="3" />
      <Leaderboard />
    </>
  );
}

export default LeaderBoardPage;
