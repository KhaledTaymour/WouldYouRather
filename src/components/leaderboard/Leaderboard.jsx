import React from "react";
import "./Leaderboard.scss";
import { useSelector } from "react-redux";
import { allUsersSelector } from "redux/selectors/usersSelector";

const Leaderboard = () => {
  const users = useSelector(allUsersSelector);
  const usersIds = Object.keys(users);

  const usersRatings = [];

  for (const key in users) {
    //   const u = users[key];
    const u = users[key];
    u.askedQuestionsCount = u.questions.length;
    u.answeredQuestionsCount = Object.keys(u.answers).length;
    u.totalScore = +u.questions.length + Object.keys(u.answers).length;

    usersRatings.push(u);
  }

  usersRatings.sort(function (a, b) {
    return b.totalScore - a.totalScore;
  });

  return (
    <div className="leader-board__container">
      {usersRatings.map((u) => {
        return (
          <div key={u.id}>
            <img alt={`${u.name} avatar`} src={u.avatarURL} />
            <div>{u.name}</div>
            <div>number of asked questions: {u.askedQuestionsCount}</div>
            <div>number of answered questions: {u.answeredQuestionsCount}</div>
            <div>Total Score: {u.totalScore}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Leaderboard;
