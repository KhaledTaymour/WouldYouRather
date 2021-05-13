import React from "react";
import NavBar from "components/navBar/NavBar";
import QuestionsTab from "components/questionsTab/QuestionsTab";
import UserProfile from "components/userProfile/UserProfile";

function Home() {
  return (
    <div>
      <UserProfile />
      <NavBar selection="1" />
      <QuestionsTab />
    </div>
  );
}

export default Home;
