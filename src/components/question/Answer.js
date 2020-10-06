import React, { useContext } from "react";
import PropTypes from "prop-types";
import { SolutionContext } from "../SolutionContext";
import { AnswerOption, AnswerColumn } from "../styles";

const Answer = ({ index, children, onClick, isCorrect, selected }) => {
  const solution = useContext(SolutionContext);
  return (
    <AnswerColumn>
      <AnswerOption
        onClick={() => onClick(index)}
        selected={selected}
        isCorrect={isCorrect}
        showSolution={solution}
      >
        {children}
      </AnswerOption>
    </AnswerColumn>
  );
};

Answer.propTypes = {
  children: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  score: PropTypes.number,
  selected: PropTypes.bool.isRequired,
};

export default Answer;
