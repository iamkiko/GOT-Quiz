import React from "react";

const Result = ({ message, score, restart }) => {
  return (
    <>
      <h2>Quiz Results</h2>
      <p>{message}</p>
      <p>Your score was {score}/8</p>
      <button onClick={restart}>Try Again</button>
    </>
  );
};

export default Result;
