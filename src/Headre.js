import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <ul className="el">
          <NavLink className="link" to="/products">
            <li>products</li>
          </NavLink>

          <NavLink className="link" to="/CreateProduct">
            <li>Create product</li>
          </NavLink>
        </ul>
        <ul className="el">
          <NavLink className="link" to="/categories">
            <li>categories</li>
          </NavLink>
          <NavLink className="link" to="/CreateCategory">
            <li>Create category</li>
          </NavLink>
        </ul>
        <ul className="el">
          <NavLink className="link" to="/users">
            <li>Users</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
