import React, { useEffect, useState } from "react";
import img from "../../image/banner.png";
import Topic from "../Topic/Topic";
import Swal from "sweetalert2";
const Home = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch(" https://openapi.programming-hero.com/api/quiz")
      .then((response) => response.json())
      .then((data) => setTopics(data.data));
  }, []);

  // all quiz btn
  const allQuiz = () => {
    Swal.fire({
      title: "Javascript, React, Css, Git",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };
  return (
    <div className="home-container">
      <div className="banner sm:flex-none md:flex lg:flex  justify-evenly items-center  py-5 ">
        <div className="banner-info mt-10 text-center md:w-2/5">
          <h2 className="text-2xl font-bold text-slate-500">
            Programming Quiz
          </h2>
          <p className=" mt-2">
            A friendly job relate programming quiz related website . It is{" "}
            appropriate for fresher, seasoned programmer or others. Build your
            knowledge by testing these quiz. Try to capable yourself for the
            next programming level.
          </p>
          <button
            onClick={allQuiz}
            className="btn bg-slate-500 mt-5 capitalize"
          >
            Quiz Topics{" "}
          </button>
        </div>
        <div className="banner-img ">
          <img className="" src={img} alt="" />
        </div>
      </div>
      <div className="questions">
        <h2 className="text-center mt-10 font-bold text-2xl text-slate-500">
          {" "}
          Quiz Topics
        </h2>
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
