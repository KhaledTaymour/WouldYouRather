import React from "react";
import "./SignIn.scss";
import { Menu, Dropdown, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import avatar1 from "assets/images/avatar_boy.png";
import avatar2 from "assets/images/avatar_female1.png";
import avatar3 from "assets/images/avatar_male3.png";

const SignIn = () => {
  const handleMenuClick = (e) => {
    console.log("click", e);
  };

  // TODO fetch users & map them into a <Menu.Item>
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <img src={avatar1} />
        1st menu item
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="sign-in__container">
      <Dropdown.Button
        overlay={menu}
        placement="bottomCenter"
        icon={<UserOutlined />}
      >
        Please Choose a user
      </Dropdown.Button>
      <button className="sign-in__btn">
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
