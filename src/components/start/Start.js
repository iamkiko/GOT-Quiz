import React from "react";
import { useQuiz } from "../../hooks/useQuiz";
const Start = ({ onStartQuiz }) => {
  const [quiz] = useQuiz(); // helper hook for quiz
  console.log("quiz in Start", quiz);
  return (
    <>
      <h1>{quiz.title}</h1>
      <p>{quiz.description}</p>
      <button onClick={onStartQuiz}>Start Quiz</button>
    </>
  );
};

export default Start;
