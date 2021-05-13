import React from "react";
import NavBar from "components/navBar/NavBar";
import UserProfile from "components/userProfile/UserProfile";
import NewQuestion from "components/newQuestion/NewQuestion";

function NewQuestionPage() {
  return (
    <>
      <UserProfile />
      <NavBar selection="2" />
      <NewQuestion />
    </>
  );
}

export default NewQuestionPage;
