import React from "react";
import "./QuestionProfile.scss";
import avatar_boy from "assets/images/avatar_boy.png";

// store
import { useSelector } from "react-redux";
import { allQuestions } from "redux/selectors/questionsSelector";
import { authedUser, allUsersSelector } from "redux/selectors/usersSelector";

// routing
import { Link, useHistory } from "react-router-dom";

const QuestionProfile = ({ question, isQuestionNew }) => {
  const history = useHistory();

  const currentUser = useSelector(authedUser);
  const users = useSelector(allUsersSelector);
  const questions = useSelector(allQuestions);

  const questionAuthorName = users[question.author].name;
  const questionAuthorAvatar = users[question.author].avatarURL;

  const viewPoll = (e) => {
    e.preventDefault();
    history.push(`questions/${question.id}`);
  };

  return (
    <div className="question-profile__container">
      <img className="question-profile__avatar" src={questionAuthorAvatar} />
      <div>
        {questionAuthorName}{" "}
        {isQuestionNew ? "asked a new question:" : "asked a question:"}{" "}
      </div>
      {/* <Link to={`/question/${question.id}`}> */}
        <button className="question-profile__btn" onClick={(e) => viewPoll(e)}>
          View Poll
        </button>
      {/* </Link> */}
    </div>
  );
};

export default QuestionProfile;
