import React from "react";

const Result = ({ score, restart }) => {
  return (
    <>
      <h2>Quiz Results</h2>
      <p>Nice one. Your score was {score} out of 20</p>
      <button onClick={restart}>Try Again</button>
    </>
  );
};

export default Result;
