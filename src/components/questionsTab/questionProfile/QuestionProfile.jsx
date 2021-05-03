import React from "react";
import "./QuestionProfile.scss";
import avatar_boy from "assets/images/avatar_boy.png";

const QuestionProfile = () => {
  //TODO get user name
  const userName = "Khaled";

  const viewPoll = (e) => {
    //TODO
  };

  return (
    <div className="question-profile-container">
      <img className="question-profile__avatar" src={avatar_boy} />
      <div>{userName} asked a new question:</div>
      <button className="question-profile__btn" onClick={(e) => viewPoll(e)}>
        View Poll
      </button>
    </div>
  );
};

export default QuestionProfile;
