import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Option from "../Option/Option";

const Question = ({ SingleQuestion }) => {
  const { correctAnswer, id, question, options } = SingleQuestion;
  // correct answer toastify
  const notify = () => toast(correctAnswer);
  // select correct answer
  const selectCorrectAnswer = (option) => {
    // console.log(option);
    // // console.log("option");
    if (option === correctAnswer) {
      alert("correct");
    } else {
      alert("wrong answer");
    }
  };
  return (
    <div className="question-container bg-slate-300 text-gray-600 mb-5 rounded-md w-full md:w-1/2 mx-auto p-5">
      <div className="question-title flex justify-between">
        <div className="question-name">{question}</div>
        <div className="question-answer">
          {" "}
          <EyeIcon onClick={notify} className="h-6 w-6  text-red ml-2" />
          <ToastContainer />
        </div>
      </div>
      <div className="options">
        {options.map((option) => (
          <Option
            option={option}
            key={option.id}
            correctAnswer={correctAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
