import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const titles = ["Firstname: ", "Lastname: ", "Email: "];

export const UserCard = ({ user }) => {
  const { email, first_name, last_name, avatar } = user;
  return (
    <div key={user.id} className="user_wrapper">
      <div className="user_img">
        <img src={avatar} alt={first_name} />
      </div>
      <div className="user_desc">
        <div className="title">
          {titles.map((title, index) => (
            <p key={index}>{title}</p>
          ))}
        </div>
        <div className="user_info">
          <h4>{first_name}</h4>
          <h4>{last_name}</h4>
          <h4>{email}</h4>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  id: PropTypes.number,
  user: PropTypes.object,
  email: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  avatar: PropTypes.string,
};
