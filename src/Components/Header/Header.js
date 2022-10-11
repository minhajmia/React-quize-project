import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container bg-slate-300  px-20   md:flex justify-between items-center">
      <div className="logo  font-bold md:text-2xl text-slate-500 text-center text-1xl mb-5 md:mb-0">
        Programming Quiz
      </div>
      <nav className={`mb-5 md:mb-0 `}>
        <ul
          className={`mr-5 ${(isActive) =>
            isActive
              ? "active"
              : undefined} flex flex-col items-center md:flex-row `}
        >
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
