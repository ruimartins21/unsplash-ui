import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.scss";

import logo from "../../assets/logo.svg";
import favorite from "../../assets/favorite.svg";
import gallery from "../../assets/gallery.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="">
        <img src={logo} alt="Logo" className="sidebar__logo" />
      </NavLink>
      <ul>
        <NavLink to="" className={({ isActive }) => (isActive ? "active" : "")}>
          <li>
            <img src={gallery} alt="Gallery" />
          </li>
        </NavLink>
        <NavLink
          to="favorites"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>
            <img src={favorite} alt="Favorites" />
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
