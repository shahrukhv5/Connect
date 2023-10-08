import React from "react";
import logo from "../img/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <h4 className="heading">CONNECT</h4>
      <ul className="nav-menu">
        <Link to="/signup">
          <li>SignUp</li>
        </Link>
        <Link to="/signin">
          <li>SignIn</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
      </ul>
    </div>
  );
};
