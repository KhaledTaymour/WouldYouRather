import React, { useEffect, useState } from "react";
import "./SignIn.scss";
import { Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";

// store
import { useDispatch, useSelector } from "react-redux";
import { handleInitialData, logIn } from "redux/actions/shared";
import { allUsersSelector } from "redux/selectors/usersSelector";

// routing
import { Link } from "react-router-dom";

const SignIn = () => {
  const users = useSelector(allUsersSelector);
  const dispatch = useDispatch();

  const [usersList, setUsersList] = useState(null);

  const [selectedUser, setSelectedUser] = useState("Please Choose a user");

  const handleMenuClick = (e) => {
    if (e.key) {
      setSelectedUser(e.key);
    }
  };

  const handleSignIn = (e) => {
    if (selectedUser && selectedUser !== "Please Choose a user") {
      dispatch(logIn(selectedUser));
    }
  };

  // call the handleInitialData once at as ComponentDidMount
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  // listen to changes in store.users
  useEffect(() => {
    if (users) {
      const usersIds = Object.keys(users);

      setUsersList(
        usersIds.map((id) => (
          <Menu.Item key={id}>
            <img src={users[id].avatarURL} className="sign-in__user-avatar" />
            <div>{users[id].name}</div>
          </Menu.Item>
        ))
      );
    }
  }, [users]);

  const menuComponent = <Menu onClick={handleMenuClick}>{usersList}</Menu>;

  return (
    <div className="sign-in__container">
      <div> Would You Rather?? </div>

      <Dropdown.Button
        overlay={menuComponent}
        placement="bottomCenter"
        icon={<UserOutlined />}
      >
        {selectedUser}
      </Dropdown.Button>
      <Link to="/home">
        <button
          className="sign-in__btn"
          onClick={(e) => {
            handleSignIn(e);
          }}
        >
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default SignIn;
