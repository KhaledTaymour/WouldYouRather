import React from "react";
import "./NewQuestion.scss";

const NewQuestion = () => {
    
  const submitNewQuestion = (e) => {
    //TODO
  };

  return (
    <div>
      <h3 className="new-question-header">Creating a new Question</h3>
      <div>
        <div className="new-question__container">
          Option A
          <textarea
            className="new-question__option-text"
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <div className="new-question__container">
          Option B
          <textarea
            className="new-question__option-text"
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <button
          className="new-question__btn"
          onClick={(e) => submitNewQuestion(e)}
        >
          Submit the new question
        </button>
      </div>
    </div>
  );
};

export default NewQuestion;
