import React from "react";
import "./UserProfile.scss";
import shutDownIcon from "assets/images/shutdown.png";

// store
import { useDispatch, useSelector } from "react-redux";
import { authedUser, allUsersSelector } from "redux/selectors/usersSelector";
import { logOut } from "redux/actions/shared";

// routing
import { Link } from "react-router-dom";

const UserProfile = () => {
  const users = useSelector(allUsersSelector);
  const currentUser = useSelector(authedUser);
  const dispatch = useDispatch();

  const handleSignOut = (e) => {
    dispatch(logOut());
  };

  return (
    <div className="user-profile__container">
      <img
        className="user-profile__content user-profile__avatar"
        src={users[currentUser].avatarURL}
        alt={`${users[currentUser].name} avatar`}
      />
      <div className="user-profile__content user-profile__name">
        {users[currentUser].name}
      </div>
      <Link to="/signin">
        <img
          className="user-profile__content user-profile__logout"
          src={shutDownIcon}
          title="Sign Out"
          alt="Sign Out"
          onClick={(e) => handleSignOut(e)}
        />
      </Link>
    </div>
  );
};

export default UserProfile;
