import React from "react";
import "./UnansweredQuestion.scss";
import avatar_boy from "assets/images/avatar_boy.png";

const UnansweredQuestion = () => {
  //TODO get user name
  const userName = "Khaled";

  const submitAnswer = (e) => {
    //TODO
  };

  return (
    <div className="unanswered-question-container">
      <img className="unanswered-question__avatar" src={avatar_boy} />
      <div>{userName} asked a new question:</div>
      <div className="unanswered-question-option-__options">
        {/* TODO edit the TOD */}
        <input
          type="radio"
          id="male"
          name="unanswered-question-options"
          value="male"
        />
        <label for="male">Male</label>
        <br />
        <input
          type="radio"
          id="female"
          name="unanswered-question-options"
          value="female"
        />
        <label for="female">Female</label>
        <br />
      </div>
      <button className='unanswered-question-profile__btn' onClick={(e) => submitAnswer(e)}>Submit Answer</button>
    </div>
  );
};

export default UnansweredQuestion;
