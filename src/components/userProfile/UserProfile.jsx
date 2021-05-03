import React from "react";
import './UserProfile.scss';
import shutDownIcon from "assets/images/shutdown.png";
import avatar_boy from 'assets/images/avatar_boy.png';

const UserProfile = () => {
  return (
    <div className="user-profile__container">
      <img className="user-profile__content user-profile__avatar" src={avatar_boy} />
      <div className="user-profile__content user-profile__name">authed User TODO retrieve </div>
      <img className="user-profile__content user-profile__logout" src={shutDownIcon} />
    </div>
  );
};

export default UserProfile;
