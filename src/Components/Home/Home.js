import React, { useEffect, useState } from "react";
import img from "../../image/banner.png";
import Topic from "../Topic/Topic";
const Home = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch(" https://openapi.programming-hero.com/api/quiz")
      .then((response) => response.json())
      .then((data) => setTopics(data.data));
  }, []);

  return (
    <div className="home-container">
      <div className="banner sm:flex-none md:flex lg:flex  justify-evenly items-center  py-5 ">
        <div className="banner-info mt-10 text-center">
          <h2 className="text-2xl font-bold">Programming Quiz</h2>
          <p className=" mt-2">
            A friendly job relate programming questions website . It is very{" "}
            <br />
            appropriate for fresher, seasoned programmer or others. <br />
            Build your knowledge by testing these Questions. <br />
            Try to capable yourself for the next programmer.
          </p>
          <button className="btn bg-slate-500 mt-5">Questions</button>
        </div>
        <div className="banner-img">
          <img className="" src={img} alt="" />
        </div>
      </div>
      <div className="questions">
        <h2 className="text-center mt-10 font-bold text-2xl"> Quiz Topics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-5 gap-10 my-10">
          {topics.map((topic) => (
            <Topic topic={topic} key={topic.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
