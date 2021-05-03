import React from "react";
import "./NavBar.scss";

import { Menu } from "antd";

const NavBar = () => {
  const goToHome = (e) => {
    //TODO go to
  };

  const goToNewQuestion = (e) => {
    //TODO
  };

  const goToLeaderboard = (e) => {
    //TODO
  };

  return (
    <Menu className="navbar" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1" onClick={() => goToHome()}>
        Home
      </Menu.Item>
      <Menu.Item key="2" onClick={() => goToNewQuestion()}>
        New Question
      </Menu.Item>
      <Menu.Item key="3" onClick={() => goToLeaderboard()}>
        Leaderboard
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
