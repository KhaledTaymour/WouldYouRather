import React from "react";
import "./QuestionsTab.scss";
import { Tabs } from "antd";

function QuestionsTab() {
  const { TabPane } = Tabs;

  const callback = (key) => {
    console.log(key);
  };

  return (
    <Tabs onChange={callback} type="card">
      <TabPane tab="Unanswered Questions" key="1">
        Content of Tab Pane 1 TODO map thru Questions & get the Unanswered
      </TabPane>
      <TabPane tab="Answered Questions" key="2">
        Content of Tab Pane 2 TODO map thru Questions & get the Answered
        {/* TODO map thru Questions & get the Answered */}
      </TabPane>
    </Tabs>
  );
}

export default QuestionsTab;
