import React from "react";
import arrow from "../images/icon-arrow-down.svg";
import { useState } from "react";

function QuestionItem({ question, answer }) {
  // State for hide and show answer
  const [show, setShow] = useState(false);

  // Function: If show is false, return show true and backward
  const toggle = () => {
    setShow((show) => !show);
  };
  return (
    <dl>
      <div className="wrapper">
        <dt className="flex-group-1">
          {/* if true add bold class, if not just add button */}
          <button
            onClick={toggle}
            type="button"
            className={show ? "button bold" : "button"}
          >
            {question}
          </button>
          {/* If show is true, add arrow active, if not just add arrow */}
          <img
            src={arrow}
            className={show ? "arrow active" : "arrow"}
            alt="arrow-down"
          />
        </dt>
        {/* If 'show' is true show the answer */}
        {show && <dd className="answer">{answer}</dd>}
      </div>
    </dl>
  );
}

export default QuestionItem;
