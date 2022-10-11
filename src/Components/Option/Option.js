import React from "react";
import Swal from "sweetalert2";

const Option = ({ option, correctAnswer }) => {
  // correct answer
  const selectCorrectAnswer = () => {
    if (option === correctAnswer) {
      Swal.fire("Correct Answer");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong! Answer",
        footer: '<a href="">Try Again</a>',
      });
    }
  };

  return (
    <div className="text-white p-5  ">
      <div className="form-control ">
        <label
          className="label cursor-pointer border-2 border-slate-700	 rounded p-2"
          onClick={selectCorrectAnswer}
        >
          <input
            type="radio"
            name="radio-6"
            className="radio bg-slate-200 checked:bg-slate-700"
            checked
          />
          <span className="label-text ml-3 ">{option}</span>
        </label>
      </div>
    </div>
  );
};

export default Option;
