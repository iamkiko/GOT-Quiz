import React from "react";
import { AnswerOption, AnswerColumn } from "../styles";

const Answer = ({
  index,
  children,
  onClick,
  isCorrect,
  selected,
  showSolution,
}) => {
  return (
    <AnswerColumn>
      <AnswerOption
        onClick={() => onClick(index)}
        selected={selected}
        isCorrect={isCorrect}
        showSolution={showSolution}
      >
        {children}
      </AnswerOption>
    </AnswerColumn>
  );
};

export default Answer;
