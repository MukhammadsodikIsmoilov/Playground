import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import Cookies from 'js-cookie'
import { useAuth } from "../context/auth";

const Navbar = () => {
  const { signout } = useAuth();
  const history = useHistory();
  const handleClick = () => {
    signout();
    Cookies.remove('user')
    console.log('The user has been logged out')
    return history.push("/sign-in");
  };
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/animation">Animation</NavLink>
        </li>
        <li>
          <NavLink to="/localstorage">LocalStorage</NavLink>
        </li>
        <li>
          <NavLink to="/color">Color</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <button onClick={handleClick}>Sign out</button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
