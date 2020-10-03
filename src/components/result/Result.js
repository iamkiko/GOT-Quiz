import React from "react";
import { StartButton, StartTitle } from "../styles";
const Result = ({ score, restart }) => {
  return (
    <>
      <StartTitle>Quiz Results</StartTitle>
      <p>You made it to the end!</p>{" "}
      <p>
        Your score was <strong>{score}</strong> out of <strong>20.</strong>
      </p>
      <StartButton onClick={restart}>Try Again</StartButton>
    </>
  );
};

export default Result;
