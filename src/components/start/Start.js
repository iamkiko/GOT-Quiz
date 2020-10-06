import React from "react";
import PropTypes from "prop-types";
import { useQuiz } from "../../hooks/useQuiz";
import {
  Description,
  StartButton,
  StartContainer,
  StartTitle,
} from "../styles";
const Start = ({ onStartQuiz }) => {
  const [quiz] = useQuiz(); // helper hook for quiz
  return (
    <StartContainer>
      <StartTitle>{quiz.title}</StartTitle>
      <Description>{quiz.description}</Description>
      <StartButton onClick={onStartQuiz}>Start Quiz</StartButton>
    </StartContainer>
  );
};

Start.propTypes = {
  onStartQuiz: PropTypes.func,
};

export default Start;
