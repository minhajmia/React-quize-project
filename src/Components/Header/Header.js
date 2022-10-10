import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header-container bg-slate-500 text-white flex justify-between sm:justify-between flex-col sm:flex-col md:flex-row lg:flex-row   md:justify-between lg:justify-between  lg:px-10 items-center">
      <div className="header-name font-extrabold hidden sm:hidden md:block lg:block sm:text-1">
        JOB Q&A
      </div>

      <div className="" onClick={() => setOpen(!open)}>
        {open ? (
          <XMarkIcon className="h-6 w-6 text-white md:hidden" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-white md:hidden" />
        )}
      </div>
      <nav className="bg-slate-500  ">
        <ul
          className={` flex flex-col sm:flex-col md:flex-row   ${(isActive) =>
            isActive
              ? "active"
              : undefined} bg-slate-500    md:static absolute sm:w-full duration-500 fade-in-out text-center px-5  ${
            open ? "top-6" : "top-[-150px]"
          }`}
        >
          <li>
            <NavLink to="home">Home</NavLink>
          </li>
          <li>
            <NavLink to="topics">Topics</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="statistics">Statistics</NavLink>
          </li>
          <li>
            <NavLink to="blog">Blog</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
