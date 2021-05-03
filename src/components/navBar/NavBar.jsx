import React, { useState } from "react";
import "./NavBar.scss";

import { Menu } from "antd";

// routing
import { useHistory } from "react-router-dom";

const NavBar = ({ selection }) => {
  const history = useHistory();

  const goToHome = (e) => {
    history.push("/home");
  };

  const goToNewQuestion = (e) => {
    history.push("/add");
  };

  const goToLeaderboard = (e) => {
    history.push("/leaderboard");
  };

  return (
    <Menu className="navbar" mode="horizontal" selectedKeys={selection}>
      <Menu.Item key="1" onClick={(e) => goToHome(e)}>
        Home
      </Menu.Item>
      <Menu.Item key="2" onClick={(e) => goToNewQuestion(e)}>
        New Question
      </Menu.Item>
      <Menu.Item key="3" onClick={(e) => goToLeaderboard(e)}>
        Leaderboard
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
