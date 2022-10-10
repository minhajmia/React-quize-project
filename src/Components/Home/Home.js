import React from "react";
import "./Home.css";
import img from "../../image/banner.png";
const Home = () => {
  return (
    <>
      <div className=" flex justify-evenly items-center ">
        <div className="banner-info">
          <h2 className="text-2xl font-bold">
            Most Versatile Programming <br />
            Job Questions
          </h2>
          <p>
            A user friendly Job portal wordpress theme is very appropriate for
            employment agencies, <br />
            company’s career page, working like <br />a Job portal for
            recruiters who looking for capable applicants.
          </p>
        </div>
        <div className="banner-image">
          <img src={img} alt="" />
        </div>
      </div>
      <div>
        <h2 className="text-center mt-10 font-bold text-2xl"> All Questions</h2>
      </div>
    </>
  );
};

export default Home;
