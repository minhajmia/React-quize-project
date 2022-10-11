import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container bg-slate-300 grid grid-cols-5">
      <div className="logo col-span-4 ml-5">Programming Quiz</div>
      <nav>
        <ul className={(isActive) => (isActive ? "active" : undefined)}>
          <NavLink to="home">Home</NavLink>
          <NavLink to="topics">Topics</NavLink>
          <NavLink to="statistics">Statistics</NavLink>
          <NavLink to="blog">Blog</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
