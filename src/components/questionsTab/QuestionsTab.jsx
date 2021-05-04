import React from "react";
import "./QuestionsTab.scss";
import { Tabs } from "antd";

import QuestionProfile from "./questionProfile/QuestionProfile";

// store
import { useSelector } from "react-redux";
import { allQuestions } from "redux/selectors/questionsSelector";
import { authedUser } from "redux/selectors/usersSelector";

function QuestionsTab() {
  const { TabPane } = Tabs;

  const currentUser = useSelector(authedUser);
  const questions = useSelector(allQuestions);

  const callback = (key) => {
    // console.log(key);
  };

  const unAnsweredQuestionsIds = [];
  const answeredQuestionsIds = [];

  const questionsIds = Object.keys(questions);
  for (const id of questionsIds) {
    if (
      questions[id].optionOne.votes.includes(currentUser) ||
      questions[id].optionTwo.votes.includes(currentUser)
    ) {
      answeredQuestionsIds.push(id);
    } else {
      unAnsweredQuestionsIds.push(id);
    }
  }

  return (
    <Tabs onChange={callback} type="card" className="questions-tab__container">
      <TabPane tab="Unanswered Questions" key="1">
        Unanswered Questions
        {unAnsweredQuestionsIds.map((id) => (
          <QuestionProfile question={questions[id]} isQuestionNew={true} />
        ))}
      </TabPane>
      <TabPane tab="Answered Questions" key="2">
        Answered Questions
        {answeredQuestionsIds.map((id) => (
          <QuestionProfile key={id} question={questions[id]} />
        ))}
      </TabPane>
    </Tabs>
  );
}

export default QuestionsTab;
