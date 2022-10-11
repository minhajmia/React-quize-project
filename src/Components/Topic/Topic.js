import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div>
      <div className="card  bg-slate-300 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={logo} alt="Language" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Total Question: {total}</p>
          <div className="card-actions">
            <Link to={`/topics/${id}`}>
              {" "}
              <button className="btn bg-slate-500 border-0">
                Start Practice
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
