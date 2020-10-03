import React from "react";
import { useQuiz } from "../../hooks/useQuiz";
import { StartButton, StartTitle } from "../styles";
const Start = ({ onStartQuiz }) => {
  const [quiz] = useQuiz(); // helper hook for quiz
  return (
    <>
      <StartTitle>{quiz.title}</StartTitle>
      <p>{quiz.description}</p>
      <StartButton onClick={onStartQuiz}>Start Quiz</StartButton>
    </>
  );
};

export default Start;
