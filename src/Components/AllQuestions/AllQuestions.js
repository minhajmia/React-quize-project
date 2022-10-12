import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const AllQuestions = () => {
  const AllQuestions = useLoaderData().data;
  return (
    <div>
      <h3 className="banner-info my-10 text-center text-3xl font-bold text-slate-500">
        Quiz of {AllQuestions.name}
      </h3>
      {AllQuestions.questions.map((SingleQuestion, idx) => (
        <Question
          SingleQuestion={SingleQuestion}
          idx={idx}
          key={SingleQuestion.id}
        />
      ))}
    </div>
  );
};

export default AllQuestions;
